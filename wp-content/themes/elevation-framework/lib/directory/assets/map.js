const container = document.querySelector('#data-container-directory');

if (container && container.dataset.postType == 'map_directory') {
	postType = container.dataset.postType;
	var googleMapsScript = document.createElement('script');

	/// condicional a ver si el post type es correcto...
	googleMapsScript.src =
		'https://maps.googleapis.com/maps/api/js?key=AIzaSyBrarmE2fRT5u5bfjAOeikL3ecnQvYr2HE';
	// googleMapsScript.defer = true;
	googleMapsScript.async = true;
	// Cuando se cargue el script de Google Maps, se ejecutará mapInitializacion
	document.head.appendChild(googleMapsScript);
	var map;
	var infoWindows = [];

	googleMapsScript.onload = function () {
		mapInitializacion();
	};

	/// o llamar  a mapInitializacion despues del fetch
	document.addEventListener('getDirectoryFetch', function () {
		initMap();
	});
}

function mapInitializacion() {
	const elemento = document.querySelector('.acf-map');

	var mapArgs = {
		zoom: parseInt(elemento.dataset.zoom) || 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	map = new google.maps.Map(elemento, mapArgs);
	initMap();
}

function initMap() {
	// Find marker elements within map.
	var markers = document.querySelectorAll('#data-container-directory .col');
	infoWindows = [];

	if (!!map.markers) {
		map.markers.forEach(function (marker) {
			marker.setMap(null);
		});
	}

	map.markers = [];
	markers.forEach(function (marker) {
		initMarker(marker, map);
	});

	// Center map based on markers.
	centerMap(map);
}

function initMarker(markerElement, map) {
	// Get position from marker.
	var lat = markerElement.getAttribute('data-lat');
	var lng = markerElement.getAttribute('data-lng');
	if (lat && lng) {
		var latLng = {
			lat: parseFloat(lat),
			lng: parseFloat(lng),
		};

		// Create marker instance.
		var marker = new google.maps.Marker({
			position: latLng,
			map: map,
			icon: '/wp-content/themes/elevation-framework/src/assets/images/location-pin.png',
		});

		// Append to reference for later use.
		map.markers.push(marker);

		// If marker contains HTML, add it to an infoWindow.
		if (markerElement.innerHTML) {
			// create info window

			var liTag = markerElement;

			if (markerElement) {
				var title = markerElement.dataset.title;
				var location = markerElement.dataset.location;
				var address = markerElement.dataset.address;
				var markerHTML = `<div class="marker"> <span class="title h6">${title}</span><br><span>${location}</span>
            <br><span class="address">${(!!address && address) || ''}</span>
            </div>`;
			}

			// show info window when marker is clicked
			var infowindow = new google.maps.InfoWindow({
				content: markerHTML,
			});

			infoWindows.push(infowindow);

			if (liTag) {
				liTag.addEventListener('click', function () {
					if (window.matchMedia('(max-width: 1199px)').matches) {
						setTimeout(function () {
							var targetM = document.querySelector('.acf-map');
							window.scrollTo({
								top: targetM.offsetTop - 200,
								behavior: 'smooth',
							});
						}, 500);
					}

					infowindow.setContent(markerHTML);
					for (var i = 0; i < infoWindows.length; i++) {
						infoWindows[i].close();
					}
					infowindow.open(map, marker);

					map.panTo(marker.getPosition());
					map.setZoom(11);
				});
			}

			google.maps.event.addListener(map, 'click', function (event) {
				if (infowindow) {
					infoWindow.close();
				}
			});

			// create info window
			var infoWindow = new google.maps.InfoWindow({
				content: markerHTML,
			});

			infoWindows.push(infoWindow);

			// show info window when marker is clicked
			google.maps.event.addListener(marker, 'click', function () {
				//close all
				for (var i = 0; i < infoWindows.length; i++) {
					infoWindows[i].close();
				}

				var oldSelected = document.querySelector(
					'#data-container-directory .col.selected-card'
				);

				if (oldSelected) {
					oldSelected.classList.remove('selected-card');
				}

				infoWindow.open(map, marker);

				map.panTo(marker.getPosition());
				map.setZoom(11);

				var liTag = markerElement;

				liTag.classList.toggle('selected-card');
				var container = document.getElementById(
					'data-container-directory'
				);
				container.scroll({
					top:
						liTag.offsetTop -
						container.offsetTop +
						container.scrollTop -
						50,
					behavior: 'smooth',
				});
			});

			google.maps.event.addListener(map, 'click', function (event) {
				if (infowindow) {
					infoWindow.close();
				}
			});
		}
	}
}

function centerMap(map) {
	// Create map boundaries from all map markers.
	var bounds = new google.maps.LatLngBounds();
	map.markers.forEach(function (marker) {
		bounds.extend({
			lat: marker.getPosition().lat(),
			lng: marker.getPosition().lng(),
		});
	});

	// Case: Single marker.
	if (map.markers.length === 1) {
		map.setCenter(bounds.getCenter());

		// Case: Multiple markers.
	} else {
		map.fitBounds(bounds);
	}
}

// });
