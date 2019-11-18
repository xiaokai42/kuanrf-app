<template>
  <section class="bottom">
    <el-dropdown>
      <a class="el-dropdown-link phone">
        <img src="@/assets/images/home/icon-phone.png" />
        <span>电 话 客 服</span>
      </a>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><a href="tel:023-88316333">解放碑店：023-88316333</a></el-dropdown-item>
        <el-dropdown-item><a href="tel:023-65309088">沙坪坝店：023-65309088</a></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <a class="wechat" @click="dialogVisible = true">
      <img src="@/assets/images/home/icon-wx.png" />
      <span>微 信 咨 询</span>
    </a>

    <el-dialog title="客服微信二维码" :modal="false" :visible.sync="dialogVisible" width="50%">
      <div class="dialog-text">
        <img src="@/assets/images/home/person-ewm.jpg" class="dialog-img" />
      </div>
    </el-dialog>
  </section>
</template>

<script>
  export default {
    name: 'Bottom',
    data() {
      return {
        dialogVisible: false
      }
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
  .bottom {
    bottom: 0;
    width: 750px;
    opacity: 0.9;
    height: 100px;
    display: flex;
    position: fixed;
    background: #e9ebe8;
    align-items: center;
    justify-content: center;
    border-top: 1px #a3a1a1 solid;

    a {
      width: 374px;
      height: 68px;
      display: flex;
      font-size: 22px;
      align-items: center;
      justify-content: center;

      img {
        width: 68px;
        height: 68px;
        margin-right: 20px;
      }
    }
    a.phone {
      border-right: 1px #a3a1a1 solid;
    }
  }

  .dialog-text {
    display: flex;
    align-items: center;
    justify-content: center;

    .dialog-img {
      width: 300px;
      height: 300px;
      margin: 0 auto;
    }
  }
</style>
<style>
  .el-dropdown-menu--small .el-dropdown-menu__item {
    font-size: 22px;
    padding: 20px 40px;
  }
</style>
