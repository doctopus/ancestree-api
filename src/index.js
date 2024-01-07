const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.get('/', (req,res) => {
    res.send('HomePage')
    }
)

app.get('/people', async (req, res) => {
    res.json([
        {
            id: 1,
            firstName: "John",
            lastName: "Doe"
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Doe"
        }
    ]);
})
app.get('/people/:id', async (req, res) => {
    const param = req.params;
    console.log(param);
    res.send({
        id: 1,
        firstName: "John",
        lastName: "Doe"
    });
})

app.post('/people', async (req, res) => {
    console.log(req.body);
    const query = req.query;
    res.send(`Created ${req.body?.firstName}`);
})
app.put( '/people/:id', (req, res) => {
    res.send('Updated person');
})
app.delete( '/people/:id', (req, res) => {
    res.send('Deleted person');
})

app.listen(3000, ()=> {
    console.log('Listening on port 3000');
});