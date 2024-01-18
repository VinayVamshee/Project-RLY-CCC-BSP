require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const connectDB = require('./DB/connectDB')

const BooksSchema = require('./models/Books')
const CardSchema = require('./models/Card')
const ContactSchema = require('./models/Contacts')
const CategorySchema = require('./models/Category')
const VideoSchema = require('./models/Videos')
const VideoCategorySchema = require('./models/VideoCategory')
const UserSchema = require('./models/Users')
const NoticeSchema = require('./models/Notice')
const OtherDropDownSchema = require('./models/OtherDropDown')
const FeedbackSchema = require('./models/Feedback')


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;



app.post('/AddNewContact', async (req, res) => {
    try {
        const newContact = new ContactSchema(req.body);
        await newContact.save();
        res.status(200).json({ message: 'Contact added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error adding contact' });
    }
})

app.delete('/DeleteContact/:id', (req, res) => {
    const id = req.params.id;
    ContactSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})


app.get('/GetContacts', (req, res) => {
    ContactSchema.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.get('/GetContactProfile/:id', (req, res) => {
    const id = req.params.id;
    ContactSchema.findById({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.put('/EditContactProfile/:id', (req, res) => {
    const id = req.params.id;
    const { CREWID, 'CREW NAME': crewName, FATHER, GENDER, TRACTION, CADRE, 'MOBILE NO': mobileNo, 'CREW TYPE': crewType, 'AVAIL DATE': availDate, 'EMP CODE': empCode, 'APP.DATE': appDate } = req.body;

    const updateObject = {
        CREWID,
        'CREW NAME': crewName,
        FATHER,
        GENDER,
        TRACTION,
        CADRE,
        'MOBILE NO': mobileNo,
        'CREW TYPE': crewType,
        'AVAIL DATE': availDate,
        'EMP CODE': empCode,
        'APP.DATE': appDate
    };

    ContactSchema.findByIdAndUpdate({ _id: id }, updateObject)
        .then(result => res.json(result))
        .catch(error => res.json(error));
});





app.post('/Register', (req, res) => {
    UserSchema.create(req.body)
        .then(users => res.json(users))
        .catch(error => res.json(error))
})

app.post('/Login', (req, res) => {
    const { username, password } = req.body;
    UserSchema.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {

                    const token = jwt.sign({ username: user.username }, 'secret_key', { expiresIn: '1hr' });
                    res.json({ token: token, message: 'Login Successful' })
                }
                else {
                    res.json('Please Check the Password')
                }
            } else {
                res.json('Not Existing')
            }
        })
})


app.post("/AddNewBook", (req, res) => {
    BooksSchema.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.get('/GetBooks', (req, res) => {
    BooksSchema.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.delete('/DeleteBook/:id', (req, res) => {
    const id = req.params.id;
    BooksSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/AddNewCard", (req, res) => {
    CardSchema.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.get('/GetCards', (req, res) => {
    CardSchema.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.delete('/DeleteCard/:id', (req, res) => {
    const id = req.params.id;
    CardSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/AddNewCategory", (req, res) => {
    CategorySchema.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.get('/GetCategory', (req, res) => {
    CategorySchema.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.delete('/DeleteCategory/:id', (req, res) => {
    const id = req.params.id;
    CategorySchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/AddNewVideo", (req, res) => {
    VideoSchema.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.get('/GetVideos', (req, res) => {
    VideoSchema.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.delete('/DeleteVideo/:id', (req, res) => {
    const id = req.params.id;
    VideoSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/AddNewVideoCategory", (req, res) => {
    VideoCategorySchema.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.get('/GetVideoCategory', (req, res) => {
    VideoCategorySchema.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.delete('/DeleteVideoCategory/:id', (req, res) => {
    const id = req.params.id;
    VideoCategorySchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/AddNewNotice", (req, res) => {
    NoticeSchema.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.get('/GetNotice', (req, res) => {
    NoticeSchema.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.delete('/DeleteNotice/:id', (req, res) => {
    const id = req.params.id;
    NoticeSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/AddNewOtherDropDown", (req, res) => {
    OtherDropDownSchema.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error));
});


app.get('/GetOtherDropDown', (req, res) => {
    OtherDropDownSchema.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.delete('/DeleteOtherDropDown/:id', (req, res) => {
    const id = req.params.id;
    OtherDropDownSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})

app.post("/AddNewFeedback", (req, res) => {
    FeedbackSchema.create(req.body)
    .then(result => res.json(result))
    .catch(error => {
        console.error('Error creating feedback:', error);
        res.json(error);
    });
});

app.get('/GetFeedback', (req, res) => {
    FeedbackSchema.find({})
        .then(result => res.json(result))
        .catch(error => res.json(error))
});

app.delete('/DeleteFeedback/:id', (req, res) => {
    const id = req.params.id;
    FeedbackSchema.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(error => res.json(error))
})
























const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log('Server Connected');
        })
    } catch (error) {
        console.log(error);
    }
}

start();

module.exports = app;