<template>
     <div class="logined">
        <form>
            <input class="first-input" type="text" placeholder="请输入手机号" v-model="iphone"/>
            <div class="verififcation">
                <input class="second-input" type="text" placeholder="请输入验证码" v-model="code"/>
                <input type="button" :disabled="!send" v-bind="testing" v-show="!empty"
                  :value="codetext" @click="sendCode" :class="{active: sendcode, begin: codein, 'ver-input': funikm}"
                />
                <input v-show="empty" type="button" :value="codetext" class="ver-input" @click="emptyCode">
            </div>
            <input type="password" placeholder="请设置密码" v-model="password"/>
            <div class="logined-input">
                <input class="third-input" @click="stertRegist" :disabled="!isregist" type="button" value="注册并登录" v-bind="minitor"
                  :class="{active: sendregis, begin: regisin}" 
                />
            </div>
        </form>
    </div>
</template>

<script>
import cookie from '../../../axios/cookie'
import {getcode, register} from '../../../api/api'
export default {
    name: 'Register',
    data () {
      return {
        iphone: '',
        code: '',
        password: '',
        isregist: false,
        sendregis: true,
        regisin: false,
        codetext: '发送验证码',
        send: true,
        funikm: true,
        sendcode: true,
        codein: false,
        empty: true,
        iphones: '',
      }
    },
    methods: {
      sendCode () {
        var countdown = 60
        var that = this
        codetime()
        function codetime () {
          if (countdown == 0) {
            that.codetext = '发送验证码'
            countdown = 60
            that.send = true
            that.codein = false
            that.sendcode = true
            return
          } else {
            countdown--
            that.codetext = ""+countdown+" 秒后重发"
            that.send = false
            that.codein = true
            that.sendcode = false
          }
          setTimeout(function() {
            codetime()
          },1000)
        }
        getcode({
          mobile: that.iphone
        }).then((res) => {
          //console.log(res)
        }).catch((error) => {
          //console.log(error.mobile[0])
          that.iphones = error.mobile[0]
          that.showToast()
        })

      },
      stertRegist () {
        //console.log('执行了')
        register({
          username: this.iphone,
          code: this.code,
          password: this.password
        }).then((res) => {
          console.log(res)
          cookie.setCookie('name', res.data.username,7)
          cookie.setCookie('token', res.data.token,7)
          //更新数据仓库的数据
          this.$store.dispatch('users')
          //跳转到首页
          this.$router.push({name:'home'})
        }).catch((error) => {
          //console.log(error)
          this.iphones = error.code[0]
          this.showToast()
        })
      },
      emptyCode() {
        this.iphones = '手机号码错误'
        this.showToast()
      },
      //提示框
      showToast() {
        this.$popups(this.iphones)
      }
  
    },
    computed: {
      minitor () {
        if(this.iphone && this.code && this.password != '') {
          this.regisin = true
          this.sendregis = false
          this.isregist = true
        } else {
          this.regisin = false
          this.sendregis = true
          this.isregist = false
        }
      },
      testing () {
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.iphone))) {
          this.send = false
          this.empty = true
        } else {
          this.send = true
          this.empty = false
        }
      }
    }
}
</script>

<style lang="stylus" scoped>
.logined
  margin: 0 0.5rem
 .verififcation
    display: flex
    margin: .3rem 0
    .ver-input
      width: 50%
      border-left: 0
      border-top-left-radius: 0
      border-bottom-left-radius: 0
      border: 0
      color: white
      background: #3091e7
    .active
      background: #3091e7
    .begin
      background: #909090

    .second-input
      border-top-right-radius: 0
      border-bottom-right-radius: 0
  .logined-input
    margin-top: .8rem
    .third-input
      border-radius: 20px
      font-size: .3rem
      color: white
      border: 0
    .active
      background: #6cd868
    .begin
      background: #02bf03
.logined input 
  display: block
  width: 100%
  border: 1px solid #909090
  padding: .2rem 0
  border-radius: 3px
</style>

