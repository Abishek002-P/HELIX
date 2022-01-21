import { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import PopUp from "../components/PopUpCards";
import Loader from "../components/Loader";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  const { REACT_APP_YOUTUBE_API_KEY } = process.env;
  const [loader, setLoader] = useState(true);
  const [videoItems, setVideoItems] = useState([]);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=PLLCdGWbcw9uwhUPaCmtQlHlMKyE6R7a1P&key=${REACT_APP_YOUTUBE_API_KEY}`
      )
      .then((res) => {
        const videoitems = res.data.items;
        setVideoItems(videoitems);
        setLoader(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      {loader ? (
        <Loader />
      ) : videoItems.length > 0 ? (
        <BaseLayout>
          <div
            className={`${
              videoId ? "d-md-flex" : "d-none"
            } justify-content-center`}
          ></div>

<iframe
              id="youtubeLive"
              title="Youtube Live Stream"
              className="col-12 col-md-10 pb-3 px-md-3 iframe-height"
              src={videoId}
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
