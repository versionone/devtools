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
	Promise.all([
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
}