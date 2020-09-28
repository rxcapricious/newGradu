<template>
    <div class="box-login">
    <el-form class="portal-form" :rules="rules" :model="form" ref="elForm">
      <el-form-item prop="userName">
        <el-input placeholder="请输入您的用户名/手机号" v-model="form.userName"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入您的用户密码"
          v-on:keyup.enter.native="onLogin"
          v-model="form.password"
        />
      </el-form-item>
    </el-form>
    <div class="footer-pc">
      <div class="btn-box">
        <el-button type="primary" class="btn-ok" @click="onLogin">登录</el-button>
      </div>
    </div>

    <div class="footer-mobile">
      <div class="btn-box">
        <el-button type="primary" class="btn-ok" @click="onLogin">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import loginMixin from './loginMixin'
export default {
  mixins: [loginMixin],
  data() {
    return {
      form: {
        password: '',
        userName: ''
      },
      rules: {
        password: {
          required: true,
          message: '请输入您的用户密码'
        },
        userName: {
          required: true,
          message: '请输入您的用户名/手机号'
        }
      }
    }
  },
   methods: {
    onLogin() {
      this.$refs.elForm.validate(valid => {
        if (!valid) {
          return
        }
        this.login(this.form)
      })
    }
  }
}
</script>

<style  scoped>
/* .box-login {
  .footer-mobile {
    .btn-other {
      display: flex;
      align-items: center;
      a {
        flex: 1;
      }
      a:first-child {
        text-align: left;
      }
      a:last-child {
        text-align: right;
      }
    }
  }
} */
</style>