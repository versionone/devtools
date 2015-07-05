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
	if (config.isOsx) {
		return shell.run('brew install git');
	} else if (config.isWindows) {
		return shell.run('choco install git');
	}
}