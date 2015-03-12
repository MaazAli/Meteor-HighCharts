Template.highchartsHelper.rendered = function() {
	var self = this;
	var chartObject = self.data.chartObject;
	$('#' + self.data.chartId).highcharts(chartObject);
};
