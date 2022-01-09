const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
driver = new webdriver.Builder().
usingServer('http://http://automationpractice.com/index.php' + username + ':' + accessKey + '@hub-cloud.browserstack.com/wd/hub').
withCapabilities(capabilities).build();