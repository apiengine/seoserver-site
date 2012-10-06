define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/examples/plain.html',
], function($, _, Backbone, homeTemplate){
  var HomePage = Backbone.View.extend({
    el: '.page',
    initialize: function () {
      var that = this;
      // Bind to the Session auth attribute so we
      // make our view act recordingly when auth changes
    },
    events: {
      'click .showseo': 'showSeo'
    },
    showSeo: function () {
      $('.showseo-output').val('Loading...');
      $.ajax('http://seo.apiengine.io:3000/' + window.location.pathname, {
        success: function (res) {
          $('.showseo-output').val(res);
        }
      })
    },
    render: function () {
      this.$el.html(homeTemplate); 
      $('title').text('Seo Server - Plain HTML Example')
    }
  });
  return HomePage;
});
