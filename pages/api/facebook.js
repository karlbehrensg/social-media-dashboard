export default (req, res) => {
  res.statusCode = 200
  res.json({
    username: '@karlbehrens',
    followers: 2253,
    today: 12
  })
}