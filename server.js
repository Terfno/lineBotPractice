'use strict'

require('dotenv').config()

const express = require('express')
const line = require('@line/bot-sdk')
const axios = require('axios')

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
    console.log(event.source.userId)
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null)
    } else if (event.message.text == 'hello') {
        console.log(event.message.text)
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'world'
        })
    } else if (event.message.text == '敗北者') {
        console.log(event.message.text)
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'ハァ…ハァ…敗北者……?\n取り消せよ…!!\nハァ…\n今の言葉……!!!'
        })
    } else if (event.message.text == '天気') {
        console.log(event.message.text)
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'ちょい待ち'
        },pushWeather(event.source.userId))
    } else if (event.message.text == '💩') {
        console.log(event.message.text)
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'は？'
        })
    } else if (decisionEmoji(event.message.text)) {
        console.log(event.message.text)
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'LINEは:thinking_face:とかやっても🤔ってならないよね…'
        })
    }else {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: event.message.text
        })
    }
}

let pushWeather = async (userId)=> {
    var res = await axios.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=330020')
    var item = res.data

    await client.pushMessage(userId, {
        type: 'text',
        text: item.description.text
    })
}

let decisionEmoji = (text) => {
    text = text.split('')
    if (text[0] == ':' && text[(text.length) - 1] == ':') {
        return true
    } else {
        return false
    }
}

app.listen(PORT, () => {
    console.log('server at '+PORT)
})
