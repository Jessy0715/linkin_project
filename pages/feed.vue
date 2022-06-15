<template>
  <v-row justify="center" align="start">
    <v-col cols="12" sm="8" md="8">
      <post-card class="mb-6">
        <v-card-title class="text-uppercase" slot="title"
          >new post</v-card-title
        >
        <v-card-text class="text-body-2" style="color: #bdbdbd" slot="text">
          <span style="letter-spacing: 0.15em"> What’s on your mind? </span>
        </v-card-text>
      </post-card>
      <divider>
        <template slot="txt">SORT BY:</template>
        <span class="blue--text text--darken-2" slot="txt2"> trending</span>
      </divider>
      <msg-card v-for="(item, idx) in slotArray" :key="idx" class="mb-6">
        <small slot="state" v-html="item.state"></small>
        <v-img
          slot="avatar"
          src="https://randomuser.me/api/portraits/med/women/3.jpg"
        ></v-img>
        <template slot="name">{{ item.name }}</template>
        <template slot="jobTitle">{{ item.jobTitle }}</template>
        <p class="text-body-2">
          {{ item.context }}
        </p>
        <v-img
          v-if="idx == 1"
          :src="require('../assets/images/office.jpg')"
          max-height="250"
          class="mb-4"
        ></v-img>
        <public-list
          v-if="idx == 2"
          :list="feedLists"
          :isFeedPage="true"
        ></public-list>
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
    </v-col>
    <v-col cols="12" sm="4" md="4">
      <avatar-card class="mb-6"></avatar-card>
      <v-card class="mb-6">
        <btn-show>
          <template slot="txt">write new article</template>
        </btn-show>
      </v-card>
      <v-card class="py-4 px-6 mb-6" color="#fcfefd">
        <div
          class="d-flex justify-space-between align-center text-uppercase my-2"
        >
          <div class="font-weight-medium">my groups</div>
          <div
            class="font-weight-medium blue--text text--darken-2"
            style="cursor: pointer"
          >
            Edit list
          </div>
        </div>
        <v-divider class="my-4"></v-divider>
        <sm-list class="mt-2" :list="groupList" :isGroupPage="true"></sm-list>
        <div
          class="text-uppercase blue--text text--darken-2 text-body-2 font-weight-medium"
          style="cursor: pointer"
        >
          Show all (8)
        </div>
      </v-card>
      <v-card class="mb-6">
        <tag-list></tag-list>
      </v-card>
      <v-card class="pa-4 mb-4">
        <div
          class="text-subtitle-1 text-left font-weight-bold text-uppercase mb-4"
        >
          Trending articles
        </div>
        <project-list
          :lists="courseSet"
          :isVideo="false"
          :isVertical="true"
        ></project-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import PostCard from "@/components/cards/PostCard";
import MsgCard from "@/components/cards/MsgCard";
import AvatarCard from "@/components/AvatarCard";
import PublicList from "@/components/lists/PublicList";
import ProjectList from "@/components/lists/ProjectList";
import BtnShow from "@/components/BtnShow";
import SmList from "@/components/lists/SmList";
import TagList from "@/components/lists/TagList";
import Divider from "@/components/Divider";
export default {
  name: "feed",
  components: {
    PostCard,
    MsgCard,
    AvatarCard,
    PublicList,
    ProjectList,
    BtnShow,
    SmList,
    TagList,
    Divider,
  },
  data() {
    return {
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
      courseSet: [
        {
          title: "How I make cool designs?",
          caption: "27959 viewers",
        },
        {
          title: "Advices for young HR-manage",
          caption: "9122 viewers",
        },
        {
          title: "A little about usability testing",
          caption: "13858 viewers",
        },
      ],
    };
  },
  methods: {
    showText() {
      console.log("text");
    },
  },
};
</script>
<style lang="scss" scoped>
</style>