var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');

var jasmine = new Jasmine();

jasmine.configureDefaultReporter({print: noop});    // jasmine < 2.4.1, remove default reporter logs
jasmine.env.clearReporters();                       // jasmine >= 2.5.2, remove default reporter logs
jasmine.addReporter(new SpecReporter());            // add jasmine-spec-reporter

jasmine.loadConfig({
        "spec_dir": "tmp",
        "spec_files": [
            "**/*.[sS]pec.js"
        ],
        "helpers": [
            "specHelpers/**/*.js"
        ],
        "stopSpecOnExpectationFailure": false,
        "random": false
    }
);

jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }

    done();
});

function noop() {};

jasmine.execute();
