<template>
  <v-container>
    <v-row>
      <v-col>
        <CardHarry />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardHarry from "./../components/CardHarry.vue";

export default {
  name: "HomeView",
  components: {
    CardHarry,
  },
};
</script>
