$(document).ready(function() {
    document.getElementById("post-to-fb").addEventListener("click", postToFacebook)
  });
  
function postToFacebook() {
    // Set up the necessary parameters
    // don't forget to generate your access token every day,  https://developers.facebook.com/tools/explorer/1288162832138619/?method=POST&path=116821598103786%2Ffeed%3Fmessage%3DTest%20from%20APIgdfgfdgdf&version=v17.0
    const accessToken =
      "EAANZBnCeByS4BO8Cbs4GJqu9XdTZByt2S0h3he5pZB0MOcq8mRKMuzS1YlHrhZCvMJHJXgIYd8ZANzX1tRJmVn4YXzXddcK2xtKngbWDEx8bNpA4RDCwtzBTFm0GjyoZBCs0DUAxGLDfdv92dP2kSxCVnUpWteyMeCTaXlZAs1CgVEpHR68xrZCGJPJP5P9MwPxbchVRAxUL7sg5wkVfRp6KqNEZD";
    const postMessage = `👕 Exciting News! 👚 Our awesome clothing company, Dikana, is having a NEW SALE! 🛍️ Hurry in because our limited stock is flying off the shelves. Don't miss out on the latest styles – come grab your favorites today! 🏃‍♂️🛒 #DikanaFashion #LimitedStock #SaleAlert.`;
    var pageId = "126410420545483";
  
    // Construct the API endpoint URL
    var apiUrl = "https://graph.facebook.com/v16.0/" + pageId + "/feed";
  
    // Set up the post data
    var postData = {
      message: postMessage,
      access_token: accessToken,
    };
  
    // Send the post request
    $.ajax({
      url: apiUrl,
      type: "POST",
      data: postData,
      success: function (response) {
        console.log("Post successfully sent!");
        alert("Post successfully sent!");
      },
      error: function (xhr, status, error) {
        console.log("Post request failed. Error:", error);
      },
    });
  }