<template>
  <v-container>
    <v-form>
      <v-row align="center" justify="center">
        <v-card>
          <h1 align="center">
            ข้อมูล
          </h1>
          <v-container>
            <v-col
              cols="12"
              sm="12"
            >
              <v-textarea
                v-model="name"
                class="mx-2"
                label="Name"
                rows="1"
                prepend-icon="mdi-account"
              />
            </v-col>
            <v-col
              cols="12"
              sm="12"
            >
              <v-textarea
                v-model="lastname"
                class="mx-2"
                label="LastName"
                rows="1"
                prepend-icon="mdi-account"
              />
            </v-col>
            <v-col
              cols="12"
              sm="12"
            >
              <v-textarea
                v-model="email"
                class="mx-2"
                label="Email"
                rows="1"
                prepend-icon="mdi-email"
              />
            </v-col>
          </v-container>
        </v-card>

        <v-card class="ma-3">
          <h1 align="center">
            จองห้องพัก
          </h1>
          <v-row justify="center">
            <v-col cols="12" md="5">
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="checkin"
                    label="Check In Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="checkin"
                  @input="menu1 = false"
                />
              </v-menu>
            </v-col>
            <v-col cols="12" md="5">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="checkout"
                    label="Check Out Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <v-date-picker
                  v-model="checkout"
                  @input="menu2 = false"
                />
              </v-menu>
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="5">
              <v-text-field
                v-model="sumroom"
                type="number"
                :rules="rules"
                label="จำนวนห้อง*"
                required
              />
            </v-col>
            <v-col cols="12" md="5">
              <v-text-field
                v-model="sumperson"
                type="number"
                :rules="rules"
                label="จำนวนผู้เข้าพัก*"
                required
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col cols="12" md="10">
              <v-text-field
                v-model="tel"
                type="tel"
                :rules="rules"
                hide-details="auto"
                label="Tel*"
              />
            </v-col>
          </v-row>
          <v-row align="center" justify="center">
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
                >
                  SUBMIT
                </v-btn>
              </template>

              <v-card v-if="(name != null & lastname != null & email != null & sumroom != null & sumperson != null)">
                <v-card-title class="headline">
                  Successfully
                </v-card-title>
                <v-card-actions>
                  <v-spacer />
                  <nuxt-link to="payment">
                    <v-btn
                      color="primary"
                      style="text-decoration: none;"
                      text
                      @click="dialog = false;submit()"
                    >
                      ยืนยัน
                    </v-btn>
                  </nuxt-link>
                </v-card-actions>
              </v-card>
              <v-card v-if="(name == null || lastname == null || email == null || sumroom == null || sumperson == null)">
                <v-card-title class="headline">
                  ข้อมูลไม่ถูกต้อง
                </v-card-title>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="error"
                    text
                    @click="dialog = false"
                  >
                    ยืนยัน
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <br>
        </v-card>
        <v-row>
        <!-- <CollectionText /> -->
        </v-row>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import { store } from '~/store/index'
// import { db } from '~/plugins/firebaseConfig.js'
export default {
  store,
  data () {
    return {
      menu1: null,
      menu2: null,
      name: this.$store.getters.currentUser[0].name,
      lastname: this.$store.getters.currentUser[0].lastname,
      email: this.$store.getters.currentUser[0].email,
      sumroom: null,
      sumperson: null,
      tel: null,
      rules: [
        value => !!value || 'Required.'
      ],
      checkin: new Date().toISOString().substr(0, 10),
      checkout: new Date().toISOString().substr(0, 10),
      menu: false,
      dialog: false
    }
  },
  methods: {
    created () {
      this.getData()
    },
    reset () {
    },
    submit () {
      const book = {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        checkin: this.checkin,
        checkout: this.checkout,
        sumroom: this.sumroom,
        sumperson: this.sumperson,
        tel: this.tel,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        roomType: this.$store.getters.roomPrice.rType
      }
      this.$store.dispatch('addBooking', book)
      // console.log(book)
    }
  }
}
</script>

<style>
.theme--dark.v-application {
  background-image: url("https://cdn.discordapp.com/attachments/392353546332405763/763456399841034240/building-background.jpg");
  background-attachment: fixed;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.v-card{
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 18px;
  background-color: beige;
}
</style>
