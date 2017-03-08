(function () {
	function Room ($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var roomsArray = $firebaseArray(ref);
		
		var rooms = {
			getRooms: getRooms
		}
		
		return rooms;
		
		function getRooms() {
			return {
				all: roomsArray
			};
		};
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();