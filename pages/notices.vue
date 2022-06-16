<template>
  <v-row justify="center" align="start" class="my-6">
    <v-col cols="12" sm="4" md="4">
      <side-list class="mb-4" :list="sideLists2" :isNote="true"></side-list>
      <v-card class="mb-4">
        <score-list :list="scoreLists"></score-list>
      </v-card>
    </v-col>
    <v-col cols="12" sm="8" md="8">
      <divider>
        <template slot="txt">recent</template>
        <span class="blue--text text--darken-2" slot="txt2"> </span>
      </divider>
      <div class="mb-6">
        <chat-list :list="chatLists"></chat-list>
      </div>
      <divider>
        <template slot="txt">earlier</template>
        <span class="blue--text text--darken-2" slot="txt2"> </span>
      </divider>
      <div class="mb-6">
        <chat-list :list="chatLists2"></chat-list>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import SideList from "@/components/lists/SideList";
import ScoreList from "@/components/lists/ScoreList";
import ChatList from "@/components/lists/ChatList";
import Divider from "@/components/Divider";
export default {
  name: "notices",
  components: {
    SideList,
    ScoreList,
    Divider,
    ChatList,
  },
  data() {
    return {
      sideLists2: [
        { text: "Notifications", num: null, icon: "", circle: false },
        { text: "Notification settings", num: null, icon: "", circle: false },
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
      chatLists: [
        {
          title: "You appeared in 9 searches this week",
          time: "3 hours",
        },
        {
          title: "Audrey Alexander and 10 others viewed your profile",
          time: "9 hours",
        },
        {
          title:
            "Eduardo Russel and 4 others liked your post 1,000 connections! My network growth, so many",
          time: "12 hours",
        },
      ],
      chatLists2: [
        {
          title: "We found jobs that you may be interested",
          time: "2 day ago",
        },
        {
          title:
            "Kyle Fisher and 17 others viewed your profile",
          time: "9 hours",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>