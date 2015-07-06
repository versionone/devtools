'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import path from 'path';

export function settings(){

}

export function install() {
	if (config.isWindows) {
		return shell('choco install python2');
	}
}