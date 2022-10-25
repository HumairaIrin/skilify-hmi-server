const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.port || 5000;

app.use(cors());
const courses = require('./data/coures.json');

app.get('/', (req, res) => {
    res.send('skilify HMI server is running')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log(`Skilify HMI running on port, ${port}`)
})