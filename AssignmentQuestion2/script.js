
/*

 Write a JavaScript program to make an AJAX request using the XMLHttpRequest object to fetch data
from a remote API (https://jsonplaceholder.typicode.com/users)  and log a list of user names from the
response to the browser console and output.

*/

 // Function to make an AJAX request
 function makeRequest(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var responseData = JSON.parse(xhr.responseText);
        callback(responseData);
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }

  // Function to handle the response and log user names
  function handleResponse(responseData) {
    var userList = document.getElementById('userList');
    
    // Log to the console
    console.log('User Names:');
    responseData.forEach(function(user) {
      console.log(user.name);
      
      // Append to the HTML output
      var listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
  }

  // Make the AJAX request
  makeRequest("https://jsonplaceholder.typicode.com/users", handleResponse);