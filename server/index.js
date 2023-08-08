const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const index = require('..server/index.html');
const app = express();

app.use(cors());
app.use(express.json());

const UserModel = require('./models/Users');

mongoose.connect('mongodb://127.0.0.1:27017/crud');

app.get('/getUsers', (req, res) => {
  // UserModel.find({})
  // res.json('hello world');
  //res.render(index);
  // res.send([
  //   { id: 1, title: 'book 1' },
  //   { id: 2, title: 'book 2' },
  // ]);
  // try {
  //   let user = await UserModel.find({ name: 'nivedit' });
  //   if (user) {
  //     res.json({ data: user });
  //   } else {
  //     res.json({ message: 'User Not Found' });
  //   }
  // } catch (error) {
  //   res.json({ msg: error.message });
  // }
  //.exec()
  //.then((users) => console.log(users))
  //res.json(users))
  //.catch((err) => res.json(err));
  //res.setHeader('Content-Type', 'text/plain');
  //  res.send('Hello World');
  // console.log('hello world');
  // res.json({ msg: 'Hello World' });
  // res.end();
  // res.send('hello World');
});

app.get('/users', (req, res) => {
  UserModel.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.json(error);
    });
});
app.get('/books', (req, res) => {
  // res.send([
  //   { id: 1, title: 'book 1' },
  //   { id: 2, title: 'book 2' },
  //   { id: 3, title: 'book 3' },
  // ]);
  res.send({ msg: 'gello world' });
});

app.get('/getUsers/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => {
      res.json(users);
      // console.log(users);
    })
    .catch((err) => {
      res.json(err);
      //console.log(err);
    });
  // res.json('Hello World');
});

app.put('/updateUser/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name, age, email } = req.body;
    console.log(name + age + email);
    let response = await UserModel.findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, age: req.body.age, email: req.body.email }
    );

    res.json(response.data);
    console.log(response.data);
  } catch (error) {
    res.json(error);
    console.log(error);
  }

  // .then((users) => {
  //   res.json(users);
  //   console.log(users);
  // })
  // .catch((err) => {
  //   console.log(err);
  //   res.json(err);
  // });
  //console.log('Hello');
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.post('/createUser', (req, res) => {
  //console.log(req.body);
  //res.json(req.body);
  UserModel.create(req.body)
    .then((users) => res.json(users))
    //.then((users) => res.json('hello world'))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
