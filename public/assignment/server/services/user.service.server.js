

module.exports = function (app, model, db) {
    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", findUsers);
    app.get("/api/assignment/user/:id",findUserById);
    //to comment out here
    app.get("/api/assignment/user?username=username", findUserByUsername);
    app.get("/api/assignment/user?username=alice&password=alice", findAlice);
    //end
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);


    function createUser(req, res) {

        var user = req.body;
        model.
        create(user)
        .then(
            function(user) {

            res.json(user);
            },
            function(err) {
                res.status(400).send(err);
            });

        //rs.json(model.create(req.body));
    }

    function findUsers(req, res) {
        console.log("findUsers");
        var reqUsername = req.query.username;
        var reqPassword = req.query.password;
        //console.log(reqUsername);
        //console.log(reqPassword);

        if (reqUsername != null && reqPassword != null) {

            model.findUserByCredentials(
                {username:reqUsername, password:reqPassword})
            .then(
                function(user) {

                    res.json(user);
                },
                function(err) {
                    res.status(400).send(err);
            }
            );
        } else if (reqUsername != null) {
            //model.findUserByUsername(reqUsername)
            //    .then(function (user) {
            //        res.json(user);
            model.findUserByUsername(reqUsername)
            .then(
                function(user) {
                    res.json(user);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );

        } else {
            model.findAll()
            .then(
                function(user) {
                    res.json(user);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
        }
    }


    function findUserById(req, res) {
        var userid = req.params.id;
        model.findById(userid)
        .then(
            function(user) {
                res.json(user);
            },
            function(err) {
                res.status(400).send(err);
            }
        );
    }

    function findUserByUsername(req, res) {

        //model.findUserByUsername(req.params.username)
        //.then(function(user) {
        //    res.json(user);
        //})
        var username = req.query.username;
        model.findUserByUsername(username)
        .then(
            function(user) {
                res.json(user);
            },
            function(err){
                res.status(400).send(err);
            }
        );
    }

    function updateUser(req, res) {
        //model.update(req.params.id, req.body)
        //.then(function(users) {
        //    res.json(user);
        //});
        var userid = req.params.id;


        var user = req.body;
        console.log(user);

        //console.log(user.phone);
        //user.phone = user.phone.split(",");
        //user.email = user.email[0].split(",");

        model.update(userid, user)
        .then(
            function(user){
                res.json(user);
            },
            function(err) {

                res.status(400).send(err);
            }
        );
    }

    function deleteUser(req, res) {
        var userid = req.params.id;
        model.remove(userid)
        .then(
            function(stats) {

                res.send(200);
            },
            function(err) {
                res.status(400).send(err);
            }
        );
        ////model.remove(req.params.id)
        ////.then(function(users) {
        ////    res.json(users);
        ////});
        //model.remove(req.params.id);
        //res.json(model.findAll());
    }

    function findAlice(req, res) {
        console.log("findAlice");

        var reqUsername = req.query.username;
        var reqPassword = req.query.password;

        //model.findUserByUsername(reqUsername, reqPassword)
        //.then(function(users) {
        //    res.json(users);
        //})
        model.findUserByCredentials({username:reqUsername, password:reqPassword})
        .then(
            function(user) {
                res.json(user);
            },
            function(err) {
                res.status(400).send(err);
            }
        );


    }




};