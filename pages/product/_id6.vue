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
        วิว: เมือง  |
        ห้องปลอดบุหรี่  |
        ห้องอาบน้ำฝักบัวและอ่างอาบน้ำแยกกัน  |
        สิทธิ์ใช้เอ็กเซกคิวทีฟ เลาจน์
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
        เสื้อคลุมอาบน้ำ
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      ความบันเทิง
    </v-card-text>
    <v-card-text>
      <p class="text-left ">
        Wi-Fi ทุกห้อง (ฟรี)  |
        เครื่องเล่นดีวีดี/ซีดี  |
        โทรทัศน์ดาวเทียม/เคเบิล  |
        โทรศัพท์
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      สิ่งอำนวยความสะดวก
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        เครื่องปรับอากาศ  |
        บริการโทรปลุก  |
        พัดลม  |
        หนังสือพิมพ์รายวัน  |
        รองเท้าแตะใส่ในห้องพัก  |
        ร่ม
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      อาหาร เครื่องดื่ม ของว่าง
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        กาแฟสำเร็จรูป (ฟรี)  |
        เครื่องชงกาแฟ/ชา  |
        เครื่องดื่มต้อนรับ  |
        ชา (ฟรี)  |
        ตู้เย็น  |
        น้ำดื่มบรรจุขวด (ฟรี)  |
        มินิบาร์
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
        โซฟา  |
        โต๊ะทำงาน  |
        พื้นที่นั่งเล่น  |
        ห้องนั่งเล่นแยกต่างหาก  |
        ห้องพักชั้นสูง  |
        ห้องรับประทานอาหารแยกต่างหาก
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      เครื่องแต่งกายและการซักรีด
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        ชุดขัดรองเท้า  |
        ชุดเย็บผ้า  |
        ตู้เสื้อผ้า  |
        อุปกรณ์สำหรับรีดผ้า
      </p>
    </v-card-text>
    <v-card-text class=" text-left headline font-weight-bold">
      ความปลอดภัย
    </v-card-text>
    <v-card-text>
      <p class="text-left">
        ตู้เซฟในห้องพัก  |
        เครื่องตรวจจับควัน
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
          src: 'https://pix6.agoda.net/hotelImages/108182/-1/0840276ffac37b72ff35e650e875aec9.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/108182/-1/bf28e24ae08397d449831899924003ad.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/2311381/132223000/3bd91ecc1fa10ea976ff101026ee5119.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/108182/-1/46a7196ed370afcb6756a190fee08356.jpg'
        },
        {
          src: 'https://pix6.agoda.net/hotelImages/108182/-1/f9c4660c10473937bfeae76af21b49bf.jpg'
        }
      ]
    }
  }
}
</script>
