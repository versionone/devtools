'use strict';

import config from './config';
import * as Shell from './applications/shell';
import * as Atom from './applications/atom';
import * as VisualStudio from './applications/visualStudio';
import * as Git from './applications/git';
import * as Alfred from './applications/alfred';
import * as Chrome from './applications/chrome';
import * as Slack from './applications/slack';

export default function () {
	Promise.all([
		Shell.install(),
		Atom.install(),
		VisualStudio.install(),
		Git.install(),
		Alfred.install(),
		Chrome.install(),
		Slack.install()
	])
		.then(()=> {
			update();
		});
}

function update() {
	if (config.isOsx) {
		return shell.run('brew update');
	} else if (config.isWindows) {
		return shell.run('choco upgrade');
	}
}