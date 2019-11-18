<template>
  <div class="recruit">
    <img src="@/assets/images/home/banner1.jpg" class="banner" />
    <div class="recruit-content">
      <img src="@/assets/images/home/font-kuanrf.png" class="font" />
      <div class="recruit-text">
        <h1>【 招 聘 岗 位 】</h1>
        <p class="work">· 护士（3000--5000元/月） </p>
        <p>岗位要求：</p>
        <p>· 有婴儿护理及产妇照顾经验者优先；</p>
        <p>· 有妇产科或儿科护理一年以上工作经验者优先；</p>
        <p>· 持护士证；·  喜欢照顾婴儿，有耐心、爱心及同理心；</p>
        <p>· 热爱本职工作，求知欲强，热情积极， 善于沟通；</p>
        <p>· 具有亲和力和团队精神，有上进心；</p>
        <div class="hr"></div>
        <p>· 持护士证；·  喜欢照顾婴儿，有耐心、爱心及同理心；</p>
        <p>· 热爱本职工作，求知欲强，热情积极， 善于沟通；</p>
        <p>· 具有亲和力和团队精神，有上进心；</p>
        <div class="hr"></div>
        <div class="link">
          <span><img src="@/assets/images/home/icon1.png" class="person" />联系人：张老师</span>
          <span>
            <img src="@/assets/images/home/icon2.png" class="phone" />
            <a href="tel:19942399767">19942399767</a>
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

    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
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
        margin-top: 20px;
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
          align-items: center;
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
