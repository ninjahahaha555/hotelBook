<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-container>
          <v-row>
            {{ $store.getters.booking.name }} {{ $store.getters.booking.lastname }}<br>
            {{ $store.getters.totalPrice }}
            <v-col
              cols="12"
              sm="12"
            >
              <v-dialog
                v-model="dialog1"
                width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-5"
                    color="blue"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    KTB
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline blue ">
                    ธนาคารกรุงไทย Krungthai Bank
                  </v-card-title>

                  <v-card-text class="headline">
                    <p>โรงแรม เลอซัวร์</p>
                    <p>เลขที่บัญชี : 578-5-14489-0</p>
                  </v-card-text>

                  <v-divider />

                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="primary"
                      text
                      @click="dialog1 = false"
                    >
                      close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog
                v-model="dialog2"
                width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-4 ma-3"
                    color="purple"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    SCB
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline purple">
                    ธนาคารไทยพาณิชย์ (SCB)
                  </v-card-title>

                  <v-card-text class="headline">
                    <p>โรงแรม เลอซัวร์</p>
                    <p>เลขที่บัญชี : 477-0-63597-9</p>
                  </v-card-text>

                  <v-divider />

                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="primary"
                      text
                      @click="dialog2 = false"
                    >
                      close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog
                v-model="dialog3"
                width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-4"
                    color="green "
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    K-bank
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline green">
                    ธนาคารกสิกรไทย K-bank
                  </v-card-title>

                  <v-card-text class="headline">
                    <p>โรงแรม เลอซัวร์</p>
                    <p>เลขที่บัญชี : 988-1-23147-3</p>
                  </v-card-text>

                  <v-divider />

                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="primary"
                      text
                      @click="dialog3 = false"
                    >
                      close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog
                v-model="dialog4"
                width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="mx-4"
                    color="pink "
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    GSB
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline pink">
                    ธนาคารออมสิน GSB
                  </v-card-title>

                  <v-card-text class="headline">
                    <p>โรงแรม เลอซัวร์</p>
                    <p>เลขที่บัญชี : 888-4-98654-1</p>
                  </v-card-text>

                  <v-divider />

                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="primary"
                      text
                      @click="dialog4 = false"
                    >
                      close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-file-input
            label="Add slip"
            filled
            prepend-icon="mdi-camera"
          />
          <nuxt-link to="/">
            <v-btn
              class="ma-5 mr-4"
              @click="submit;addData()"
            >
              submit
            </v-btn>
          </nuxt-link>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false
    }
  },
  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    addData () {
      const dataText = {
        name: this.$store.getters.booking.name,
        lastname: this.$store.getters.booking.lastname,
        email: this.$store.getters.booking.email,
        checkin: this.$store.getters.booking.checkin,
        checkout: this.$store.getters.booking.checkout,
        sumroom: this.$store.getters.booking.sumroom,
        sumperson: this.$store.getters.booking.sumperson,
        tel: this.$store.getters.booking.tel
      }
      db.collection('confirmBooking').doc().set(dataText)
        .then(function () {
          console.log('Document successfully written! -> Booking')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    }
  }
}

</script>
