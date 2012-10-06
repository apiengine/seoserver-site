define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/examples/json.html',
], function($, _, Backbone, socialTemplate){
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
      $('title').text('Seo Server - JSON Example')
      var that = this;
      this.$el.html('Loading');
     $.ajax({
          url: 'http://stats.cdnjs.com?from=last wednesday&to=last wednesday',
          success: function(data, textStatus, xhr) {
            console.log(data);
            that.$el.html(_.template(socialTemplate, {_:_, data:data}));           
          }   

      }); 
    }
  });
  return HomePage;
});
