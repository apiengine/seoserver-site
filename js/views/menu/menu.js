define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'events',
  'text!templates/menu.html',
], function($, _, Backbone, Vm, Events, menuTemplate){
  var MenuView = Backbone.View.extend({
    el: '.menu',
    initialize: function () {
      
      // This snipper should usually be loaded elsewhere
      // It simply takes a <form> and converts its values to an object

        
    },
    render: function () {

      var that = this;
      this.$el.html(menuTemplate);
    } 
  });
  return MenuView;
});
