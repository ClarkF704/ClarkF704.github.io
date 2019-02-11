// Initialize Firebase
var config = {
    apiKey: "AIzaSyBmjUBa0qYSElQ_didlyGnUHY_4SMzVciY",
    authDomain: "clarks-portfolio.firebaseapp.com",
    databaseURL: "https://clarks-portfolio.firebaseio.com",
    projectId: "clarks-portfolio",
    storageBucket: "",
    messagingSenderId: "238251766294"
  };
  firebase.initializeApp(config);

var email = "";
var subject = "";
var message = "";

$("#submitBtn").on("click", function (e) {
    e.preventDefault();
    email = $("#emailInput").val().trim();
    subject = $("#subjectInput").val().trim();
    message = $("#messageInput").val().trim();

    //push data to firebase 
    firebase.database().ref().push({
        email: email,
        subject: subject,
        message: message,
    })
    //clear data field
    $("#emailInput").val("");
    $("#subjectInput").val("");
    $("#messageInput").val("");
    alert("Your Message has been sent")
});
