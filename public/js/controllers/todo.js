function TodoCtrl ($scope) {
	$scope.totalTodos = 4;
	$scope.todos = [{text: 'first task', done: false}, {text: 'second task', done: false}];

	$scope.addTodo = function () {
		$scope.todos.push({text: $scope.formTodoText, done: false});
		$scope.formTodoText = '';
	}

	$scope.getTotalTodos = function () {
		return $scope.todos.length;
	}

	$scope.clearCompleted = function () {
		$scope.todos = _.filter($scope.todos, function(todo) {
			return !todo.done;
		})
	}
}