var express = require("express")
var bodyParser = require("body-parser")

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))


app.get("/",function(request,response){
	response.sendFile("/html/index.html",{root:"./public"})
})

app.get("/paula",function(request,response){
	response.sendFile("/html/paula.html",{root:"./public"})
})

app.get("/joanie",function(request,response){
	response.sendFile("/html/joanie.html",{root:"./public"})
})

app.get("/josh",function(request,response){
	response.sendFile("/html/josh.html",{root:"./public"})
})

app.get("/edouard",function(request,response){
	response.sendFile("/html/edouard.html",{root:"./public"})
})

app.get("/danielle",function(request,response){
	response.sendFile("/html/danielle.html",{root:"./public"})
})

app.get("/about",function(request,response){
	response.sendFile("/html/about.html",{root:"./public"})
})

app.use(function(request,response){
	response.send("This file does not exist.")
})

var port = 3000

app.listen(port,function(){
	console.log("The server is listening on port " + port + "...")
})