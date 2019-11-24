<template>
  <footer>
    <img src="@/assets/images/home/footer.png" class="footer-bg" />
    <div class="footer-box">
      <a class="return-top" title="返回顶部" @click="returnTop"></a>
      <img src="@/assets/images/home/ewm.jpg" />
      <div class="footer-box-text">
        <p>{{ storeName1 }}</p>
        <p>Add：{{ addresss1 }}</p>
        <p class="hr">Tel：{{ phone1 }}</p>
        <p class="pt">{{ storeName2 }}</p>
        <p>Add：{{ addresss2 }}</p>
        <p>Tel：{{ phone2 }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Foorer',
    data() {
      return {
        storeName1: '',
        addresss1: '',
        phone1: '',
        storeName2: '',
        addresss2: '',
        phone2: ''
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.$axios.get('/app/footer').then(res => {
          if (res.data) {
            this.storeName1 = res.data.home.storeName1;
            this.addresss1 = res.data.home.addresss1;
            this.phone1 = res.data.home.phone1;
            this.storeName2 = res.data.home.storeName2;
            this.addresss2 = res.data.home.addresss2;
            this.phone2 = res.data.home.phone2;
          }
        })
      },
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
