const reporter = require("cucumber-html-reporter")
const options = {
  theme: 'bootstrap',
  jsonFile: 'e2e/reports/report.json',
  output: 'e2e/reports/cucumber-html-report.html',
  reportSuiteAsScenaros: true,
  launchReport: false,
}
reporter.generate(options)