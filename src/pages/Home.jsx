import { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import PopUp from "../components/PopUpCards";
import Loader from "../components/Loader";
import BaseLayout from "../components/BaseLayout";
import NoStream from "../assets/images/NoStream.png";

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
          <button className="button customButton mt-3 d-md-block d-none ms-2">
            <a href="http://localhost:3000/?room=abcd">Live</a>
          </button>
          <div
            className={`${
              videoId ? "d-md-flex" : "d-none"
            } justify-content-center`}
          >
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

          <div
            className={`${
              videoId ? "d-none" : "d-md-flex"
            } justify-content-center`}
          >
            <div id="no-stream">
              <img
                className="img-fluid px-md-3"
                src={NoStream}
                height={400}
                alt=""
              />
              <h5 className="text-center stream-text text-secondary">
                Live Stream is Down. Check out our recorded events!
              </h5>
            </div>
          </div>

          <Marquee
            direction="left"
            speed={50}
            gradient
            gradientWidth={0}
            gradientColor={[31, 31, 31]}
          >
            {videoItems.map((videos, id) => (
              <button
                key={id}
                onClick={() => {
                  window.scrollTo(0, 0);
                  document.getElementById("no-stream").style.display = "none";
                  setVideoId(
                    `https://www.youtube.com/embed/${videos.contentDetails.videoId}`
                  );
                }}
              >
                <PopUp
                  src={videos.snippet.thumbnails.high.url}
                  title={videos.snippet.title}
                />
              </button>
            ))}
          </Marquee>
        </BaseLayout>
      ) : (
        <h1>No Data</h1>
      )}
    </>
  );
}
