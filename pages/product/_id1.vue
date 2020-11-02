<template>
  <v-card>
    <template>
      <template>
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
    <v-card-text class="headline text-left font-weight-black">
      ดีลักซ์ วิลลา (Deluxe Villa)
    </v-card-text>
    <p class="text-left font-weight-black">
      ห้อง<br>
      D201 : {{ s1[0] }}<br>
      D202 : {{ s2[0] }}
    </p>
    <v-row justify="space-around ">
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          จุดเด่น
        </div>
        <div>
          ◆ ขนาดห้อง: 185 ตารางเมตร
        </div>
        <div>
          ◆ วิว: สวน
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
        <div>
          ◆ ครัวขนาดเล็ก
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
          ◆ เสื้อคลุมอาบน้ำ
        </div>
        <div>
          ◆ อ่างน้ำวน
        </div>
      </v-card>
      <v-card class="ma-2" width="300">
        <div class="headline font-weight-bold">
          สิ่งอำนวยความสะดวก
        </div>
        <div>
          ◆ เครื่องปรับอากาศ
        </div>
        <div>
          ◆ นาฬิกาปลุก
        </div>
        <div>
          ◆ บริการโทรปลุก
        </div>
        <div>
          ◆ พัดลม
        </div>
        <div>
          ◆ รองเท้าแตะใส่ในห้องพัก
        </div>
        <div>
          ◆ หนังสือพิมพ์รายวัน
        </div>
      </v-card>
    </v-row>

    <v-row justify="space-around ">
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
        v-if="log == false || s1[0]=='ห้องไม่ว่าง' & s2[0]=='ห้องไม่ว่าง'"
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
          v-if="s1[0]=='ห้องว่าง' & log == true & s2[0]=='ห้องว่าง'"
          depressed
          block
          color="primary"
          @click="submit()"
        >
          Book
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/booking">
        <v-btn
          v-if="s1[0]=='ห้องไม่ว่าง' & log == true & s2[0]=='ห้องว่าง'"
          depressed
          block
          color="primary"
          @click="submit()"
        >
          Book
        </v-btn>
      </nuxt-link>
      <nuxt-link to="/booking">
        <v-btn
          v-if="s1[0]=='ห้องว่าง' & log == true & s2[0]=='ห้องไม่ว่าง'"
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
      delux1: 'D201',
      delux2: 'D202',
      log: this.$store.getters.log,
      items: [
        {
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_14021315140018332012.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_17020214180050727312.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_17020214180050727316.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_17020214180050727320.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_17020214180050727329.jpg'
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
        rPrice: 1500,
        rType: 'Delux Room'
      }
      this.$store.dispatch('addRoomPrice', room)
      console.log(room)
    },
    sRoom () {
      const r = []
      db.collection('Room')
        .where('roomnum', '==', this.delux1)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            r.push(doc.data().status)
            // console.log(r)
          })
          this.s1 = r
          console.log(this.s1)
        })
      const r2 = []
      db.collection('Room')
        .where('roomnum', '==', this.delux2)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            r2.push(doc.data().status)
            // console.log(r)
          })
          this.s2 = r2
          console.log(this.s1)
        })
    }
  }
}
</script>
