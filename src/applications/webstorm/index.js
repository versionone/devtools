'use strict';

import config from './../../config';
import {shell} from './../../utils';

export function settings() {
	return new Promise(resolve=> {
		resolve({});
	});
}

export function install() {
	console.log('installing webstorm...');
	if (config.isOsx) {
		return shell('brew cask install webstorm');
	} else if (config.isWindows) {
		return shell('choco install webstorm -y');
	}
	return new Promise(resolve=> {
		resolve({});
	});
}
