(function() {
    'use strict';
    angular
        .module('inventory', [])
        .controller('HeaderController', function Header() {
        	
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

		var inventory = angular.module('inventory',[]);

		inventory.controller('HeaderController', function(vm) {
			vm.isActive = false;
			vm.activeCheck = function() {
				$vm.isActive = !vm.isActive;
			}
		});

})



        ;})();


