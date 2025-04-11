const BASE_URL = "https://api.cloudframework.io/erp/portal-users/2.0/cloudframework/web-oauth";
const REFERER = "https://cloudframework.portaluser.cloud/";
const CLIENT_ID = "testclient";

function getCommonHeaders() {
  const headers = new Headers();
  headers.append("referer", REFERER);
  return headers;
}

module.exports = {
  BASE_URL,
  REFERER,
  CLIENT_ID,
  getCommonHeaders,
};
