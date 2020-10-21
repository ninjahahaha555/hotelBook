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
    <v-card-text class="headline font-weight-bold">
      โรงแรมระดับ 4 ดาวพร้อม สระว่ายน้ำกลางแจ้ง และเชื่อมต่อกับศูนย์จัดการประชุม
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      สิ่งอำนวยความสะดวก
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        ห้องพักปลอดบุหรี่ 93 ห้อง /
        บริการทุกวัน /
        ห้องอาหารและ บาร์/เลานจ์ /
        สระว่ายน้ำกลางแจ้ง /
        มีอาหารเช้าบริการ /
        ฟิตเนส/
        ศูนย์ธุรกิจ 24 ชั่วโมง /
        รถรับส่งสนามบิน/
        ฝ่ายต้อนรับ 24 ชั่วโมง /
        บริการซักรีด /
        พนักงานที่พูดได้หลายภาษา /
        บริการคอนเซียร์จ /
        Wi-Fi และที่จอดรถฟรี /
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      สำหรับครอบครัว
    </v-card-text><v-card-text>
      <p class="text-left">
        เตียงพับ/เตียงเสริม (คิดค่าบริการ) /
        ครัวขนาดเล็ก /
        เครื่องครัว/จาน/ช้อนส้อม /
        เตาทำครัว /
        ไมโครเวฟ /
        ตู้เย็น /
      </p>
    </v-card-text>
    <nuxt-link to="/booking">
      <v-btn
        depressed
        color="primary"
      >
        จอง
      </v-btn>
    </nuxt-link>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
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
  }
}
</script>
