const logResponse = (label, response) => {
  const { status, code, message } = response;
  console.log(`* ${label} response: [${status}] - ${code} ${message || ""}`);
};

const logError = (label, error) => {
  console.error(`! ${label} error:`, error);
};

module.exports = { logResponse, logError };