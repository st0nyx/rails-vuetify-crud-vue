<template>
  <v-card class="event-card">
    <v-card-text class="eyebrow"
      >@{{ event.time }} on {{ event.date }}</v-card-text
    >
    <v-card-title>{{ event.title }}</v-card-title>
    <v-card-subtitle>{{ event.subtitle }}</v-card-subtitle>
    <v-card-text>{{ event.location }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: "My First Event",
        subtitle: "Cool Stuff ever",
        location: "Virtual",
        date: "Tues Oct 12, 2020",
        time: "14:00"
      }
    };
  }
};
</script>

<style scoped>
.event-card {
  width: 100%;
  padding: 20px;
  margin-bottom: 24px;
  margin-top: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
