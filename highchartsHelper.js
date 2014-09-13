Template.highchartsHelper.rendered = function() {
	var self = this;
	var chartObject = self.data.chartObject;
	console.log(chartObject);
	$('#' + self.data.chartId).highcharts(chartObject);
};