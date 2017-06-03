/**
 * データベースを作る
 * File name : createDataBase.js
 * Copyright (c) 2017, Hayato Doi
 * ------------------------------------------------
 * This software is released under the MIT License.
 * https://github.com/nikaidoumari/MofuMofu2_ScoreServer/blob/master/LICENSE
 */
const path = require('path');
const DataBase = require('./module/DataBase');
const db = new DataBase(path.resolve(__dirname + '/ScoreServer.sqlite3'));
db.createDb();

