var express= require('express');
var mysql=require("mysql");
var bodyParser=require("body-parser");
var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ "/public"));
app.set("view engine", "ejs");

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'Nomad',
    password:'123456789'
});

app.get("/", function(req,res){
    console.log("Root Page");
    // res.send("Root Page");
    res.render("index");
});

app.get("/register", function(req, res){
    console.log("Register Page");
    // res.send("Register Page");
    res.render("register-form");
})

app.get("/login", function(req, res){
    console.log("Login Page");
    res.render("login");
})

app.post('/create-acc', function(req, res){
    var userInfo={
        user_name:req.body.name,
        user_password:req.body.password,
        user_email:req.body.email,
    }
    console.log(req.body.name);
    console.log(req.body.password);
    console.log(req.body.email);

    // var userInsertQuery="INSERT INTO register_info SET ?";
    connection.query("INSERT INTO register_info SET ?", userInfo, function(err, result){
        if(err) throw err;
        // console.log(result);
        res.redirect("/register");
    })

})

app.post("/login-acc", function(req, res){
    console.log(req.body.email);

    var personLogin={
        login_email:req.body.email,
        login_password:req.body.password,
    }

    // var loginInsertQuery="INSERT INTO login_info SET ?";
    connection.query("INSERT INTO login_info SET ?", personLogin, function(err, result){
        if(err) throw err;
        // console.log(result);
        res.redirect("/");
    })

})

app.post("/newsletter", function(req,res){
    console.log("news letter");
    var personEmail={
        news_email:req.body.emailletter,
    }
    console.log(req.body.email);
    connection.query("INSERT INTO newsletter_info SET ?", personEmail, function(err, result){
        if(err) throw err;
        // console.log(result);
        res.redirect("/");
    })

})


app.get("/movie1", function(req, res){
    console.log("movie1");
    res.render("movie1");
})
app.get("/movie2", function(req, res){
    console.log("movie2");
    res.render("movie2");
})
app.get("/movie3", function(req, res){
    console.log("movie3");
    res.render("movie3");
})
app.get("/movie4", function(req, res){
    console.log("movie4");
    res.render("movie4");
})

app.listen(3000, function(req, res){
    console.log("Server is running on port 3000");
})