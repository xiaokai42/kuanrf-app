<template>
  <header>
    <img src="@/assets/images/home/logo.png" class="logo" />
    <img src="@/assets/images/home/link.png" class="link" />
  </header>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  header {
    width: 100%;
    height: 105px;
    display: flex;
    position: relative;
    justify-content: flex-end;
    z-index: 99;

    img.logo {
      top: 10px;
      left: 10px;
      width: 259px;
      height: 134px;
      position: absolute;
    }

    img.link {
      width: 250px;
      height: 45px;
      padding: 30px;
    }
  }
</style>
