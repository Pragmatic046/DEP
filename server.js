process.env.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yourDatabaseName';

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Passport config
require('./config/passport')(passport);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/auth'));

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('joinRoom', ({ username, room }) => {
        socket.join(room);
        socket.broadcast.to(room).emit('message', `${username} has joined the chat`);
    });

    // Handle chat message
    socket.on('chatMessage', (msg) => {
        io.to(msg.room).emit('message', msg);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
