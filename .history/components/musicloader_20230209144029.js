import React from "react";
import Lottie from "lottie-react";
import musicplayer from "@/public/musicplay.json";

const MusicLoader = () => <Lottie animationData={musicplayer} loop={true} />;

export default MusicLoader;