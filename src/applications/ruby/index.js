'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import path from 'path';

export function settings(){
	return new Promise(resolve=> {
		resolve(true);
	});
}

export function install() {
	console.log('installing ruby...');
	if (config.isWindows) {
		return shell('choco install ruby -version 1.9.3.55100 -y')
			.then(()=>shell('choco install ruby.devkit -y'));
	}
	return new Promise(resolve=> {
		resolve(true);
	});
}