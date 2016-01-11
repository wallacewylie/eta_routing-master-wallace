var app = angular.module('myApp', []);

app.controller('catform', function($scope, $http) {
    $http({
        method: 'POST',
        data: catObject,
        url: '/cat'
    }).then(function successCallback(data) {
        console.log(data);
        fetchCats();
    }, function errorCallback(err) {

    });
});

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

    }, function errorCallback(err) {

    });
});

var app = angular.module('myApp', []);
app.controller('catform', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/cat'
    }).then(function successCallback(data) {
        appendDom(data);
    }, function errorCallback(err) {
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
