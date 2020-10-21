<template>
  <v-card>
    <v-card-title>
      ข้อมูลผู้สมัคร
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
        { text: 'Password', value: 'password' },
        { text: 'Age', value: 'age' }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      db.collection('MyRegister').orderBy('timestamp').onSnapshot((querySnapshot) => {
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
