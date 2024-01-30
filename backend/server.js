process.env.NTBA_FIX_319 = 1
const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001
const token = process.env.TELEGRAM_API_TOKEN || '6789866050:AAEe0c7DYXEX0BxckucOg0Q9cD-ojhYmiyg'
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/

const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(token, { polling: true })
const chatId = '-4190366568'

app.use(bodyParser.json())

const dataFilePath = path.join(__dirname, 'admin.txt')

app.get('/', (req, res) => {
  res.json({
    message: 'Home route'
  })
})

app.get('/api', (req, res) => {
  res.json({
    message: 'server works somehow'
  })
})

app.post('/api/submitForm', (req, res) => {
  const { name, email, message } = req.body

  if (!validateEmail(email)) {
    return res.status(400).json({ success: false, message: 'Cannot submit form\n Invalid email' })
  }
  const formData = {
    name,
    email,
    message,
    timestamp: formatTimestamp(new Date())
  }

  const formDataString = JSON.stringify(formData, null, 2)
  bot.sendMessage(chatId, 'Новый результат формы: ' + formDataString)
  fs.appendFileSync(dataFilePath, `${formDataString}\n`, 'utf8')

  res.status(200).json({ success: true, message: 'Form data submitted successfully' })
})

function formatTimestamp (date) {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

function validateEmail (email) {
  return emailRegex.test(email)
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`)
})
