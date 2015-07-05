'use strict';

import path from 'path';
import {exec} from 'child_process';
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
	console.log(command);
	return shell(command);
}

export function readdir(directoryPath) {
	return new Promise(function (resolve, reject) {
		directoryPath = path.resolve(directoryPath);
		fs.readdir(directoryPath, (error, output) => {
			if (error) {
				reject(error);
				return;
			}
			resolve(output);
		});
	});
}

export function shell(command) {
	return new Promise((resolve, reject) => {
		exec(command, (error, result)=> {
			if (error) {
				reject(error);
				return;
			}
			resolve(result);
		})
	});
}