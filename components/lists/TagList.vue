<template>
  <div class="pa-4">
    <div class="font-weight-bold text-uppercase text-subtitle-1 mb-4">
      Followed hashtags
    </div>
    <v-divider class="mb-6"></v-divider>
    <div class="d-flex flex-wrap">
      <v-btn v-for="(item, idx) in tagList" :key="idx" class="mr-5 mb-5" color="#e8f1f8"> 
        <span class="fz-sml font-weight-medium">{{ item.name }} </span>
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "TagList",
  data() {
    return {
      tagList: [
        {
          name: "#work",
        },
        {
          name: "#business",
        },
        {
          name: "#hr",
        },
        {
          name: "#userInterface",
        },
        {
          name: "#digital",
        },
        {
          name: "#userExperience",
        },
        {
          name: "#ux",
        },
        {
          name: "#ui",
        },
        {
          name: "#freelance",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>

</style>