function getCards(dispatch) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=28`)
    .then(res => res.json())
    .then(posts => {
      console.log("I am posts:", posts)
      return { posts }
    })
}

export function fetchCards() {
  return dispatch => {
    dispatch(fetchCardsBegin());
    return getCards(dispatch)
      .then(json => {
        dispatch(fetchCardsSuccess(json.posts));
        return json.posts;
      })
      .catch(error =>
        dispatch(fetchCardsFailure(error))
      );
  };
}

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

export const FETCH_CARDS_BEGIN = "FETCH_POSTS_BEGIN";
export const FETCH_CARDS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_CARDS_FAILURE = "FETCH_POSTS_FAILURE";

export const fetchCardsBegin = () => ({
  type: FETCH_POSTS_BEGIN
})

export const fetchCardsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
})

export const fetchCardsFailure = error => ({
  type: FETCH_POSTS_FAILURE
})
