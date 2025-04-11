const { check } = require("./check");
const { signin } = require("./signin");
const { logError, logResponse } = require("./logger");
const { question } = require("./question");

async function main() {
  try {
    const username = await question("? username: ");
    const password = await question("? password: ");

    // signin
    const signinResult = await signin(username, password);
    if (signinResult.error) return logError("signin", signinResult.error);
    logResponse("signin", signinResult);

    // check
    const checkResult = await check(signinResult.data.web_token);
    if (checkResult.error) return logError("check", checkResult.error);
    logResponse("check", checkResult);
  } catch (err) {
    console.error("! main error:", err);
  }
}

main();
