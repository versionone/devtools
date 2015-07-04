'use strict';

import config from './../../config';
import {readdir, mklink} from './../../utils';

export function settings() {
	if (!config.isWindows) {
		return;
	}
	readdir('./')
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
					mklink(item, path.join(config.home, 'Documents/Visual Studio 2013/Settings', newItem));
				});
		});
}