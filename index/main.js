app

.factory("StreamService"
	, [       "$firebase"
	, function($firebase) {
	var ref = new Firebase("https://radiant-fire-2835.firebaseio.com/web-stream-wall");
	return $firebase(ref);
}])

.controller("IndexCtrl"
	, [       "$scope", "$sce", "$modal", "$timeout", "StreamService", "localStorageService"
	, function($scope,   $sce,   $modal,   $timeout,   StreamService,   localStorageService) {

	$scope.manager = !!location.href.toString().match(/manager/);

	$scope.streamDefault = [
		{
			name: "chun0121",
			url: "http://www.ustream.tv/channel/chun0121",
			embed: "http://www.ustream.tv/embed/17866960"
		},
		{
			name: "nonukestw",
			url: "http://www.ustream.tv/channel/nonukestw",
			embed: "http://www.ustream.tv/embed/13620594"
		},
		{
			name: "姐姐。五塊",
			url: "http://www.ustream.tv/channel/%E5%A7%90%E5%A7%90-%E4%BA%94%E5%A1%8A-%E6%9E%97%E6%A3%AE%E5%8D%97%E8%B7%AF%E5%85%AB%E5%B7%B7%E7%9B%B4%E6%92%AD",
			embed: "http://www.ustream.tv/embed/17920008",
			disable: true
		},
		{
			name: "文源LIVE秀",
			embed: "http://www.ustream.tv/embed/7468658"
		},
		{
			name: "sean87028",
			embed: "http://www.ustream.tv/embed/17811041"
		},
		{
			name: "麵線",
			embed: "http://www.ustream.tv/embed/17562385"
		},
		{
			name: "rielf1209",
			embed: "http://www.ustream.tv/embed/17919218"
		}
	];

	$scope.autoplay = (localStorageService.get("autoplay") === "true") || true;

	StreamService.$bind($scope, "streams");

	$scope.getUrl = function(stream) {
		if (stream.embed && !stream.disable) {
			stream.embed = $sce.trustAsResourceUrl(stream.embed).toString();
			if ($scope.autoplay) {
				return $sce.trustAsResourceUrl(stream.embed + "?autoplay=true");
			} else {
				return $sce.trustAsResourceUrl(stream.embed + "?autoplay=false");
			}
		}
		return "empty.html";
	};

	$scope.toggleStream = function(stream) {
		stream.disable = !stream.disable;
	};

	$scope.openAddModal = function() {
		$modal.open({
			templateUrl: "index/AddModalContent.html",
			controller: "AddModalCtrl"
		})
		.result
			.then(function(data) {
				$scope.streams.$add(data);
			});
	};

	$scope.$watch("autoplay", function() {
		localStorageService.set("autoplay", $scope.autoplay);
	});

}])

;