
const LOCALSTORAGE_KEYS = {
    accessToken: 'spotify_access_token',
    refreshToken: 'spotify_refresh_token',
    expireTime: 'spotify_token_expire_time',
    timestamp: 'spotify_token_timestamp',
  }
  
  const LOCALSTORAGE_VALUES = {
    accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
    refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
    expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
    timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
  };

const getToken = () => {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tokenParams = {
    [LOCALSTORAGE_KEYS.accessToken]: urlParams.get('access_token'),
    [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
    [LOCALSTORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
  };  
console.log(LOCALSTORAGE_VALUES.accessToken);

//if user has logged in before and there is an accessToken in storage, return the value of it here
if (LOCALSTORAGE_VALUES.accessToken && LOCALSTORAGE_VALUES.accessToken !== 'undefined') {
  return LOCALSTORAGE_VALUES.accessToken
}

//if user has not logged in before set the accessToken in storage
if (tokenParams[LOCALSTORAGE_KEYS.accessToken]) {
    window.localStorage.setItem('spotify_access_token', tokenParams[LOCALSTORAGE_KEYS.accessToken]);
    window.history.pushState({},null, '/');
}
return LOCALSTORAGE_VALUES.accessToken; // used to sign Spotify API Calls
}

export const accessToken = getToken();
// Also need function to get refresh Token after time has elapsed



// Logout function
export const logout = () => {
    window.localStorage.removeItem(LOCALSTORAGE_KEYS.accessToken)
    window.location = window.location.origin;
}


  
   