<template>
  <v-form v-model="valid">
    <v-container>
      <v-card>
        <h1 align="center">
          จองห้องพัก
        </h1>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-text-field
              v-model="name"
              :rules="rules"
              hide-details="auto"
              label="ชื่อ*"
              required
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="lastname"
              :rules="rules"
              hide-details="auto"
              label="นามสกุล*"
              required
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-text-field
              v-model="email"
              type="email"
              :rules="rules"
              hide-details="auto"
              label="E-mail*"
            />
          </v-col>
          <v-col cols="12" md="3">
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
          <v-col cols="12" md="3">
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
          <v-col cols="12" md="3">
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
          <v-col cols="12" md="3">
            <v-text-field
              v-model="sumroom"
              type="number"
              :rules="rules"
              label="จำนวนห้อง*"
              required
            />
          </v-col>
          <v-col cols="12" md="3">
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
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success"
                dark
                v-bind="attrs"
                v-on="on"
                @click="addData"
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
                    text
                    @click="dialog = false"
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
      <!-- <CollectionText /> -->
    </v-container>
  </v-form>
</template>

<script>
import firebase from 'firebase/app'
import { mapGetters } from 'vuex'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  // components: {
  //   CollectionText
  // },
  data () {
    return {
      valid: null,
      menu1: null,
      menu2: null,
      name: null,
      lastname: null,
      email: null,
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
  computed: {
    ...mapGetters(['data'])
  },

  methods: {
    addData () {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      if (this.name != null & this.lastname != null & this.email != null & this.sumperson != null & this.sumroom != null) {
        // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
        const dataText = {
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          checkin: this.checkin,
          checkout: this.checkout,
          sumroom: this.sumroom,
          sumperson: this.sumperson,
          tel: this.tel,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('Booking').doc().set(dataText)
          .then(function () {
            console.log('Document successfully written! -> Booking')
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
