$('.count').each(function() {
	$(this)
		.prop('Counter', 0)
		.animate(
			{
				Counter: $(this).text()
			},
			{
				duration: 1000,
				easing: 'swing',
				step: function(now) {
					$(this).text(
						Math.ceil(now)
							.toFixed(1)
							.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
							.replace('.0', '')
					);
				}
			}
		);
});

function myFunction() {
	var iframe = document.getElementById('pricingframe');
	var elmnt = iframe.contentWindow.document.getElementsByTagName('div')[0];
	elmnt.style.display = 'none';
}

