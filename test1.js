const browserstack = require('browserstack-local');
// Creates an instance of Local
const bs_local = new browserstack.Local();

// You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
const bs_local_args = { key: 'qFmc7NyzTMA5bbQRyZSc' };

// Starts the Local instance with the required arguments.
bs_local.start(bs_local_args, function() {
    console.log('Started BrowserStackLocal');

    // Checks if BrowserStack local instance is running.
    console.log('BrowserStackLocal running:', bs_local.isRunning());

    // Your test code goes here, from creating the driver instance till the end, i.e. driver.quit.

    // Stops the Local instance after your test run is completed, i.e after driver.quit.
    bs_local.stop(function() {
        console.log('Stopped BrowserStackLocal');
    });
});