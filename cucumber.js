export default {
    import: ['e2e/support/*.ts', 'e2e/features/step_definitions/*.ts'],
    paths: ['e2e/features/*.feature'],
    requireModule: ['ts-node/register', 'tsconfig-paths/register'],
    format: [
        'json:e2e/reports/report.json',
        'html:e2e/reports/cucumber-html-report.html',
        'summary',
        'progress - bar',
        '@cucumber/pretty-formatter'
    ],
    tags: "@runMe",
    // parallel: 2,
    publishQuiet: true
}
