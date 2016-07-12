vm.activeTabItems = function(){

}

save something to local storage

.factory('API', function(){

var vm = this;

function setStorage(name,data) 
{
	var data = JSON.stringify(data);
	localStorage.setItem(name,data);
}

get somethign from local storage

function getStorage(name)
{
	var data = localStorage.getItem(name);
	data = JSON.parse(data);
	return data;
}

return {
	setStorage,
	getStorage,
}
}