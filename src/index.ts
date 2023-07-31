import app from './routers/generated_routes';

app.get('/', (req, res) => {
  res.json({result: 'OK'})
})

//server start
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
