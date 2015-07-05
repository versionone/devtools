'use strict';

import {readdir,mklink} from './../../utils';
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
			files
				.filter(item=> {
					return item === 'git-completion.bash';
				})
				.forEach(item=> {
					mklink(path.join(__dirname, item), path.join(config.home, item));
				});
		});
}