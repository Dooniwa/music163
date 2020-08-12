<template>
  <transition
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <div class="normal-player" v-show="this.isFullScreen">
      <div class="player-warpper">
        <PlayerHeader></PlayerHeader>
        <PlayerMiddle></PlayerMiddle>
        <PlayerBottom></PlayerBottom>
      </div>
      <div class="player-bg">
        <img src="https://p2.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg" alt="">
        <div></div>
      </div>
    </div>
  </transition>
</template>

<script>
import PlayerHeader from './PlayerHeader'
import PlayerMiddle from './PlayerMiddle'
import PlayerBottom from './PlayerBottom'
import { mapGetters } from 'vuex'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
export default {
  name: 'NormalPlayer',
  components: {
    PlayerHeader,
    PlayerMiddle,
    PlayerBottom
  },
  computed: {
    ...mapGetters([
      'isFullScreen'
    ]
    )
  },
  methods: {
    enter (el, done) {
      Velocity(el, 'transition.fadeIn', { duration: 1000 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.fadeOut', { duration: 1000 }, function () {
        done()
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
.normal-player{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .player-warpper{
    position: relative;
    z-index: 999;
    width: 100%;
    height: 100%;
  }
  .player-bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    img{
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      filter: blur(10px);
    }
    div{
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: #000000;
      opacity: 0.3;
    }
  }
}
</style>
