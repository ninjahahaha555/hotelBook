<template>
  <v-card>
    <v-card-title>
      ข้อมูลการจอง
      <v-spacer />
      <v-text-field
        v-model="searchBook"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        disabled
      />
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="textList"
      :search="searchBook"
    />
  </v-card>
</template>

<script>
import {
  db
} from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      textList: [],
      searchBook: this.$store.getters.currentUser[0].email,
      headers: [
        {
          text: 'E-mail',
          align: 'start',
          sortable: false,
          value: 'email'
        },
        { text: 'ประเภทห้อง', value: 'roomType' },
        { text: 'วันเช็คอิน', value: 'checkin' },
        { text: 'วันเช็คเอาท์', value: 'checkout' },
        { text: 'จำนวนห้อง', value: 'sumroom' },
        { text: 'จำนวนผู้เข้าพัก', value: 'sumperson' }
      ]
    }
  },
  created () {
    this.getData()
    this.reset()
  },
  methods: {
    reset () {
      if (this.$store.state.log === false) {
        this.$router.replace('/')
      }
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
