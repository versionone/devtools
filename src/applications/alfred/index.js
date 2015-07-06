'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import path from 'path';

export function settings() {
	return new Promise(resolve=> {
		resolve({});
	});
}

export function install() {
	console.log('installing alfred...');
	if (config.isOsx) {
		return shell('brew cask install alfred');
	}
	return new Promise(resolve=> {
		resolve({});
	});
}