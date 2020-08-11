<template>
    <div class="player">
      <PlaterHeader></PlaterHeader>
      <PlayerMiddle></PlayerMiddle>
      <PlayerBottom></PlayerBottom>
    </div>
</template>

<script>
import PlaterHeader from '../components/Player/PlayerHeader'
import PlayerMiddle from '../components/Player/PlayerMiddle'
import PlayerBottom from '../components/Player/PlayerBottom'
export default {
  name: 'Player',
  components: {
    PlaterHeader,
    PlayerMiddle,
    PlayerBottom
  }
}
</script>

<style scoped lang="scss">
.player{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: pink;
}
</style>
