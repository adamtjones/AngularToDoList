(function() {
    'use strict';
    angular
        .module('inventory', [])
        .controller('HeaderController', function Header() {
            var vm = this;
            vm.counter = 0;
            if (localStorage.getItem("todos") !== null) {
                this.data = JSON.parse(localStorage.getItem("todos"));
            } else {
                this.data = [];
            }
            this.submit = function(isValid) {
                var newObj = {
                    "name": vm.form.name,
                    "isComplete": false
                };
                if (isValid) {
                    vm.data.push(newObj);
                    console.log(vm.data);
                    localStorage.setItem('todos', JSON.stringify(vm.data));
                    this.form = [];
                }
            };
            vm.changeStatus = function(item) {
                if (item.isComplete === true) {
                    item.isComplete = false;
                } else {
                    item.isComplete = true;
                }
            };

        });
});


//delete the Todo - not working
/*vm.remove = function(item) {
            var taco = vm.todo.indexOf(item);

            vm.todo.splice(taco, 1);
        };*/





/*Controller markings*/
/*Line 1 function markings*/
//clear completed Todos
/*vm.clearCompletedTodos = function (item) {
                store.clearCompleted(item);
            };*/

/*vm.clear = function() {
            vm.items = vm.items.filter(function(item) {
                    return !item.isComplete;
                }
            );};*/