'use strict';

import * as Shell from './applications/shell';
import * as Atom from './applications/atom';
import * as VisualStudio from './applications/visualStudio';
import * as Git from './applications/git';

export default function () {
	Shell.settings();
	Atom.settings();
	VisualStudio.settings();
	Git.settings();
}