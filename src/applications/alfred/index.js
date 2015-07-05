'use strict';

import {shell, mklink} from './../../utils';
import config from './../../config';
import path from 'path';

export function settings(){

}

export function install() {
	if (config.isOsx) {
		return shell.run('brew cask install alfred');
	}
}