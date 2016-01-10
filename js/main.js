
wdtLoading.start();

(function ($) {

	$(function() {

		$('.show-docs').on('click', function(e) {
			e.preventDefault();
			wdtLoading.done();
			return false;
		});

		new Share(".sharer-btn", {
			title: 'wdtLoading - Application loading screen',
			description: 'wdtLoading - Asana like application loading screen with custom phrases',
			image: 'https://raw.githubusercontent.com/needim/wdtLoading/master/wdtLoading.gif',
			networks: {
				pinterest: {
					enabled: false
				},
				facebook: {
					load_sdk: true,
					app_id: '198259823578303',
					title: 'wdtLoading - Application loading screen',
				  	caption: 'wdtLoading - Asana like application loading screen with custom phrases',
				  	description: 'wdtLoading - Asana like application loading screen with custom phrases',
				  	image: 'https://raw.githubusercontent.com/needim/wdtLoading/master/wdtLoading.gif'
				},
				twitter: {
					description: 'wdtLoading - &num;Asana like &num;application &num;loading screen with custom phrases &num;javascript &num;plugin'
				}
			}
		});

		FastClick.attach(document.body);

		if($('.prettyprint').length) {
			window.prettyPrint && prettyPrint();
		}

	});

})(jQuery);