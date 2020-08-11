<template>
    <div class="mini-player">
      <div class="player-warpper">
        <div class="player-left">
          <img src="https://p2.music.126.net/QHw-RuMwfQkmgtiyRpGs0Q==/102254581395219.jpg" alt="">
          <div class="player-title">
            <h3>演员</h3>
            <p>薛之谦</p>
          </div>
        </div>
        <div class="player-right">
          <div class="play"></div>
          <div class="list" @click.stop="showList"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MiniPlayer',
  methods: {
    showList () {
      this.$emit('showList')
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
        @include bg_img('../../assets/images/play')
      }
      .list{
        width: 120px;
        height: 120px;
        @include bg_img('../../assets/images/list')
      }
    }
  }
}
</style>
