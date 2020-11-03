<template>
  <v-card>
    <v-card-title>
      <v-spacer />
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="textList"
      sort-by="calories"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>ข้อมูลการจองของลูกค้า</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          />
          <v-spacer />
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Name"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.lastname"
                        :items="items"
                        label="Lastname"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.email"
                        label="email"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.tel"
                        label="Tel"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.sumroom"
                        label="จำนวนห้อง"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="editedItem.sumperson"
                        :items="items"
                        label="จำนวนผู้เข้าพัก"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                Are you sure you want to delete this item?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDelete">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                  OK
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    search: '',
    headers: [
      {
        text: 'ชื่อ',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'นามสกุล', value: 'lastname' },
      { text: 'E-mail', value: 'email' },
      { text: 'Tel', value: 'tel' },
      { text: 'วันเช็คอิน', value: 'checkin' },
      { text: 'วันเช็คเอาท์', value: 'checkout' },
      { text: 'จำนวนห้อง', value: 'sumroom' },
      { text: 'จำนวนผู้เข้าพัก', value: 'sumperson' },
      { text: 'ประเภทห้อง', value: 'roomType' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    textList: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      lastname: '',
      email: '',
      tel: '',
      checkin: '',
      checkout: '',
      sumroom: '',
      sumperson: ''
    },
    defaultItem: {
      name: '',
      lastname: '',
      email: '',
      tel: '',
      checkin: '',
      checkout: '',
      sumroom: '',
      sumperson: ''
    },
    e: ''
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
    this.getData()
    this.reset()
  },

  methods: {
    reset () {
      if (this.$store.state.log === false) {
        this.$router.replace('/')
      }
    },
    initialize () {
      this.textList = []
    },

    editItem (item) {
      this.editedIndex = this.textList.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.textList.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.textList.splice(this.editedIndex, 1)
      const na = (this.textList[this.editedIndex], this.editedItem.name)
      const data = []
      db.collection('Booking')
        .where('name', '==', na)
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            data.push(doc.id)
            this.e = data.toString()
            console.log(this.e)
            db.collection('Booking').doc(this.e).delete()
          })
        })
      this.closeDelete()
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        const edit = (this.textList[this.editedIndex], this.editedItem)
        const na = (this.textList[this.editedIndex], this.editedItem.name)
        const ln = (this.textList[this.editedIndex], this.editedItem.lastname)
        const data = []
        db.collection('Booking')
          .where('name', '==', na)
          .where('lastname', '==', ln)
          .orderBy('timestamp')
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              data.push(doc.id)
              this.e = data.toString()
              console.log(this.e)
              db.collection('Booking').doc(this.e).update(edit)
            })
          })
      } else {
        this.textList.push(this.editedItem)
        const dataText = {
          name: this.editedItem.name,
          lastname: this.editedItem.lastname,
          email: this.editedItem.email,
          tel: this.editedItem.tel,
          checkin: this.editedItem.checkin,
          checkout: this.editedItem.checkout,
          sumroom: this.editedItem.sumroom,
          sumperson: this.editedItem.sumperson,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('Booking').doc().set(dataText)
          .then(function () {
            console.log('Document successfully written! -> MyRegister')
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
      }
      this.close()
    },
    getData () {
      db.collection('Booking').orderBy('timestamp').onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        this.textList = data
      })
    }
  }
}
</script>
