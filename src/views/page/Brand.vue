<template>
  <div class="brand">
    <img src="@/assets/images/test/brand.jpg" :style="width" />
  </div>
</template>

<script>
export default {
  name: 'Brand',
  data() {
    return {
      width: { width: '20.53125rem', height: '81.84375rem' }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style scoped lang="scss">
  .brand {
    width: 100%;
    display: flex;
    padding: 40px 0 20px 0;
    box-sizing: border-box;
    justify-content: center;
  }
</style>
