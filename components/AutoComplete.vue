<template>
  <!-- <v-app dark> -->
    <v-autocomplete
      v-model="friends"
      :items="people"
      color="blue darken-2"
      item-text="name"
      item-value="name"
      placeholder="Search"
      append-outer-icon="mdi-magnify"
      hide-no-data
    >
      <template v-slot:selection="data">
        <!-- <v-chip
        v-bind="data.attrs"
        :input-value="data.selected"
        close
        @click="data.select"
        @click:close="remove(data.item)"
      >
        <v-avatar left>
          <v-img :src="data.item.avatar"></v-img>
        </v-avatar>
        {{ data.item.name }}
      </v-chip> -->
        {{ data.item.name }}
      </template>
      <template v-slot:item="data">
        <template v-if="typeof data.item !== 'object'">
          <v-list-item-content v-text="data.item"></v-list-item-content>
        </template>
        <template v-else>
          <v-list-item-avatar>
            <img :src="data.item.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="data.item.name"></v-list-item-title>
            <v-list-item-subtitle
              v-html="data.item.group"
            ></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon color="pink">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </template>
    </v-autocomplete>
    <!-- <v-text-field
    flat
    outlined
    height="100%"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
  >
  </v-text-field> -->
  <!-- </v-app> -->
</template>
<script>
const srcs = {
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
};

export default {
  name: "",
  data() {
    return {
      friends: "",
      people: [
        { header: "JOBS" },
        { name: "UX/UI Designer", group: "Upwork", avatar: srcs[1] },
        { name: "Part-time UX designer", group: "Google", avatar: srcs[2] },
        { header: "All jobs (84)" },
        { divider: true },
        { header: "Users" },
        {
          name: "Brandon Wilson",
          group: "Senior UX designer",
          avatar: srcs[3],
        },
        {
          name: "Kyle Fisher",
          group: "Product designer at Commandor Corp.",
          avatar: srcs[2],
        },
        { header: "All users (1,530)" },
        { divider: true },
        { header: "Articles" },
        {
          name: "A little about usability testing",
          group: "3,912 viewers",
          avatar: srcs[4],
        },
        { header: "All articles (30)" },
      ],
    };
  },
  methods: {
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped>
// 沒辦法在此範圍下有 css 效果，建議放在 default.vue，考量影響全局，暫時寫在元件模組裡
.v-list {
  padding: 0 16px !important;
}
::v-deep .v-list .v-list-item {
  border: 1px solid #eee !important;
  width: 95% !important;
  margin: 0 auto 16px auto !important;
}
</style>