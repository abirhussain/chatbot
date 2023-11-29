var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");

var user = { message: "" };

sendBtn.addEventListener("click", function (e) {
  var userMsg = textbox.value;
  if (userMsg === "") {
    alert("Please type a message");
  } else {
    let userMsgTxt = userMsg.trim();
    user.message = userMsgTxt;
    textbox.value = "";
    showMessage(userMsg);
  }
});

function showMessage(userMessage) {
  var messageElement = document.createElement("div");
  messageElement.innerHTML =
    "<span> You: </spa>" + "<span>" + userMessage + "</span>";
  messageElement.style.textAlign = "right";
  messageElement.style.margin = "10px";
  chatContainer.appendChild(messageElement);
}
