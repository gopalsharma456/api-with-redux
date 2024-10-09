// import { useState } from "react";
import Users from "./components/Users";
import UsersList from "./components/UsersList";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersRequest } from './store/actions';

function App() {
  const dispatch = useDispatch()
  // const [usersData, setUsersData] = useState([]);
  const {usersData, loading, error} = useSelector((state) => state)

  const handleClick = () => {
    // const fetchedData = async () => {
    //   try {
    //     const res = await fetch("https://fakestoreapi.com/products");
    //     const data = await res.json();
    //     setUsersData(data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchedData();
    dispatch(fetchUsersRequest())
  };

  return (
    <>
      <Users />

      <button onClick={handleClick}>Get Users</button>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      
      <UsersList usersData = {usersData} />
    </>
  );
}

export default App;
