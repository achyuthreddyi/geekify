export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  songPlaying: null,
  // token:
  // ' BQDC6xgtG8AahK3C0yAHhbYuFGHb30-qK7XPkP5u5KLUegywq1YQM0WsTd-a33A3HLBhHqUI3FGG5j0Upc83bulHIUcOB0o_zujhqc5Sp1mXts2EG3o0FJfcx6753x0appnONGKoQ8ZWx82Z8vMSX-_8mPQMk5YIoj8jRj176iZvUNGLlBgI'
  token: null
}

const reducer = (state, action) => {
  console.log('action', action)

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload
      }
    default:
      return state
  }
}

export default reducer
