Template.highmapsHelper.onRendered(() => {
	var self = Template.instance();

	self.autorun(() => {
		var data = Template.currentData();
		$('#' + data.chartId).highcharts('Map', data.chartObject);
	});
});
