/**
 * ルーティングを行う
 * File name : router/index.js
 * Copyright (c) 2017, Hayato Doi
 * ------------------------------------------------
 * This software is released under the MIT License.
 * https://github.com/nikaidoumari/MofuMofu2_ScoreServer/blob/master/LICENSE
 */
const express = require('express');
const router = express.Router();
const DataBase = require('../module/DataBase');
const path = require('path');


router.post('/score',(req, res) => {
	// POST data
	// name : 登録名
	// score : スコア
	const db = new DataBase(path.resolve(__dirname + '/../ScoreServer.sqlite3'));
	db.registrationScore(req.body.name,Number(req.body.score));
	console.log(req.body)
	res.send('MofuMofu_ScoreServer');
});
router.post('/ranking.json',(req, res) => {
	//POST ランキングデータを返す
	const db = new DataBase(path.resolve(__dirname + '/../ScoreServer.sqlite3'));
	db.getRanking((rows)=>{
		console.log(rows);
		res.json(rows);
	});
});

module.exports = router;

