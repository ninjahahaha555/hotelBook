<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
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
                      <!-- <v-col cols="12">
                        <v-text-field
                          v-model="pass"
                          :rules="ruless"
                          label="Password*"
                          type="password"
                          required
                        />
                      </v-col> -->
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
                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        @click="login(); validate ();"
                      >
                        Sign In
                      </v-btn>
                    </template>

                    <v-card v-if="log == false">
                      <v-card-title class="headline grey lighten-2">
                        ผิดพลาด ลองใหม่อีกครั้ง
                      </v-card-title>

                      <v-divider />

                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          color="error"
                          text
                          @click="dialog = false"
                        >
                          accept
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <!-- <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog1 = false; login(); validate ();"
                  >
                    Sign In
                  </v-btn> -->
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
                    @click="addData(); dialog2 = false;"
                  >
                    Register
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </div>
        <div v-if="log == true">
          <div align="center" justify="center">
            {{ n }}{{ name }}{{ lastname }}
          </div>
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
              @click="log=false; typeDuty=0"
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
    </v-navigation-drawer>
    <v-app-bar
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-card-title>
        Lesur Hotel
      </v-card-title>

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
import { mapGetters } from 'vuex'
import { db } from '~/plugins/firebaseConfig.js'
export default {
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
      typeDuty: 0,
      title: null,
      items1: [{
        icon: 'mdi-city',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-basket',
        title: 'ห้องที่จอง',
        to: '/basket'
      }
      ],
      items: [
        {
          icon: 'mdi-city',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ข้อมูลRegister',
          to: '/dataRegister'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'ข้อมูลBooking',
          to: '/dataBook'
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'ข้อมูลการเงิน',
        //   to: '/dataIncome'
        // },
        {
          icon: 'mdi-chart-bubble',
          title: 'ข้อมูลพนักงาน',
          to: '/dataEmployee'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  computed: {
    ...mapGetters(['data'])
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
      db.collection('MyRegister').where('email', '==', this.user).where('password', '==', this.pass)
        .onSnapshot((querySnapshot) => {
          const data = []
          const dataln = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data().name)
            dataln.push(doc.data().lastname)
            console.log(doc.data())
            this.log = true
            this.typeDuty = 0
          })
          this.name = data.toString()
          this.lastname = dataln.toString()
        })
      db.collection('Employee').where('email', '==', this.user).where('password', '==', this.pass)
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data().nameEm)
            console.log(doc.data())
            this.log = true
            this.typeDuty = 1
          })
          this.n = data.toString()
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
