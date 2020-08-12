import { SET_FULL_SCREEN, SET_MINI_SCREEN } from './mutations-type'

export default {
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  },
  [SET_MINI_SCREEN] (state, flag) {
    state.isMiniScreen = flag
  }
}
