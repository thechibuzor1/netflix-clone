import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiArrowBack } from "react-icons/bi";
import { toast } from "react-toastify";
import MyListRol from "../../components/MyList/MyListRol";
import Navbar from "../../components/Nav/Nav";
import { Store } from "../../Store";
import { getError } from "../../utils";
import { client } from "../../Axios";

function MyList() {
  const { state } = useContext(Store);
  const { userData } = state;

  const [myList, setMyList] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      const myList = [];
      try {
        const result = await client.get(`/api/users/list`, {
          headers: {
            authorization: `Bearer ${userData.token}`,
          },
        });

        for (const element of result.data.list) {
          myList.push(element.movie[0]);
        }
        setMyList(myList); // set myList to the result of the axios request
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchList();
  }, [userData.token]);
  return (
    <>
      <Helmet>
        <title>My List</title>
      </Helmet>
      <Navbar />
      <div className="discover">
        <div className="discover_search">
          <BiArrowBack
            className="back_btn"
            onClick={() => {
              window.history.back();
            }}
          />
          <h1></h1>
        </div>
        <h1>My List </h1>
        <div>
          {myList.length > 0 ? (
            <MyListRol url={myList} title="My List" />
          ) : (
            <>
              <h1>Your list is empty.</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MyList;
