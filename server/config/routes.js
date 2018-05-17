const author = require('../controllers/controller')

module.exports= (app)=>{
    app.get('/api/authors', (req, res)=>{
        author.index(req,res);
    })
    app.post('/api/new', (req, res)=>{
        author.newAuthor(req, res);
    })
    app.get('/api/:author_id', (req, res)=>{
        author.author(req,res);
    })
    app.put('/api/edit/:author_id', (req, res)=>{
        author.editAuthor(req,res);
    })
    app.delete('/api/remove/:author_id', (req, res)=>{
        author.removeAuthor(req,res);
    })
}