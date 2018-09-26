import theNeukApi from 'theNeukApi';

export const setToDos = (toDos) => {
  return {
    type: "SET_TO_DOS",
    payload: toDos
  };
};

export const getToDos = () => {
  return (dispatch) => {
    return theNeukApi.getThingsToDo().then(response => {
      dispatch(setToDos(response))
      return true
    })
  }
}
