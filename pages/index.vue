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
      <v-tabs fixed-tabs v-model="currentTab" class="mb-4">
        <v-tab
          :style="
            currentTab == idx
              ? 'color: white; background-color: #1976D2; border-top-left-radius: 8px; border-top-right-radius: 8px;'
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
      <v-card class="pa-4 mb-4">
        <div class="text-h6 font-weight-bold mb-4">Skills & Endoresments</div>
        <v-row justify="center" align="center" class="mb-2">
          <v-col
            cols="12"
            sm="4"
            md="4"
            v-for="(item, idx) in skillLists"
            :key="idx"
          >
            <v-list-item style="border: 1px solid #eee; border-radius: 5px">
              <v-list-item-content>
                <div class="d-flex">
                  <div class="font-weight-medium">{{ item.title }}</div>
                  <v-spacer></v-spacer>
                  <div class="blue--text text--darken-2 font-weight-medium">
                    {{ item.num }}
                  </div>
                </div>
                <section class="avatars-group pa-3 stacked">
                  <div
                    v-for="avatar in avatarsStackedLimited"
                    :key="`avatar-id-${avatar.id}`"
                    class="avatars-group__item"
                  >
                    <img-group :avatar="avatar"></img-group>
                  </div>
                  <div class="avatars-group__item more">
                    <v-avatar color="primary" size="36px">
                      <span class="white--text">+ {{ item.moreNum }}</span>
                    </v-avatar>
                  </div>
                </section>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <small class="blue--text text--darken-2 font-weight-bold text-uppercase"
          >Show all (17)</small
        >
      </v-card>
      <v-card class="pa-4 mb-4">
        <div class="text-h6 font-weight-bold mb-4">Experience</div>
        <public-list :list="experienceLists"></public-list>
      </v-card>
      <v-card class="pa-4 mb-4">
        <div class="text-h6 font-weight-bold mb-4">Education</div>
        <public-list :list="educationLists"></public-list>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4" md="4">
      <v-card class="mb-4">
        <score-list :list="scoreLists"></score-list>
      </v-card>
      <v-card class="py-4 px-6 mb-6" style="background: #fcfefd">
        <div
          class="d-flex justify-space-between align-center text-uppercase my-2"
        >
          <div class="font-weight-medium">visitors</div>
          <div class="font-weight-medium blue--text text--darken-2">
            view all
          </div>
        </div>
        <v-divider class="my-4"></v-divider>
        <sm-list :list="trackedLists"></sm-list>
      </v-card>
      <v-card class="pa-4 mb-4">
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
const srcs = {
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
};
import ProjectList from "@/components/lists/ProjectList";
import PublicList from "@/components/lists/PublicList";
import ImgGroup from "@/components/ImgGroup";
import ScoreList from "@/components/lists/ScoreList";
import SmList from "@/components/lists/SmList";
export default {
  name: "IndexPage",
  components: {
    ProjectList,
    ImgGroup,
    PublicList,
    ScoreList,
    SmList,
  },
  data() {
    return {
      currentTab: "",
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
          moreNum: 2,
        },
        {
          title: "User interface (UI)",
          num: 7,
          moreNum: 3,
        },
        {
          title: "Brand identity",
          num: 5,
          moreNum: 1,
        },
      ],
      avatars: [
        {
          alt: "John Smitt",
          id: 1,
          presence: "Online",
          role: "Frontend Engineer",
          src: null,
        },
        {
          alt: "Joanne Swizzlette",
          id: 2,
          presence: "Away",
          role: "Automation Engineer",
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
        },
        {
          alt: "Frankie Dowle",
          id: 4,
          presence: "Online",
          role: "Platform Architect",
          src: "https://randomuser.me/api/portraits/med/men/8.jpg",
        },
        {
          alt: "Annette Walker",
          id: 5,
          presence: "Online",
          role: "Head of UX",
          src: "https://randomuser.me/api/portraits/med/women/5.jpg",
        },
        {
          alt: "Danny Quaide",
          id: 6,
          presence: "Offline",
          role: "UI Designer",
          src: "https://randomuser.me/api/portraits/med/men/10.jpg",
        },
        {
          alt: "Paisley Arch",
          id: 7,
          presence: "Holiday",
          role: "Automation Engineer",
          src: "https://randomuser.me/api/portraits/med/women/7.jpg",
        },
        {
          alt: "Kenneth Boomstang",
          id: 8,
          presence: "Online",
          role: "Frontend Engineer",
          src: "https://randomuser.me/api/portraits/med/men/1.jpg",
        },
        {
          alt: "Donna Avery",
          id: 9,
          presence: "Online",
          role: "UX Researcher",
          src: "https://randomuser.me/api/portraits/med/women/2.jpg",
        },
        {
          alt: "Phillip Hargreaves",
          id: 10,
          presence: "Online",
          role: "Head of Quality",
          src: "https://randomuser.me/api/portraits/med/men/11.jpg",
        },
        {
          alt: "Melissa Tushoos",
          id: 11,
          presence: "Online",
          role: "Head of Platform Engineering",
          src: "https://randomuser.me/api/portraits/med/women/4.jpg",
        },
        {
          alt: "Justin Backbeard",
          id: 12,
          presence: "Busy",
          role: "Frontend Engineer",
          src: "https://randomuser.me/api/portraits/med/men/13.jpg",
        },
        {
          alt: "Amy Fullerton",
          id: 13,
          presence: "Busy",
          role: "UI Designer",
          src: "https://randomuser.me/api/portraits/med/women/6.jpg",
        },
        {
          alt: "Angus Dougherty",
          id: 14,
          presence: "Online",
          role: "Backend Engineer",
          src: null,
        },
        {
          alt: "Jess Cransley",
          id: 15,
          presence: "Online",
          role: "UX Advocate",
          src: "https://randomuser.me/api/portraits/med/women/8.jpg",
        },
        {
          alt: "Barry Morgan",
          id: 16,
          presence: "Away",
          role: "Frontend Architect",
          src: "https://randomuser.me/api/portraits/med/men/17.jpg",
        },
        {
          alt: "Warren Deekead",
          id: 17,
          presence: "Online",
          role: "Backend Engineer",
          src: "https://randomuser.me/api/portraits/med/men/19.jpg",
        },
        {
          alt: "Melissa Warmslent",
          id: 18,
          presence: "Holiday",
          role: "DevOps Engineer",
          src: "https://randomuser.me/api/portraits/med/women/12.jpg",
        },
      ],
      stackedLimit: 4,
      experienceLists: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "",
          workRange: "Self Employed",
          workRangeNote: "Around the world",
          workDate: "Jun 2016 — Present",
          workDuring: "3 yrs 3 mos",
          title: "Freelance UX/UI designer",
          intro:
            "Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.",
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          connections: "",
          workRange: "Upwork",
          workRangeNote: "International",
          workDate: "Jun 2019 — Present",
          workDuring: "3 mos",
          title: "UX/UI designer",
          intro:
            "New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.",
        },
        { divider: true, inset: true },
      ],
      educationLists: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "",
          workRange:
            "Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance",
          workRangeNote: "",
          workDate: "2013 — 2017",
          workDuring: "",
          title: "Moscow State Linguistic University",
          intro: "Additional English classes and UX profile courses​.",
        },
      ],
      scoreLists: [
        {
          score: 367,
          text: "views today",
        },
        {
          score: 15,
          text: "posts views",
        },
        {
          score: 9,
          text: "search appearances",
        },
      ],
      sideLists2: [
        { text: "Notifications", num: null, icon: "", circle: false },
        { text: "Notification settings", num: null, icon: "", circle: false },
      ],
      trackedLists: [
        {
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
          name: "UX/UI Designer",
          jobTitle: "Upwork",
          date: "",
          icon: "",
          isRing: false,
        },
        {
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
          name: "Product designer",
          jobTitle: "Facebook",
          date: "",
          icon: "",
          isRing: false,
        },
      ],
    };
  },
  computed: {
    avatarsSorted() {
      return this.avatars && this.avatars.length > 0
        ? this.avatars.sort((a, b) => a.alt.localeCompare(b.alt))
        : null;
    },
    avatarsStackedLimited() {
      return this.avatarsSorted && this.avatarsSorted.length > 0
        ? this.avatarsSorted.slice(0, this.stackedLimit)
        : null;
    },
  },
  methods: {
    showText() {
      console.log("text");
    },
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.avatars-group.stacked {
  display: flex;
  flex-direction: row;
  direction: ltr;
  max-width: 100%;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.avatars-group.stacked > * {
  margin-right: -8px;
}
.avatars-group__item {
  cursor: default;
  transition: all 0.1s ease-out;
}
.avatars-group__item.more {
  align-items: center;
  display: flex;
}
</style>
