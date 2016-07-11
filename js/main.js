(function() {
    'use strict';
    angular
<<<<<<< HEAD
        .module('inventory', []);
})();
/*above is main.js*/
/*below will be controller.js*/
'use strict';

angular.module('inventory').controller('HeaderController', function Header() {
=======
        .module('inventory', [])
        .controller('HeaderController', function Header() {
>>>>>>> 3bbada78e369608382a06011a1a79ac87498e038
        	
        	var vm = this;

            if (localStorage.getItem("todos")!==null) {
            	this.data = JSON.parse(localStorage.getItem("todos"));
           } else {
            	this.data = [];
            }

<<<<<<< HEAD


=======
>>>>>>> 3bbada78e369608382a06011a1a79ac87498e038
		this.submit = function (isValid) {
		var newObj = {"name": this.form.name, "isComplete": false};
		
		if (isValid) {
			this.data.push(newObj);
			localStorage.setItem('todos', JSON.stringify(this.data));
			this.form = [];
		}
	};
<<<<<<< HEAD
		/*to toggle class*/
=======

>>>>>>> 3bbada78e369608382a06011a1a79ac87498e038
		var inventory = angular.module('inventory',[]);

		inventory.controller('HeaderController', function(vm) {
			vm.isActive = false;
			vm.activeCheck = function() {
				$vm.isActive = !vm.isActive;
			}
		});

<<<<<<< HEAD

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




=======
>>>>>>> 3bbada78e369608382a06011a1a79ac87498e038
})



<<<<<<< HEAD
        ;
=======
        ;})();
>>>>>>> 3bbada78e369608382a06011a1a79ac87498e038


