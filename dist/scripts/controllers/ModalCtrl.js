(function () {
	function ModalCtrl($uibModalInstance, Room) {
		this.text = "";
		
		this.create = function() {
			Room.addRoom(this.text);

			$uibModalInstance.close();
		};
		
		this.cancel = function() {
			$uibModalInstance.dismiss();
		};
	}
	
	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();