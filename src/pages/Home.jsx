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
