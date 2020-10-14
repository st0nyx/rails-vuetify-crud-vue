<template>
  <div>
    <h1>Showing event {{ id }}</h1>
    <v-divider></v-divider>
    <router-link class="event-link" :to="{ name: 'dashboard' }"
      >Go to Dashboard</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      event: {}
    };
  }
};
</script>

<style scoped>
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
button {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}
</style>
