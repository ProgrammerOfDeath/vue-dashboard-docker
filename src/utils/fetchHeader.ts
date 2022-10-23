export default new Headers({
  authorization: `Bearer ${process.env.VUE_APP_AUTH_TOKEN}`,
  'content-type': 'application/json',
  accept: 'application/json',
})
