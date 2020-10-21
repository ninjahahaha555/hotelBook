<template>
  <v-card>
    <!-- <v-card class="ma-3 mx-auto">
      <v-carousel
        cycle
        height="400"
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
    </v-card> -->
    <v-sheet class=" pa-4 light-blue darken-4 lighten-2">
      <v-text-field
        v-model="search"
        label="Search "
        dark
        flat
        solo-inverted
        hide-details
        clearable
        clear-icon="mdi-close-circle-outline"
      />
      <v-row>
        <v-checkbox
          v-model="caseSensitive"
          class="ma-3"
          dark
          hide-details
          label="Vip Room"
        />
        <v-checkbox
          v-model="caseSensitive"
          class="ma-3"
          dark
          hide-details
          label="Sweet room"
        />
        <v-checkbox
          v-model="caseSensitive"
          class="ma-3"
          dark
          hide-details
          label="Party room"
        />
        <v-checkbox
          v-model="caseSensitive"
          class="ma-3"
          dark
          hide-details
          label="Luxury room"
        />
        <v-rating
          v-model="rating"
          background-color="orange lighten-5"
          color="orange"
          large
        />
      </v-row>
    </v-sheet>
    <v-card>
      <v-row>
        <v-card
          class="ma-3 mx-auto"
          max-width="250"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://exp.cdn-hotels.com/hotels/2000000/1800000/1795800/1795742/e4de84e1_z.jpg?impolicy=fcrop&w=773&h=530&q=high"
          >
            <v-card-title>Sweet room</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Hotels.com is a leading online accommodation site. </div>
          </v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ name: 'product-id', params: { id: data } }">
              <v-btn
                depressed
                color="primary"
              >
                Previwe
              </v-btn>
            </nuxt-link>
            <v-spacer />
          </v-card-actions>
        </v-card>
        <v-card
          class="ma-3 mx-auto"
          max-width="250"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://pix6.agoda.net/hotelImages/483/48357/48357_14021315140018332012.jpg"
          >
            <v-card-title>Deluxe Villa</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>We’re passionate about travel. Every day</div>
          </v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ name: 'product-id1', params: { id: data } }">
              <v-btn
                depressed
                color="primary"
              >
                Previwe
              </v-btn>
            </nuxt-link>
            <v-spacer />
          </v-card-actions>
        </v-card>
        <v-card
          class="ma-3 mx-auto"
          max-width="250"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://pix6.agoda.net/hotelImages/483/48357/48357_15061800400029841525.jpg"
          >
            <v-card-title>Room 1</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>Grand Deluxe Villa with Plunge Pool (วิลลาแกรนด์ดีลักซ์พร้อมสระแช่ตัว)</div>
          </v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ name: 'product-id2', params: { id: data } }">
              <v-btn
                depressed
                color="primary"
              >
                Previwe
              </v-btn>
            </nuxt-link>
            <v-spacer />
            <v-spacer />
          </v-card-actions>
        </v-card>
        <v-card
          class="ma-3 mx-auto"
          max-width="250"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://pix6.agoda.net/hotelImages/483/48357/48357_14100115310022525905.jpg"
          >
            <v-card-title>Room 2</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>แกรนด์ พูล วิลลา (Grand Pool Villa)</div>

            <div>So when it comes to booking the perfect hotel, holiday rental,</div>
          </v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ name: 'product-id3', params: { id: data } }">
              <v-btn
                depressed
                color="primary"
              >
                Previwe
              </v-btn>
            </nuxt-link>
            <v-spacer />
          </v-card-actions>
        </v-card>
        <v-card
          class="ma-3 mx-auto"
          max-width="250"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://pix6.agoda.net/hotelImages/483/48357/48357_14090114230021742746.jpg"
          >
            <v-card-title>Room 3</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>วิลลา สวนผัก (Vegetable Garden Villa)</div>
          </v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ name: 'product-id4', params: { id: data } }">
              <v-btn
                depressed
                color="primary"
              >
                Previwe
              </v-btn>
            </nuxt-link>
            <v-spacer />
          </v-card-actions>
        </v-card>
        <v-card
          class="ma-3 mx-auto"
          max-width="250"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://pix6.agoda.net/hotelImages/2311381/201094626/c89d1ae0a33c68ef82096fb3fef475e3.jpg"
          >
            <v-card-title>Room 4</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>ดีลักซ์ เตียงคิงไซส์ (Deluxe Room 1 King)</div>
          </v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ name: 'product-id5', params: { id: data } }">
              <v-btn
                depressed
                color="primary"
              >
                Previwe
              </v-btn>
            </nuxt-link>
            <v-spacer />
          </v-card-actions>
        </v-card>
        <v-card
          class="ma-3 mx-auto"
          max-width="250"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://pix6.agoda.net/hotelImages/108182/-1/0840276ffac37b72ff35e650e875aec9.jpg"
          >
            <v-card-title>Room 5</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>เอ็กเซกคิวทีฟ สวีท เตียงคิงไซส์ (Executive Suite King)</div>
          </v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ name: 'product-id6', params: { id: data } }">
              <v-btn
                depressed
                color="primary"
              >
                Previwe
              </v-btn>
            </nuxt-link>
            <v-spacer />
          </v-card-actions>
        </v-card>
        <v-card
          class="ma-3 mx-auto"
          max-width="250"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://pix6.agoda.net/hotelImages/108182/-1/f5f9a3e6254f51cad5f7ffe348df7bb0.jpg"
          >
            <v-card-title>Room 6</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>Premier Room 2 Twins</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ name: 'product-id7', params: { id: data } }">
              <v-btn
                depressed
                color="primary"
              >
                Previwe
              </v-btn>
            </nuxt-link>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      // items: [
      //   {
      //     src: 'https://bigmapthailand.com/wp-content/uploads/2020/04/the-Space-RGB8-1920x746.jpg'
      //   },
      //   {
      //     src: 'https://blog.chatrium.com/wp-content/uploads/2018/02/TTT-March-2018-E-Flyer_FB-event-1.jpg'
      //   },
      //   {
      //     src: 'https://cf.bstatic.com/images/hotel/max1280x900/450/45002937.jpg'
      //   },
      //   {
      //     src: 'https://ikkyuads.com/imageWeb/dbd-ikkyu/1.png'
      //   }
      // ],
      search: null,
      caseSensitive: null,
      data: null,
      rating: null
    }
  }
}
</script>
