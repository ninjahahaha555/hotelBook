<template>
  <v-card>
    <v-card-title>
      ข้อมูลการจอง
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
      :search="search"
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
        { text: 'จำนวนผู้เข้าพัก', value: 'sumperson' }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
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
