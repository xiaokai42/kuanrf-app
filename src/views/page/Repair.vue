<template>
  <div class="repair">
    <img src="@/assets/images/test/repair.jpg" :style="width" />
  </div>
</template>

<script>
export default {
  name: 'Repair',
  data() {
    return {
      width: { width: '20.53125rem', height: '80.65625rem' }
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
  .repair {
    width: 100%;
    display: flex;
    padding: 40px 0 20px 0;
    box-sizing: border-box;
    justify-content: center;
  }
</style>
