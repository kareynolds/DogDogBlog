var express          = require("express"),
    app              = express(),
    mongoose         = require("mongoose"),
    bodyParser       = require("body-parser"),
    methodOverride   = require("method-override"),
    expressSanitizer = require("express-sanitizer");
    
    
    
    //APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());


mongoose.connect("mongodb://localhost/restful_dog_app");


                //mongoose Model config
                
var Blog = new mongoose.Schema({
    title: String,
    image: {type: String, default: "data:image/jpeg;base64,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"},
    body: String,
    created: {type: Date, default: Date.now}
    
})

            //compile the mongoose object / schema

var Blog = mongoose.model("Blog", Blog);


app.get("/", function(req, res){
    res.redirect("/blogs");
})


        // =================== Index Page  ===================
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render("index.ejs", {blogs: blogs});
        };
    })
});



        // ====================== CREATE ROUTE ===============================
        
app.get("/blogs/new", function(req, res){
    res.render("new.ejs");
})
        
app.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new.ejs");
        } else {
            res.redirect("/blogs")
        }
    })
})



//            =========================== SHOW ROUTE ======================== 

app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
         console.log(err)   
        } else{
            res.render("show.ejs", {blog: foundBlog})
        }
    })
})


app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            console.log(err)
        }else {
            res.render("edit.ejs", {blog: foundBlog})
        }
    })
})



//      =========================== UPDATE ROUTE ==================




app.put("/blogs/:id", function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            console.log(err)
        }else {
            res.redirect("/blogs/"+req.params.id)
        }
    })
})





//       ==================== DELETE ROUTE =====================

app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, req.body.blog, function(err){
        if(err){
            console.log(err)
        } else {
            res.redirect("/blogs")
        }
    })
})



























app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running");
})
