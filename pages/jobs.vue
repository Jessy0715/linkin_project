<template>
  <v-row justify="center" align="start" class="my-6">
    <v-col cols="12" sm="8" md="8">
      <post-card class="mb-6" :isJobPage="true">
        <v-card-title class="text-uppercase" slot="title"
          >Your dream job is here</v-card-title
        >
        <v-card-text class="text-body-2" style="color: #bdbdbd" slot="text">
          <span style="letter-spacing: 0.15em"> Search jobs </span>
        </v-card-text>
      </post-card>
      <divider>
        <template slot="txt">jobs for you</template>
        <span class="blue--text text--darken-2" slot="txt2"> </span>
      </divider>
      <div class="mb-4">
        <public-list :list="jobLists" :isJobPage="true"></public-list>
      </div>
      <divider>
        <template slot="txt">new jobs</template>
        <span class="blue--text text--darken-2" slot="txt2"> </span>
      </divider>
      <div class="mb-4">
        <public-list :list="jobLists2" :isJobPage="true"></public-list>
      </div>
    </v-col>
    <v-col cols="12" sm="4" md="4">
      <v-card class="mb-6">
        <btn-show>
          <template slot="txt">post a job</template>
        </btn-show>
      </v-card>
      <v-card class="py-4 px-6 mb-6" color="#fcfefd">
        <div
          class="d-flex justify-space-between align-center text-uppercase my-2"
        >
          <div class="font-weight-medium">my searches</div>
          <div class="font-weight-medium blue--text text--darken-2" style="cursor: pointer">
            Edit list
          </div>
        </div>
        <v-divider class="my-4"></v-divider>
        <sm-list :list="searchList" :isSearchPage="true"></sm-list>
      </v-card>
      <v-card class="pa-4 mb-4">
        <div
          class="text-subtitle-1 text-left font-weight-bold text-uppercase mb-4"
        >
          Tracked jobs
        </div>
        <sm-list :list="trackedLists"></sm-list>
      </v-card>
      <v-card class="pa-4 mb-4">
        <div
          class="text-subtitle-1 text-left font-weight-bold text-uppercase mb-4"
        >
          Articles for you
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
import Divider from "@/components/Divider";
import PublicList from "@/components/lists/PublicList";
import SmList from "@/components/lists/SmList";
import ProjectList from "@/components/lists/ProjectList";
import BtnShow from "@/components/BtnShow";
export default {
  name: "jobs",
  components: {
    PostCard,
    Divider,
    PublicList,
    BtnShow,
    SmList,
    ProjectList,
  },
  data() {
    return {
      jobLists: [
        {
          avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
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
          avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
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
          avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
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
          avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
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
      jobLists2: [
        {
          avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
          connections: "",
          workRange: "Instagram",
          workRangeNote: "CA, USA",
          workDate: "",
          workDuring: "",
          title: "UI designer",
          intro:
            "Instagram is a photo and video-sharing social networking service owned by Facebook, Inc. ",
        },
        {
          avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
          connections: "",
          workRange: "Periscope",
          workRangeNote: "Remote only",
          workDate: "",
          workDuring: "",
          title: "Product designer",
          intro:
            "eriscope is a live video streaming app for Android and iOS developed by Kayvon Beykpour and Joe Bernstein and acquired by Twitter before launch in 2015.",
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
      courseSet: [
        {
          title: "The Guide For a Job",
          caption: "27959 viewers",
        },
        {
          title: "Your dream job and how you can g",
          caption: "9122 viewers",
        },
        {
          title: "Now you know it. 15 steps to find job",
          caption: "13858 viewers",
        },
      ],
      trackedLists: [
        {
          src: "https://xsgames.co/randomusers/avatar.php?g=female",
          name: "UX/UI Designer",
          jobTitle: "Upwork",
          date: "",
          icon: "",
          isRing: false,
        },
        {
          src: "https://xsgames.co/randomusers/avatar.php?g=male",
          name: "Product designer",
          jobTitle: "Facebook",
          date: "",
          icon: "",
          isRing: false,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>