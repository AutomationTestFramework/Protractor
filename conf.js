exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        // './test/specs/**/*.js'  //jasmine
        './test/specs/cucumber/**/*.feature' //cucumber
    ],
    baseUrl: 'https://angularjs.org/',
    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    reporters:['dot','concise',['junit',{outputDir:'reports'}],['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
    },

    mochaOpts: {
        reporter: "spec",
        slow: 3000
    },

    cucumberOpts: {
        require: ['.test/specs/cucumber/**/*.js'],  // require step definition files before executing features
        tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        'dry-run': false,              // <boolean> invoke formatters without executing steps
        compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
      },
    
     onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
     }
    
  };