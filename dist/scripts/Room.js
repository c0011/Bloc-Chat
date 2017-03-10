(function () {
	function Room ($firebaseArray) {
		var ref = firebase.database().ref().child("rooms");
		var messageRef = firebase.database().ref().child("message").orderByChild("roomId");
		var roomsArray = $firebaseArray(ref);
		
		var getMessages = function (roomId) {
			return $firebaseArray(messageRef.equalTo(roomId));
		};
		
		var addRoom = function (newRoom) {
			roomsArray.$add({name: newRoom});
		};
		
		var rooms = {
			getRooms: getRooms,
			addRoom: addRoom,
			getMessages: getMessages
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