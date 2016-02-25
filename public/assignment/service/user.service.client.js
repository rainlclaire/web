//"use strict";
//
//(function () {
//    angular.module("FormBuilderApp")
//        .factory("UserService", UserService);
//
//
//    function UserService() {
//        console.log("user");
//        var currentUser = [];
//
//        var jsonData = [
//            {"_id": 123, "firstName": "Alice", "lastName": "Wonderland", "username": "alice", "password": "alice"},
//            {"_id": 234, "firstName": "Bob", "lastName": "Hope", "username": "bob", "password": "bob"},
//            {"_id": 345, "firstName": "Charlie", "lastName": "Brown", "username": "charlie", "password": "charlie"},
//            {"_id": 456, "firstName": "Dan", "lastName": "Craig", "username": "dan", "password": "dan"},
//            {"_id": 567, "firstName": "Edward", "lastName": "Norton", "username": "ed", "password": "ed"}
//        ];
//        //for (var n in jsonData) {
//        //    var item = jsonData[n];
//        //
//        //    currentUser.push({
//        //        "_id" :item._id,
//        //        "firstName": item.firstName,
//        //        "lastName": item.lastName,
//        //        "username": item.username,
//        //        "password": item.password
//        //    });
//        //}
//
//        currentUser = {
//            findUserByCredentials: findUserByCredentials,
//            findAllUsers: findAllUsers,
//            createUser: createUser,
//            deleteUserById: deleteUserById,
//            updateUser: updateUser
//        };
//
//        return currentUser;
//
//        function findUserByCredentials(username, password, callback) {
//
//            console.log("loghere");
//            var result = null;
//            console.log("loghere2");
//
//            for (var i = 0; i < currentUser.length; i++) {
//
//                if ((currentUser[i].username == username) && (currentUser[i].password = password)) {
//                    result= currentUser[i];
//                    callback(result);
//                    break;
//
//                }
//            }
//
//        }
//
//        function findAllUsers(callback) {
//            callback(currentUser);
//        }
//
//        function createUser(user, callback) {
//            var _id = (new Date).getTime();
//            user.userId = _id;
//            currentUser.push(user);
//            callback(user);
//
//        }
//
//        function deleteUserById(userId, callback) {
//            for (var i = 0; i< currentUser.length; i++) {
//                if (userId == currentUser[i].id) {
//                    currentUser.splice(i, 1);
//                    callback(currentUser);
//                    break;
//                }
//            }
//
//        }
//
//        function updateUser(userId, user, callback) {
//            for (var i =0; i< currentUser.length; i++) {
//                if (userId == currentUser[i].id){
//
//                    for (var attr in updateUser) {
//                        if (updateUser.hasOwnProperty(attr))
//                        currentUser[i][attr] = updateUser[attr];
//                    }
//                   callback(user);
//                    break;
//                }
//            }
//
//        }
//    }
//
//})();


"use strict";

(function () {
    angular.module("FormBuilderApp")
        .factory("UserService", UserService);


    function UserService() {
        console.log("user");
        //var currentUser = [];
        var currentUser = [
            {"_id": 123, "firstName": "Alice", "lastName": "Wonderland", "username": "alice", "password": "alice"},
            {"_id": 234, "firstName": "Bob", "lastName": "Hope", "username": "bob", "password": "bob"},
            {"_id": 345, "firstName": "Charlie", "lastName": "Brown", "username": "charlie", "password": "charlie"},
            {"_id": 456, "firstName": "Dan", "lastName": "Craig", "username": "dan", "password": "dan"},
            {"_id": 567, "firstName": "Edward", "lastName": "Norton", "username": "ed", "password": "ed"}
        ];
        var service = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };



        return service;


        function findUserByCredentials(username, password, callback) {
            var result = null;
            for (var i = 0; i < currentUser.length; i++) {
                if ((currentUser[i].username == username) && (currentUser[i].password = password)) {
                    result = currentUser[i];
                }
            }
            callback(result);
        }

        function findAllUsers(callback) {
            callback(currentUser);
        }

        function createUser(user, callback) {
            var _id = (new Date).getTime();
            user.userId = _id;
            currentUser.push(user);
            callback(user);

        }

        function deleteUserById(userId, callback) {
            for (var i = 0; i< currentUser.length; i++) {
                if (userId == currentUser[i].id) {
                    currentUser.splice(i, 1);
                    callback(currentUser);
                    break;
                }
            }

        }

        function updateUser(userId, user, callback) {
            for (var i =0; i< currentUser.length; i++) {
                if (userId == currentUser[i].id){

                    for (var attr in updateUser) {
                        if (updateUser.hasOwnProperty(attr))
                            currentUser[i][attr] = updateUser[attr];
                    }
                    callback(user);
                    break;
                }
            }

        }
    }

})();