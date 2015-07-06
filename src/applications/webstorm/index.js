'use strict';

export function settings() {
	return new Promise(resolve=> {
		resolve({})
	});
}

export function install() {
	if (config.isOsx) {
		return shell('brew cask install webstorm');
	} else if (config.isWindows) {
		return shell('choco install webstorm');
	}
	return new Promise(resolve=> {
		resolve({})
	});
}
