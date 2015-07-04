'use strict';

import {readdir,mklink} from './utils';
import path from 'path';
import config from './config';

export default function () {
	return readdir('./')
		.then(function (fileItems) {
			fileItems
				.filter(function (item) {
					return fs.lstatSync(item).isFile();
				})
				.filter(function (item) {
					var platformExp = new RegExp(`(${config.platform}|global)$`);
					var gitignoreExp = /^gitignore$/;
					var gitCompletionBash = /^git\-completion\.bash$/;
					return platformExp.exec(item) || gitignoreExp.exec(item) || gitCompletionBash.exec(item);
				})
				.forEach(function (item) {
					var newItem = item.replace('.global', '').replace('.' + platform, '');
					mklink(item, path.join(config.home, newItem));
				});
		});
}