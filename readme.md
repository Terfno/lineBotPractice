# オウム返しline bot
botの練習

## .env
```
channelSecret=""
channelAccessToken=""

```
任意の環境変数を設定してherokuにpushすればオウム返しbotができる

## 機能
### オウム返し
ユーザーが任意のテキストメッセージを送るとそのまま帰す。
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">きたああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！ <a href="https://t.co/eKXVYApDAr">pic.twitter.com/eKXVYApDAr</a></p>&mdash; てるふの😏 (@terfno_mai) <a href="https://twitter.com/terfno_mai/status/1094469032999145472?ref_src=twsrc%5Etfw">February 10, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

現在は`hello`と送ると`world`と送り返すのでtweetのようにはならない

### hello
ユーザーが`hello`と送ると`world`と返す。
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">これがしたかった <a href="https://t.co/YxbrRXwqFF">pic.twitter.com/YxbrRXwqFF</a></p>&mdash; てるふの😏 (@terfno_mai) <a href="https://twitter.com/terfno_mai/status/1094477827028578304?ref_src=twsrc%5Etfw">February 10, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 敗北者
ユーザーが`敗北者`と送ると`ハァ…ハァ…敗北者……?\n取り消せよ…!!  ハァ…  今の言葉……!!!`と返す。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">これがしたかった <a href="https://t.co/YxbrRXwqFF">pic.twitter.com/YxbrRXwqFF</a></p>&mdash; てるふの😏 (@terfno_mai) <a href="https://twitter.com/terfno_mai/status/1094477827028578304?ref_src=twsrc%5Etfw">February 10, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### 天気
ユーザーが`天気`と送ると`ちょい待ち`と返した後、`http://weather.livedoor.com/weather_hacks/webservice`から津山の天気情報を取得して返信する。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">天気実装 <a href="https://t.co/e6fQnoB1Jt">pic.twitter.com/e6fQnoB1Jt</a></p>&mdash; てるふの😏 (@terfno_mai) <a href="https://twitter.com/terfno_mai/status/1095150232700997632?ref_src=twsrc%5Etfw">February 12, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
