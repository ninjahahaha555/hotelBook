<template>
  <v-row>
    <v-card max-width="320" class="mt-5">
      <v-container>
        <v-card
          class="mx-auto ml-1"
          max-width="300"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-card-text class="headline ont-weight-black" align="center">
                <v-chip color="primary">
                  Total Day
                </v-chip>
              </v-card-text>
              <v-card-text
                align="center"
                class="headline mb-1"
              >
                <v-icon x-large>
                  mdi-currency-usd
                </v-icon>
                9,763.00
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card
          class="mx-auto mt-5 ml-1"
          max-width="300"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-card-text class="headline ont-weight-black" align="center">
                <v-chip color="primary">
                  Total Month
                </v-chip>
              </v-card-text>
              <v-card-text
                align="center"
                class="headline mb-1"
              >
                <v-icon x-large>
                  mdi-currency-usd
                </v-icon>
                75,763.00
              </v-card-text>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-container>
    </v-card>
    <v-card
      class="mx-auto mt-5 ml-5"
      width="700"
      outlined
    >
      <bar-chart :data="barChartData" :options="barChartOptions" :height="200" />
    </v-card>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      barChartData: {
        labels: [
          'มกราคม',
          'กุมภาพันธ์',
          'มีนาคม',
          'เมษายน',
          'พฤษภาคม',
          'มิถุนายน',
          'กรกฎาคม',
          'สิงหาคม',
          'กันยายน',
          'ตุลาคม',
          'พฤศจิกายน',
          'ธันวาคม'
        ],
        datasets: [
          {
            label: 'Visits',
            data: [32000, 45000, 66000, 51000, 43000, 55000, 62000, 54000, 34000, 75000, 41000, 78000, 45000],
            backgroundColor: '#003f5c'
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Total income 2019',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    }
  }
}
</script>
