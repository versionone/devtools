'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import path from 'path';

export function settings() {
	return new Promise(resolve=> {
		resolve(true);
	});
}

export function install() {
	console.log('installing python 2.7...');
	if (config.isWindows) {
		return shell('choco install python2 -y');
	}
	return new Promise(resolve=> {
		resolve(true);
	});
}