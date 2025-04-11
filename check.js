const { BASE_URL, CLIENT_ID, getCommonHeaders } = require("./config");

async function check(web_token) {
  const url = `${BASE_URL}/check`;

  const headers = getCommonHeaders();
  headers.append("Authorization", `Bearer ${web_token}`);

  const params = new URLSearchParams();
  params.append("ClientId", CLIENT_ID);

  const requestOptions = {
    method: "GET",
    headers,
    credentials: "include",
  };

  const urlWithParams = `${url}?${params.toString()}`;

  try {
    const response = await fetch(urlWithParams, requestOptions);
    const result = await response.json();

    if (result.status !== 200) {
      throw new Error(`[${result.status}] - ${result.code}: ${result.message}`);
    }

    return result;
  } catch (error) {
    return { error: error.message || error };
  }
}

module.exports = { check };
