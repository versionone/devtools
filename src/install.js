'use strict';

import config from './config';
import {shell} from './utils';
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
		.then(()=> {
			console.log('installing...');
			return Promise.all([
				Alfred.install(),
				Atom.install(),
				Bash.install(),
				Chrome.install(),
				Git.install(),
				Python.install(),
				Ruby.install(),
				Slack.install(),
				VisualStudio.install(),
				WebStorm.install()
			]);
		})
		.then(()=> {
			return update();
		})
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
		});
}

function initialize() {
	if (config.isOsx) {
		return shell('ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')
			.then(() =>shell('brew install cask'))
	} else if (config.isWindows) {
		return shell(`@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin`)
	}
	throw config.unsupportedPlatformError;
}

function update() {
	if (config.isOsx) {
		return shell('brew update');
	} else if (config.isWindows) {
		return shell('choco upgrade');
	}
	return new Promise(resolve=> {
		resolve({});
	})
}