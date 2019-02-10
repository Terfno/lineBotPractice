'use strict'

require('dotenv').config()

const express = require('express')
const line = require('@line/bot-sdk')
const PORT = process.env.PORT || 3000

const config = {
    channelSecret: process.env.channelSecret,
    channelAccessToken: process.env.channelAccessToken
}

const app = express()

app.post('/webhook', line.middleware(config), (req, res) => {
    console.log(req.body.events)
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
})

const client = new line.Client(config)

let handleEvent = (event) => {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null)
    }

    if (event.message.text == 'hello') {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'world'
        })
    } else if (event.message.text == '敗北者') {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'ハァ…ハァ…敗北者……?\n取り消せよ…!!  ハァ…  今の言葉……!!!'
        })
    } else {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: event.message.text
        })
    }
}

app.listen(PORT, () => {
    console.log('server at '+PORT)
})
