(function () {
    // Configure RequireJS so it resolves relative module paths from the `src`
    // folder.
    require.config({
        baseUrl: "../src",
    });

    // A list of all QUnit test Modules.  Make sure you include the `.js` 
    // extension so RequireJS resolves them as relative paths rather than using
    // the `baseUrl` value supplied above.
    var testModules = [
        "backend/utils_test.js",
        "backend/buffer_test.js",
        "backend/action_test.js",
        "backend/view_test.js",
    ];

    // Resolve all testModules and then start the Test Runner.
    require(testModules, function(){
        QUnit.load();
        QUnit.start();
    });
}());