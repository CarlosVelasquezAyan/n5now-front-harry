<template>
  <span v-if="src">if</span>
  <span v-else>else</span>
</template>

<script>
export default {
  props: {
    src: null,
  },
};
</script>
