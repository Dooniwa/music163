<template>
    <div class="newsong">
      <div class="newsong-top">
        <h3>最新音乐</h3>
      </div>
      <ul class="newsong-bottom">
        <li v-for="value in newsong" :key="value.id" class="item">
          <img v-lazy="value.song.album.picUrl" alt="">
          <div>
            <h3>{{value.name}}</h3>
            <p>{{value.song.artists[0].name}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Newsong',
  props: {
    newsong: {
      type: Array,
      default: () => [],
      requierd: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.newsong{
  @include bg_sub_color();
  .newsong-top{
    width: 100%;
    height: 84px;
    @include bg_sub_color();
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    h3{
      @include font_size($font_large);
      font-weight: bold;
      @include font_color();
      margin: 20px 0;
      padding: 0 20px;
      border-left: 5px solid #000;
      @include border_color();
    }
  }
  .newsong-bottom{
    width: 100%;
    .item{
      height: 200px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid #ccc;
      img{
        width: 150px;
        height: 150px;
        border-radius: 20px;
        margin-right: 20px;
      }
      div{
        h3{
          @include font_size($font_large);
          @include font_color();
        }
        p{
          @include font_size($font_medium_s);
          @include font_color();
          margin-top: 20px;
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
