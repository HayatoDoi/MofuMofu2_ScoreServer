/**
 * スコアを受け取り, ランキングを返す
 * File name : app.js
 * Copyright (c) 2017, Hayato Doi
 * ------------------------------------------------
 * This software is released under the MIT License.
 * https://github.com/nikaidoumari/MofuMofu2_ScoreServer/blob/master/LICENSE
 */

//------------------------------------------
// ライブラリのインストール
//------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const SERVER = require('./config').SERVER;
const app = express();

//------------------------------------------
// POSTデータをJSONで受け取る
//------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//------------------------------------------
// ルーティング
// /router/index.jsでカキカキ
//------------------------------------------
const index = require('./router/index.js');
app.use(SERVER.ROOT, index);
//デフォルトページ
app.get('/',(req, res) => {
	res.send('MofuMofu_ScoreServer');
});

//------------------------------------------
// サーバの立ち上げ
// @portは設定に書いてある
//------------------------------------------
app.listen(SERVER.PORT, ()=>{
	console.log("Server Listen... : http://localhost"+ SERVER.ROOT+":"+SERVER.PORT);
});

