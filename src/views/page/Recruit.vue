<template>
  <div class="recruit">
    <img :src="imgUrl" class="banner" />
    <div class="recruit-content">
      <img src="@/assets/images/home/font-kuanrf.png" class="font" />
      <div class="recruit-text" v-for="item in list">
        <h1>【 招 聘 岗 位 】</h1>
        <p class="work">· {{ item.work }}（{{ item.money }}） </p>
        <p>岗位要求：</p>
        <p v-for="(duty, index) in item.duty.split('-')">· {{ item.duty.split('-')[index] }}</p>
        <div class="hr"></div>
        <p v-for="(welfare, index) in item.welfare.split('-')">· {{ item.welfare.split('-')[index] }}</p>
        <div class="hr"></div>
        <div class="link">
          <span><img src="@/assets/images/home/icon1.png" class="person" />联系人：{{ item.person }}</span>
          <span>
            <img src="@/assets/images/home/icon2.png" class="phone" />
            <a href="tel:19942399767">{{ item.phone }}</a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recruit',
  data() {
    return {
      imgUrl: '',
      list: []
    }
  },
  created() {
    this.init();
    this.workData();
  },
  methods: {
    init() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;

      this.$axios.get('/app/index').then(res => {
        if (res.data) {
          this.ajaxImg(res.data.app.bannerImg2);
        }
      })
    },
    workData() {
      this.$axios.get('/app/recruit').then(res => {
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
  .recruit {
    width: 100%;

    img.banner {
    	width: 750px;
    	height: 460px;
    }

    .recruit-content {
      width: 100%;
      padding: 40px 0;
      text-align: center;

      img.font {
        width: 175px;
        height: 59px;
      }
      .recruit-text {
        margin-top: 40px;
        text-align: left;
        padding: 20px 40px;
        border-top: 1px #b2b1b0 solid;
        border-bottom: 1px #b2b1b0 solid;

        h1 {
          font-size: 22px;
        }
        p {
          font-size: 22px;
          line-height: 44px;
        }
        p.work {
          color: #0e387f;
        }
        .hr {
          width: 100%;
          height: 1px;
          margin: 20px 0;
          background: #b2b1b0;
        }
        .link {
          display: flex;
          padding: 0 20px;
          align-items: center;
          box-sizing: border-box;
          justify-content: space-between;

          span {
            display: flex;
            color: #0e387f;
            font-size: 22px;
            line-height: 44px;
            align-items: center;

            img.person {
              width: 29px;
              height: 39px;
              margin-right: 10px;
            }
            img.phone {
              width: 32px;
              height: 36px;
              margin-right: 10px;
            }
            a {
              color: #0e387f;
            }
          }
        }
      }
    }
  }
</style>
