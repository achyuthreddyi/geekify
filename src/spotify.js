export const authEndpoint = 'https://accounts.spotify.com/authorize'

const redirectUri = 'https://geekify-geekskool.netlify.app/'
const clientId = '3972c5a184e44c2f9728c2fad2ff204e'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {}) // {} tells what the initial should start with
}

export const loginUrl = `${authEndpoint}?
client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`

// http://localhost:3000/#access_token=BQA-OieAPxcrKY-ICccRLKbEBL68OSvm1_2mHQeNKJZvigKOmB2aPCQY23UhKuABPxrAj1mnadJp-Uwk061OhcVmJO2a5zRTcTi2SARRn3w0trNNsKUVHjTzUDhraUrMMEX6Y5_ZzCZ0z7vKzhwjbQ0aOtIdGdEfL8yMc7bRJqH_rqjqgZa6&token_type=Bearer&expires_in=3600
