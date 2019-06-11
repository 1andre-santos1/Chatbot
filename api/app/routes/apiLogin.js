const bcrypt = require('bcrypt');
const session = require('express-session');

module.exports = function(app, db){
  
    //LOGIN
    app.post('/login', function(req, res){
      
        //variáveis recebidas -> username e password recebidos
        var username = req.body.username;
        var password = req.body.password;

        //foram recebidos dados
        if (username && password) {

            db.Utilizadores.findOne({
                where: {
                    username: req.body.username
                }
            }).then(function (utilizadores) {
                if (!utilizadores) {
                    res.send('O utilizador não existe!');
                    res.end();
                }
                else {
                    //compara a password inserida pelo utilizador, com a password da BD
                    bcrypt.compare(password, utilizadores.password, function (err, result) {
                        if (result == true) {
                            res.send('Password Correta! User In');
                            //req.session.loggedin = true;
				            //req.session.username = username;
                            res.end();
                        }
                        else {
                            res.send('Password Errada!');
                            res.end();
                        }
                        res.end();
                    });

                }
            })
        }
        else{
            res.send('Por favor, insira ou o username ou a sua password!');
            res.end();
        }

    });

    //LOGOUT
    app.post('/logout', function (req, res) {
        //apaga as variaveis de sessão
        req.session.loggedin = false;
        req.session.username = null;
        console.log("Utilizador fez logout");
        //redireciona para a página de login - falta codigo - neste momento apenas manda mensagem
        res.send('Utilizador logoutado!');
        res.end();
    });
}