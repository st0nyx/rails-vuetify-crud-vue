<template>
  <v-container>
    <h1>Event Listing</h1>
    <v-row>
      <v-col cols="8">
        <div>
          <EventCard />
        </div>
      </v-col>
      <v-col cols="4" class="sidebar">
        <h3>Locations</h3>
        <LocationCard
          v-for="location in locations"
          :key="location.id"
          :location="location"
        ></LocationCard>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
import LocationCard from "@/components/LocationCard.vue";
import LocationService from "@/services/LocationService.js";
export default {
  name: "DashboardPage",
  components: {
    EventCard,
    LocationCard
  },
  created() {
    LocationService.getLocations()
      .then(response => {
        this.locations = response.data;
      })
      .catch(error => {
        console.log("There is an error", error.response);
      });
  },
  data() {
    return {
      locations: [],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        }
        // The rest of the data was removed
        // to shorten the length of the code sample
        // in this article
      ]
    };
  }
};
</script>
<style>
.sidebar {
  padding: 20px;
  margin-top: 24px;
  margin-bottom: 20px;
  background: #dfdfdf;
}
</style>
