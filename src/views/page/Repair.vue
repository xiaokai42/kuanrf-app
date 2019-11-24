<template>
  <div class="repair">
    <img :src="imgUrl" :style="style" />
  </div>
</template>

<script>
export default {
  name: 'Repair',
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
          this.ajaxImg(res.data.app.menuImg3);
          this.style = {
            width: (res.data.app.menuImg1Width/32).toFixed(3) + 'rem' ,
            height: (res.data.app.menuImg1Height/32).toFixed(3) + 'rem'
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
  .repair {
    width: 100%;
    display: flex;
    padding: 40px 0 20px 0;
    box-sizing: border-box;
    justify-content: center;
  }
</style>
