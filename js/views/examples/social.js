define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/examples/social.html'
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
      var that = this;
      $('title').text('Seo Server - Social Media Example')
      this.$el.html('Loading');
      $.ajax({
          url: 'http://api.twitter.com/1/statuses/user_timeline.json/',
          type: 'GET',
          dataType: 'jsonp',
          data: {
              screen_name: 'apiengine'
          },
          success: function(data, textStatus, xhr) {
            console.log(data);
            that.$el.html(_.template(socialTemplate, {_:_, data:data}));            
          }   

      }); 
    }
  });
  return HomePage;
});
