import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import {
  trending,
  action,
  horror,
  comedy,
  romance,
  documentaries,
  theatres,
  rated,
  popular,
  kids,
  best,
} from "../../urls";
import RowPost from "../../components/RawPost/RowPost";
import Navbar from "../../components/Nav/Nav";
import { Store } from "../../Store";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { getError } from "../../utils";
import Axios from "axios";
import MyListCol from "../../components/MyList/MyListCol";

function Home() {
  const { state } = useContext(Store);
  const { userData } = state;

  const [myList, setMyList] = useState([]);
  
  const [myHistory, setMyHistory] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const myList = [];
      try {
        const result = await Axios.get(`/api/users/list`, {
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
    const fetchHistory = async () => {
      const myHistory = [];
      try {
        const result = await Axios.get(`/api/users/history`, {
          headers: {
            authorization: `Bearer ${userData.token}`,
          },
        });
          for (const element of result.data.history) {
            myHistory.push(element.movie[0]);
          }
          setMyHistory(myHistory); // set myHistory to the result of the axios request
      } catch (err) {
        toast.error(getError(err));
      }
    };

    fetchList();
    fetchHistory();
  }, [userData.token]);

  console.log(myHistory);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      <div className="home">
        <Banner />
        <RowPost url={trending} title={`Top Picks for ${userData.name}`} />
        {myList.length > 0 ? <MyListCol url={myList} title="My List" /> : <></>}
        {myHistory.length > 0 ? <MyListCol url={myHistory} title="What Again" /> : <></>}
        <RowPost url={theatres} title="In Theatres" />
        <RowPost url={popular} title="Popular" />
        <RowPost url={horror} title="Horror" isSmall />
        <RowPost url={action} title="Action" isSmall />
        <RowPost url={comedy} title="Comedy" isSmall />
        <RowPost url={best} title="Best of 2010" isSmall />
        <RowPost url={kids} title="Popular With Kids" isSmall />
        <RowPost url={romance} title="Romance" isSmall />
        <RowPost url={rated} title="R rated" isSmall />
        <RowPost url={documentaries} title="Documentaries" isSmall />
      </div>
      <div className="footer">
        <p>
          <p>Copyright &copy; 2022</p>
        </p>
      </div>
    </>
  );
}

export default Home;
