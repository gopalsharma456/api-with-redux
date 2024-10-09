export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (user) => ({
  type: FETCH_USERS_SUCCESS,
  payload: user,
});

export const fetchUsersFailure = (err) => ({
  type: FETCH_USERS_FAILURE,
  payload: err,
});

