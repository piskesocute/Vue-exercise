<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const routerArr = ["", "about", "Courses"];
    const route = useRoute();
    const Idx = ref(0);

    watch(
      () => route.path,
      () => {
        routerArr.forEach((item, index) => {
          const rp = route.path.substr(1).split("/")[0];
          if (rp === item) {
            Idx.value = index;
          }
        });
      }
    );
    return { Idx };
  },
};
</script>

<template>
  <div id="nav">
    <router-link to="/" :class="{ active: Idx === 0 }"> Home </router-link>
    |
    <router-link to="/about" :class="{ active: Idx === 1 }">
      About
    </router-link>
    |
    <router-link to="/Courses" :class="{ active: Idx === 2 }">
      Courses
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    &.active {
      color: #42b983;
    }
  }
  // > .router-link-active {
  //   color: deepskyblue;
  //   text-decoration: underline;
  // }
}
</style>
