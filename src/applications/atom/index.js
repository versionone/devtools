'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import path from 'path';

export function settings(){
	return mklink(path.join(__dirname, './config.cson'), path.join(config.home, '.atom/config.cson'));
}

export function install() {
	if (config.isOsx) {
		return shell('brew cask install atom');
	} else if (config.isWindows) {
		return shell('choco install Atom');
	}
}