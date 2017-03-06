/**
 * 
 */

angular.module('core').constant("routeLocation", {

	val : "./html/snippet/"		

}).config(
function($routeProvider, routeLocation)
{	
	$routeProvider.when('/',
			{
				templateUrl : routeLocation.val + 'web_chat.html',
				controller: 'ChatController',
				controllerAs: 'controller'
			}
	).otherwise(
			{
				redirectTo : '/'
			}
	)
	
});