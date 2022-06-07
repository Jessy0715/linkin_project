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
            <p class="text-body-2">
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
      <v-tabs fixed-tabs v-model="currentItem" class="mb-4">
        <!-- <v-tabs-slider></v-tabs-slider> -->
        <v-tab
          :style="
            currentItem == idx
              ? 'color: white; background-color: #1976D2; border-top-left-radius: 10px; border-top-right-radius: 10px;'
              : ''
          "
          v-for="(item, idx) in tabs"
          :key="idx"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-card class="pa-4 mb-4">
        <div class="text-h6 font-weight-bold mb-4">About</div>
        <p class="text-body-2">
          I'm more experienced in eCommerce web projects and mobile banking
          apps, but also like to work with creative projects, such as landing
          pages or unusual corporate websites.
        </p>
        <small class="blue--text text--darken-2 font-weight-bold text-uppercase"
          >See more</small
        >
      </v-card>
      <v-card class="pa-4 mb-4">
        <div class="d-flex align-center mb-4">
          <div class="text-h6 font-weight-bold mr-4">Projects</div>
          <div>3 of 12</div>
        </div>
        <project-list :lists="imgSet"></project-list>
        <small class="blue--text text--darken-2 font-weight-bold text-uppercase"
          >Show all (12)</small
        >
      </v-card>
      <v-card>
        <div class="text-h6 font-weight-bold mb-4">Skills & Endoresments</div>
        <v-row justify="center" align="center">
          <v-col
            cols="12"
            sm="4"
            md="4"
            v-for="(item, idx) in skillLists"
            :key="idx"
          >
            <v-list-item style="border: 1px solid red; border-radius: 5px">
              <v-list-item-content>
                <div class="d-flex">
                  <div class="font-weight-medium">{{ item.title }}</div>
                  <v-spacer></v-spacer>
                  <div class="blue--text text--darken-2v font-weight-medium">
                    {{ item.num }}
                  </div>
                </div>
                a
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <small class="blue--text text--darken-2 font-weight-bold text-uppercase"
          >Show all (17)</small
        >
      </v-card>
    </v-col>
    <v-col cols="12" sm="4" md="4">
      <v-card class="pa-4">
        <div class="text-subtitle-1 text-center font-weight-bold mb-4">
          You may like these courses
        </div>
        <project-list
          :lists="courseSet"
          :isVideo="true"
          :isVertical="true"
        ></project-list>
        <small class="blue--text text--darken-2 font-weight-bold text-uppercase"
          >See all recommendations</small
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ProjectList from "@/components/lists/ProjectList";
export default {
  name: "IndexPage",
  components: {
    ProjectList,
  },
  data() {
    return {
      currentItem: "",
      tabs: ["Profile", "Activity & interests", "Articles (3)"],
      imgSet: [
        {
          imgUrl: "../../assets/images/office.jpg",
          title: "Zara redesign concept",
          caption: "UX/UI design, 15.07.2019",
        },
        {
          imgUrl: "../../assets/images/office.jpg",
          title: "SCTHON event brand",
          caption: "Graphic design, 03.31.2019",
        },
        {
          imgUrl: "../../assets/images/office.jpg",
          title: "Drozd. Brand identity. 2016",
          caption: "Graphic design, 03.04.2016",
        },
      ],
      courseSet: [
        {
          title: "UX Foundations",
          caption: "27959 viewers",
        },
        {
          title: "Designing with Adobe XD and pro",
          caption: "9122 viewers",
        },
        {
          title: "UX Foundations:Styles and GUIs",
          caption: "13858 viewers",
        },
      ],
      skillLists: [
        {
          title: "User experience (UX)",
          num: 6,
        },
        {
          title: "User interface (UI)",
          num: 7,
        },
        {
          title: "Brand identity",
          num: 5,
        },
      ],
    };
  },
  mounted() {},
};
</script>
