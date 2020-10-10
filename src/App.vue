<template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h2 class="display-1">Welcome to the App</h2>
      </v-card-title>
      <v-card-text>
        <h4>Rails Api with Vuetify</h4>
      </v-card-text>
      <v-divider></v-divider>
      <v-form>
        <v-text-field label="Username" prepend-icon="mdi-account-circle" />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info">Event-List</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Create Event</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      showPassword: false
    };
  }
};
</script>
