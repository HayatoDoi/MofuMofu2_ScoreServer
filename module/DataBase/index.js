/**
 * データベース用のクラス
 * File name : module/DataBase/index.js
 * Copyright (c) 2017, Hayato Doi
 * ------------------------------------------------
 * This software is released under the MIT License.
 * https://github.com/nikaidoumari/MofuMofu2_ScoreServer/blob/master/LICENSE
 */

//------------------------------------------
// ライブラリのインストール
//------------------------------------------
const sqlite3 = require('sqlite3');
const fs = require('fs');

class DataBase {
	constructor(dbPath){
		this.create_sql = '';
		this.create_sql += 'CREATE TABLE score(';
		this.create_sql += 'id INTEGER NOT NULL PRIMARY KEY,';
		this.create_sql += 'name TEXT,';
		this.create_sql += 'score INTEGER';
		this.create_sql += ');';
		this.create_sql += ''

		this.insert_sql = '';
		this.insert_sql += 'INSERT INTO score(';
		this.insert_sql += 'name, score';
		this.insert_sql += ') VALUES((?),(?));';

		this.db = new sqlite3.Database(dbPath);
	}
	registrationScore(name,score){
		this.db.run(this.insert_sql,[
			name,score
		]);
		this.db.close();
	}
	getRanking(callback){
		this.db.all("SELECT name,score FROM score ORDER BY score DESC LIMIT 10;",(err,rows)=>{
			callback(rows)
		});
	}
	createDb(){
		this.db.run(this.create_sql);
		// this.db.serialize(
		// 	// db.run(this.create_sql);
		// );
	}
}
module.exports = DataBase;

