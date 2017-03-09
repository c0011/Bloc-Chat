(function () {
	function MainCtrl (Room, $uibModal) {
		this.chatRooms = Room.getRooms().all;
		
		this.open = function() {
			$uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalCtrl as modal'
			})
		};
	}
	
	angular
		.module('blocChat')
		.controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
})();