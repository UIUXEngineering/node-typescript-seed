
var Jasmine = require('jasmine');

var jasmine = new Jasmine();


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

jasmine.configureDefaultReporter({
    // timer: new jasmine.Timer(),
    print: function() {
        process.stdout.write(util.format.apply(this, arguments));
    },
    showColors: true,
    jasmineCorePath: this.jasmineCorePath
});

jasmine.execute();
