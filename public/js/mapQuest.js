function initMap() {
	L.mapquest.key = 'bbB6GaUI5QN83whfpjzMMJXlUmzSqsEH';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.8785, -117.2359],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
	});

	L.marker([32.8785, -117.2359]).addTo(map);
}