<template>
    <div class="personalized">
      <div class="personalized-top">
        <h3>{{title}}</h3>
      </div>
      <div class="personalized-bottom">
        <div class="item" v-for="value in personalized" :key="value.id" @click="selectItem(value.id, type)">
          <img v-lazy="value.picUrl" alt="">
          <p>{{value.name}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Personalized',
  methods: {
    selectItem (id, type) {
      // console.log(id)
      this.$emit('select', id, type)
    }
  },
  props: {
    personalized: {
      type: Array,
      default: () => [],
      requierd: true
    },
    title: {
      type: String,
      default: '',
      requierd: true
    },
    type: {
      type: String,
      default: '',
      requierd: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
@import "../../assets/css/variable";
.personalized{
  @include bg_sub_color();
  .personalized-top{
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
  .personalized-bottom{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 0;
    .item{
      width: 200px;
      padding-bottom: 20px;
      img{
        width: 200px;
        height: 200px;
        border-radius: 20px;
      }
      p{
        @include clamp(2);
        @include font_size($font_medium_s);
        @include font_color();
        text-align: center;
      }
    }
  }
}
</style>
