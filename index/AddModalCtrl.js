app

.controller("AddModalCtrl", ["$scope", "$modalInstance"
	, function($scope, $modalInstance) {

	$scope.result = {};

	$scope.ok = function () {
		$modalInstance.close($scope.result);
	};

	$scope.cancel = function () {
		$modalInstance.dismiss("cancel");
	};

}])

;
