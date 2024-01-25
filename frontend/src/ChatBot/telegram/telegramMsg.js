const tg = {
  chat_id: '-4190366568'
}

const sendMessage = function (text) {
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`
  const xht = new XMLHttpRequest()
  xht.open('GET', url)
  xht.send()
}
export default sendMessage
