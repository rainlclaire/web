"use strict";


(function() {
    angular.module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $location, $rootScope, FormService) {

        var model = this;
        model.addForm = addForm;
        model.updateForm = updateForm;
        model.deleteForm = deleteForm;
        model.selectForm = selectForm;

        console.log("test form formcontroller");


        var user= $rootScope.user;

        model.clickForm = {
            title:""
        };
        console.log($rootScope.user);
        //form page only show when user logged in
        if (user !=null) {
            console.log("user not null yes");
            FormService.findAllFormsForUser(user._id)
            .then(function(allForms){
                console.log(allForms);
                model.forms= allForms;
            });
        } else {
            alert("You need to login or register");
            $location.url("login");
        }

        //function for form



        //add the form to currentForms
        function addForm(form) {
            if (user ==null ) {
                alert("you need to login");
                $location.url("/login");
            }
            var newForm= {
                title: form.title
            };

            //inti the title with empty
            model.clickForm.title="";
            console.log("pinrt user in form controller");
            console.log(user);
            FormService.createFormForUser(user._id, newForm)
            .then(function(createdForms){
                console.log(createdForms);
                model.forms = createdForms;

            });
        }

        //update the select form with the given form info
        function updateForm(form) {
            //if ($scope.selectFormIndex != null) {
            //    $scope.forms[$scope.selectFormIndex]._id = form._id;
            //    $scope.forms[$scope.selectFormIndex].title = form.title;
            //    $scope.forms[$scope.selectFormIndex].userId = form.userId;
            //
            //} else {
            //    alert("You have to select a Form");
            //}

            //FormService.findAllFormsForUser(user.id)
            //    .then(function(allForms){
            //        //console.log(allForms);
            //        model.forms= allForms;
            //    });
            //console.log("form controller");
            //console.log(form);
            //console.log(model.forms[$index]);
            FormService.updateFormById(form._id, form)
                .then(function(allForms) {
                    model.forms[selectedIndex].title = form.title;
                    model.clickForm = {
                        title:""
                    };
                });
        }

        //delete the form with given form's index
        function deleteForm(index) {
            //var deletedId = $scope.forms[index]._id;
            //FormService.deleteFormById(deletedId)
            //.then(function(allOtherForms){
            //    $scope.forms = allOtherForms;
            //});
            var deletedId = model.forms[index]._id;
            FormService.deleteFormByIdForUser(deletedId, user._id)
                .then(function(forms) {
                    model.forms = forms.data;
                });
        }

        var selectedIndex = null;
        //select the form with given form's index
        function selectForm(index) {

            selectedIndex = index;
            model.clickForm = {
                title: model.forms[index].title,
                _id: model.forms[index]._id
            };
        }
    }
})();