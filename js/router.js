// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
	'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {

      'html-templates': 'htmlpage',
      'ajax-data': 'ajaxpage',
      'social-media-data': 'socialpage',
      '': 'home'
    }
  });

  var initialize = function(options){
    
		var appView = options.appView;
    var router = new AppRouter(options);
    Backbone.router = router;
    router.on('route:htmlpage', function () {
      require(['views/examples/html'], function(HtmlPage){
        var htmlPage = new HtmlPage();
        htmlPage.render();
      })
    });    
    router.on('route:ajaxpage', function () {
      require(['views/examples/json'], function(JsonPage){
        var jsonPage = new JsonPage();
        jsonPage.render();
      })
    });    
    router.on('route:socialpage', function () {
      require(['views/examples/social'], function(SocialPage){
        var socialPage = new SocialPage();
        socialPage.render();
      })
    });
    router.on('route:home', function () {
      require(['views/home/page'], function(HomePage){
        var homePage = new HomePage();
        homePage.render();
      })
    });
        
		router.on('route:defaultAction', function (username) {
		});
    
  };
  return {
    initialize: initialize
  };
});
