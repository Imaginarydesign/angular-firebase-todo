'use strict';

angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, $firebase) {

    var url = 'https://amber-fire-2443.firebaseio.com';
    var todoRef = new Firebase(url);

    $scope.addTodo = function () {
      // $scope.todos.push($scope.todo);
      // Add new todo (firebase)
      $scope.todos.$add($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (id) {
      // $scope.todos.splice(index, 1);
      $scope.todos.$remove(id);
    };

    // Bind the todos to the firebase provider.
    $scope.todos = $firebase(todoRef);

  });
