<template>
  <v-container>
    <h1>Dashboard</h1>
    <v-row>
      <v-col cols="8">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-col>
      <v-col cols="4" class="sidebar">
        <h3>Sidebar Stuff</h3>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "DashboardPage",
  data() {
    return {
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
  background: bisque;
}
</style>
