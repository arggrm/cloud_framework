const { BASE_URL, CLIENT_ID, getCommonHeaders } = require("./config");

async function signin(username, password) {
  const url = `${BASE_URL}/signin`;

  const headers = getCommonHeaders();
  headers.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    ClientId: CLIENT_ID,
    username,
    userpassword: password,
  });

  const requestOptions = {
    method: "POST",
    headers,
    body: raw,
    redirect: "follow",
    credentials: "include",
  };

  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();

    if (result.status !== 201) {
      throw new Error(`[${result.status}] - ${result.code}: ${result.message}`);
    }

    return result;
  } catch (error) {
    return { error: error.message || error };
  }
}

module.exports = { signin };
