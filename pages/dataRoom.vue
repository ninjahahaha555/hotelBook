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
      :itemsen="textList"
      sort-by="calories"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Room</v-toolbar-title>
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
                        v-model="editedItem.roomnum"
                        label="RoomNumber"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-select
                        v-model="editedItem.type"
                        :items="items"
                        label="Type"
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
                        v-model="editedItem.price"
                        label="price"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-select
                        v-model="editedItem.status"
                        :items="itemsen"
                        label="status"
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
      <template v-slot:item.actions="{ item }">
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
      <template v-slot:item.type="{ item }">
        <v-chip
          :color="getColor(item.type)"
          dark
        >
          {{ item.type }}
        </v-chip>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip
          :color="getColors(item.status)"
          dark
        >
          {{ item.status }}
        </v-chip>
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
    type: '',
    headers: [
      {
        text: 'RoomNumber',
        align: 'start',
        sortable: false,
        value: 'roomnum'
      },
      { text: 'Type', value: 'type' },
      { text: 'Price', value: 'price' },
      { text: 'Status', value: 'status' },

      { text: 'Actions', value: 'actions', sortable: false }
    ],
    textList: [],
    editedIndex: -1,
    editedItem: {
      roomnum: '',
      type: '',
      price: '',
      status: ''
    },
    defaultItem: {
      roomnum: '',
      type: '',
      price: '',
      status: ''
    },
    items: [
      'Best Room',
      'Normal Room'
    ],
    itemsen: [
      'ห้องไม่ว่าง',
      'ห้องว่าง'
    ],
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
  },

  methods: {
    initialize () {
      this.textList = []
    },

    getColor (type) {
      if (type === 'Best Room') { return 'orange' } else if (type === 'Normal Room') { return 'blue' }
    },

    getColors (status) {
      if (status === 'ห้องไม่ว่าง') { return 'red' } else if (status === 'ห้องว่าง') { return 'green' }
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
      const em = (this.textList[this.editedIndex], this.editedItem.roomnum)
      const data = []
      db.collection('Room').where('roomnum', '==', em).orderBy('timestamp').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.id)
          this.e = data.toString()
          console.log(this.e)
          db.collection('Room').doc(this.e).delete()
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
        const roomNum = (this.textList[this.editedIndex], this.editedItem.roomnum)
        const typ = (this.textList[this.editedIndex], this.editedItem.type)
        const data = []
        db.collection('Room')
          .where('roomnum', '==', roomNum)
          .where('type', '==', typ)
          .orderBy('timestamp')
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              data.push(doc.id)
              this.e = data.toString()
              console.log(this.e)
              db.collection('Room').doc(this.e).update(edit)
            })
          })
      } else {
        this.textList.push(this.editedItem)
        const dataText = {
          roomnum: this.editedItem.roomnum,
          type: this.editedItem.type,
          price: this.editedItem.price,
          status: this.editedItem.status,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('Room').doc().set(dataText)
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
      db.collection('Room').orderBy('timestamp').onSnapshot((querySnapshot) => {
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
