'use strict';

import {mklink} from './../../utils';
import config from './../../config';
import path from 'path';

export function settings(){
	return mklink(path.join(__dirname, './config.cson'), path.join(config.home, '.atom/config.cson'));
}