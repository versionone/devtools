'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import path from 'path';

export function settings(){
	return new Promise(resolve=> {
		resolve({});
	});
}

export function install() {
	console.log('installing ruby...');
	if (config.isWindows) {
		return shell('choco install ruby -version 1.9.3.55100')
			.then(()=>shell('choco install ruby.devkit'));
	}
	return new Promise(resolve=> {
		resolve({});
	});
}