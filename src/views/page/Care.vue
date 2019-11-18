<template>
  <div class="care">
    <img src="@/assets/images/test/care.jpg" :style="width" />
  </div>
</template>

<script>
export default {
  name: 'Care',
  data() {
    return {
      width: { width: '20.53125rem', height: '65.6875rem' }
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
  .care {
    width: 100%;
    display: flex;
    padding: 40px 0 20px 0;
    box-sizing: border-box;
    justify-content: center;
  }
</style>
