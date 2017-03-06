/**
 *
 */

angular.module('core').controller('ChatController', function($scope) {
	var controller = this;

	var socket = new WebSocket("ws://10.1.1.162:8080/web_socket/chat");

	socket.onclose = function() {

		//periodically try to reconnect

	}

	socket.onmessage = function(message) {

		controller.messages.push(JSON.parse(message.data));
		$scope.$apply();
	};


	controller.visible = true;
	controller.expandOnNew = true;

	controller.messages = [];


	controller.sendMessage = function(message, username) {
		if (message && message !== '' && controller.username) {
			var message = {
				'username' : controller.username,
				'content' : message
			};

			socket.send(JSON.stringify(message));
		}
	};


});
