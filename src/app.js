const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//Read accounts data
const accountData = fs.readFileSync('./src/json/accounts.json', 'UTF8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
const accounts = JSON.parse(accountData);
//console.log(accounts.savings);

//Read users data
const userData = fs.readFileSync('./src/json/users.json', 'UTF8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
const users = JSON.parse(userData);
//console.log(users);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Account Summary',
        accounts: accounts
    });
});
app.get('/savings',(req,res)=>{
    res.render('account', {
        account: accounts.savings

    });
});
app.get('/checking',(req,res)=>{
    res.render('account', {
        account: accounts.checking

    });
});
app.get('/credit',(req,res)=>{
    res.render('account', {
        account: accounts.credit

    });
});
app.get('/profile',(req,res)=>{
    res.render('profile', {
        user: users[0]

    });
});

app.listen(3000, () => {
    console.log('PS Project Running on port 3000!');
}
)