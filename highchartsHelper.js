Template.highchartsHelper.rendered = function() {
	var chartObject = this.data.chartObject;
	console.log(chartData);
	$('#' + this.data.chartId).highcharts(chartObject);
};