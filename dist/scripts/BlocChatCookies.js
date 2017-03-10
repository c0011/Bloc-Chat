(function () {
	function BlocChatCookies($cookies, $uibModal) {
		var currentUser = $cookies.get('blocChatCurrentUser');
		if(!currentUser || currentUser === '') {
			$uibModal.open({
				templateUrl: '/templates/newUsername.html',
				controller: 'UserModalCtrl as userModal'
			})
		}
	}
	
	angular
		.module('blocChat')
		.run(['$cookies', '$uibModal', BlocChatCookies]);
})();