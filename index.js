'use strict';

require('babel/polyfill');
var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');
var platform = process.platform;
var home = platform === 'darwin' ? '/Users/andrewsmith' : 'c:/Users/andrewsmith';

linkHomeDotFiles();
linkAtomFiles();

function linkAtomFiles() {
	mklink(path.join(__dirname, './atom/config.cson'), path.join(home, '.atom/config.cson'));
}

function linkHomeDotFiles() {
	readdir('./')
		.then(function (fileItems) {
			fileItems.filter(function (item) {
				return fs.lstatSync(item).isFile();
			})
				.filter(function (item) {
					var platformExp = new RegExp('(' + platform + '|global)$');
					var gitignoreExp = /^gitignore$/;
					return platformExp.exec(item) || gitignoreExp.exec(item);
				})
				.forEach(function (item) {
					var newItem = item.replace('.global', '').replace('.' + platform, '');
					mklink(item, path.join(home, newItem));
				});
		});
}

function mklink(src, dest) {
	return new Promise(function (resolve, reject) {
		try {
			fs.unlinkSync(dest);
		} catch (error) {

		}
		src = path.resolve(src);
		var command = '';
		switch (platform) {
			case 'darwin':
				command = 'ln -s ' + src + ' ' + dest;
				console.log(command);
				exec(command, finish(resolve, reject));
				break;
			case 'win32':
				command = 'mklink ' + dest + ' ' + src;
				console.log(command);
				exec(command, finish(resolve, reject));
				break;
			default:
				reject('Unsupported platform: ' + platform);
		}
	});
}

function finish(resolve, reject) {
	return function (error, output) {
		if (error) {
			console.log(error);
			reject(error);
		}
		resolve(output);
	};
}

function readdir(directoryPath) {
	return new Promise(function (resolve, reject) {
		directoryPath = path.resolve(directoryPath);
		fs.readdir(directoryPath, finish(resolve, reject));
	});
}
