'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import extensions from './extensions';
import path from 'path';
import fs from 'fs';
var googleChromeExtensionPath = path.join(config.home, 'Library/Application\ Support/Google/Chrome/External\ Extensions');

export function settings() {
	return new Promise((resolve, reject)=> {
		if (config.isOsx) {
			Object.keys(extensions).forEach(key=> {
				fs.writeFile(path.join(googleChromeExtensionPath, `${key}.json`), `{external_udpate_url:${extensions[key]}`, 'utf8');
			});
			resolve(true);
		}
		resolve(true);
		//if (config.isWindows) {
		//	var regedit = require('regedit');
		//	var registryKey = 'HKEY_LOCAL_MACHINE\\SOFTWARE\\Wow6432Node\\Google\\Chrome';
		//	regedit.list(registryKey, (error, result)=> {
		//		if (error) {
		//			reject(error);
		//			return;
		//		}
		//		if (!result) {
		//			regedit.createKey(registryKey, (error)=> {
		//				if (error) {
		//					reject(error);
		//					return;
		//				}
		//				registryKey += '\\Extensions';
		//				regedit.list(registryKey, (error, result)=> {
		//					if (error) {
		//						console.log(error);
		//						reject(error);
		//						return;
		//					}
		//					if (!result) {
		//						regedit.createKey(registryKey, (error)=> {
		//							if (error) {
		//								reject(error);
		//								return;
		//							}
		//							var registryValue = {};
		//							registryValue[registryKey] = {};
		//							Object.keys(extensions).forEach(key=> {
		//								registryValue[registryKey][key] = {
		//									value: `{"update_url": "${extensions[key]}"}`,
		//									type: 'REG_SZ'
		//								};
		//							});
		//							console.log(registryValue);
		//							regedit.putValue(registryValue, (error)=> {
		//								if (error) {
		//									reject(error);
		//									return;
		//								}
		//								resolve(true);
		//							});
		//						});
		//					}
		//				});
		//			});
		//		}
		//	});
		//}
	});
}

export function install() {
	console.log('installing chrome...');
	if (config.isOsx) {
		return shell('brew cask install google-chrome');
	} else if (config.isWindows) {
		return shell('choco install googlechrome -y');
	}
	return new Promise(resolve=> {
		resolve(true);
	});
}
