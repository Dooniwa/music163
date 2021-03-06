<template>
  <transition
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
  >
    <div class="list-player" v-show="this.isListScreen">
      <div class="player-warpper">
        <div class="player-top">
          <div class="top-left">
            <div class="mode loop" @click="mode" ref="mode"></div>
            <p v-if="this.modeType === 0">顺序播放</p>
            <p v-if="this.modeType === 1">单曲播放</p>
            <p v-if="this.modeType === 2">随机播放</p>
          </div>
          <div class="top-right">
            <div class="del"></div>
          </div>
        </div>
        <div class="player-middle">
          <ScrollView>
            <ul>
              <li class="item">
                <div class="item-left">
                  <div class="item-play" @click="play" ref="play"></div>
                  <p>演员</p>
                </div>
                <div class="item-right">
                  <div class="item-favorite"></div>
                  <div class="item-del"></div>
                </div>
              </li>
              <li class="item">
                <div class="item-left">
                  <div class="item-play"></div>
                  <p>演员</p>
                </div>
                <div class="item-right">
                  <div class="item-favorite"></div>
                  <div class="item-del"></div>
                </div>
              </li>
            </ul>
          </ScrollView>
        </div>
        <div class="player-bottom" @click.stop="hidden">
          <p>关闭</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ScrollView from '../ScrollView'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'
import { mapActions, mapGetters } from 'vuex'
import modeType from '../../store/modeType'

export default {
  name: 'ListPlayer',
  data: function () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'setListScreen',
      'setIsPlaying',
      'setModeType'
    ]
    ),
    play () {
      this.setIsPlaying(!this.isPlaying)
    },
    hidden () {
      this.setListScreen(false)
    },
    enter (el, done) {
      Velocity(el, 'transition.swoopIn', { duration: 1000 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.swoopOut', { duration: 1000 }, function () {
        done()
      })
    },
    mode () {
      if (this.modeType === modeType.loop) {
        this.setModeType(modeType.one)
      } else if (this.modeType === modeType.one) {
        this.setModeType(modeType.random)
      } else if (this.modeType === modeType.random) {
        this.setModeType(modeType.loop)
      }
    }
  },
  components: {
    ScrollView
  },
  computed: {
    ...mapGetters([
      'isPlaying',
      'isListScreen',
      'modeType'
    ]
    )
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    },
    modeType (newValue, oldValue) {
      if (newValue === modeType.loop) {
        this.$refs.mode.classList.add('loop')
        this.$refs.mode.classList.remove('random')
      } else if (newValue === modeType.one) {
        this.$refs.mode.classList.add('one')
        this.$refs.mode.classList.remove('loop')
      } else if (newValue === modeType.random) {
        this.$refs.mode.classList.add('random')
        this.$refs.mode.classList.remove('one')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/mixin";
  @import "../../assets/css/variable";
.list-player{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  @include bg_sub_color();
  .player-warpper{
    .player-top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100px;
      .top-left{
        display: flex;
        align-items: center;
        .mode{
          width: 56px;
          height: 56px;
          margin: 0 20px;
          &.loop{
            @include bg_img('../../assets/images/small_loop')
          }
          &.one{
            @include bg_img('../../assets/images/small_one')
          }
          &.random{
            @include bg_img('../../assets/images/small_shuffle')
          }
        }
        p{
          @include font_size($font_medium_s);
          @include font_color()
        }
      }
      .top-right{
        .del{
          width: 84px;
          height: 84px;
          @include bg_img('../../assets/images/small_del')
        }
      }
    }
    .player-middle{
      .item{
        height: 100px;
        border-top: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        .item-left{
          display: flex;
          align-items: center;
          .item-play{
            width: 56px;
            height: 56px;
            margin-right: 20px;
            @include bg_img('../../assets/images/small_pause');
            &.active{
              @include bg_img('../../assets/images/small_play')
            }
          }
          p{
            @include font_size($font_medium_s);
            @include font_color()
          }
        }
        .item-right{
          display: flex;
          align-items: center;
          .item-favorite{
            width: 56px;
            height: 56px;
            @include bg_img('../../assets/images/small_favorite')
          }
          .item-del{
            width: 52px;
            height: 52px;
            margin-left: 20px;
            @include bg_img('../../assets/images/small_close')
          }
        }
      }
    }
    .player-bottom{
      width: 100%;
      height: 100px;
      @include bg_color();
      p{
        text-align: center;
        line-height: 100px;
        color: white;
        @include font_size($font_medium)
      }
    }
  }
}
</style>
