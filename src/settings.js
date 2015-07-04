'use strict';

import dotfiles from './dotfiles';
import * as Atom from './applications/atom';
import * as VisualStudio from './applications/visualStudio';

export default function(){
	dotfiles();
	Atom.settings();
	VisualStudio.settings();
}