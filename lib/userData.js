import { getToken } from "./authenticate";

async function makeRequest(endpoint, method, errMsg) {
  const token = getToken();
  if (!token) {
    console.error('Authorization Failed: No token found. User must be login !!!');
    return [];
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      }
    });

    const data = await res.json();
    if (res.status === 200) {
      return data;
    } else {
      console.error(`Request failed with status: ${res.status}`);
      return [];
    }
  } catch (err) {
    console.error(`Error: ${errMsg}`, err);
    return [];
  }
}

export async function addToFavourites(id) {
  return await makeRequest(`/favourites/${id}`, 'PUT', 'Add to favourites failed');
}

export async function removeFromFavourites(id) {
  return await makeRequest(`/favourites/${id}`, 'DELETE', 'Remove from favourites failed');
}

export async function getFavourites() {
  return await makeRequest('/favourites', 'GET', 'Retrieving favourites failed');
}

export async function addToHistory(id) {
  return await makeRequest(`/history/${id}`, 'PUT', 'Add to history failed');
}

export async function removeFromHistory(id) {
  return await makeRequest(`/history/${id}`, 'DELETE', 'Remove from history failed');
}

export async function getHistory() {
  return await makeRequest('/history', 'GET', 'Retreving from history failed');
}
