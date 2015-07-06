'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import path from 'path';

export function settings(){

}

export function install() {
	if (config.isWindows) {
		return shell('choco install ruby -version 1.9.3.55100')
			.then(()=>shell('choco install ruby.devkit'));
	}
}