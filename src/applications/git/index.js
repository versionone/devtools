'use strict';

import {
	readdir, mklink, shell
}
	from './../../utils';
import path from 'path';
import config from './../../config';
import fs from 'fs';

export function settings() {
	return readdir(path.join(__dirname, './'))
		.then(files => {
			files
				.map(item => item.replace(/\.global$/))
				.filter(/diffmerge/.exec)
				.forEach(item => {
					mklink(path.join(__dirname, item), path.join(config.home, item));
				});
			let diffmerge = files.find(/diffmerge/.exec);
			let gitMergeToolsDir;
			if (config.isOsx) {
				gitMergeToolsDir = '/usr/local/git/libexec/git-core/mergetools';
			} else if (config.isWindows) {
				gitMergeToolsDir = 'c:\\Program Files (x86)\\Git\\libexec\\git-core\\mergetools';
			}
			mklink(path.join(__dirname, diffmerge), path.join(gitMergeToolsDir, diffmerge));
		});
}

export function install() {
	console.log('installing git...');
	if (config.isOsx) {
		return shell('brew install git');
	} else if (config.isWindows) {
		return shell('choco install git -y');
	}
	return new Promise(resolve => {
		resolve(true);
	});
}
