module.exports = {
    'notifications' : {
		enabled: true, //if disabled, no notifications will be sent
		to: ['gary.smith@workplacesystems.com'], //default notification list if no alert_to is specified for host or url
    	cc: ['scopevale.1@gmail.com'], //default notification list if no alert_to is specified for host or url
		postmark : {
			from: 'gary.smith@wpmail.com',
			api_key : '016b3fbc-f238-441c-ae30-027570f7ad60'
		}
	}
};
