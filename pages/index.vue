<template>
  <v-container>
    <v-row>
      <v-card class="ma-3 mx-auto">
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
      </v-card>
    </v-row>
    <v-card-text
      class=" headline  text-center font-weight-black mt-10 text-decoration-underline"
      large
    >
      OUR BEST ROOMS
    </v-card-text>
    <v-row dense>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="ma-3 mx-auto"
            max-width="450"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://exp.cdn-hotels.com/hotels/2000000/1800000/1795800/1795742/e4de84e1_z.jpg?impolicy=fcrop&w=773&h=530&q=high"
            />
            <v-card-title>Sweet room</v-card-title>
            <v-card-text class="text--primary">
              <div>
                ห้องขนาดกลาง
                จำนวนห้องว่าง 11 ห้อง
              </div>
              <p class="font-weight-black">
                ราคา 1,800 บาท/คืน
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
            </v-card-actions>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <nuxt-link :to="{ name: 'product-id', params: { id: data } }">
                  <v-btn
                    depressed
                    color="primary"
                  >
                    Previwe
                  </v-btn>
                </nuxt-link>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="ma-3 mx-auto"
            max-width="450"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://pix6.agoda.net/hotelImages/483/48357/48357_14021315140018332012.jpg"
            />
            <v-card-title>Deluxe Villa</v-card-title>

            <v-card-text class="text--primary">
              <div>
                ห้องขนาดกลาง
                จำนวนห้องว่าง 5 ห้อง
                <p class="font-weight-black">
                  ราคา 1,500 บาท/คืน
                </p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
            </v-card-actions>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <nuxt-link :to="{ name: 'product-id1', params: { id: data } }">
                  <v-btn
                    depressed
                    color="primary"
                  >
                    Previwe
                  </v-btn>
                </nuxt-link>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>

      <v-card-text
        class=" headline  text-center font-weight-black mt-10 text-decoration-underline"
        large
      >
        NORMAL ROOM
      </v-card-text>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="ma-3 mx-auto mt-5"
            max-width="450"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://pix6.agoda.net/hotelImages/2311381/201094626/c89d1ae0a33c68ef82096fb3fef475e3.jpg"
            />
            <v-card-title>ห้องทั่วไป</v-card-title>

            <v-card-text class="text--primary">
              <div>
                ดีลักซ์ เตียงคิงไซส์ (Deluxe Room 1 King) จำนวนห้องว่าง 5 ห้อง
                <p class="font-weight-black">
                  ราคา 1,200 บาท/คืน
                </p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
            </v-card-actions>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <nuxt-link :to="{ name: 'product-id5', params: { id: data } }">
                  <v-btn
                    depressed
                    color="primary"
                  >
                    Previwe
                  </v-btn>
                </nuxt-link>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="ma-3 mx-auto mt-5"
            max-width="450"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://pix6.agoda.net/hotelImages/108182/-1/0840276ffac37b72ff35e650e875aec9.jpg"
            />
            <v-card-title>ห้องทั่วไป</v-card-title>

            <v-card-text class="text--primary">
              <div>
                เอ็กเซกคิวทีฟ สวีท เตียงคิงไซส์ (Executive Suite King)
                จำนวนห้องว่าง 5 ห้อง
                <p class="font-weight-black">
                  ราคา 1,200 บาท/คืน
                </p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
            </v-card-actions>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <nuxt-link :to="{ name: 'product-id6', params: { id: data } }">
                  <v-btn
                    depressed
                    color="primary"
                  >
                    Previwe
                  </v-btn>
                </nuxt-link>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="ma-3 mx-auto"
            max-width="450"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://pix6.agoda.net/hotelImages/108182/-1/f5f9a3e6254f51cad5f7ffe348df7bb0.jpg"
            />
            <v-card-title>ห้องทั่วไป</v-card-title>

            <v-card-text class="text--primary">
              <div>Premier Room 2 Twins</div>

              <div>
                Whitsunday Island, Whitsunday Islands
                จำนวนห้องว่าง 5 ห้อง
                <p class="font-weight-black">
                  ราคา 1,200 บาท/คืน
                </p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
            </v-card-actions>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <nuxt-link :to="{ name: 'product-id7', params: { id: data } }">
                  <v-btn
                    depressed
                    color="primary"
                  >
                    Previwe
                  </v-btn>
                </nuxt-link>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card
            class="ma-3 mx-auto"
            max-width="450"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://pix6.agoda.net/hotelImages/108182/-1/f5f9a3e6254f51cad5f7ffe348df7bb0.jpg"
            />
            <v-card-title>ห้องทั่วไป</v-card-title>

            <v-card-text class="text--primary">
              <div>Premier Room 2 Twins</div>

              <div>
                Whitsunday Island, Whitsunday Islands
                จำนวนห้องว่าง 5 ห้อง
                <p class="font-weight-black">
                  ราคา 1,200 บาท/คืน
                </p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
            </v-card-actions>
            <v-fade-transition>
              <v-overlay
                v-if="hover"
                absolute
                color="#036358"
              >
                <nuxt-link :to="{ name: 'product-id7', params: { id: data } }">
                  <v-btn
                    depressed
                    color="primary"
                  >
                    Previwe
                  </v-btn>
                </nuxt-link>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
      <v-card-text
        class=" headline  text-center font-weight-black mt-10 text-decoration-underline"
        large
      >
        OUR FACILTIES
      </v-card-text>
      <v-card-text
        class=" headline text-center font-weight-black mt-10 "
        large
      >
        <v-row justify="space-around ">
          <div>
            <v-icon large class="mr-3">
              mdi-account
            </v-icon>
            24-Hour Reception
          </div>
          <div>
            <v-icon large class="mr-3">
              mdi-account-convert
            </v-icon>Room Service
          </div>
          <div>
            <v-icon large class="mr-3">
              mdi-phone
            </v-icon>Wake-up Call
          </div>
        </v-row>
        <v-row justify="space-around mt-5">
          <div class="mr-10">
            <v-icon large class="mr-3">
              mdi-wifi
            </v-icon>Free Wi-Fi
          </div>
          <div>
            <v-icon large class="mr-3">
              mdi-dumbbell
            </v-icon>Gym
          </div>
          <div>
            <v-icon large class="mr-3">
              mdi-monitor
            </v-icon>Flat Screen TV
          </div>
        </v-row>
        <v-row justify="space-around mt-5">
          <div class="mr-10">
            <v-icon large class="mr-3">
              mdi-bus-side
            </v-icon>Shuttle bus
          </div>
          <div>
            <v-icon large class="mr-3">
              mdi-food-variant
            </v-icon>Breakfast
          </div>
          <div>
            <v-icon large class="mr-3">
              mdi-account-multiple-plus
            </v-icon>Meeting room
          </div>
        </v-row>
      </v-card-text>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {

  },
  data () {
    return {
      items: [
        {
          src: 'https://cdn.discordapp.com/attachments/392353546332405763/771050394276593674/a1.jpg'
        },
        {
          src: 'https://cdn.discordapp.com/attachments/392353546332405763/771050187824431144/aaa.jpg'
        },
        {
          src: 'https://cdn.discordapp.com/attachments/392353546332405763/771050518881370142/a3.jpg'
        },
        {
          src: 'https://cdn.discordapp.com/attachments/392353546332405763/771050677891891220/a4.png'
        }
      ],
      search: null,
      caseSensitive: null,
      data: null,
      rating: null
    }
  },
  computed: {
    ...mapGetters(['currentUser'])
  }
}
</script>
