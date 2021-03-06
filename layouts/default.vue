<template>
  <!-- 
    Vuetify:
    1.v-tabs 元件 class 狀態不能預先移除 => 自己建立 navbar
    2.建立 PC 與 MB版本 v-app-bar

    3.主要 icon 參考連結:
    https://pictogrammers.github.io/@mdi/font/1.1.34/
    4. git push origin 錯誤: Permission to xxx.git denied to bbb. 
    The requested URL returned error: 403
    解決 => 修改.git/config 的remote url
  -->
  <v-app dark>
    <v-navigation-drawer
      v-model="leftDrawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="d-block d-sm-none"
    >
      <div class="d-flex flex-column align-center py-4">
        <v-avatar min-width="36" right class="mb-2">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <div>
          D. Kargaev
          <v-icon small color="#d1ad68">mdi-linkedin </v-icon>
        </div>
        <div>
          <span class="grey--text"> 367 views today</span>
          <span class="green--text text--accent-4">+32</span>
          <v-icon small color="green accent-4">mdi-arrow-top-right</v-icon>
        </div>
      </div>
      <v-list>
        <v-list-item
          to="/"
          active-class="primary"
          exact-active-class="white--text"
        >
          <v-list-item-action>
            <v-icon>mdi-hexagon-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>INDEX</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in navbarIcons"
          :key="i"
          :to="item.to"
          router
          exact
          active-class="primary"
          exact-active-class="white--text"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app class="d-block d-md-none">
      <v-app-bar-nav-icon @click.stop="leftDrawer = !leftDrawer" />
      <v-btn icon @click="checkAutoComplete">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      :width="$vuetify.breakpoint.lg ? '370' : '100%'"
      temporary
      fixed
    >
      <div class="d-flex justify-space-between align-center pa-3">
        <div class="font-weight-bold">More from LinkedIn</div>
        <div
          class="
            d-flex
            flex-wrap flex-column
            align-center
            blue--text
            text--darken-2
          "
          style="cursor: pointer"
        >
          <v-icon color="blue darken-2" @click.stop="closeDrawer"
            >mdi-close</v-icon
          >
        </div>
      </div>
      <v-divider></v-divider>
      <section class="px-4">
        <v-list class="mt-2">
          <v-list-item style="border-radius: 5px" class="white--text primary">
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title> Learning with LinkedIn</v-list-item-title>
              <v-list-item-subtitle class="white--text font-weight-thin"
                >Courses, lectures, workshops
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <main
          v-for="(item, idx) in demandLists"
          :key="idx"
          class="d-flex justify-space-around align-center mb-4"
        >
          <div style="width: 46%" v-for="ele in item.child" :key="ele.title">
            <div
              class="d-flex py-2"
              style="border: 1px solid #eee; border-radius: 5px"
            >
              <v-icon color="primary" class="mr-2">{{ ele.icon }}</v-icon>
              <div class="text-uppercase font-weight-bold">{{ ele.title }}</div>
            </div>
          </div>
        </main>
      </section>
      <v-divider></v-divider>
      <section class="px-4">
        <div class="text-subtitle-1 mt-2 font-weight-bold">
          Business services
        </div>
        <v-list class="mt-2">
          <template v-for="(item, idx) in itemLits">
            <v-list-item :key="idx" style="border-radius: 5px">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">
                  {{ item.title }}</v-list-item-title
                >
                <v-list-item-subtitle class="text-body-2"
                  >{{ item.subTitle }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </section>
      <v-divider></v-divider>
      <section class="px-4">
        <v-list class="mt-2">
          <v-list-item
            style="background: #d1ad68; border-radius: 5px"
            class="white--text"
          >
            <v-list-item-content>
              <v-list-item-title> LinkedIn Premium</v-list-item-title>
              <v-list-item-subtitle class="white--text font-weight-thin"
                >Special features only for premium users
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </section>
    </v-navigation-drawer>
    <v-app-bar class="white d-none d-md-block">
      <div @click="gotoIndex" style="cursor: pointer">
        <v-icon class="ml-2 mr-6" x-large color="blue darken-2"
          >mdi-linkedin</v-icon
        >
      </div>
      <v-divider vertical></v-divider>
      <div
        class="d-flex align-center"
        v-for="(item, idx) in navbarIcons"
        :key="idx"
        style="height: 100%"
        :style="item.active ? 'border-bottom: 2px solid #1976D2' : ''"
        @click="checkTab(item)"
      >
        <div>
          <NuxtLink
            :to="item.to"
            class="d-flex flex-wrap flex-column align-center mx-8"
            style="text-decoration: none; color: #181818"
          >
            <v-badge
              :content="item.message"
              :value="item.message"
              color="orange lighten-2"
              overlap
            >
              <v-icon :color="item.active ? 'primary' : ''" size="20px">{{
                item.icon
              }}</v-icon>
            </v-badge>
            <small :class="item.active ? 'blue--text text--darken-2' : ''">
              {{ item.title }}</small
            >
          </NuxtLink>
        </div>
      </div>
      <v-divider vertical></v-divider>
      <div style="height: 100%; flex-grow: 1" class="pa-2">
        <auto-complete :show="true"></auto-complete>
      </div>
      <v-divider vertical></v-divider>
      <v-avatar style="flex-shrink: 2" min-width="36" right class="mx-4">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <div style="flex-grow: 1">
        <div>D. Kargaev &nbsp;</div>
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
          <small class="text-uppercase">other</small>
        </div>
      </div>
      <v-divider vertical></v-divider>
    </v-app-bar>
    <v-main
      class="pt-14 pt-md-0 pl-md-0 mb-6"
      style="background-color: #f8f9fb"
    >
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      class="
        d-flex
        flex-column flex-md-row
        justify-md-space-around
        align-md-start
        pa-4
        mt-4
      "
    >
      <div class="d-flex flex-column justify-center align-center mb-6 mb-md-0">
        <v-icon x-large color="blue darken-2">mdi-linkedin </v-icon>
        <div class="font-weight-bold">
          Linked<span class="blue--text">In</span>
        </div>
      </div>
      <div
        class="mb-6 mb-md-0"
        :class="$vuetify.breakpoint.lg ? '' : 'd-flex flex-column flex-md-row'"
      >
        <div
          class="text-subtitle-2 mb-4"
          :class="$vuetify.breakpoint.lg ? ' text-left' : ' text-center'"
        >
          Navigation
        </div>
        <div
          class="d-block d-md-flex"
          :class="$vuetify.breakpoint.lg ? '' : ' text-center'"
        >
          <ul v-for="(item, idx) in footerList" :key="idx" class="pl-0 pl-md-6">
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
      <div class="mb-6 mb-md-0">
        <div
          class="text-subtitle-2 mb-4"
          :class="$vuetify.breakpoint.lg ? ' text-left' : ' text-center'"
        >
          Fast access
        </div>
        <div class="d-flex flex-column">
          <v-btn color="primary" class="mb-3">
            <span class="white--text">QUESTIONS?</span>
            <v-icon right> mdi-bookmark-outline </v-icon>
          </v-btn>
          <v-btn outlined color="primary">
            SETTINGS?&nbsp;
            <v-icon right> mdi-bookmark</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="mb-6 mb-md-0">
        <div
          class="text-subtitle-2 mb-4"
          :class="$vuetify.breakpoint.lg ? ' text-left' : ' text-center'"
        >
          Language
        </div>
        <v-select
          v-model="language"
          solo
          :items="languageItems"
          label=""
          dense
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
import AutoComplete from "@/components/AutoComplete";
export default {
  name: "DefaultLayout",
  components: {
    AutoComplete,
  },
  data() {
    return {
      clipped: false,
      leftDrawer: false,
      fixed: false,
      language: "ENGLISH",
      languageItems: ["ENGLISH", "CHINESE"],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      navbarIcons: [
        {
          icon: "mdi-rss",
          title: "FEED",
          message: 0,
          to: "/feed",
          active: false,
        },
        {
          icon: "mdi-account-multiple",
          title: "NETWORK",
          message: 1,
          to: "/network",
          active: false,
        },
        {
          icon: "mdi-briefcase",
          title: "JOBS",
          message: 0,
          to: "/jobs",
          active: false,
        },
        {
          icon: "mdi-bell-outline",
          title: "NOTICES",
          message: 0,
          to: "/notices",
          active: false,
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
      demandLists: [
        {
          child: [
            {
              icon: "mdi-apps",
              title: "Insights",
            },
            {
              icon: "mdi-apps",
              title: "advertise",
            },
          ],
        },
        {
          child: [
            {
              icon: "mdi-apps",
              title: "groups",
            },
            {
              icon: "mdi-apps",
              title: "proFinder",
            },
          ],
        },
        {
          child: [
            {
              icon: "mdi-apps",
              title: "Salary",
            },
            {
              icon: "mdi-apps",
              title: "slideShare",
            },
          ],
        },
      ],
      itemLits: [
        {
          title: "Talent Solutions",
          subTitle: "Find, attract and recruit talent",
        },
        {
          title: "Sales Solutions",
          subTitle: "Unlock sales opportunities",
        },
        {
          title: "Post a job",
          subTitle: "Get your job in front of quality candidates",
        },
        {
          title: "Marketing Solutions",
          subTitle: "Acquire customers and grow your buisness",
        },
        {
          title: "Learning Solutions",
          subTitle: "Develop talent across your organisation",
        },
      ],
    };
  },
  methods: {
    gotoIndex() {
      this.navbarIcons.forEach((ele) => {
        ele.active = false;
      });
      this.$router.push("/");
    },
    checkTab(item) {
      this.navbarIcons.forEach((ele) => {
        if (item.title === ele.title) {
          ele.active = true;
        } else {
          ele.active = false;
        }
      });
    },
    remove(item) {
      const index = this.friends.indexOf(item.name);
      if (index >= 0) this.friends.splice(index, 1);
    },
    closeDrawer() {
      this.rightDrawer = false;
    },
    checkAutoComplete() {
      this.$store.dispatch("handAppear");
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
}
</style>
