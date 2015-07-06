'use strict';

import config from './../../config';
import {readdir, mklink} from './../../utils';
import path from 'path';

export function settings() {
	if (!config.isWindows) {
		return new Promise(resolve=> {
			resolve({})
		});
	}
	readdir(path.join(__dirname, './'))
		.then(function (fileItems) {
			fileItems
				.filter(function (item) {
					return fs.lstatSync(item).isFile();
				})
				.filter(function (item) {
					var visualStudioSettings = /\.vssettings$/;
					return visualStudioSettings.exec(item);
				})
				.forEach(function (item) {
					mklink(path.join(__dirname, item), path.join(config.home, 'Documents/Visual Studio 2013/Settings', item));
				});
		});
}

export function install() {
	return new Promise(resolve=> {
		resolve({})
	});
}