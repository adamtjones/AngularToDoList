(function() {
    'use strict';
    angular
        .module('inventory', [])
        .controller('HeaderController', function Header() {

            var vm = this;

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
                if(item.isComplete === true)
                {
                    item.isComplete = false;
                }
                else
                {
                    item.isComplete = true;
                }
            };
/*up to this point with Jake*/
/*below is me Tuesday*/
            //delete the Todo - this works!
            vm.removeTodo = function(item) {
                store.delete(item);
            };

            /*
            Not working (items remaining count)
            vm.$watch('todos', function () {
            vm.remainingCount = $filter('filter')(todos, { completed: false }).length;
            vm.completedCount = todos.length - vm.remainingCount;
            vm.allChecked = !vm.remainingCount;
        }, true);*/

            //clicking 'Active' shows only Incomplete
            vm.activeCheck = function(active) {
                            vm.active = active;
                        };

/*haven't touched below*/
            
            

            
            //Items Left counter - looks good but not working
            vm.remaining = function remainingCount() {
                var count = 0;
                angular.forEach(vm.data, function(item) {
                    count += item.isComplete ? 0 : 1;
                });
                return count;
            };

            //clicking 'All' shows all
            vm.allTodo = function(active) {
                vm.active=
            }

            //clicking 'Completed' shows only Complete
            vm.allCompleted = function(active) {
                vm.active!=active;
            }

            //clicking 'Clear Completed' removes completed
            vm.clear = function() {
                var oldTodos = this.todos;
                this.todos = [];
                angular.forEach(oldTodos, function(todo) {
                    if (!todo.done) this.todos.push(todo);
                });
            };
            //or
            vm.clearCompleted = function() {
                this.todos = _.filter(this.todos, function(todo) {
                    return !todo.done;
                });
            };

        })

})();