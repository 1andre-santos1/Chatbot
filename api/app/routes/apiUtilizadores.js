const bcrypt = require('bcrypt');


module.exports = function(app, db){
    //Métodos CRUD

    //Listar ustilizadores
    app.get('/api/users', function(req, res){
        db.Users.findAll({

        }).then(function(result){
            res.json(result);
        })
    });
    
    //Criar Utilizador
    app.post('/api/users/new', function(req,res){
        var hashPassword = bcrypt.hashSync(req.body.password, 8);
        db.Users.create({
            name: req.body.name,
            username: req.body.username,
            password: hashPassword,
            email: req.body.email
        }).then(function(results){
            res.json(results);
        })
    });

    //Atualizar um Utilizador
    app.put('/api/users/update/:id', function(req,res){
        db.Users.update({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function(result){
            res.json(result);
        })
    });

    //Apagar utilizador
    app.delete('/api/users/delete/:id', function(req, res){
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results){
            res.json(results);
        });
    });

    //Listar utilizador pelo seu ID
    app.get('/api/users/:id', function(req, res){
        db.Users.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(result){
            res.json(result);
        })
    });


}