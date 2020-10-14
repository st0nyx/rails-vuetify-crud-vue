<template>
  <v-container class="nav">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <div>
        <button
          v-for="entry in languages"
          :key="entry.title"
          @click="changeLocale(entry.language)"
        >
          <flag :iso="entry.flag" v-bind:squared="false" /> {{ entry.title }}
        </button>
      </div>
    </v-app-bar>
  </v-container>
</template>

<script>
import i18n from "@/plugins/i18n";
export default {
  name: "App",
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "EN" },
        { flag: "de", language: "es", title: "DE" }
      ],
      showPassword: false,
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Login",
          url: "/login"
        },
        {
          label: "Dashboard",
          url: "/dashboard"
        }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style scoped>
.nav {
  padding-bottom: 80px;
}
.locale {
  background: aqua;
}
</style>
