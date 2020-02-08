<template>
  <div class="wrapper">
    
    <div v-for="item in content" :key="item.id">
        <router-link :to="'/detail/' + item.id" tag="div">
        <div class="content">
          <div class="wrapper-img">
              <img class="content-img" :src="item.image"/>
          </div>
          <div class="content-list">
              <div class="content-name">{{item.name}}</div>
              <div class="wrapper-logo">
                  <p class="content-logo">{{item.title}}</p>
              </div>
          </div>
        </div>
        </router-link>
    </div>
    <div class="loading" v-show="load">{{loadtext}}</div>
  </div>
</template>

<script>
import { content } from '../../../api/api'
export default {
    name: 'HomeContent',
    data () {
      return {
        content: [],
        pages: 1,
        load: false,
        loadtext: '加载中'

      }
    },
    methods: {
      homeData() {
        content(this.pages)
        .then((res) => {
          if(res.data.results != null) {
            if(this.pages == 1) {
              this.content = res.data.results
            } else {
              this.content = this.content.concat(res.data.results)
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
        }
    },
    mounted () {
      //进入页面先请求出第一页的数据
      this.homeData()
      //上拉加载
      window.onscroll = () => {
        //滚动条滚动时距离顶部的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        //可视化区域的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        //滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        //判断滚动条到底部的条件
        if(scrollTop + windowHeight == scrollHeight) {
          this.pages++
          this.load = true
          if (this.pages < 5) {
            this.homeData()
          } else {
            this.loadtext = '没有更多数据了'
            //上面已经改变过load的数值了，所以这里就不用再执行一次了
            //this.load = true
          }
        }

      }

    }
}
</script>

<style lang="stylus" scoped>
.wrapper
  margin-bottom: 1rem
  .content
    display: flex
    height: auto 
    overflow: hidden
    padding: .2rem 0
    justify-content: space-between
    border-bottom: 1px solid #e8e8e8
    .wrapper-img
      width: 100%
      height: auto 
      margin-left: .1rem
      margin-right: .2rem
      .content-img
        width: 100%
        display: block
    .content-list
      width: 100%
      margin-right: .1rem
      position: relative
      .content-name
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
        font-size: .34rem
        font-weight: bold
        line-height: 1.5
      .wrapper-logo
        position: absolute
        bottom: 0
        left: 0
        .content-logo
            border: 1px solid darkcyan
            color: #0086B3
            padding: .02rem .1rem
            border-radius: 1rem
  .loading
    padding: .3rem 0
    text-align: center
          


</style>


