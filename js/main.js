function printer(){
  var myform = document.getElementById("postmessage");
  var formData = new FormData(myform);
  fetch("http://srv1.logi.li:6490/message", {
    method: "POST",
    body: JSON.stringify({ 'sender': 9, 'receiver': 3, 'content': formData.get("content"), 'color': formData.get("color")}),
  })
}
