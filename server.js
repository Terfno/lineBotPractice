require('dotenv').config()

const LINE_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN

const express = require('express")
const bodyParser = require('body-parser')
const requet = require('request')

const app = express()

app.post('/webhook', (req,res,next) => {
	res.status(200).end()
	for(var event of req.body.events){
		if(event.type == 'message' && event.message.text == 'hello'){
			var headers = {
				'Content-Type':'application/json',
				'Authorization':'Bearer'+LINE_CHANNEL_ACCESS_TOKE
			}
			var body = {
				replyToken:event.replyToken,
				messages:[{
					type:'text',
					text:'world'
				}]
			}
			var url = 'https://api.line.me/v2/bot/message/reply'
			request({
				url:url,
				method:'POST',
				headers:headers,
				body:body,
				json:true
			})
		}
	}
})

