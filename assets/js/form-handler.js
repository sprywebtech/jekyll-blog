document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        const status = document.getElementById('form-status');
        
        status.innerHTML = "Sending...";
        
        // Replace with your actual Make.com webhook URL
        fetch('https://hook.us1.make.com/vgg5au2yn9gvwt4xhs2fzm9b17qky48r', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            status.innerHTML = "Message sent successfully!";
            form.reset();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          status.innerHTML = "Error sending message. Please try again.";
        });
      });
    }
  });