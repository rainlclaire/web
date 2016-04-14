(function(){
    "use strict";

    angular
        .module("FindGroupApp")
        .controller("groupModalController", groupModalController);


    function groupModalController($route,$rootScope,$sce,$routeParams, $scope, $location, groups, clickGroup, GroupService) {
        var model = this;

        model.addGroupToGroups = addGroupToGroups;
        model.htmlContent = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>';
        model.htmlRender = $sce.trustAsHtml(model.htmlContent);


        function addGroupToGroups(newgroup) {

            console.log(newgroup.ownerName);
            console.log($rootScope.user.username);

            if (newgroup.ownerName != $rootScope.user.username) {
                alert("You have to keep the default ownername!");

            } else {
                var newGroup = {
                    _id: newgroup._id,
                    title: newgroup.title,
                    ownerName: newgroup.ownerName,
                    htmlVariable:newgroup.htmlVariable,
                    description: newgroup.description,
                    address:newgroup.address,
                    listofEvents:[],
                    listofMembers:[],
                    usersLikeGroup:[]

                };
                GroupService.createGroup(newGroup)
                .then(function(theGroup) {

                    groups.push(theGroup);

                });

                //groups.push(newGroup);

                $rootScope.modalInstance.close();
            }


        }

    }
    })();