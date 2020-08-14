import {
  SET_FULL_SCREEN,
  SET_MINI_SCREEN,
  SET_IS_PLAYING,
  SET_MODE_TYPE,
  SET_LIST_SCREEN
} from './mutations-type'

export default {
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  },
  [SET_MINI_SCREEN] (state, flag) {
    state.isMiniScreen = flag
  },
  [SET_LIST_SCREEN] (state, flag) {
    state.isListScreen = flag
  },
  [SET_IS_PLAYING] (state, flag) {
    state.isPlaying = flag
  },
  [SET_MODE_TYPE] (state, flag) {
    state.modeType = flag
  }
}
