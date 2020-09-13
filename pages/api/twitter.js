export default (req, res) => {
  res.statusCode = 200
  res.json({
    username: '@kbehrens',
    followers: 3456,
    today: 20
  })
}