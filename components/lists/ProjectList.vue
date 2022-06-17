<template>
  <v-row justify="start" align="start" class="mb-2">
    <v-col cols="12" :sm="isVertical? '12':'4'" :md="isVertical? '12':'4'" v-for="(item, idx) in lists" :key="idx">
      <v-card style="box-shadow: none" :class="{'d-flex': isVertical }">
        <v-img :src="item.img" :max-width="isVertical? '150': null">
          <v-btn color="primary" x-small class="play-btn" v-if="isVideo" width="25" height="25">
            <v-icon size="20"> mdi mdi-play </v-icon>
          </v-btn>
        </v-img>
        <div class="pa-2">
          <div class="text-subtitle-1 font-weight-bold">
            {{ item.title }}
          </div>
          <div class="text-caption">{{ item.caption }}</div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "ProjectList",
  props: {
    isVideo: {
      type: Boolean,
      default: false
    },
    lists: {
      type: Array,
    },
    isVertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss" scoped>
.play-btn {
  position: absolute;
  top: 40%;
  left: 40%;
}
</style>