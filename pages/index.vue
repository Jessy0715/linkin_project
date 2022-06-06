<template>
  <v-row justify="center" align="start">
    <v-col cols="12" sm="8" md="8">
      <v-card class="logo d-flex justify-center">
        <v-img src="https://picsum.photos/350/165?random" height="200px">
          <v-card-title>
            <v-btn dark icon>
              <v-icon>mdi-upload</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="white" class="">
              <v-icon left color="dark">mdi-account-edit </v-icon>
              <span class="black--text">EDIT PROFILE</span>
            </v-btn>
            <v-btn dark icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-card-title>
        </v-img>
      </v-card>
      <v-card class="px-6 mb-4">
        <div class="d-flex">
          <v-avatar size="200" style="margin-top: -10%; border: 4px solid #fff">
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              width="180"
              alt="John"
            />
          </v-avatar>
          <v-card-text class="mb-4">
            <div class="d-flex justify-space-between align-center">
              <div class="text-subtitle-1 font-weight-bold">
                <div class="d-flex align-center">
                  <div class="mr-1">Dmitry Kargaev</div>
                  <v-icon small color="amber darken-1">mdi-linkedin </v-icon>
                </div>
              </div>
              <div>
                <v-icon color="blue">mdi-menu-up</v-icon>
                <small>Saint Petersburg, Russian Federation</small>
              </div>
            </div>
            <p>
              Freelance UX/UI designer, 80+ projects in web design, mobile apps
              (iOS & android) and creative projects. Open to offers.
            </p>
            <v-btn color="primary" nuxt to="/inspire" class="mr-3">
              <span class="white--text">Contact info</span></v-btn
            >
            <v-btn outlined color="blue darken-2"> 1,043 connections </v-btn>
          </v-card-text>
        </div>
      </v-card>
      <v-tabs fixed-tabs v-model="currentItem">
        <v-tabs-slider></v-tabs-slider>
        <v-tab :style="currentItem == idx? 'color: white; background-color: #1976D2; border-top-left-radius: 10px; border-top-right-radius: 10px;': ''"  v-for="(item, idx) in tabs" :key="idx"> {{item}} </v-tab>
      </v-tabs>
    </v-col>
    <v-col cols="12" sm="4" md="4"> ddd </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      currentItem: "",
      tabs: ["Profile", "Activity & interests", "Articles (3)"]
    }
  }
};
</script>
