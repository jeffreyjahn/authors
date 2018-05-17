const mongoose = require('mongoose');

const Author = mongoose.model('authors');

module.exports={
    index: (req, res)=>{
        Author.find({}, (err, authors)=>{
            if(err){
                return res.json(err);
            }
            console.log(err);
            console.log(authors);
            return res.json(authors);
        });
    },
    author: (req, res)=>{
        Author.findOne({_id: req.params.author_id}, (err, author)=>{
            if(err) {
                console.log(err.errors)
                return res.json(err);
            };
            return res.json(author);
        });
    },
    newAuthor:(req, res)=>{
        var newAuthor = new Author(req.body);
        newAuthor.save((err)=>{
            if(err){
                console.log("Theres nothing in here buddy", err);
                return res.json({errors: err});
            } else{
                return res.json(newAuthor);
            }
        });
    },
    editAuthor:(req, res)=>{
        console.log(req.body.name);
        Author.findOne({_id: req.params.author_id}, (err, author)=>{
            if(err) {
                console.log(err);
                return res.json(err);
            }
            author.name = req.body.name;
            author.save((err, cool)=>{
                if(err){
                    console.log("cannot save");
                }
                console.log(cool);
                return res.json(cool);
            })
        });
    },
    removeAuthor:(req, res)=>{
        Author.remove({_id: req.params.author_id}, (err)=>{
            if(err){
                return res.json(err);
            }
            return res.json({success: "yayy deleted user!"});
        });
    },
}