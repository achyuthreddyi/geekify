export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  songPlaying: null,
  // token:
  // 'BQAXXTHbKW42ExtoiNw5fp_C-4b78t11_ZYDHm4arsjZG-q1xd7OgEnqe4XRgrUQw5AQnn2VPe8eLAQAvPkd6nZmCtsXN_jPstjXRvIFXH_CmosGD3euUQtTDXRZJh5rYdm2_PqX5OAm4uhMMCnWAlW-1Q7SgmXJ0hsPAFJHeH-IwCi-PMvI'
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
