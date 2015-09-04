'use strict';

import path from 'path';
import {exec, spawn} from 'child_process';
import fs from 'fs';
import config from './config';

export function mklink(src, dest) {
	try {
		fs.unlinkSync(dest);
	} catch (error) {
		console.error(error);
	}
	src = path.resolve(src);
	var command = '';
	if (config.isOsx) {
		command = `ln -sfn ${src} ${dest}`;
	}
	if (config.isWindows) {
		command = `mklink "${dest}" "${src}"`;
	}
	return bash(command);
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
	if (config.isWindows){
		return powershell(command);
	}
	console.log(command);
	return bash(command);
}

export function bash(command) {
	console.log(command);
	return new Promise((resolve, reject) => {
		exec(command, (error, stdout, stderr)=> {
			console.log(error, stdout, stderr);
			if (error) {
				reject(error);
				return;
			}
			resolve(true);
		})
	});
}

export function powershell(command) {
	console.log('powershell.exe', command);
	return new Promise((resolve, reject)=> {
		var cmdProcess = spawn('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', command]);
		cmdProcess.stdout.on('data', (data)=> {
			console.log(data.toString());
		});
		cmdProcess.stderr.on('data', (data)=> {
			console.log(data.toString());
			reject(data.toString());
		});
		cmdProcess.on('exit', ()=> {
			resolve(true);
		});
		cmdProcess.stdin.end();
	});
}
