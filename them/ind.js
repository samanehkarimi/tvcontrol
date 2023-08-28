const app = new Vue({
	el: "#app",
	data: {
		city: "Barcelona",
		temp: "20°C",
		min: "12",
		max: "50"
	},
	watch: {
		city: function(newCity, oldCity) {
			this.temp = "...";
			this.min = "...";
			this.max = "...";
			this.debouncedGetTemp();
		}
	},
	created: function() {
		this.debouncedGetTemp = _.debounce(this.getTemp, 500);
	},
	methods: {
		getTemp: function() {
			this.temp = "...";
			this.min = "...";
			this.max = "...";
			var vm = this;
			axios
				.get("https://api.openweathermap.org/data/2.5/weather", {
					params: {
						q: vm.city,
						appid: "9081aa82d4f078d3832687031edef59d",
						units: "metric"
					}
				})
				.then(function(result) {
					var temp = Math.round(result.data.main.temp);
					var rotation = 45 + temp * 2.8; // Degs
					vm.temp = temp + "°C";
					vm.min = Math.round(result.data.main.temp_min);
					vm.max = Math.round(result.data.main.temp_max);
					$('.marker-svg').css('transform', 'rotate('+rotation+'deg)')
				})
				.catch(function(result) {
					vm.temp = "Error";
					vm.min = "";
					vm.max = "";
				});
		}
	},
});

$(function() {
	$(".user-input input").val("Barcelona");
});
