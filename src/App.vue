<template>
<v-app id="inspire">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-email</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        color="primary"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Zoom</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="text-center">
              <v-content>
                <standard></standard>
              </v-content>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-footer
        color="primary"
        app
      >
        <span class="white--text">&copy; 2020</span>
      </v-footer>
    </v-app>
  </v-app>
</template>

<script>
import Standard from './components/Standard';

export default {
  name: 'App',

  components: {
    Standard,
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
