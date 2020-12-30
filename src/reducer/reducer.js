export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  songPlaying: null,
  token:
    'BQC76fKk3KgrRXSu15oQNL019M8_HVsnUwzH9MeSVStt4JhdkyEK2EMny6dH4CYliz9S1wzH03Y3yPVhyGW7IbskAtU2P9y2liBm3xHSYiv9DaGEE_FmGCSaTYZNDFDt4zw9gSJ8cWmOXLTLXLrkmgy7w8jvTn5e2xlBOYTFQOTqSaNKBDH_'
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
    default:
      return state
  }
}

export default reducer
