import express from 'express';

const app = express();

var comments = [
    {
        "id": 1388534400000,
        "author": "Pete Hunt",
        "text": "Hey there!"
    },
    {
        "id": 1420070400000,
        "author": "Paul O’Shannessy",
        "text": "React is *great*!"
    }
]

app.get('/api/comments', function(req, res) {
	res.send(comments);
});

app.use('/', express.static('public'));

app.listen(process.env.PORT || 3000);
