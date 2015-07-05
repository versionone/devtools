'use strict';

import * as Shell from './applications/shell';
import * as Atom from './applications/atom';
import * as VisualStudio from './applications/visualStudio';
import * as Git from './applications/git';
import * as Chrome from './applications/chrome';

export default function () {
	Shell.settings();
	Atom.settings();
	VisualStudio.settings();
	Git.settings();
	Chrome.settings();
}