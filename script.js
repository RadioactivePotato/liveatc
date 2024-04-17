window.onload = function() {
    askForURL();
  };
  
  function askForURL() {
    var url = prompt("Please enter the URL: (Visit /help.txt for help)");
    if (url !== null && url !== "") {
      createNewWindow(url);
    }
  }
  
  function createNewWindow(url) {
    var newWindow = window.open('about:blank');
    var htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>LiveATC</title>
              <link rel="stylesheet" type="text/css" href="style.css">
          </head>
          <body>
              <h1>LiveATC</h1>
              <audio controls>
                  <source src="${url}" type="audio/mpeg">
                  Your browser does not support the audio element.
              </audio>
          </body>
          </html>
      `;
    newWindow.document.write(htmlContent);
  }
  