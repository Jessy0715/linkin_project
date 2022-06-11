<template>
  <v-row justify="center" align="start">
    <v-col cols="12" sm="8" md="8">
      <msg-card v-for="(item, idx) in slotArray" :key="idx">
        <small slot="state" v-html="item.state"></small>
        <v-img
          slot="avatar"
          src="https://randomuser.me/api/portraits/med/women/3.jpg"
        ></v-img>
        <template slot="name">{{ item.name }}</template>
        <template slot="jobTitle">{{ item.jobTitle }}</template>
        <p class="text-body-1">
          {{ item.context }}
        </p>
        <v-img
          v-if="idx == 1"
          :src="require('../assets/images/office.jpg')"
          max-height="250"
          class="mb-4"
        ></v-img>
        <public-list v-if="idx == 2" :list="feedLists" :isFeedPage="true"></public-list>
        <!-- <v-btn
          color="primary"
          text
          class="font-weight-bold text-uppercase mb-4 px-0"
          @click="showText"
        >
          Read more</v-btn
        > -->
        <span slot="facebookNum">{{ item.facebookNum }}</span>
        <span slot="msgNum">{{ item.msgNum }}</span>
      </msg-card>
      <post-card class="mb-4"></post-card>
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

      <!-- High rated post from your feed -->
      <div class="mb-4" color="#e8f1f8">
        <public-list :list="feedLists" :isFeedPage="true"></public-list>
      </div>

      <!-- job -->
      <div class="mb-4">
        <public-list :list="jobLists" :isJobPage="true"></public-list>
      </div>
      <!-- network -->
      <div class="mb-4">
        <public-list :list="networkLists" :isNetworkPage="true"></public-list>
      </div>
      <div class="mb-4">
        <chat-list></chat-list>
      </div>
    </v-col>
    <v-col cols="12" sm="4" md="4">
      <sm-list :list="searchList" :isSearchPage="true"></sm-list>
      <sm-list :list="visitorList"></sm-list>
      <sm-list :list="groupList" :isGroupPage="true"></sm-list>
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
      <v-card class="mb-4">
        <score-list :list="scoreLists"></score-list>
      </v-card>
      <v-card class="mb-4">
        <tag-list></tag-list>
      </v-card>
      <v-card class="mb-4">
        <btn-show></btn-show>
      </v-card>
      <side-list class="mb-4" :list="sideLists"></side-list>
      <avatar-card class="mb-4"></avatar-card>
      <side-list class="mb-4" :list="sideLists2" :isNote="true"></side-list>
    </v-col>
  </v-row>
</template>

<script>
import ProjectList from "@/components/lists/ProjectList";
import PublicList from "@/components/lists/PublicList";
import ImgGroup from "@/components/ImgGroup";
import ScoreList from "@/components/lists/ScoreList";
import TagList from "@/components/lists/TagList";
import BtnShow from "@/components/BtnShow";
import SideList from "@/components/lists/SideList";
import AvatarCard from "@/components/AvatarCard";
import ChatList from "@/components/lists/ChatList";
import PostCard from "@/components/cards/PostCard";
import SmList from "@/components/lists/SmList";
import MsgCard from "@/components/cards/MsgCard";
export default {
  name: "IndexPage",
  components: {
    ProjectList,
    ImgGroup,
    PublicList,
    ScoreList,
    TagList,
    BtnShow,
    SideList,
    AvatarCard,
    ChatList,
    PostCard,
    SmList,
    MsgCard,
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
      feedLists: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "",
          workRange: "",
          workRangeNote: "",
          workDate: "PDF file, 324 kb",
          workDuring: "",
          title: "iOS 11 guidelines for UX/UI designers",
          intro: "",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "",
          workRange: "",
          workRangeNote: "",
          workDate: "PDF file, 245 kb",
          workDuring: "",
          title: "iOS 11 guidelines for developers",
          intro: "",
        },
      ],
      jobLists: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "",
          workRange: "Upwork",
          workRangeNote: "Remote only",
          workDate: "",
          workDuring: "",
          title: "UX/UI designer",
          intro:
            "On Upwork you'll find a range of top freelancers and agencies, from developers and development agencies to designers and creative agencies, copywriters",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "",
          workRange: "Facebook",
          workRangeNote: "CA, USA",
          workDate: "",
          workDuring: "",
          title: "Product designer",
          intro:
            "Founded in 2004, Facebook's mission is to give people the power to build community and bring the world closer together. People use our products to stay.",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "",
          workRange: "Google",
          workRangeNote: "International",
          workDate: "",
          workDuring: "",
          title: "Part-time UX designer",
          intro:
            "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking.",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "",
          workRange: "LinkedIn",
          workRangeNote: "CA, USA",
          workDate: "",
          workDuring: "",
          title: "Web designer",
          intro:
            "LinkedIn, the world's largest professional network. The mission of LinkedIn is simple: connect the world's professional.",
        },
      ],
      networkLists: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "623 connections",
          workRange: "Senior UX designer",
          workRangeNote: "",
          workDate: "",
          workDuring: "",
          title: "Brandon Wilson",
          intro: "",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          connections: "481 connections",
          workRange: "iOS developer",
          workRangeNote: "",
          workDate: "",
          workDuring: "",
          title: "Theresa Steward",
          intro: "",
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
      sideLists: [
        { text: "Connections", num: 1038, icon: "mdi-clock", circle: false },
        { text: "Invitations", num: 2, icon: "mdi-account", circle: true },
        { text: "Teammates", num: 10, icon: "mdi-flag", circle: false },
        { text: "groups", num: 6, icon: "mdi-clock", circle: false },
        { text: "pages", num: 28, icon: "mdi-account", circle: false },
        { text: "hashtags", num: 8, icon: "mdi-flag", circle: false },
      ],
      sideLists2: [
        { text: "Notifications", num: null, icon: "", circle: false },
        { text: "Notification settings", num: null, icon: "", circle: false },
      ],
      visitorList: [
        {
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
          name: "Darlene Black",
          jobTitle: "HR-manager, 10 000 connection",
          date: "26 aug, monday",
          icon: "",
          isRing: false,
        },
        {
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
          name: "Theresa Steward",
          jobTitle: "iOS developer",
          date: "Yesterday, 12:03",
          icon: "",
          isRing: false,
        },
        {
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
          name: "Brandon Wilson",
          jobTitle: "Senior UX designer",
          date: "25 aug, sunday",
          icon: "",
          isRing: false,
        },
        {
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
          name: "Kyle Fisher",
          jobTitle: "Product designer",
          date: "26 aug, monday",
          icon: "",
          isRing: false,
        },
      ],
      groupList: [
        {
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
          name: "<strong>Moscow State <br> Linguistical <br> University</strong>",
          jobTitle: "",
          date: "",
          icon: "",
          isRing: false,
        },
        {
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
          name: "<strong>Digital freelancers <br> group</strong>",
          jobTitle: "",
          date: "",
          icon: "",
          isRing: false,
        },
        {
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
          name: "<strong>Interaction<br> design<br> association</strong>",
          jobTitle: "",
          date: "",
          icon: "",
          isRing: false,
        },
      ],
      searchList: [
        {
          src: "",
          name: "UX/UI designer <span class='green--text text--accent-4'>+240</span>",
          jobTitle: "Remote",
          date: "",
          icon: "mdi-bell-off",
          isRing: true,
        },
        {
          src: "",
          name: "Web designer",
          jobTitle: "Los-Angeles, CA",
          date: "",
          icon: "mdi-bell-outline",
          isRing: true,
        },
        {
          src: "",
          name: "Graphic designer",
          jobTitle: "Malaysia, Kuala Lumpur",
          date: "",
          icon: "mdi-bell-outline",
          isRing: true,
        },
      ],
      slotArray: [
        {
          state:
            "<span class='blue--text text--darken-2'>Ted Bell</span>,<span class='blue--text text--darken-2'>    Annette Nguyen</span>, and <span class='blue--text text--darken-2'>Cody Hawkins </span>liked this",
          avatar: "",
          name: "Theresa Steward",
          jobTitle: "iOS developer",
          context:
            "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).",
          facebookNum: 42,
          msgNum: 5,
        },
        {
          state:
            "<span class='blue--text text--darken-2'>Audrey Alexander</span> comment this",
          avatar: "",
          name: "Kyle Fisher",
          jobTitle: "Product designer at Commandor Corp.",
          context: "How’s your day going, guys?",
          facebookNum: 12,
          msgNum: 3,
        },
        {
          state: "High rated post from your feed",
          avatar: "",
          name: "Brandon Wilson",
          jobTitle: "Senior UX designer",
          context: "There is some new guidelines for iOS",
          facebookNum: 89,
          msgNum: 7,
        },
        {
          state:
            "First post from <span class='blue--text text--darken-2'>Audrey Alexander</span>",
          avatar: "",
          name: "Audrey Alexander",
          jobTitle: "Team lead at Google",
          context:
            "The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.",
          facebookNum: 10,
          msgNum: 0,
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
