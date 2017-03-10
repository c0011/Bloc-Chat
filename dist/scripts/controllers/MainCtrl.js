(function () {
	function MainCtrl (Room, $uibModal) {
		this.chatRooms = Room.getRooms().all;
		this.activeRoom = null;
		
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
	}
	
	angular
		.module('blocChat')
		.controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
})();