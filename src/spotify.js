export const authEndpoint = 'https://accounts.spotify.com/authorize'

const redirectUri = 'http://localhost:3000'
const clientId = '3972c5a184e44c2f9728c2fad2ff204e'

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
]

export const loginUrl = `${authEndpoint}?
client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`

// https://accounts.spotify.com/authorize?client_id=3972c5a184e44c2f9728c2fad2ff204e&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true
// https://accounts.spotify.com/authorize?client_id=3972c5a184e44c2f9728c2fad2ff204e&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true

// http://localhost:3000/#access_token=BQA-OieAPxcrKY-ICccRLKbEBL68OSvm1_2mHQeNKJZvigKOmB2aPCQY23UhKuABPxrAj1mnadJp-Uwk061OhcVmJO2a5zRTcTi2SARRn3w0trNNsKUVHjTzUDhraUrMMEX6Y5_ZzCZ0z7vKzhwjbQ0aOtIdGdEfL8yMc7bRJqH_rqjqgZa6&token_type=Bearer&expires_in=3600
