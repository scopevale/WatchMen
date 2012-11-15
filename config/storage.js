module.exports = {

	//---------------------------
	// Select storage provider.
	// Supported providers: 'redis'
	//---------------------------
	provider : 'redis',

	options : {

		//---------------------------
		// redis configuration
		//---------------------------
		'redis' : {
//			port: 1216,
//			host: '127.0.0.1',
//			db: 1            
            port: 9385,
            host: 'grouper.redistogo.com',
            password: 'ae36c0a6cc1f10b7a98c9db21e345db1'
		}
	}
};