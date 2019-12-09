<template>
  <div class="active">
    <img :src="imgUrl" class="banner" />
    <div class="active-content">
      <img src="@/assets/images/home/font-kuanrf1.png" class="font" />
      <div class="active-text">
        <h1>{{ title }}</h1>
        <p>{{ txt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Active',
  data() {
    return {
      imgUrl: '',
      title: '',
      txt: '',
      list: []
    }
  },
  created() {
    this.init();
    // this.activeData();
  },
  methods: {
    init() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;

      this.$axios.get('/app/index').then(res => {
        if (res.data) {
          this.txt = res.data.app.txt;
          this.title = res.data.app.activeTitle;
          this.ajaxImg(res.data.app.bannerImg1);
        }
      })
    },
    activeData() {
      this.$axios.get('/app/active').then(res => {
        if (res.status == 200) {
          this.list = res.data.list;
        }
      }).catch(err => {
        this.$Message.error({ content: '数据请求失败' });
      });
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
  .active {
    width: 100%;

    img.banner {
    	width: 750px;
    	height: 460px;
    }

    .active-content {
      width: 100%;
      padding: 40px 0;
      text-align: center;

      img.font {
        width: 175px;
        height: 59px;
      }
      .active-text {
        margin-top: 20px;
        text-align: left;
        padding: 20px 40px;
        border-top: 1px #b2b1b0 solid;
        border-bottom: 1px #b2b1b0 solid;

        h1 {
          font-size: 22px;
          text-align: center;
          margin-bottom: 10px;
        }
        p {
          font-size: 22px;
          line-height: 36px;
          text-indent: 44px;
        }
        .hr {
          width: 100%;
          height: 1px;
          margin: 20px 0;
          background: #b2b1b0;
        }
      }
    }
  }
</style>
