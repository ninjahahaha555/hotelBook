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
      Grand Deluxe Villa with Plunge Pool
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      จุดเด่น
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        ขนาดห้อง: 200 ตารางเมตร  |
        วิว: ธรรมชาติ  |
        ระเบียง/ชานเรือน  |
        ห้องปลอดบุหรี่  |
        ห้องอาบน้ำฝักบัวและอ่างอาบน้ำแยกกัน
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      ห้องน้ำและอุปกรณ์ในห้องน้ำ
    </v-card-text>
    <v-card-text>
      <p class="text-left ">
        กระจก  |
        ของใช้ในห้องน้ำ  |
        ไดร์เป่าผม  |
        ผ้าเช็ดตัว  |
        เสื้อคลุมอาบน้ำ  |
        อ่างน้ำวน
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      สิ่งอำนวยความสะดวก
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        เครื่องปรับอากาศ  |
        นาฬิกาปลุก  |
        บริการโทรปลุก  |
        พัดลม  |
        รองเท้าแตะใส่ในห้องพัก  |
        หนังสือพิมพ์รายวัน
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      อาหาร เครื่องดื่ม ของว่าง
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        เครื่องชงกาแฟ/ชา  |
        ตู้เย็น  |
        น้ำดื่มบรรจุขวด (ฟรี)  |
        มินิบาร์  |
        ไมโครเวฟ
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      บริการและสิ่งอำนวยความสะดวก
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        บริการทำความสะอาดรายวัน
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      แผนผังและเฟอร์นิเจอร์
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        โต๊ะทำงาน  |
        พื้นที่นั่งเล่น
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      เครื่องแต่งกายและการซักรีด
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        ตู้เสื้อผ้า  |
        อุปกรณ์สำหรับรีดผ้า
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      ความปลอดภัย
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        ตู้เซฟในห้องพัก
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
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_15061800400029841525.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_17020214200050727393.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_14082111150021414449.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_17020214200050727405.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/483/48357/48357_17020214200050727401.jpg'
        }
      ]
    }
  }
}
</script>
