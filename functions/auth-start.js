const authorizationURI = `https://discordapp.com/api/oauth2/authorize?client_id=297658459745288192&redirect_uri=http%3A%2F%2Flocalhost%3A8888%2Fauth-success&response_type=code&scope=connections`

exports.handler = async (event, context) => {
  return {
    statusCode: 302,
    headers: {
      Location: authorizationURI,
      'Cache-Control': 'no-cache',
    },
  }
}
