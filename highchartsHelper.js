Template.highchartsHelper.rendered = function() {
	var chartObject = this.data.chartObject;
	$('#' + this.data.chartId).highcharts(chartObject);
};