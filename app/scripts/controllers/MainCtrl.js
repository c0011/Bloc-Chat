(function () {
	function MainCtrl (Room, Message, $uibModal) {
		this.chatRooms = Room.getRooms().all;
		this.activeRoom = null;
		this.newMessage = "";
		
		this.open = function() {
			$uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl as modal'
			})
		};
		
		this.setRoom = function(room) {
			this.activeRoom = room;
			this.roomTitle = room.name;
			this.messages = Room.getMessages(room.$id);
		}
		
		this.sendMessage = function (room) {
			Message.send(this.newMessage, room.$id);
		}
	}
	
	angular
		.module('blocChat')
		.controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
})();