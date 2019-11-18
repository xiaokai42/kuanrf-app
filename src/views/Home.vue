<template>
  <section id="home">
    <Header></Header>
    <router-link to="/active"><img src="@/assets/images/home/banner.jpg" class="banner" /></router-link>
    <img src="@/assets/images/home/info.png" class="info" />
    <div class="content">
      <router-link to="/brand"><img src="@/assets/images/home/brand.jpg" class="brand" /></router-link>
      <router-link to="/care"><img src="@/assets/images/home/care.jpg" class="care" /></router-link>
      <router-link to="/repair"><img src="@/assets/images/home/repair.jpg" class="repair" /></router-link>
      <router-link to="/recruit"><img src="@/assets/images/home/recruit.jpg" class="recruit" /></router-link>
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

    }
  },
  components: { Header,Footer,Bottom },
  methods: {

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
