<template>
  <v-row justify="center" align="start" class="my-6">
    <v-col cols="12" sm="4" md="4">
      <side-list class="mb-4" :list="sideLists"></side-list>
    </v-col>
    <v-col cols="12" sm="8" md="8">
      <v-tabs fixed-tabs v-model="currentTab" class="mb-4">
        <v-tab
          :style="
            currentTab == idx
              ? 'color: white; background-color: #1976D2; border-top-left-radius: 5px; border-top-right-radius: 5px;'
              : ''
          "
          v-for="(item, idx) in tabs"
          :key="idx"
        >
          {{ item }}
        </v-tab>
      </v-tabs>
      <divider>
        <template slot="txt">YOU HAVE</template>
        <span class="blue--text text--darken-2" slot="txt2">
          2 NEW CONNECTIONS</span
        >
      </divider>
      <div class="mb-4">
        <public-list :list="networkLists" :isNetworkPage="true"></public-list>
      </div>
      <divider>
        <template slot="txt">recent connections</template>
        <span class="blue--text text--darken-2" slot="txt2"></span>
      </divider>
      <v-row justify="start" align="center">
        <v-col cols="12" sm="6" md="6">
          <sm-list :list="visitorList"></sm-list>
        </v-col>
        <v-col cols="12" sm="6" md="6" :style="$vuetify.breakpoint.lg ?'':'margin-top: -32px'">
          <sm-list :list="visitorList2"></sm-list>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import SideList from "@/components/lists/SideList";
import PublicList from "@/components/lists/PublicList";
import SmList from "@/components/lists/SmList";
import Divider from "@/components/Divider";
export default {
  name: "network",
  components: {
    SideList,
    Divider,
    PublicList,
    SmList,
  },
  data() {
    return {
      sideLists: [
        { text: "Connections", num: 1038, icon: "mdi-clock", circle: false },
        { text: "Invitations", num: 2, icon: "mdi-account", circle: true },
        { text: "Teammates", num: 10, icon: "mdi-flag", circle: false },
        { text: "groups", num: 6, icon: "mdi-clock", circle: false },
        { text: "pages", num: 28, icon: "mdi-account", circle: false },
        { text: "hashtags", num: 8, icon: "mdi-flag", circle: false },
      ],
      currentTab: "",
      tabs: ["Received", "sent"],
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
      ],
      visitorList2: [
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
      ]
    };
  },
};
</script>
<style lang="scss" scoped>
</style>