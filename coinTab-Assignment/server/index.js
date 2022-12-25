import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
const app = express();
const PORT = 8080;
import fetch from 'node-fetch';

app.use(express.json())
app.use(cors())

var arr = [];

mongoose.connect("mongodb://localhost:27017/details", () => {
    console.log("mongoDB connected");
})

const mongoSchema = mongoose.Schema({
    title: {
        type: String,

    },
    first: {
        type: String,
    },
    last: {
        type: String,

    },
    email: {
        type: String,
        unique: true
    },
    country: {
        type: String,
    },
    img: {
        type: String,
    },
    age: {
        type: String,
    }
})

const User = mongoose.model("data", mongoSchema);

function userFnc() {

    fetch(`https://randomuser.me/api/?seed=foobar&results=50`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            return data.results
        })
        .then((data1) => {
            for (var i = 0; i < data1.length; i++) {


                User.insertMany({
                    title: data1[i].name.title,
                    first: data1[i].name.first,
                    last: data1[i].name.last,
                    gender: data1[i].gender,
                    email: data1[i].email,
                    country: data1[i].location.country,
                    img: data1[i].picture.large,
                    age: data1[i].dob.age
                })


                // User.insertMany(arr)
                //    User.deleteMany(arr)

            }

        })
        .catch((err) => console.log("error"))


}


app.post('/post', async (req, res) => {
    console.log("hello");
   try {
   await userFnc()
   } catch (error) {
    console.log(error);
   }

})


app.delete('/delete', (req, res) => {
    console.log("delete");
    User.find()
        .then((item) => {
            for (var i = 0; i < item.length; i++) {

                User.findByIdAndDelete({
                    _id: item[i]._id
                })
                    .then((doc) => console.log(doc))
                    .catch((err) => console.log(err))

            }
        }
        )

})



app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})