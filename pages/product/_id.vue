<template>
  <v-card>
    <template>
      <template>
        <v-card-text
          class=" headline font-weight-black"
          large
        >
          Sweet Room
        </v-card-text>
        <v-carousel
          cycle
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          />
        </v-carousel>
      </template>
    </template>
    <v-card-text>
      <p class="text-left font-weight-black">
        ห้อง<br>
        S101 : {{ s1[0] }}<br>
        S102 : {{ s2[0] }}
      </p>
      <p class="text-left font-weight-black">
        เตียง 2 เตียง ห้องน้ำ 1 ห้อง จำนวนห้อง 1 ห้อง
        ราคา 1,800 บาท/คืน
      </p>
    </v-card-text>
    <v-card-text class="headline text-left font-weight-black">
      โรงแรมระดับ 4 ดาวพร้อม สระว่ายน้ำกลางแจ้ง และเชื่อมต่อกับศูนย์จัดการประชุม
    </v-card-text>
    <v-row justify="space-around ">
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          สิ่งอำนวยความสะดวก
        </div>
        <div>
          ◆ ห้องอาหารและ บาร์/เลานจ์
        </div>
        <div>
          ◆ สระว่ายน้ำกลางแจ้ง
        </div>
        <div>
          ◆ มีอาหารเช้าบริการ
        </div>
        <div>
          ◆ รถรับส่งสนามบิน
        </div>
        <div>
          ◆ บริการซักรีด
        </div>
        <div>
          ◆ ครัวขนาดเล็ก
        </div>
      </v-card>
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          จุดเด่น
        </div>
        <div>
          ◆ ขนาดห้อง: 220 ตารางเมตร
        </div>
        <div>
          ◆ วิว: ธรรมชาติ
        </div>
        <div>
          ◆ ระเบียง/ชานเรือน
        </div>
        <div>
          ◆ ห้องปลอดบุหรี่
        </div>
        <div>
          ◆ ห้องอาบน้ำฝักบัวและอ่างอาบน้ำแยกกัน
        </div>
      </v-card>
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          ห้องน้ำและอุปกรณ์ในห้องน้ำ
        </div>
        <div>
          ◆ กระจก
        </div>
        <div>
          ◆ ของใช้ในห้องน้ำ
        </div>
        <div>
          ◆ ไดร์เป่าผม
        </div>
        <div>
          ◆ ผ้าเช็ดตัว
        </div>
        <div>
          ◆ สื้อคลุมอาบน้ำ
        </div>
      </v-card>
    </v-row>

    <v-row justify="space-around ">
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          ความบันเทิง
        </div>
        <div>
          ◆ Wi-Fi ทุกห้อง (ฟรี)
        </div>
        <div>
          ◆ เครื่องเล่น Movie
        </div>
        <div>
          ◆ ทรทัศน์ดาวเทียม/เคเบิล
        </div>
        <div>
          ◆ โทรศัพท์
        </div>
      </v-card>
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          อาหาร เครื่องดื่ม ของว่าง
        </div>
        <div>
          ◆ เครื่องชงกาแฟ/ชา
        </div>
        <div>
          ◆ ตู้เย็น
        </div>
        <div>
          ◆ น้ำดื่มบรรจุขวด (ฟรี)
        </div>
        <div>
          ◆ มินิบาร์
        </div>
        <div>
          ◆ ไมโครเวฟ
        </div>
      </v-card>
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          บริการและสิ่งอำนวยความสะดวก
        </div>
        <div>
          ◆ บริการทำความสะอาดรายวัน
        </div>
      </v-card>
    </v-row>

    <v-row justify="space-around ">
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          แผนผังและเฟอร์นิเจอร์
        </div>
        <div>
          ◆ โต๊ะทำงาน
        </div>
        <div>
          ◆ พื้นที่นั่งเล่น
        </div>
        <div>
          ◆ เฟอร์นิเจอร์
        </div>
      </v-card>
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          เครื่องแต่งกายและการซักรีด
        </div>
        <div>
          ◆ ตู้เสื้อผ้า
        </div>
        <div>
          ◆ อุปกรณ์สำหรับรีดผ้า
        </div>
      </v-card>
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          ความปลอดภัย
        </div>
        <div>
          ◆ ตู้เซฟในห้องพัก
        </div>
        <div>
          ◆ Key Card ประจำห้อง
        </div>
      </v-card>
    </v-row>
    <div class="text-center mt-5">
      <v-btn
        v-if="log == false"
        depressed
        block
        disabled
        color="primary"
        @click="submit()"
      >
        Book
      </v-btn>
      <nuxt-link to="/booking">
        <v-btn
          v-if="log == true"
          depressed
          block
          color="primary"
          @click="submit()"
        >
          Book
        </v-btn>
      </nuxt-link>
    </div>
  </v-card>
</template>
<script>
import { store } from '~/store/index'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  store,
  data () {
    return {
      s1: [],
      s2: [],
      sweet1: 'S101',
      sweet2: 'S102',
      log: this.$store.getters.log,
      items: [
        {
          src: 'https://exp.cdn-hotels.com/hotels/2000000/1800000/1795800/1795742/f7eb48e1_z.jpg?impolicy=fcrop&w=773&h=530&q=high'
        },
        {
          src: 'https://exp.cdn-hotels.com/hotels/2000000/1800000/1795800/1795742/17213883_z.jpg?impolicy=fcrop&w=773&h=530&q=high'
        },
        {
          src: 'https://exp.cdn-hotels.com/hotels/2000000/1800000/1795800/1795742/e4de84e1_z.jpg?impolicy=fcrop&w=773&h=530&q=high'
        },
        {
          src: 'https://exp.cdn-hotels.com/hotels/2000000/1800000/1795800/1795742/b7ec38df_z.jpg?impolicy=fcrop&w=773&h=530&q=high'
        },
        {
          src: 'https://exp.cdn-hotels.com/hotels/2000000/1800000/1795800/1795742/64521384_z.jpg?impolicy=fcrop&w=773&h=530&q=high'
        },
        {
          src: 'https://exp.cdn-hotels.com/hotels/2000000/1800000/1795800/1795742/bae7886b_z.jpg?impolicy=fcrop&w=773&h=530&q=high'
        },
        {
          src: 'https://exp.cdn-hotels.com/hotels/2000000/1800000/1795800/1795742/0dc08c6c_z.jpg?impolicy=fcrop&w=773&h=530&q=high'
        }
      ]
    }
  },
  created () {
    this.sRoom()
  },
  methods: {
    submit () {
      const room = {
        rPrice: 1800,
        rType: 'Sweet Room'
      }
      this.$store.dispatch('addRoomPrice', room)
      // console.log(room)
    },
    sRoom () {
      const r = []
      db.collection('Room')
        .where('roomnum', '==', this.sweet1)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            r.push(doc.data().status)
            // console.log(r)
          })
          this.s1 = r
          // console.log(this.s1)
        })
      const r2 = []
      db.collection('Room')
        .where('roomnum', '==', this.sweet2)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            r2.push(doc.data().status)
            // console.log(r)
          })
          this.s2 = r2
          // console.log(this.s1)
        })
    }
  }
}
</script>
