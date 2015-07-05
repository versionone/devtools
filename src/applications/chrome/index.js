'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import extensions from './extensions';
import path from 'path';
import fs from 'fs';
var googleChromeExtensionPath = path.join(config.home, 'Library/Application\ Support/Google/Chrome/External\ Extensions');

export function settings() {
	if (config.isOsx) {
		Object.keys(extensions).forEach(key=> {
			fs.writeFile(path.join(googleChromeExtensionPath, `${key}.json`), `{external_udpate_url:${extensions[key]}`, 'utf8');
		});
	}
	if (config.isWindows) {
		var regedit = require('regedit');
		var registryKey = 'HKEY_LOCAL_MACHINE\\Software\\Wow6432Node\\Google\\Chrome\\Extensions';
		regedit.list(registryKey, (error, result)=> {
			if (error) {
				console.log(error);
			}
			if (!result) {
				regedit.createKey(registeryKey);
			}

			var registryValue = {};
			Object.keys(extensions).forEach(key=> {
				registryValue[`${registryKey}\${key}`] = {
					"update_url": extensions[key]
				};
			});
			regedit.putValue(registryValue);
		});
	}
}

export function install() {
	if (config.isOsx) {
		return shell.run('brew cask install google-chrome');
	} else if (config.isWindows) {
		return shell.run('choco install googlechrome');
	}
}