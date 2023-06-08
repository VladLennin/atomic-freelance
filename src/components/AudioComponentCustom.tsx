import React, {FC, useRef, useState} from 'react';
// @ts-ignore
import audioLogo from "../assets/audio_logo.jpg"

interface AudioProps {
    audio: any;
}

const AudioComponentCustom: FC<AudioProps> = ({audio}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleButtonClick = () => {
        if (isPlaying) {
            // @ts-ignore
            audioRef.current.pause();
        } else {
            // @ts-ignore
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={"aeroport-medium flex w-full justify-center items-center gap-5 my-4 border roudned shadow p-3"}>
                <p>Прослухати звучання</p>
            <button onClick={handleButtonClick} className={"text-3xl"}>
                {isPlaying ? <i className="bi bi-pause"></i> : <i className="bi bi-play"></i>}
            </button>
            <audio ref={audioRef} src={audio}/>
        </div>
    );
};

export default AudioComponentCustom;