<template>
    <ul class="detail-bottom">
      <li class="bottom-top">
        <div class="bottom-icon"></div>
        <div class="bottom-title">播放全部</div>
      </li>
      <li v-for="value in playlist" :key="value.id" class="item" @click="selectMusic">
        <h3>{{value.name}}</h3>
        <p>{{value.al.name}} - {{value.ar[0].name}}</p>
      </li>
    </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DetailBottom',
  props: {
    playlist: {
      type: Array,
      default: () => [],
      requierd: true
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniScreen',
      'setListScreen'
    ]
    ),
    selectMusic () {
      this.setFullScreen(true)
      this.setMiniScreen(false)
      this.setListScreen(false)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
.detail-bottom{
  li{
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    @include bg_sub_color();
    border-bottom: 1px solid #ccc;
  }
  .bottom-top{
    display: flex;
    align-items: center;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    .bottom-icon{
      width: 60px;
      height: 60px;
      margin-right: 20px;
      @include bg_img('../../assets/images/small_play')
    }
    .bottom-title{
      @include font_color();
      @include font_size($font_large)
    }
  }
  .item{
    h3{
      @include font_color();
      @include font_size($font_medium)
    }
    p{
      @include font_color();
      @include font_size($font_samll);
      margin-top: 10px;
      opacity: 0.8;
    }
  }
}
</style>
