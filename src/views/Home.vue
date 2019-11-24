<template>
  <section id="home">
    <Header></Header>
    <router-link to="/active"><img :src="imgUrl" class="banner" /></router-link>
    <img src="@/assets/images/home/info.png" class="info" />
    <div class="content">
      <router-link to="/brand"><img :src="imgUrl1" class="brand" :style="style1" /></router-link>
      <router-link to="/care"><img :src="imgUrl2" class="care" :style="style2" /></router-link>
      <router-link to="/repair"><img :src="imgUrl3" class="repair" :style="style3" /></router-link>
      <router-link to="/recruit"><img :src="imgUrl4" class="recruit" :style="style4" /></router-link>
    </div>
    <Footer></Footer>
    <Bottom></Bottom>
  </section>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Bottom from '@/components/layout/Bottom.vue'

export default {
  name: 'Home',
  data() {
  	return {
      imgUrl: '',
      imgUrl1: '',
      imgUrl2: '',
      imgUrl3: '',
      imgUrl4: '',
      style1: { width: '', height: '' },
      style2: { width: '', height: '' },
      style3: { width: '', height: '' },
      style4: { width: '', height: '' }
    }
  },
  components: { Header,Footer,Bottom },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$axios.get('/app/index').then(res => {
        if (res.data) {
          this.ajaxImg(res.data.app.bannerImg, 1);
          this.ajaxImg(res.data.app.homeImg1, 2);
          this.ajaxImg(res.data.app.homeImg2, 3);
          this.ajaxImg(res.data.app.homeImg3, 4);
          this.ajaxImg(res.data.app.homeImg4, 5);
          this.style1 = {
            width: (res.data.app.homeImg1Width/32).toFixed(3) + 'rem' ,
            height: (res.data.app.homeImg1Height/32).toFixed(3) + 'rem'
          }
          this.style2 = {
            width: (res.data.app.homeImg2Width/32).toFixed(3) + 'rem' ,
            height: (res.data.app.homeImg2Height/32).toFixed(3) + 'rem'
          }
          this.style3 = {
            width: (res.data.app.homeImg3Width/32).toFixed(3) + 'rem' ,
            height: (res.data.app.homeImg3Height/32).toFixed(3) + 'rem'
          }
          this.style4 = {
            width: (res.data.app.homeImg4Width/32).toFixed(3) + 'rem' ,
            height: (res.data.app.homeImg4Height/32).toFixed(3) + 'rem'
          }
        }
      })
    },
    ajaxImg(id, type) {
      this.$axios.get('/app/showPhoto?id=' + id).then(res => {
        if (res.status == 200) {
          if (type == 1) {
            this.imgUrl = 'data:image/png;base64,' + res.data.img64;
          } else if (type == 2) {
            this.imgUrl1 = 'data:image/png;base64,' + res.data.img64;
          } else if (type == 3) {
            this.imgUrl2 = 'data:image/png;base64,' + res.data.img64;
          } else if (type == 4) {
            this.imgUrl3 = 'data:image/png;base64,' + res.data.img64;
          } else {
            this.imgUrl4 = 'data:image/png;base64,' + res.data.img64;
          }
        }
      }).catch(err => {
        this.$Message.error({ content: '图片加载失败' });
      });
    }
  }
}
</script>

<style scoped lang="scss">
  #home {
  	width: 750px;
  	margin: 0 auto;

    img.banner {
    	width: 750px;
    	height: 460px;
    	position: relative;
    }
    img.info {
    	width: 750px;
    	height: 132px;
    	margin-top: -30px;
    }
    .content {
    	width: 750px;
    	display: flex;
    	flex-wrap: wrap;
    	margin-top: 25px;
    	justify-content: center;

      a {
      	margin: 20px 0;
      }
      img.brand {
      	width: 700px;
      	height: 525px;
      }
      img.care {
      	width: 700px;
      	height: 642px;
      }
      img.repair {
      	width: 700px;
      	height: 570px;
      }
      img.recruit {
      	width: 700px;
      	height: 137px;
      }
    }
  }
</style>
