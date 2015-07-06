'use strict';

import config from './config';
import {Shell} from './utils';
import * as Bash from './applications/shell';
import * as Atom from './applications/atom';
import * as VisualStudio from './applications/visualStudio';
import * as Git from './applications/git';
import * as Alfred from './applications/alfred';
import * as Chrome from './applications/chrome';
import * as Slack from './applications/slack';

export default function () {
	initialize()
		.then(()=>Promise.all([
			Bash.install(),
			Atom.install(),
			VisualStudio.install(),
			Git.install(),
			Alfred.install(),
			Chrome.install(),
			Slack.install()
		]))
		.then(()=> {
			update();
		});
}

function initialize() {
	if (config.isOsx) {
		return Shell.run('ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')
			.then(() =>Shell.run('brew install cask'))
	} else if (config.isWindows) {
		return Shell.run(`@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin`)
	}
	throw config.unsupportedPlatformError;
}

function update() {
	if (config.isOsx) {
		return shell.run('brew update');
	} else if (config.isWindows) {
		return shell.run('choco upgrade');
	}
}