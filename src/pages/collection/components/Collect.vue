<template>
    <div>
      <div v-for="item in colldata" :key="item.id">
        <router-link :to="'/detail/' + item.goods.id">
          <div class="content">
            <div class="wrapper-img">
              <img class="content-img" :src="item.goods.name.image"/>
            </div>
            <div class="content-list">
              <div class="content-name">{{item.goods.name.name}}</div>
              <div class="wrapper-logo">
                  <p class="content-logo">{{item.goods.name.title}}</p>
              </div>
            </div>
        </div>
        </router-link>
    </div>
    <router-link to="/">
      <div v-show="uncollect" class="uncollect">你还没有收藏，点击这里去收藏吧~</div>
    </router-link>
    
    </div>
</template>

<script>
import { mycoll } from '../../../api/api'
export default {
    name: 'CollectionCollect',
    data() {
      return{
        colldata: [],
        uncollect: false
      }
    },
    mounted() {
      mycoll({

      }).then((res) => {
        console.log(res)
        this.colldata = res.data
        if(this.colldata.length == 0){
          this.uncollect = true
        } else {
          this.uncollect = false
        }
      }).catch((error) => {
        console.log(error)
      })
    }
}
</script>

<style lang="stylus" scoped>
.content
    margin-top: .9rem
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
        color: Black 
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
            color: Black
            border: 1px solid darkcyan
            color: #0086B3
            padding: .02rem .1rem
            border-radius: 1rem
.uncollect
  width: 66%
  border: 1px solid #0086B3
  padding: .2rem 0
  margin-left: 1.4rem
  margin-top: 3.3rem
  text-align: center
  border-radius: .2rem
</style>
