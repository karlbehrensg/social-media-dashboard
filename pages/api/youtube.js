export default (req, res) => {
  res.statusCode = 200
  res.json({
    username: 'Karl Behrens',
    followers: 4060,
    today: 22
  })
}