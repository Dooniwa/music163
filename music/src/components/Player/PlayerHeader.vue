<template>
    <div class="header">
      <div class="header-left" @click.stop="hiddenNormalPlayer"></div>
      <div class="header-title">
        <h3>演员</h3>
        <p>薛之谦</p>
      </div>
      <div class="header-right"></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'PlaterHeader',
  props: {
    title: {
      type: String,
      default: '',
      requierd: true
    }
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniScreen'
    ]
    ),
    hiddenNormalPlayer () {
      this.setFullScreen(false)
      this.setMiniScreen(true)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/variable";
  @import "../../assets/css/mixin";
  .header{
    position: relative;
    width: 100%;
    height: 100px;
    z-index: 999;
    /*background-color: #f00;*/
    //@include bg_color();
    display: flex;
    justify-content: space-between;
    .header-left,.header-right{
      width: 84px;
      height: 84px;
      margin-top: 8px;
    }
    .header-left{
      @include bg_img('../../assets/images/down');
    }
    .header-right{
    }
    .header-title{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #FFFFFF;
      @include font_size($font_medium);
      @include no-wrap()
    }
  }
</style>
