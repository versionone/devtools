'use strict';

var platform = process.platform.replace(/(32|64)/, '');

export default Object.freeze({
	platform,
	isOsx: platform === 'darwin',
	isWindows: platform === 'win',
	home: process.env.HOME || process.env.USERPROFILE,
	unsupportedPlatformError: `Platform not supported: ${process.platform}`
});