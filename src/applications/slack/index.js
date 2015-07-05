'use strict';

import {shell} from './../../utils';
import config from './../../config';

export function settings(){

}

export function install() {
	if (config.isOsx) {
		return shell.run('brew cask install slack');
	} else if (config.isWindows) {
		return shell.run('choco install slack');
	}
}