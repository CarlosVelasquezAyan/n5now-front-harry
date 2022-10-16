<template>
  <v-container>
    <v-row>
      <h1>Listado</h1>
      <CharacterList />
    </v-row>
  </v-container>
</template>

<script>
import CharacterList from "../../../components/CharacterList";
export default {
  name: "ListView",
  components: {
    CharacterList,
  },
};
</script>
