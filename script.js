// JQUERY
$(document).ready(function () {
    $('#chatbot-form').submit(function (event) {
      event.preventDefault();
      const message = $('#chatbot-input').val();
      $.ajax({
        type: 'POST',
        // url: 'http://localhost:3000/chatbot',
        url: 'https://four537-lab-2.onrender.com/chatbot',
        // url: 'https://nabil828-comp4537-w23-labs-lab2.onrender.com/chatbot',
        data: { message: message },
        success: function (response) {
          let newMessage = $('<div>', { class: 'message' }).text(response.text);
          let removeButton = $('<button>', { class: 'remove-button' }).text('Remove');
          newMessage.append(removeButton);
          $('#chat-history').append(newMessage);
        }
  
      });
      $(document).on('click', '.remove-button', function () {
        $(this).parent().remove();
      });
  
    });
  });
  
  
  // VANILLA JS
  // document.addEventListener("DOMContentLoaded", function () {
  //   document.getElementById('chatbot-form').addEventListener('submit', function (event) {
  //     event.preventDefault();
  //     const message = document.getElementById('chatbot-input').value;
  //     fetch('http://localhost:3000/chatbot', {
  //       // fetch('https://nabil828-comp4537-w23-labs-lab2.onrender.com/chatbot', {
  //       method: 'POST',
  //       body: JSON.stringify({ message: message }),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(response => {
  //         console.log(response);
  //         const newMessage = document.createElement('div');
  //         newMessage.classList.add('message');
  //         newMessage.innerHTML = response.text;
  //         const removeButton = document.createElement('button');
  //         removeButton.classList.add('remove-button');
  //         removeButton.innerHTML = 'Remove';
  //         newMessage.appendChild(removeButton);
  //         document.getElementById('chat-history').appendChild(newMessage);
  //       })
  //       .catch(error => console.error('Error:', error));
  //   });
  //   document.addEventListener('click', function (event) {
  //     if (event.target.classList.contains('remove-button')) {
  //       event.target.parentNode.remove();
  //     }
  //   });
  // });







// function getNumberInfo(number, format) {
// 	const API_URL = `http://numbersapi.com/${number}/${format}`;
// 	fetch(API_URL).then(response => response.text()).then(data => {
// 		console.log(data);
// 	}).catch(error => {
// 		console.log(error);
// 	});
// }
// getNumberInfo(42, 'trivia');
