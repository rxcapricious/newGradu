<template>
    <div class="login-box">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="login-ruleForm">
          <el-form-item prop="phone">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入您的用户名/手机号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入您的用户密码"></el-input>
          </el-form-item>
        </el-form>
          <div class="forget-pd">
            <div class="forget-tip">
              <a @click="onForget">忘记密码？</a>
            </div>
            <div class="btn-box">
              <button type="primary" class="btn-ok" @click="onLogin">登录</button>
            </div>
          </div>
         
      
    </div>
</template>

<script>
import loginMixin from './loginMixin'
export default {
  mixins: [loginMixin],
  data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang='less'>
.login-box {
  .el-form-item__content {
    margin-left: 0 !important;
  }
  .el-input__inner {
    background-color: #eceff4!important;
    border: none;
    border-radius: 2px;
  }
  .forget-tip{
    font-size: 12px;
    color: #999;
    line-height: 18px;
    text-align: right;
    margin: -4px 0 0;
  }
  .btn-box{    
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .btn-ok {
    width: 100%;
    height: 40px;
    line-height: 0;
    border-radius: 2px;
    background-color: #3268d6;
    border-color: #3268d6;
    border: none;
    color: #fff;
  }
}
</style>



