<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      dark
      src="https://cdn.discordapp.com/attachments/392353546332405763/772107713807253535/6cc169ec33ddfc44ffea98954836d7e1.jpg"
    >
      <v-list>
        <div v-if="log == false">
          <v-row align="center" justify="center">
            <v-dialog
              v-model="dialog1"
              persistent
              max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  block
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-account
                  </v-icon>Login
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Login</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="user"
                          :rules="ruless"
                          label="Email*"
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="pass"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password*"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog1 = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog1 = false; login(); validate ();"
                  >
                    <nuxt-link
                      to="/"
                      style="text-decoration: none;"
                    >
                      Login
                    </nuxt-link>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-row align="center" justify="center">
            <v-dialog
              v-model="dialog2"
              persistent
              max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="secondary"
                  dark
                  block
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    mdi-lock-outline
                  </v-icon>Register
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Register</span>
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
                          v-model="name"
                          label="Legal first name*"
                          required
                          :rules="ruless"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                      >
                        <v-text-field
                          v-model="lastname"
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                          :rules="ruless"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="email"
                          label="Email*"
                          required
                          :rules="ruless"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                      >
                        <v-select
                          v-model="age"
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                          :rules="ruless"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog2 = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="addData();"
                  >
                    Register
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>
        <div v-if="log == true">
          <v-row align="center" justify="center">
            {{ $store.getters.currentUser[0].nameEm }}
            {{ $store.getters.currentUser[0].name }} {{ $store.getters.currentUser[0].lastname }}
          </v-row>
          <nuxt-link
            to="/"
            style="text-decoration: none;"
          >
            <v-btn
              color="error"
              dark
              block
              v-bind="attrs"
              v-on="on"
              @click="typeDuty=2; logout()"
            >
              <v-icon>mdi-lock-open</v-icon>
              Logout
            </v-btn>
          </nuxt-link>
        </div>
      </v-list>
      <v-list v-if="typeDuty == 0">
        <v-list-item
          v-for="(item, i) in items1"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-if="typeDuty == 1">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-if="typeDuty == 2">
        <v-list-item
          v-for="(item, i) in items2"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      dark
      src="https://cdn.discordapp.com/attachments/392353546332405763/772107713807253535/6cc169ec33ddfc44ffea98954836d7e1.jpg"
      :clipped-left="clipped"
      fixed
      app
    >
      <template>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <h1>
          <nuxt-link
            to="/"
            style="text-decoration: none;"
            class="white--text"
          >
            LersurHostel
          </nuxt-link>
        </h1>
      </template>

      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import { store } from '~/store/index'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  store,
  components: {
  },
  data () {
    return {
      on: null,
      attrs: null,
      show1: false,
      rules: {
        required: value => !!value || 'Required.',
        emailMatch: () => ('The email and password you entered don\'t match')
      },
      ruless: [
        value => !!value || 'Required.'
      ],
      n: '',
      log: false,
      dialog: false,
      dialog1: false,
      dialog2: false,
      clipped: false,
      drawer: false,
      fixed: false,
      email: null,
      pass: null,
      user: null,
      password: null,
      name: null,
      lastname: null,
      age: null,
      typeDuty: 2,
      title: null,
      items2: [{
        icon: 'mdi-city',
        title: 'Welcome',
        to: '/'
      }
      ],
      items1: [{
        icon: 'mdi-city',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-basket-fill',
        title: 'ห้องที่จอง',
        to: '/basket'
      },
      {
        icon: 'mdi-cash-usd',
        title: 'ชำระเงิน',
        to: '/payment'
      },
      {
        icon: 'mdi-phone',
        title: 'ติดต่อ',
        to: '/contact'
      }
      ],
      items: [
        {
          icon: 'mdi-city',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-briefcase-check',
          title: 'ข้อมูลการจอง',
          to: '/dataBook'
        },
        {
          icon: 'mdi-home-modern',
          title: 'ข้อมูลห้อง',
          to: '/dataRoom'
        },
        {
          icon: 'mdi-account-circle',
          title: 'ข้อมูลสมาชิค',
          to: '/dataRegister'
        },
        {
          icon: 'mdi-account-edit',
          title: 'ข้อมูลพนักงาน',
          to: '/dataEmployee'
        }

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  methods: {
    validate () {
      const email = this.email
      const password = this.password
      const name = this.name
      const lastname = this.lastname
      const age = this.age
      this.$store.commit('input', {
        email,
        password,
        name,
        lastname,
        age
      })
    },
    login () {
      db.collection('MyRegister')
        .where('email', '==', this.user)
        .where('password', '==', this.pass)
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
            // console.log(doc.data())
            this.log = true
            this.typeDuty = 0
            const payload = data
            this.$store.dispatch('setUser', payload)
            console.log(payload)
          })
        })
      db.collection('Employee')
        .where('email', '==', this.user)
        .where('password', '==', this.pass)
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
            // console.log(doc.data())
            this.log = true
            this.typeDuty = 1
            const payload = data
            this.$store.dispatch('setUser', payload)
            console.log(payload)
          })
        })
    },
    logout () {
      this.user = ''
      this.pass = ''
      db.collection('MyRegister')
        .where('email', '==', this.$store.getters.currentUser[0].email)
        .where('password', '==', this.$store.getters.currentUser[0].password)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(doc.data())
            this.log = false
            const out = null
            this.$store.dispatch('logingOut', out)
            console.log(out)
          })
        })
      db.collection('Employee')
        .where('email', '==', this.user)
        .where('password', '==', this.pass)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(doc.data())
            this.log = false
            const out = null
            this.$store.dispatch('logingOut', out)
            console.log(out)
          })
        })
    },
    addData () {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      if (this.name != null & this.lastname != null & this.email != null & this.password != null & this.age != null) {
        const dataText = {
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          age: this.age,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('MyRegister').doc().set(dataText)
          .then(function () {
            console.log('Document successfully written! -> MyRegister')
          })
          .catch(function (error) {
            console.error('Error writing document: ', error)
          })
        this.dialog2 = false
      } else {
        alert('ผิดพลาด')
        this.dialog2 = true
      }
    },
    created () {
      this.getData()
    },
    reset () {
    }
  }
}
</script>
