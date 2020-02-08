<template>
    <div>
        <div class="revert-fixed">
            <router-link to="/personal">
                <div class="revert-wrapper">
                <img class="fixed-img" src="../../../assets/image/fanhui.png"/>
                </div>
            </router-link>
            登录      
        </div>
        <div>
            <img class="login-img" src="../../../assets/image/fengmian.jpeg"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginHeader',
}
</script>

<style lang="stylus" scoped>
.revert-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .9rem
    line-height: .9rem
    text-align: center
    color: #fff
    background: #0086b3
    font-size: .35rem
    z-index: 2
    .revert-wrapper
      position: absolute
      top: 0
      left: 0
      width: .6rem
      text-align: center
      font-size: .4rem
      color: #fff
      .fixed-img
        width: .6rem
        color: white
        padding-bottom: .09rem
.login-img
  width: 100%
</style>
