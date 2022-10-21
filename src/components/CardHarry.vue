<template>
  <v-card class="mx-auto" max-width="344" style="margin-top: 100px">
    <v-img src="@/assets/Harry_Potter_wordmark.svg"></v-img>
    <v-card-title> Harry Potter </v-card-title>
    <v-card-actions>
      <router-link :to="{ name: 'harry-potter-characters' }">
        <v-btn color="orange lighten-2" text> {{ $t("characterListLink") }}</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
