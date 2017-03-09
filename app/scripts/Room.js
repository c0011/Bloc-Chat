(function () {
	function Room ($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var roomsArray = $firebaseArray(ref);
		
		var addRoom = function (newRoom) {
			roomsArray.$add({name: newRoom});
		};
		
		var rooms = {
			getRooms: getRooms,
			addRoom: addRoom
		};
		
		return rooms;
		
		function getRooms() {
			return {
				all: roomsArray
			};
		}
		
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();