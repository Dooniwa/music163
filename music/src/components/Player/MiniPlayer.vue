<template>
  <transition
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <div class="mini-player" v-show="this.isMiniScreen">
      <div class="player-warpper">
        <div class="player-left" @click="showNormalPlayer">
          <img src="https://p2.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg" alt="" ref="miniImg">
          <div class="player-title">
            <h3>演员</h3>
            <p>薛之谦</p>
          </div>
        </div>
        <div class="player-right">
          <div class="play" @click="play" ref="play"></div>
          <div class="list" @click.stop="showList"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'MiniPlayer',
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniScreen',
      'setIsPlaying'
    ]
    ),
    play () {
      this.setIsPlaying(!this.isPlaying)
    },
    showNormalPlayer () {
      this.setFullScreen(true)
      this.setMiniScreen(false)
    },
    showList () {
      this.$emit('showList')
    },
    enter (el, done) {
      Velocity(el, 'transition.flipXIn', { duration: 1000 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.flipXOut', { duration: 1000 }, function () {
        done()
      })
    }
  },
  computed: {
    ...mapGetters([
      'isMiniScreen',
      'isPlaying'
    ]
    )
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
        this.$refs.miniImg.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
        this.$refs.miniImg.classList.remove('active')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.mini-player{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 150px;
  @include bg_color();
  .player-warpper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .player-left{
      display: flex;
      align-items: center;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 20px;
        animation: sport 5s linear infinite;
        animation-play-state: running;
        &.active{
          animation-play-state: paused;
        }
      }
      .player-title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3{
          @include font_size($font_medium);
          @include font_color()
        }
        p{
          @include font_size($font_medium_s);
          @include font_color()
        }
      }
    }
    .player-right{
      display: flex;
      align-items: center;
      .play{
        width: 84px;
        height: 84px;
        @include bg_img('../../assets/images/pause');
        &.active{
          @include bg_img('../../assets/images/play')
        }
      }
      .list{
        width: 120px;
        height: 120px;
        @include bg_img('../../assets/images/list')
      }
    }
  }
}
  @keyframes sport {
    from{
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
</style>
