'use strict';

import config from './../../config';
import {readdir, mklink} from './../../utils';
import path from 'path';
import mkdirp from 'mkdirp';

export function settings() {
	return new Promise((resolve, reject)=> {
		if (!config.isWindows) {
			resolve(true);
			return;
		}
		var settingsDir = path.join(config.home, 'Documents/Visual Studio 2013/Settings');
		mkdirp(settingsDir, error=> {
			if (error) {
				reject(error);
				return;
			}
			readdir(path.join(__dirname, './'))
				.then(function (fileItems) {
					var promises = fileItems
						.filter(function (item) {
							return fs.lstatSync(item).isFile();
						})
						.filter(function (item) {
							var visualStudioSettings = /\.vssettings$/;
							return visualStudioSettings.exec(item);
						})
						.map(function (item) {
							return mklink(path.join(__dirname, item), settingsDir, item);
						});
					resolve(promises);
				});
		});
	});
}

export function install() {
	console.log('installing visual studio...');
	return new Promise(resolve=> {
		resolve(true);
	});
}