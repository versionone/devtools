'use strict';

import path from 'path';
import {execCmd} from 'child_process';
import fs from 'fs';
import config from './config';

export function mklink(src, dest) {
	try {
		fs.unlinkSync(dest);
	} catch (error) {

	}
	src = path.resolve(src);
	var command = '';
	if (config.isOsx) {
		command = `ln -s ${src} ${dest}`;

	}
	if (config.isWindows) {
		command = `mklink ${dest} ${src}`;
	}
	return exec(command);
}

export function readdir(directoryPath) {
	return new Promise(function (resolve, reject) {
		directoryPath = path.resolve(directoryPath);
		fs.readdir(directoryPath, (error, output)=> {
			if (error) {
				reject(error);
				return;
			}
			resolve(output);
		});
	});
}

export function exec(command) {
	return new Promise((resolve, reject) => {
		execCmd(command, (error, result)=> {
			if (error) {
				reject(error);
				return;
			}
			resolve(result);
		})
	});
}