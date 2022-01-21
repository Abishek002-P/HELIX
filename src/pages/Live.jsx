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

  useEffect