import { usersModel, questionsModel } from "./models.js";
import { getToken, IsAuth } from "./middlewares.js";
import express from 'express';
import Mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

Mongoose.connect('mongodb://localhost:27017', {

    useNewUrlParser: true,
    useUnifiedTopology: true

}).catch(error => console.log(error.reason));

app.post('/signup', async (req, res) => {
    try {
        const sameEmailUser = await usersModel.findOne({ email: req.body.email });
        if (sameEmailUser) {
            res.send({ msg: 'Email already exists' });
        }
        else {
            const user = new usersModel({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10)
            });
            const newUser = await user.save();
            res.send({ user: getToken(newUser), name: newUser.name });
        }
    } catch (error) {
        console.log(error);
    }
});

app.post('/signin', async (req, res) => {
    try {
        const signInUser = await usersModel.findOne({
            email: req.body.email
        });
        if (signInUser && bcrypt.compareSync(req.body.password, signInUser.password)) {
            res.send(
                { user: getToken(signInUser), name: signInUser.name }
            )
        }
        else {
            res.send({ msg: 'Invalid Email Or Password' })
        }
    } catch (error) {
        console.log(error)
    }
});

app.post('/createQuestions', async (req, res) => {
    try {
        const questions = new questionsModel({
            question: req.body.question,
            options: req.body.options,
            answer: req.body.answer
        });
        await questions.save();
        res.send({ msg: 'Question Created' });
    } catch (error) {
        console.log(error);
    }
})

app.post('/questions', IsAuth, async (req, res) => {
    try {
        const questions = await questionsModel.find({});
        res.send(questions);
    } catch (error) {
        console.log(error);
    }
})

app.post('/updateScore', IsAuth, async (req, res) => {
    try {
        await usersModel.findOneAndUpdate({
            email: req.user.email
        }, {
            score: req.body.score
        });
        res.send({ msg: 'Score Updated' });
    } catch (error) {
        console.log(error);
    }
})

app.post('/compare', IsAuth, async (req, res) => {
    try {
        const users = await usersModel.find({});
        const scores = users.map(user => {
            if (user.score !== null) {
                return {
                    name: user.name,
                    email: user.email,
                    score: user.score
                }
            }
        });
        res.send(scores);
    } catch (error) {
        console.log(error);
    }
})

app.listen(5000, () => {
    console.log('Listening on port 5000!');
});