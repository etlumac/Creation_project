let tg = {
    token: "6789866050:AAEe0c7DYXEX0BxckucOg0Q9cD-ojhYmiyg", // Your bot's token that got from @BotFather
    chat_id: "-4190366568" // The user's(that you want to send a message) telegram chat id
  }
  
  const sendMessage = function (text){
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
  }
  export default sendMessage;