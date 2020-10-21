<template>
  <v-card>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            class="mr-4 ma-4"
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
              outlined
            />
          </v-col>

          <v-col
            class="mr-4 ma-4"
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
              outlined
            />
          </v-col>

          <v-col
            class="mr-4 ma-4"
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
              outlined
            />
          </v-col>
          <v-col
            class="mr-4 ma-4"
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="phonenumber"
              :rules="phoneRules"
              label="PhoneNumber"
              required
              outlined
            />
          </v-col>
          <v-col
            class="mr-4 ma-4"
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="salary"
              :rules="salaryRules"
              label="Salary"
              required
              outlined
            />
          </v-col>
          <v-col
            class="mr-4 ma-4"
            cols="12"
            md="5"
          >
            <v-text-field
              v-model="address"
              :rules="addressRules"
              label="Address"
              required
              outlined
            />
          </v-col>
          <v-col
            class="mr-4 ma-4"
            cols="12"
            md="6"
          >
            <v-select
              v-model="select"
              :items="items"
              :error-messages="errors"
              label="Job position"
              data-vv-name="select"
              required
              outlined
            />
          </v-col>
        </v-row>
      </v-container>
      <v-btn
        class="mr-4 ma-5"
        @click="submit"
      >
        submit
      </v-btn>
    </v-form>
  </v-card>
</template>
<script>
export default {
  components: {
  },
  data: () => ({
    name: '',
    email: '',
    select: null,
    errors: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ],
    checkbox: null
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
    }
  }
}
</script>
