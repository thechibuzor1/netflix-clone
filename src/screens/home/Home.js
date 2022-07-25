import React from "react";
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

function Home() {
  return (
    <div className="home">
      <Banner />
      <RowPost url={trending} title="Netflix Originals" />
      <RowPost url={theatres} title="In Theatres" />
      <RowPost url={popular} title="Popular" />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={best} title="Best of 2010" isSmall />
      <RowPost url={kids} title="Popular With Kids" isSmall/>
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={rated} title="R rated" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />

    </div>
  );
}

export default Home;
