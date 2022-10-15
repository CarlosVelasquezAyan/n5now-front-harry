<template>
  <div id="app">
    <v-container>
      <v-row :align="'center'">
        <v-col class="text-center">
          <CardHarry />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardHarry from "./components/CardHarry.vue";
export default {
  name: "App",
  components: {
    CardHarry,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
