require.config({
	path: {
		"jquery": "vendor/jquery/jquery",
		"underscore": "vendor/underscore-amd/underscore",
		"backbone": "vendor/backbone-amd/backbone"
	}
});

require(['views/AppView'], function (AppView) {
	new AppView;
});