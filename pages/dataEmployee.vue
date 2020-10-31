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
          <v-toolbar-title>พนักงาน</v-toolbar-title>
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
                        v-model="editedItem.nameEm"
                        label="Name"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-select
                        v-model="editedItem.duty"
                        :items="items"
                        label="Duty"
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
                        v-model="editedItem.password"
                        label="password"
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
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'nameEm'
      },
      { text: 'duty', value: 'duty' },
      { text: 'email', value: 'email' },
      { text: 'password', value: 'password' },

      { text: 'Actions', value: 'actions', sortable: false }
    ],
    textList: [],
    editedIndex: -1,
    editedItem: {
      nameEm: '',
      duty: '',
      email: '',
      password: ''
    },
    defaultItem: {
      nameEm: '',
      duty: '',
      email: '',
      password: ''
    },
    items: [
      'Admin',
      'ผู้จัดการ',
      'พนักงาน'
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
      const em = (this.textList[this.editedIndex], this.editedItem.nameEm)
      const data = []
      db.collection('Employee').where('nameEm', '==', em).orderBy('timestamp').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push(doc.id)
          this.e = data.toString()
          console.log(this.e)
          db.collection('Employee').doc(this.e).delete()
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
        const em = (this.textList[this.editedIndex], this.editedItem.nameEm)
        const data = []
        db.collection('Employee')
          .where('nameEm', '==', em)
          .orderBy('timestamp')
          .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              data.push(doc.id)
              this.e = data.toString()
              console.log(this.e)
              db.collection('Employee').doc(this.e).update(edit)
            })
          })
      } else {
        this.textList.push(this.editedItem)
        const dataText = {
          nameEm: this.editedItem.nameEm,
          duty: this.editedItem.duty,
          email: this.editedItem.email,
          password: this.editedItem.password,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('Employee').doc().set(dataText)
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
      db.collection('Employee').orderBy('timestamp').onSnapshot((querySnapshot) => {
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
