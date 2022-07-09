import React, { useReducer } from "react";
import axios from "axios";

export const commentsContext = React.createContext();

const INIT_STATE = {
  comments: [],
  oneComment: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload,
      };
    case "GET_ONE_COMMENT":
      return { ...state, oneComment: action.payload };
    default:
      return state;
  }
}

const CommentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //! CRUD
  const COMMENTS_API = "http://localhost:8000/comments";

  //! Create
  async function addComment(newComment) {
    await axios.post(COMMENTS_API, newComment);
  }

  //! Read
  async function getComments() {
    const res = await axios(COMMENTS_API);
    dispatch({
      type: "GET_COMMENTS",
      payload: res.data,
    });
  }

  //! Delete
  async function deleteComment(id) {
    await axios.delete(`${COMMENTS_API}/${id}`);
    getComments();
  }

  //! Details, Get to edit
  async function getOneComment(id) {
    const res = await axios(`${COMMENTS_API}/${id}`);
    dispatch({
      type: "GET_ONE_COMMENT",
      payload: res.data,
    });
  }

  //! Update
  async function updateComment(id, updatedComment) {
    await axios.patch(`${COMMENTS_API}/${id}`, updatedComment);
    getComments();
  }

  return (
    <commentsContext.Provider
      value={{
        comments: state.comments,
        oneComment: state.oneComment,
        addComment,
        getComments,
        deleteComment,
        getOneComment,
        updateComment,
      }}>
      {children}
    </commentsContext.Provider>
  );
};
export default CommentsContextProvider;
