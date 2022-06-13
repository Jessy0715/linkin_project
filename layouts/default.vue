<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-app-bar class="white">
      <v-icon class="ml-2 mr-6" x-large color="blue darken-2"
        >mdi-linkedin</v-icon
      >
      <v-divider vertical></v-divider>
      <div
        v-for="(item, idx) in navbarIcons"
        :key="idx"
        class="d-flex flex-wrap flex-column align-center mx-8"
      >
        <v-badge
          :content="item.message"
          :value="item.message"
          color="orange lighten-2"
          overlap
        >
          <v-icon color="black" size="20px">{{ item.icon }}</v-icon>
        </v-badge>
        <small>{{ item.title }}</small>
      </div>
      <v-divider vertical></v-divider>
      <div style="height: 100%; flex-grow: 1" class="pa-2">
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
      </div>
      <v-divider vertical></v-divider>
      <v-avatar style="flex-shrink: 2" min-width="36" right class="mx-4">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <div style="flex-grow: 1">
        <div>D. Kargaev &nbsp; <span class="grey--text">YOU</span></div>
        <div>
          <span class="grey--text"> 367 views today</span>
          <span class="green--text text--accent-4">+32</span>
          <v-icon small color="green accent-4">mdi-arrow-top-right</v-icon>
        </div>
      </div>
      <v-divider vertical></v-divider>
      <div style="flex-grow: 1">
        <div
          class="d-flex flex-wrap flex-column align-center"
          style="cursor: pointer"
          @click.stop="rightDrawer = !rightDrawer"
        >
          <v-icon>mdi-dots-horizontal</v-icon>
          <small>OTHER</small>
        </div>
      </div>
      <v-divider vertical></v-divider>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <drawer :rightDrawer="rightDrawer" @check="checkDrawer"></drawer>
    <v-footer
      :absolute="!fixed"
      app
      class="justify-space-around align-start pa-4"
    >
      <div>
        <v-icon class="ml-2 mr-6" x-large color="blue darken-2"
          >mdi-linkedin
        </v-icon>
        <div class="font-weight-bold">
          Linked<span class="blue--text">In</span>
        </div>
      </div>
      <div>
        <div class="text-subtitle-2 mb-4">Navigation</div>
        <div class="d-flex">
          <ul v-for="(item, idx) in footerList" :key="idx">
            <li
              v-for="(ele, id) in item.content"
              :key="id"
              class="text-body-2 grey--text text--darken-1 mb-2"
            >
              {{ ele.name }}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="text-subtitle-2 mb-4">Fast access</div>
        <div class="d-flex flex-column">
          <v-btn color="blue darken-2" class="mb-3">
            <span class="white--text">QUESTIONS?</span>
            <v-icon right color="white">mdi-comment-question-outline </v-icon>
          </v-btn>
          <v-btn outlined color="blue darken-2">
            SETTINGS?&nbsp;
            <v-icon right color="dark">mdi-comment-question-outline</v-icon>
          </v-btn>
        </div>
      </div>
      <div>
        <div class="text-subtitle-2 mb-4">Language</div>
        <v-select
          solo
          :items="languageItems"
          label=""
          dense
          v-model="language"
        ></v-select>
      </div>
    </v-footer>
  </v-app>
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
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      navbarIcons: [
        {
          icon: "mdi-cast",
          title: "FEED",
          message: 0,
        },
        {
          icon: "mdi-account-multiple",
          title: "NETWORK",
          message: 0,
        },
        {
          icon: "mdi-qqchat",
          title: "JOBS",
          message: 0,
        },
        {
          icon: "mdi-sd",
          title: "CHAT",
          message: 1,
        },
        {
          icon: "mdi-star-outline",
          title: "NOTICES",
          message: 0,
        },
      ],
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      footerList: [
        {
          content: [
            {
              name: "About",
            },
            {
              name: "Careers",
            },
            {
              name: "Advertising",
            },
            {
              name: "Small Business",
            },
          ],
        },
        {
          content: [
            {
              name: "Talent Solutions",
            },
            {
              name: "Marketing Solutions",
            },
            {
              name: "Sales Solutions",
            },
            {
              name: "Safety Center",
            },
          ],
        },
        {
          content: [
            {
              name: "Community Guidelines",
            },
            {
              name: "Privacy & Terms",
            },
            {
              name: "Mobile App",
            },
          ],
        },
      ],
      language: "ENGLISH",
      languageItems: ["ENGLISH", "CHINESE"],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
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
    checkDrawer() {
      this.rightDrawer = false
      console.log('3', this.rightDrawer);
    }
  },
  mounted() {
    console.log('1',this.rightDrawer);
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
}
.v-list {
  padding: 0 16px !important;
}
::v-deep .v-list .v-list-item {
  border: 1px solid #eee !important;
  width: 95% !important;
  margin: 0 auto 16px auto !important;
}
</style>
