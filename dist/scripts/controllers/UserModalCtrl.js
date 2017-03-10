(function () {
	function UserModalCtrl($uibModalInstance, $cookies) {
		
		this.setUser = function() {
			if(this.newUser != null) {
				$cookies.blocChatCurrentUser = this.newUser;
				$uibModalInstance.close();
			}
		};
	}
	
	angular
		.module('blocChat')
		.controller('UserModalCtrl', ['$uibModalInstance', '$cookies', UserModalCtrl]);
})();