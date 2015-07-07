'use strict';

import {readdir, mklink, shell} from './../../utils';
import path from 'path';
import config from './../../config';
import fs from 'fs';

export function settings() {
	return readdir(path.join(__dirname, './'))
		.then(files=> {
			files
				.filter(function (item) {
					return (new RegExp(`\.${config.platform}$`)).exec(item);
				})
				.forEach(function (item) {
					mklink(path.join(__dirname, item), path.join(config.home, item));
				});
			files
				.filter(item=> {
					return /\.global$/.exec(item);
				})
				.forEach(item=> {
					let newLink = item.replace('.global', '');
					mklink(path.join(__dirname, item), path.join(config.home, newLink));
				});
		});
}

export function install() {
	console.log('installing bash...');
	if (config.isOsx) {
		return shell('brew cask install iterm2');
	} else if (config.isWindows) {
		return shell('choco install cmder -y');
	}
	return new Promise(resolve=> {
		resolve({});
	});
}