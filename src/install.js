'use strict';

import config from './config';
import * as DotFiles from './applications/dotfiles';
import * as Atom from './applications/atom';
import * as VisualStudio from './applications/visualStudio';
import * as Git from './applications/git';

export default function () {
	Promise.all([
		Atom.install(),
		VisualStudio.install(),
		Git.install()
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