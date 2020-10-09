<template>
    <div class="login-container">
       <el-card class="login-card">
         <el-tabs class="login-tab" v-model="activeName" >
            <el-tab-pane name="pwd">
              <div slot="label" style="width:160px" v-html="title"></div>
              <form-login @onLoading="showLoading" @unLoading="hideLoading"> </form-login>
            </el-tab-pane>
            <el-tab-pane name="code">
              <div slot="label" style="width:160px" v-html="titleCode"></div>
              <!-- <form-login @onLoading="showLoading" @unLoading="hideLoading"> </form-login> -->
            </el-tab-pane>
         </el-tabs>
      </el-card>

    </div>
</template>

<script>
import formLogin from './form-login'
export default {
  components: { formLogin },
  data() {
    return {
      title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账号密码登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
      titleCode: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;验证码登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
      activeName: 'pwd'
    }
  },

  methods: {
    showLoading() {
      this.loading = true
    },
    hideLoading() {
      this.loading = false
    }
  }
}
</script>

<style lang='less'>
// @r: 37.5rem;
// @s: 7.5%;

@media screen and (min-width: 771px) {
   .login-container {
      display: inline-block;
      width: 400px;
      height: 500px;
      position: absolute;
      top: 20%;
      left: 50%;
      margin-left: -200px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      z-index: 100000;
      .login-card {
        border: none;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1) !important;
        border-radius: 10px;
        // animation: fade-in-up 0.5s 0.2s ease both;
        // -webkit-animation: fade-in-up 0.5s 0.2s ease both;
        // -moz-animation: fade-in-up 0.5s 0.2s ease both;
        // -ms-animation: fade-in-up 0.5s 0.2s ease both;
        .el-tabs__header {
          margin: 0;
        }
        .el-tabs__content {
          padding: 50px 0 0 ;
          height: 365px;
        }
        .el-tabs__nav {
          widows: 100% !important;
        }
        .el-tabs__nav-wrap::after {
          content: none;
        }
        .el-tabs__active-bar {
          background-color:#ffffff;
        }
        .el-tabs__nav-scroll {
          display: flex;
          justify-content: space-around;
        }
        
        .el-tabs__item,.el-tabs__item:hover {
          color: #999;
        }
        .el-tabs__item.is-active {
            color: #3268d6;
        }
      }
      
    }
}


</style>



