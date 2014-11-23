// YOUR CODE HERE:
app = {

    // server: 'https://api.parse.com/1/classes/chatterbox',
    server: 'http://127.0.0.1:3000',

    init: function() {
      console.log('running chatterbox');
      // Get username
      app.username = window.location.search.substr(10);

      app.onscreenMessages = {};
      app.blockedUsers = ['BRETTSPENCER', 'Chuck Norris'];

      // cache some dom references
      app.$text = $('#message');


      app.loadMsgs();
      setInterval( app.loadMsgs.bind(app), 10000);

      $('#send').on('submit', app.handleSubmit);
    },

    handleSubmit: function(e){
      e.preventDefault();

      var message = {
        username: app.username,
        message: app.$text.val(),
        roomname: 'greatest room'
      };

      app.$text.val('');

      app.sendMsg(message);
    },

    renderMessage: function(message){
      var $user = $("<div>", {class: 'user'}).text(message.username);
      var $text = $("<div>", {class: 'text'}).text(message.message);
      var $message = $("<div>", {class: 'chat', 'data-id': message.id }).append($user, $text);
      return $message;
    },

    displayMessage: function(message){
      if( app.blockedUsers.indexOf(message.username) < 0 ){
        if( !app.onscreenMessages[message.id] ){
          var $html = app.renderMessage(message);
          $('#chats').prepend($html);
          app.onscreenMessages[message.id] = true;
        }
      }
    },

    displayMessages: function(messages){
      for( var i = 0; i < messages.length; i++ ){
        app.displayMessage(messages[i]);
      }
    },

    loadMsgs: function(){
      $.ajax({
        url: app.server + '/messages',
        // data: { order: '-createdAt' },
        contentType: 'application/json',
        success: function(jsonArray){
          console.log("RETURNED DATA ", jsonArray);
          app.displayMessages(jsonArray);
        },
        complete: function(){
          app.stopSpinner();
        }
      });
    },

    sendMsg: function(message){
      app.startSpinner();
      $.ajax({
        type: 'POST',
        url: app.server + "/messages",
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function(json){
          console.log("SENT MESSAGE")
          message.id = json.id;
          // app.displayMessage(message);
        },
        complete: function(){
          app.stopSpinner();
        }
      });
    },

    startSpinner: function(){
      $('.spinner img').show();
      $('form input[type=submit]').attr('disabled', "true");
    },

    stopSpinner: function(){
      $('.spinner img').fadeOut('fast');
      $('form input[type=submit]').attr('disabled', null);
    }
};
