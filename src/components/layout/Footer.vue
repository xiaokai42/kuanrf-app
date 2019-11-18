<template>
  <footer>
    <img src="@/assets/images/home/footer.png" class="footer-bg" />
    <div class="footer-box">
      <a class="return-top" title="返回顶部" @click="returnTop"></a>
      <img src="@/assets/images/home/ewm.jpg" />
      <div class="footer-box-text">
        <p>宽仁妇孺照护中心·沙坪坝店</p>
        <p>Add：重庆市沙坪坝区凤天大道136号凤鸣广场商业裙楼4F</p>
        <p class="hr">Tel：023-65309088</p>
        <p class="pt">宽仁妇孺照护中心·解放碑店</p>
        <p>Add：重庆市渝中区嘉滨路112号高盛创富B栋3-4F</p>
        <p>Tel：023-88316333</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Foorer',
    data() {
      return {

      }
    },
    methods: {
      returnTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }
  }
</script>

<style scoped lang="scss">
  @media screen and (min-width: 320px) and (max-width: 359px) {
  	p {
  		font-size: 12px;
  	}
  }

  @media screen and (min-width: 360px) and (max-width: 400px) {
  	p {
  		font-size: 15px;
  	}
  }

  @media screen and (min-width: 401px) {
  	p {
  		font-size: 18px;
  	}
  }

  footer {
    width: 750px;
    height: 263px;
    display: flex;
    position: relative;
    margin-bottom: 101px;
    align-items: flex-end;
    justify-content: center;

    img.footer-bg {
      width: 750px;
      height: 263px;
      position: absolute;
      z-index: -1;
    }

    .footer-box {
      width: 95%;
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;

      a.return-top {
        top: 0;
        width: 100px;
        height: 32px;
        position: absolute;
        z-index: 99;
      }
      img {
        width: 104px;
        height: 104px;
        margin-right: 40px;
      }
      .footer-box-text {
        line-height: 28px;

        p {
          margin: 0;
          color: #fff;
          font-weight: bold;
        }
        p.hr {
          padding-bottom: 10px;
          border-bottom: 1px #fff solid;
        }
        p.pt {
          padding-top: 10px;
        }
      }
    }
  }
</style>
