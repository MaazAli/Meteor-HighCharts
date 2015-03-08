Package.describe({
    summary: "HighCharts for Meteor, with an easy to use helper to get you started!",
    version: "0.2.4",
    git: "https://github.com/MaazAli/Meteor-HighCharts.git"
});

Package.onUse(function (api) {

    api.versionsFrom('METEOR@0.9.1.1');
    api.use('jquery');
    api.use('templating');

    // basic highcharts
    api.addFiles('lib/highcharts.js', 'client');
    // extra types
    api.addFiles('lib/highcharts-more.js', 'client');
    api.addFiles('lib/highcharts-solide-gauge.js', 'client');
    api.addFiles('lib/highcharts-heatmap.js', 'client');

    api.addFiles('lib/highchartsHelper.html', 'client');
    api.addFiles('lib/highchartsHelper.js', 'client');
});
