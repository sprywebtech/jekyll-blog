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
        fetch('http://localhost:5678/webhook-test/5496f20b-1e81-4ade-b1e0-fba6b686acff', {
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