<template>
  <v-card
    class="mt-5 mx-auto"
    max-width="800"
  >
    <v-card-text class="headline  text-center font-weight-black mt-3">
      : : ใบเสร็จรับเงิน : :
    </v-card-text>
    <v-card>
      <v-simple-table>
        <template>
          <thead>
            <tr>
              <th class="text-left">
                datail
              </th>
              <th class="text-right mr-5">
                price
              </th>
            </tr>
          </thead>
        </template>
        <v-card-text>
          <p class="ml-5">
            ปรเภทห้อง : {{ $store.getters.booking.roomType }}
          </p>
          <p class="ml-5">
            ราคา : {{ $store.getters.roomPrice.rPrice }}
          </p>
          <p class="ml-5">
            จำนวนห้อง : {{ $store.getters.booking.sumroom }}
          </p>
          <p class="ml-5">
            จำนวนผู้เข้าพัก : {{ $store.getters.booking.sumperson }}
          </p>
          <p class="ml-5">
            ชื่อ-สกุล : {{ $store.getters.booking.name }} {{ $store.getters.booking.lastname }}
          </p>
          <p class="ml-5">
            เบอร์โทร : {{ $store.getters.booking.tel }}
          </p>
          <p class="ml-5">
            วันที่ Check in : {{ $store.getters.booking.checkin }}
          </p>
          <p class="ml-5">
            วันที่ Check out : {{ $store.getters.booking.checkout }}
          </p>
        </v-card-text>
      </v-simple-table>
    </v-card>
    <v-card>
      <v-simple-table>
        <template>
          <thead>
            <tr>
              <th class="text-center">
                ยอดที่ต้องชำระสุทธิ
              </th>
              <th class="text-right">
                {{ $store.getters.totalPrice }} บาท
              </th>
            </tr>
          </thead>
        </template>
      </v-simple-table>
    </v-card>
    <v-card ref="form">
      <v-container>
        <v-row>
          <br>
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
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="id"
            :rules="idRules"
            label="Name Bill"
            required
            disabled
          />
          <v-row>
            <template>
              <v-file-input
                v-model="fileImage"
                accept="image/*"
                label="Add slip"
              />
            </template>
            <br>
            <v-btn color="primary" class="mr-4" @click="submitform">
              Upload
            </v-btn>
            <v-progress-circular
              :rotate="-90"
              :size="60"
              :width="15"
              :value="value"
              color="primary"
            >
              {{ value }}
            </v-progress-circular>
          </v-row>
        </v-form>
        <v-row align="center" justify="center">
          <v-btn
            v-if="a==false"
            color="primary"
            class="ma-5 mr-4"
            disabled
            @click="submit;addData();"
          >
            submit
          </v-btn>
          <nuxt-link
            v-if="a==true"
            to="/"
          >
            <v-btn
              color="primary"
              class="ma-5 mr-4"
              @click="submit;addData();"
            >
              submit
            </v-btn>
          </nuxt-link>
        </v-row>
      </v-container>
    </v-card>
  </v-card>
</template>
<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      a: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      id: this.$store.getters.booking.name,
      fileImage: null,
      value: 0
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
        tel: this.$store.getters.booking.tel,
        timestamp: this.$store.getters.booking.timestamp,
        roomType: this.$store.getters.roomPrice.rType
      }
      db.collection('Booking').doc().set(dataText)
        .then(function () {
          console.log('Document successfully written! -> Booking')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
      alert('จองห้องสำเร็จ')
    },
    submitform () {
      this.a = true
      const storageRef = firebase.storage().ref()
      const file = this.fileImage
      const metadata = {
        contentType: 'image/jpeg'
      }
      const uploadTask = storageRef
        .child('bill/' + this.id)
        .put(file, metadata)
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          this.value = progress
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING:
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          switch (error.code) {
            case 'storage/unauthorized':
              break

            case 'storage/canceled':
              break

            case 'storage/unknown':
              break
          }
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL)
          })
        }
      )
    }
  }
}

</script>
