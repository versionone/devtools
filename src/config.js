'use strict';

var platform = process.platform;

export default Object.freeze({
	platform,
	isOsx: platform === 'darwin',
	isWindows: platform === 'win32',
	home: process.env.HOME || process.env.USERPROFILE
});