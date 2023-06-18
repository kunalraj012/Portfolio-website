document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Send form data to the server (replace the URL with your server-side script)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://your-server-side-script-url", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Display success message
        document.getElementById("success-message").textContent = "Message sent successfully!";
      }
    };
    
    // Prepare data to be sent as JSON
    var data = {
      name: name,
      email: email,
      message: message
    };
    
    // Send JSON data as the request body
    xhr.send(JSON.stringify(data));
  });
  