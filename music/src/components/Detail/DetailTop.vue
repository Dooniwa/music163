<template>
    <div class="detail-top">
      <div class="img-container">
        <div class="mask"></div>
        <img :src="path" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailTop',
  props: {
    path: {
      type: String,
      default: '',
      requierd: true
    }
  }
}
</script>

<style scoped lang="scss">
.detail-top{
  width: 100%;
  height: 500px;
  overflow: hidden;
  .mask{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #000000;
    opacity: 0;
  }
  img{
    width: 100%;
  }
}
</style>
