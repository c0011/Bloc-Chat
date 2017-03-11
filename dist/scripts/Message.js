(function () {
	function Message($firebaseArray, $cookies) {
		var ref = firebase.database().ref().child('message');
		var messages = $firebaseArray(ref);
		
		return {
			getByRoomId: function (roomId) {
				return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
			},
			send: function (newMessage, roomId) {
				messages.$add({
					content: newMessage,
					roomId: roomId,
					username: $cookies.blocChatCurrentUser
				});
			}
		};
	}
	
	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();