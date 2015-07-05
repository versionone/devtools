'use strict';

import * as DotFiles from './applications/dotfiles';
import * as Atom from './applications/atom';
import * as VisualStudio from './applications/visualStudio';
import * as Git from './applications/git';

export default function () {
	DotFiles.settings();
	Atom.settings();
	VisualStudio.settings();
	Git.settings();
}