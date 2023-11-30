var sendBtn = document.getElementById("sendBtn");
var textbox = document.getElementById("textbox");
var chatContainer = document.getElementById("chatContainer");
// var bankBtn = document.getElementById("bank")
// var genBtn = document.getElementById("general")
// var condBtn = document.getElementById("ts")

var user = { message: "" };
var collectionOfResponseMsg = [
	{
		message: "hi",
		response: `<span style="background:rgb(211,211,211); padding-left:2px; padding-right:2px;">Hello! I am EBL DIA, your virtual assistant. How may I help you ? Please select a quick link bellow </span><br>
    <span style="background:rgb(211,211,211); padding-left:2px; padding-right:2px;">Please select a quick link bellow </span><br>
    <span> <button id="bank" type="button" value="Banking Information" class="btn btn-outline-primary">Banking Information</button> </span>
    <span> <button id="general" type="button" class="btn btn-outline-primary">General Service Information</button> </span>
    <span> <button id="ts" type="button" class="btn btn-outline-primary">Terms & Conditions</button> </span>`,
		period: "intro",
	},
	{
		message: "hello",
		response:
			"Hello! I am EBL DIA, your virtual assistant. How may I help you ?",
		period: "",
	},
  {
		message: "banking information",
		response: `<span style="background:rgb(211,211,211); padding-left:2px; padding-right:2px;">Please select a quick link bellow </span><br>
    <span> <button id="account" type="button" value="Account Information" class="btn btn-outline-primary">Account Information</button> </span>
    <span> <button  id="card" type="button" value = "Card Information" class="btn btn-outline-primary">Card Information</button> </span>
    <span> <button  id="gs" type="button" value ="General Service Information" class="btn btn-outline-primary">General Service Information</button> </span>`,
		period: "banking",
	},
  {
    message :"account information",
    response: `<span>I can surely help you with that.
    But first I need to check your identity.</span><br>
    <span>Could you please provide your registered 11 digit mobile number with EBL?</span>`,
    period: ""
  },
	{
		message: "no",
		response:
			" I hope you have received your expected services. Thank you for allowing me to assist you. See you soon. goodbye! Have a nice time!",
		period: "",
	},
];

sendBtn.addEventListener("click", function (e) {
	var userMsg = textbox.value;
	if (userMsg === "") {
		alert("Please type a message");
	} else {
		let userMsgTxt = userMsg.trim();
		user.message = userMsgTxt;
		textbox.value = "";
		showMessage(userMsg);
		showReply(userMsg);
	}
});

function showMessage(userMessage) {
	var messageElement = document.createElement("div");
	messageElement.innerHTML = `<span class="text-white bg-primary" style=" border-radius: 25%; padding: 10px;">  ${userMessage}  </span>`;
	messageElement.style.textAlign = "right";
	messageElement.style.margin = "10px";
	chatContainer.appendChild(messageElement);
}

function showReply(userMessage) {
	console.log(userMessage);
	var chatbotMsg = "";
	var period = "";
	var messageElement = document.createElement("div");
	var result = collectionOfResponseMsg.filter((val) =>
		val.message.includes(userMessage.toLowerCase())
	);
	if (result.length > 0) {
		var res = result[0].response;
		period = result[0].period;
		chatbotMsg = res;
	} else {
		chatbotMsg = `<span style="background:rgb(211,211,211); padding-left:2px; padding-right:2px;">Please select correct option</span>`;
	}

	messageElement.innerHTML = `<span>Bot: </span> ${chatbotMsg} `;
	chatContainer.appendChild(messageElement);

	if (period === "intro") {
		addEvents("bank");
		addEvents("general");
		addEvents("ts");
	}else if (period === "banking") {
    addEvents("account")
    addEvents("card")
    addEvents("gs")
  }
}

function addEvents(id) {
	document.getElementById(id).addEventListener("click", function (e) {
		const value = document.getElementById(id).value;
		console.log(value);
		showMessage(value);
		sleep(3000);
		showReply(value);
	});
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
