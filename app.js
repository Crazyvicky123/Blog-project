const express = require("express");

const bodyParser = require("body-parser");
const ejs =require("ejs");
const res = require("express/lib/response");

const app=express();

app.set('view engine','ejs');

const homeContent="In element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed):";
const aboutcontent="hi guys we are going to see the blogwebsite like by using ejhing";
const helpcontent="we can help you out what are the problem that you have";


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var posts=[];
app.get("/",function(req,res){
    res.render("home",{homecontent:homeContent,posts:posts});
});
app.get("/home",function(req,res){
    res.render("home",{homecontent:homeContent,posts:posts});
});
app.get("/about",function(req,res){
    res.render("about",{aboutcontent:aboutcontent});
});
app.get("/contact",function(req,res){
    res.render("contact",{contactcontent:helpcontent});
});
app.get("/compose",function(req,res){
    res.render("compose");
});
app.post("/compose",function(req,res){
    const post={
        title:req.body.title,
        content:req.body.post
    };
    posts.push(post);
    res.redirect("/");
});

app.get("/posts/:postName",function(req,res){
    var title = req.params.postName;

    posts.forEach(function(post){
        var beforeTitle=post.title;

        if(beforeTitle === title)
        {
                res.render("new",{
                    title:post.title,
                    content:post.content
                });
            
        }
    });
});
app.listen(3000,function(){
    console.log("server started");
});