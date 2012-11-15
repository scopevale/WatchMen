module.exports = {
    'notifications' : {
		enabled: false, //if disabled, no notifications will be sent
		to: ['gary.smith@workplacesystems.com'], //default notification list if no alert_to is specified for host or url
		postmark : {
			from: 'garys@wpmail.com',
			api_key : '016b3fbc-f238-441c-ae30-027570f7ad60'
		}
	}
};
