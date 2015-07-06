'use strict';

import {readdir, mklink, shell} from './../../utils';
import path from 'path';
import config from './../../config';
import fs from 'fs';

export function settings() {
	return readdir(path.join(__dirname, './'))
		.then(files=> {
			files
				.filter(item=> {
					return /\.global$/.exec(item);
				})
				.forEach(item=> {
					let newLink = item.replace('.global', '');
					mklink(path.join(__dirname, item), path.join(config.home, newLink));
				});
			files
				.filter(item=> {
					return item === 'git-completion.bash';
				})
				.forEach(item=> {
					mklink(path.join(__dirname, item), path.join(config.home, item));
				});
		});
}

export function install() {
	console.log('installing git...');
	if (config.isOsx) {
		return shell('brew install git');
	} else if (config.isWindows) {
		return shell('choco install git');
	}
	return new Promise(resolve=> {
		resolve({});
	});
}