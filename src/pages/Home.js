import { Component, useEffect } from "react";
import { List } from "../components/List";
// import comments actions here
import { useDispatch } from "react-redux";
import { commentActions } from "../redux/reducers/commentsReducer";

export const Home = () => {
  const dispatch = useDispatch();
  const getComments = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/comment");
      if(!response.ok){
         throw new Error("");
        }
      const data = await response.json();
      // dispatch fetch success action here
      dispatch(commentActions.success(data));
    } catch (e) {
      // dispatch fetch error action here
       dispatch(commentActions.fetchError())
    }
  };

  useEffect(() => {
    // dispatch fetch start action here
    dispatch(commentActions.start()); 
    // execute the getComments function here
      getComments();
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
