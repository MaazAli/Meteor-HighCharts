Package.describe({
  summary: "HighCharts for Meteor, with an easy to use helper to get you started!",
  version: "0.2.2",
  git: "https://github.com/MaazAli/Meteor-HighCharts.git"
});

Package.onUse(function(api) {
  
  api.versionsFrom('METEOR@0.9.1.1');
  api.use('jquery');
  api.use('templating');
  
  // highcharts include 
  api.addFiles('highcharts.js', 'client');

  api.addFiles('highchartsHelper.html', 'client');
  api.addFiles('highchartsHelper.js', 'client');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('maazalik:highcharts');
//   api.addFiles('maazalik:highcharts-tests.js');
// });
