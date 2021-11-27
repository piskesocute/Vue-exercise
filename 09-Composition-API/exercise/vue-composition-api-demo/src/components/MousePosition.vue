<script>
import { mouseMovePosition } from "../composition-api/useMousePosition";
export default {
  setup() {
    const { x, y } = mouseMovePosition();
    return { x, y };
  },
};
</script>

<template>
  <div class="box">
    <h1>Mouse Position</h1>
    <h2>x:{{ x }} y:{{ y }}</h2>
  </div>
</template>

<style lang="scss"></style>
