## Meteor Wrapper for HighCharts, HighMaps with a helper

Add to your Meteor app

```
meteor add maazalik:highcharts
```

## Instructions for HighCharts

The plugin comes with a helper that can be used to quickly generate charts

```
// myTempmlate.html
{{> highchartsHelper chartId="test" chartWidth="100%" charHeight="100%" chartObject=topGenresChart}}
```

The `chartObject` basically takes the object that you would normally define using highCharts, example below:

```
// myTemplate.js
Template.myTemplate.topGenresChart = function() {
	return {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: this.username + "'s top genres"
		},
		tooltip: {
			pointFormat: '<b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					},
					connectorColor: 'silver'
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'genre',
			data: [
				['Adventure',   45.0],
				['Action',       26.8],
				['Ecchi',   12.8],
				['Comedy',    8.5],
				['Yuri',     6.2]
			]
		}]
	};
};


```

## Instructions for HighMaps

The plugin comes with a helper that can be used to quickly generate charts

```
// myTempmlate.html
{{> highmapsHelper chartId="test-map" chartWidth="100%" charHeight="100%" chartObject=mapConfig}}
```

The `chartObject` basically takes the object that you would normally define using HighMaps, example below:

```
// myTemplate.js
Template.myTemplate.mapConfig = function() {
	var mapData = Highcharts.geojson(Highcharts.maps['custom/world']);
	$.each(mapData, function () {
		this.id = this.properties['hc-key'];
	});

	return {
  	title : {
      text : 'My highmap'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    colorAxis: {
      type: 'logarithmic',
      endOnTick: false,
      startOnTick: false,
      min: 50000
    },
    series : [{
      data : [{
      	code3: 'BR',
        name: 'Brazil',
        value: 2500000
      }, {
      	code3: 'ES',
        name: 'Spain',
        value: 10000
      }, {
      	code3: 'US',
        name: 'United States',
        value: 300000
      }],
      mapData: mapData,
      joinBy: ['iso-a2', 'code3'],
      name: 'Some text here',
      allowPointSelect: true,
      cursor: 'pointer',
      states: {
        select: {
          color: '#a4edba',
          borderColor: 'black',
          dashStyle: 'shortdot'
        }
      }
    }]
	};
};


```

## More charts
- [Solid Gauges](https://github.com/MaazAli/highcharts-gauge)
- [3D Charts](https://github.com/MaazAli/highcharts-3d)
- [Drilldowns](https://github.com/ClarenceL/meteor-highcharts-drilldown)
- more to come ...

## Examples
A set of running examples can be found [here](http://highcharts-demo.meteor.com/) and the source can be found [here](https://github.com/jhuenges/highcharts-demo).

## License (Highcharts)

Highcharts is free for personal and non-profit projects. For other purposes click [here](http://shop.highsoft.com/highcharts.html).


Compatible with Meteor V0.9 and above!
