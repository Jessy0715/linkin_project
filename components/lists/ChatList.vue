<template>
  <v-list>
    <template v-for="(item, idx) in list">
      <v-list-item :key="idx" style="border-radius: 5px;margin-bottom: 16px;">
        <section class="avatars-group py-3 stacked">
          <div
            v-for="avatar in avatarsStackedLimited"
            :key="`avatar-id-${avatar.id}`"
            class="avatars-group__item"
          >
            <img-group :avatar="avatar"></img-group>
          </div>
        </section>
        <v-list-item-content>
          <v-list-item-title>
            <span class="text-body-2">
              {{ item.title }}
            </span>
          </v-list-item-title>
          <v-list-item-subtitle>{{ item.time }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon size="28">mdi-dots-horizontal</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </template>
  </v-list>
</template>
<script>
import ImgGroup from "@/components/ImgGroup";
export default {
  name: "ChatList",
  components: {
    ImgGroup,
  },
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {
      stackedLimit: 3,
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
};
</script>
<style lang="scss" scoped>
.avatars-group.stacked {
  display: flex;
  flex-direction: row;
  direction: ltr;
  width: 12%;
  max-width: 100%;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.avatars-group.stacked > * {
  margin-right: -15px;
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