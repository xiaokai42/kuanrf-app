<template>
  <div class="active">
    <img src="@/assets/images/home/banner2.jpg" class="banner" />
    <div class="active-content">
      <img src="@/assets/images/home/font-kuanrf1.png" class="font" />
      <div class="active-text">
        <h1>母婴照护优惠</h1>
        <p>母婴照护优惠母婴照护优惠母婴照护优惠母婴照护优惠母婴照护优惠母婴照护优惠母婴照护优惠</p>
        <div class="hr"></div>
        <h1>母婴照护优惠</h1>
        <p>母婴照护优惠母婴照护优惠母婴照护优惠母婴照护优惠母婴照护优惠母婴照护优惠母婴照护优惠</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Active',
  data() {
    return {

    }
  },
  methods: {

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
