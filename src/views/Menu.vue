<template>
  <section id="menu">
    <Header></Header>
    <nav>
      <img src="@/assets/images/home/nav.jpg" class="nav-bg" />
      <div class="nav-box">
        <router-link to="/home"><span>首页</span></router-link>
        <router-link to="/brand"><span :class="{'active': isActive('brand')}">品牌介绍</span></router-link>
        <router-link to="/care"><span :class="{'active': isActive('care')}">母婴照护</span></router-link>
        <router-link to="/repair"><span :class="{'active': isActive('repair')}">产后修复</span></router-link>
        <router-link to="/recruit"><span :class="{'active': isActive('recruit')}">人才招聘</span></router-link>
      </div>
    </nav>
    <router-view></router-view>
    <Footer></Footer>
    <Bottom></Bottom>
  </section>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Bottom from '@/components/layout/Bottom.vue'

export default {
  name: 'Menu',
  data() {
  	return {

    }
  },
  components: { Header,Footer,Bottom },
  methods: {
    isActive(path) {
      return this.$route.fullPath.indexOf(path) != -1;
    }
  }
}
</script>

<style scoped lang="scss">
  nav {
    width: 750px;
    height: 100px;
    display: flex;
    position: relative;
    align-items: flex-end;
    justify-content: center;

    img.nav-bg {
      width: 750px;
      height: 100px;
      position: absolute;
      z-index: -1;
    }
    .nav-box {
      width: 90%;
      display: flex;
      margin: 0 auto;
      margin-bottom: 10px;
      justify-content: space-around;

      span {
        color: #fff;
        font-size: 26px;
      }
      span.active {
        color: #f1cd68;
      }
    }
  }
</style>
