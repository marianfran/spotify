import React from "react";
import Lottie from "lottie-react";
import musicplayer from "@/public/musicplay.json";
import styles from '../styles/Library.module.css';

const MusicLoader = () => <Lottie animationData={musicplayer} loop={true} className={styles.animation} />;

export default MusicLoader;