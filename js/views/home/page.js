define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/page.html',
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
      $('title').text('Seo Server - Enable SEO for your Javascript applications')
      this.$el.html(homeTemplate); 
    }
  });
  return HomePage;
});
