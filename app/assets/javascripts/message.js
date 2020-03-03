$(function(){ 
  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="message">
          <div class="message__upper-info-box">
            <p class="message__upper-info__talker">
              ${message.user_name}
            </p>
            <p class="message__upper-info__date">
              ${message.created_at}
            </p>
          </div>
          <div class="message__upper-info-text">
            ${message.content}
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
      `<div class="message">
        <div class="message__upper-info-box">
          <p class="message__upper-info__talker">
            ${message.user_name}
          </p>
          <p class="message__upper-info__date">
            ${message.created_at}
          </p>
        </div>
        <div class="message__upper-info-text">
          ${message.content}
        </div>
      </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
  .done(function(data){
    var html = buildHTML(data);
    $('.messages').append(html);      
    $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    $('.submit-btn').prop('disabled', false);
    $('form')[0].reset();
  })
  .fail(function(){
    alert('error');
  });
  })
});
