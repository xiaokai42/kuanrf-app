<template>
  <div class="care">
    <img :src="imgUrl" :style="style" />
  </div>
</template>

<script>
export default {
  name: 'Care',
  data() {
    return {
      imgUrl: '',
      style: { width: '', height: '' }
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;

      this.$axios.get('/app/index').then(res => {
        if (res.data) {
          this.ajaxImg(res.data.app.menuImg2);
          this.style = {
            width: (res.data.app.menuImg2Width/32).toFixed(3) + 'rem' ,
            height: (res.data.app.menuImg2Height/32).toFixed(3) + 'rem'
          }
        }
      })
    },
    ajaxImg(id) {
      this.$axios.get('/app/showPhoto?id=' + id).then(res => {
        if (res.status == 200) {
          this.imgUrl = 'data:image/png;base64,' + res.data.img64;
        }
      }).catch(err => {
        this.$Message.error({ content: '图片加载失败' });
      });
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
