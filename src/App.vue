<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
        >
          <v-list dense>
            <router-link class="nav-item" to="/">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>

              <v-list-item-content>
                Border-radius
              </v-list-item-content>
            </v-list-item>
            </router-link>
            <router-link class="nav-item" to="/boxShadow">
            <!--<v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                Box-shadow
              </v-list-item-content>
            </v-list-item>-->
            </router-link>
          </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            color="indigo"
            dark
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>CSS3 GENERATOR</v-toolbar-title>
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
              <v-col >
                <router-view></router-view>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
        <v-footer
            color="indigo"
            inset
            app
        >
          <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Rose:wght@400;700&display=swap');
</style>
<script>
export default {
  name:"App",
  data: () => ({
    drawer: null,
  }),
}
</script>
