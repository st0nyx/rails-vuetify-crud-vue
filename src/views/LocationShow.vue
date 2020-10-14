<template>
  <div>
    <v-card width="400" class="mx-auto mt-15">
      <v-card-title>Location: {{ location.name }}</v-card-title>
    </v-card>

  </div>
</template>

<script>
import LocationService from "@/services/LocationService";
export default {
  props: ["id"],
  data() {
    return {
      location: {}
    };
  },
  created() {
    LocationService.getLocation(this.id)
      .then(response => {
        this.location = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style scoped></style>
