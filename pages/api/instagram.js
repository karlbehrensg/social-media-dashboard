export default (req, res) => {
  res.statusCode = 200
  res.json({
    username: '@karlbehrens',
    followers: 30605,
    today: 150
  })
}