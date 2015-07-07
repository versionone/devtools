'use strict';

import config from './config';
import {shell, powershell} from './utils';
import * as Alfred from './applications/alfred';
import * as Atom from './applications/atom';
import * as Bash from './applications/bash';
import * as Chrome from './applications/chrome';
import * as Git from './applications/git';
import * as Python from './applications/python2.7';
import * as Ruby from './applications/ruby';
import * as Slack from './applications/slack';
import * as VisualStudio from './applications/visualStudio';
import * as WebStorm from './applications/webstorm';

export default function () {
	initialize()
		.then(()=>console.log('installing...'))
		.then(()=> Alfred.install())
		.then(()=> Atom.install())
		.then(()=> Bash.install())
		.then(()=> Chrome.install())
		.then(()=> Git.install())
		.then(()=> Python.install())
		.then(()=> Ruby.install())
		.then(()=> Slack.install())
		.then(()=> VisualStudio.install())
		.then(()=> WebStorm.install())
		.then(()=> update())
		.then(()=> {
			return Promise.all([
				Alfred.settings(),
				Atom.settings(),
				Bash.settings(),
				Chrome.settings(),
				Git.settings(),
				Python.settings(),
				Ruby.settings(),
				Slack.settings(),
				VisualStudio.settings(),
				WebStorm.settings()
			]);
		})
		.catch(error=> {
			console.log(error);
		});
}

function initialize() {
	console.log(`pre-install: initialization for ${config.platform}`);
	if (config.isOsx) {
		return shell('ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')
			.then(() =>shell('brew install cask'))
	} else if (config.isWindows) {
		return powershell(['./chocolatey.cmd']);
	}
	throw config.unsupportedPlatformError;
}

function update() {
	if (config.isOsx) {
		return shell('brew update');
	} else if (config.isWindows) {
		return shell('choco upgrade all -y');
	}
	return new Promise(resolve=> {
		resolve(true);
	})
}