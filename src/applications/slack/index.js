'use strict';

import {shell} from './../../utils';
import config from './../../config';

export function settings() {
	return new Promise(resolve=> {
		resolve(true);
	});
}

export function install() {
	console.log('installing slack...');
	if (config.isOsx) {
		return shell('brew cask install slack');
	} else if (config.isWindows) {
		return shell('choco install slack -y');
	}
	return new Promise(resolve=> {
		resolve(true);
	});
}