<template>
  <v-avatar :color="!avatar.src ? getColour(avatar.alt) : null" size="36px">
    <img v-if="avatar.src" :src="avatar.src" :alt="avatar.alt" />
    <span v-else class="white--text">
      {{ getInitials(avatar.alt) }}
    </span>
  </v-avatar>
</template>
<script>
export default {
  name: "ImgGroup",
  props: {
    avatar: {
      default: () => {},
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    getColour(name) {
      var hash = 0;
      if (name.length === 0) return hash;
      for (var i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
      }
      var color = "#";
      for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 255;
        color += ("00" + value.toString(16)).substr(-2);
      }
      return color;
    },
    getInitials(name) {
      const parts = name.split(" ");
      let initials = "";
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].length > 0 && parts[i] !== "") {
          initials += parts[i][0];
        }
      }
      return initials;
    },
  },
};
</script>
<style lang="scss" scoped>

</style>