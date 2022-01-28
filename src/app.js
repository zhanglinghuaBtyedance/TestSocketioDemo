let app = require('express')();
const cors = require('cors');
let http = require('http').Server(app);
let io = require('socket.io')(http, { cors: true });
app.use(cors());
app.get('/', function (req, res) {
  res.send('hello world');
});

io.on('connection', function (socket) {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
