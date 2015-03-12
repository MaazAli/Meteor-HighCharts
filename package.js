Package.describe({
    summary: "HighCharts for Meteor, with an easy to use helper to get you started!",
    version: "0.2.4",
    git: "https://github.com/MaazAli/Meteor-HighCharts.git"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0.3.2');
    api.use('jquery');
    api.use('templating');

    // basic highcharts
    api.addFiles([
      // Core
      'lib/highcharts.js',
      // Extra types
      'lib/highcharts-more.js',
      'lib/highcharts-solide-gauge.js',
      // Helper
      'lib/highchartsHelper.html',
      'lib/highchartsHelper.js'
    ], 'client');
});
