'use strict';

export function settings(){

}

export function install() {
	if (config.isOsx) {
		return shell('brew cask install webstorm');
	} else if (config.isWindows) {
		return shell('choco install webstorm');
	}
}
