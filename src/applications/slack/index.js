'use strict';

import {shell} from './../../utils';
import config from './../../config';

export function settings() {
	return new Promise(resolve=> {
		resolve({})
	});
}

export function install() {
	if (config.isOsx) {
		return shell('brew cask install slack');
	} else if (config.isWindows) {
		return shell('choco install slack');
	}
	return new Promise(resolve=> {
		resolve({})
	});
}