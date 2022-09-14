const cucumberJunitConvert = require('cucumber-junit-convert');

const options = {
  inputJsonFile: 'e2e/reports/report.json',
  outputXmlFile: 'e2e/reports/junit.xml',
  featureNameAsClassName: true // default: false
}

cucumberJunitConvert.convert(options);