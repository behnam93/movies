import "./Home.css";
import React from "react";
import Slider from "../../Components/Slider";
import { useFetch } from "../../Components/UseFetch";
import Movies from "../../Components/Movies/Movies";
import { useFetch2 } from "../../Components/UseFetch2";
import Skeletons from "../../Components/Skeletons";

export default function Home() {
  // Fetch Most Popular Tv series
  const { data, isPending, error } = useFetch(
    "https://imdb-api.com/en/API/MostPopularTVs/k_kmt3mpg6"
  );
  console.log(data);
  // Fetch Comming Soon Movies
  const { data2, isPending2, error2 } = useFetch2(
    "https://imdb-api.com/en/API/ComingSoon/k_kmt3mpg6"
  );
  return (
    <div>
      <div className="">
        <div>
          <Slider />
          {/* Tvs Series */}
          {data && (
            <Movies
              whichApi="imdb"
              h2title={"Most Popular TV Seriess"}
              movies={data.items.slice(0, 10)}
            />
          )}
          {error ||
            (isPending && (
              <Skeletons h2title={"Most Popular TV Seriess"} />
              // <div className="">
              //   <div className="movies-list">
              //     <h2>Most Popular TV Series</h2>
              //     <h3
              //       className="button-back centralize"
              //       style={{ color: "white", marginTop: "0.5rem" }}
              //     >
              //       {error}
              //     </h3>
              //   </div>
              // </div>
            ))}
          {/*  Fetch Comming soon */}
          {/* {isPending2 && <Skeletons h2title={"Most Popular TV Series"} />} */}
          {data2 && (
            <Movies
              whichApi="imdb"
              h2title={"Comming Soon"}
              movies={data2.items.slice(0, 10)}
            />
          )}
          {error2 ||
            (isPending2 && (
              <Skeletons h2title={"Most Popular TV Series"} />
              // <div className="" style={{ margin: "10% 0 0.5rem 1.5rem" }}>
              //   <div className="movies-list">
              //     <h2>Comming Soon</h2>
              //     <h3
              //       className="button-back centralize"
              //       style={{
              //         color: "white",
              //         marginTop: "0.5rem",
              //       }}
              //     >
              //       {error2}
              //     </h3>
              //   </div>
              // </div>
            ))}
        </div>
      </div>
    </div>
  );
}
