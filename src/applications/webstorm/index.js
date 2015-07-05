'use strict';

export function settings(){

}

export function install() {
	if (config.isOsx) {
		return shell.run('brew cask install webstorm');
	} else if (config.isWindows) {
		return shell.run('choco install webstorm');
	}
}
