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
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null)
    }else if (event.message.text == 'hello') {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'world'
        })
    }else if (event.message.text == '敗北者') {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'ハァ…ハァ…敗北者……?\n取り消せよ…!!\nハァ…\n今の言葉……!!!'
        })
    } else if (event.message.text == '天気') {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'ちょい待ち'
        },pushWeather(event.source.userId))
    } else if (event.message.text == '💩') {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: 'は？'
        })
    }else {
        return client.replyMessage(event.replyToken, {
            type: 'text',
            text: event.message.text
        })
    }
}

let replyLater = async (userId) => {
    return client.replyMessage(event.replyToken, {
        type: 'text',
        text: 'ちょい待ち'
    })
}

let pushWeather = async (userId)=> {
    var res = await axios.get('http://weather.livedoor.com/forecast/webservice/json/v1?city=330020')
    var item = res.data

    await client.pushMessage(userId, {
        type: 'text',
        text: item.description.text
    })
}

app.listen(PORT, () => {
    console.log('server at '+PORT)
})

