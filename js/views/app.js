define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
	'events',
  'text!templates/layout.html',
  'views/menu/menu'
], function($, _, Backbone, Vm, Events, layoutTemplate, MenuView){
  var AppView = Backbone.View.extend({
    el: 'body',
    render: function () {

      // Render main layout template
			var that = this;
      $(this.el).html(layoutTemplate); 


      // Attach hooks to links for pushstate
      $('body').on('click', 'a', function (e) {
        clicky.log($(this).attr('href'), $(this).attr('href'), 'pageview')
        Backbone.router.navigate($(this).attr('href'), true);
        return false;
      });


      var menuView = new MenuView();
      menuView.render();

      // Hackery for pushState when developing
      var root = '/';
      if(window.location.hostname === 'localhost') {
        root = '/repos/seoserver-site/';
      }
      Backbone.history.start({pushState: true, root: root});



		} 
	});
  return AppView;
});
