<script>
import { onMounted } from "vue";
import { Store, useStore } from "vuex";
import ImageBox from "./components/ImageBox/index.vue";
import LoadingBar from "./components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
    ImageBox,
  },
  setup() {
    const store = useStore();

    const handImgLoad = (imgArr) => {
      let i = 0;
      imgArr.forEach((image) => {
        const imgs = new Image();
        imgs.src = image.url;
        imgs.onload = () => {
          i++;
          console.log(i === imgArr.length);

          store.dispatch("dataState", i === imgArr.length);
          // isLoad.value = i === photo.arr.length;
        };
      });
    };

    const init = () => {
      store.dispatch("getApi").then((res) => {
        handImgLoad(res);
      });
    };

    onMounted(() => {
      init();
    });

    return {};
  },
};
</script>

<template>
  <div id="app">
    <LoadingBar />
    <ImageBox />
  </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategray;
}
</style>
