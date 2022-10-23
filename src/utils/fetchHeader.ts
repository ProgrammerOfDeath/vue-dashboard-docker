export default new Headers({
  authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  'content-type': 'application/json',
  accept: 'application/json',
})
