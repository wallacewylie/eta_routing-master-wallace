
//$(document).ready(function(){
//
//    $("#catform").on("submit", submitCats);
//
//
//});
//
//function submitCats(event){
//    event.preventDefault();
//
//    var catObject = {};
//    catObject.username = $("#username").val();
//
//    $.ajax({
//        type: "POST",
//        data: catObject,
//        url: "/cat",
//        success: function(data){
//            console.log(data);
//            fetchCats();
//        }
//    });
//}
//
//function fetchCats(){
//    $.ajax({
//        type: "GET",
//        url: "/cat",
//        success: function(data){
//            appendDom(data);
//        }
//    });
//}
//
//function appendDom(data){
//    $("#container").empty();
//    for(var i = 0; i < data.length; i++) {
//        $("#container").append("<div></div>");
//
//        var $el = $("#container").children().last();
//        $el.append("<p>" + data[i].username + "</p>");
//    }
//}


$("#catform").on("submit", submitCats);

function submitCats(event) {
    event.preventDefault();

    var catObject = {};
    catObject.username = $("#username").val();
};

var app = angular.module('myApp', []);
app.controller('catform', function($scope, $http) {
    $http({
        method: 'POST',
        data: catObject,
        url: '/cat'
    }).then(function successCallback(data) {
        console.log(data);
        fetchCats();
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(err) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});

var app = angular.module('myApp', []);
app.controller('catform', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/cat'
    }).then(function successCallback(data) {
        appendDom(data);
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(err) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});

var app = angular.module('myApp', []);
function appendDom(data) {
    $("#container").empty();
    for (var i = 0; i < data.length; i++) {
        $("#container").append("<div></div>");

        var $el = $("#container").children().last();
        $el.append("<p>" + data[i].username + "</p>");
    }
}
