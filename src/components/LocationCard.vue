<template>
  <router-link
    class="location-link"
    :to="{ name: 'location-show', params: { id: location.id } }"
  >
    <div>
      <v-card class="event-card">
        <v-card-title>
          {{ location.name }}
        </v-card-title>
      </v-card>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    location: Object
  }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-top: 24px;
  margin-bottom: 24px;
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
