(function () {
	function MainCtrl (Room) {
		this.chatRooms = Room.getRooms().all;
	}
	
	angular
		.module('blocChat')
		.controller('MainCtrl', ['Room', MainCtrl]);
})();