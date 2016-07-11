(function() {
    'use strict';
    angular
        .module('inventory', []);
})();
/*above is main.js*/
/*below will be controller.js*/
'use strict';

angular.module('inventory').controller('HeaderController', function Header() {
        	
        	var vm = this;

            if (localStorage.getItem("todos")!==null) {
            	this.data = JSON.parse(localStorage.getItem("todos"));
           } else {
            	this.data = [];
            }



		this.submit = function (isValid) {
		var newObj = {"name": this.form.name, "isComplete": false};
		
		if (isValid) {
			this.data.push(newObj);
			localStorage.setItem('todos', JSON.stringify(this.data));
			this.form = [];
		}
	};
		/*to toggle class*/
		var inventory = angular.module('inventory',[]);

		inventory.controller('HeaderController', function(vm) {
			vm.isActive = false;
			vm.activeCheck = function() {
				$vm.isActive = !vm.isActive;
			}
		});


		vm.delete = function(){
			this.data.splice(this.$index, 1);
		};

		vm.remaining = function() {
    	var count = 0;
    	angular.forEach(this.data, function(todo) {
      	count += todo.done ? 0 : 1;
    });
    return count;
  };


vm.clear = function() {
    var oldTodos = this.todos;
    this.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) this.todos.push(todo);
    });
  };

  vm.clearCompleted = function () {
        this.todos = _.filter(this.todos, function(todo){
            return !todo.done;
        });
    };




})



        ;


