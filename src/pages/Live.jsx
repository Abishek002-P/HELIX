import { useEffect, useState } from "react";
import axios from "axios";
import NoLiveStream from "../assets/images/NoStream.png";
import { ReactFlvPlayer } from "react-flv-player";
import Chat from "mr-chat-client";
import BaseLayout from "../components/BaseLayout";

export default function Home() {
  let { REACT_APP_STREAM_KEY } = process.env;
  const username = localStorage.getItem("username");
  const [displayImg, setDisplayImg] = useState(true);

  useEffect(() => {
    axios
      .get("http://vpn.opencloud.pattarai.in:8000/api/streams", {
        auth: {
          username: "admin",
          password: "admin",
        },
      })
      .then((res) => {
        let stream_publishers = res.data.live[REACT_APP_STREAM_KEY].publisher;
        console.log(stream_publishers);
        if (stream_publishers !== null) {
          setDisplayImg(false);
        }
      })
      .catch((err) => {
        setDisplayImg(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BaseLayout>
        <div
          className={`vh-75 ${
            displayImg ? "d-flex" : "d-none"
          } justify-content-center align-items-center `}
          id="no-stream"
        >
          <div className="text-center">
            <img
              className="img-fluid"
              height="auto"
              width="50%"
              src={NoLiveStream}
              alt=""
            />
            <h5 className="text-center stream-text text-secondary">
              Live Stream is Down. See You Later..
            </h5>
          </div>
        </div>

        <div
          className={`${
            displayImg ? "d-none" : "d-md-flex"
          } align-items-center `}
        >
          <ReactFlvPlayer
            className="col-12 col-md-8 px-md-3 pb-3 pb-md-0 iframe-height"
            url={`http://vpn.opencloud.pattarai.in:8000/live/${REACT_APP_STREAM_KEY}.flv`}
            isLive={true}
            hasAudio={true}
            hasVideo={true}
          />
          <Chat userName={username} roomKey="123" />
        </div>
      </BaseLayout>
    </>
  );
}
