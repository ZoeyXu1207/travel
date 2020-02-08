<template>
    <div>
        <div class="speech">
            <div class="speech-title">
                <p>{{detailList.curriculum}}</p>
                <p class="speech-p">{{detailList.lecturer}}</p>
            </div>
            <div>
                <img class="speech-img" v-show="playing" @click="play" src="../../../assets/image/bofang.jpg"/>
                <img class="speech-img" v-show="suspend" @click="suspende" src="../../../assets/image/zanting.jpg"/>
                <audio :src="aispeech" ref="audio" @ended="songend"></audio>
            </div>
        </div>
        <div class="article" ref="box">
            <div v-html="article"></div>
        </div>
    </div>
</template>

<script>
import { speechend } from '../../../api/api'
export default {
    name: 'DetailSpeech',
    data () {
        return {
            playing: true,
            suspend: false,
            textcon: '',
            aispeech: '',
            
        }
    },
    props: {
        detailList: Object,
        article: String,
       
    },
    methods: {
        play() {
            var Audio = this.$refs.audio
            Audio.play()
            this.playing = false
            this.suspend = true
        },
        suspende() {
            var Audio = this.$refs.audio
            Audio.pause()
            this.playing = true
            this.suspend = false
        },
        songend() {
            this.playing = true
            this.suspend = false
        },
        voice() {
            var box = this.$refs.box
            var con = box.textContent || box.innerText
            this.textcon = con
            const formData = new FormData();
            formData.append('speechen', this.textcon)
            speechend(formData).then((res) => {
                this.aispeech = res.data.speeching
            }).catch((error) => {
                console.log(error)
            })
        }
    },
    watch: {
        article:function() {
            this.$nextTick(function() {
                this.voice()
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
  .speech
    clear: both
    display: flex
    justify-content: flex-end
    background: #cacaca
    align-items: center
    margin: 0.3rem 0.1rem
    border-radius: 3px
    .speech-img
      width: 1rem
      padding-left: 0.5rem
    .speech-title
      line-height: 1.5
      .speech-p
        color: #888
        font-size: 0.2rem
  .article
    margin: .5rem 0
    line-height: 1.8


</style>
