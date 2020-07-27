const uuid = require('uuid');

const HttpError =  require('../models/http-error');

const DUMMY_USERS= [
    {
        id: 'u1',
        name: 'Max',
        email: 'test@test.com',
        pass: 'testers'
    }
];

const getUsers = (req, res, next) => {
    res.json( {users: DUMMY_USERS} );
};

const singup = (req, res, next) => {
    const { name, email, password } = req.body;

    const createdUser = {
        id: uuid(),
        name,
        email,
        password
    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json( {users: createdUser} );
};

const login = (req, res, next) => {
    const { email, password } = req.body;
    
    const identifiedUser = DUMMY_USERS.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
        throw new HttpError('incorrect id or password', 401)
    }

    res.json( { message : "logedin "})
};

exports.getUsers = getUsers;
exports.singup = singup;
exports.login = login;