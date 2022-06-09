<template>
  <v-card class="mx-auto">
    <v-list flat>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :style="selectedItem? 'border-left: 5px solid #1976D2;':''">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content >
            <div class="text-right pr-4">
              {{ item.num }}
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "Connections", num: 1038, icon: "mdi-clock" },
        { text: "Invitations", num: 2, icon: "mdi-account" },
        { text: "Teammates", num: 10, icon: "mdi-flag" },
        { text: "groups", num: 6, icon: "mdi-clock" },
        { text: "pages", num: 28, icon: "mdi-account" },
        { text: "hashtags", num: 8, icon: "mdi-flag" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
</style>