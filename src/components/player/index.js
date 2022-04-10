import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setshowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setshowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setshowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setshowPlayer(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close/>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};


Player.Button = function PlayerButton({...restProps}) {
    const {showPlayer, setshowPlayer} = useContext(PlayerContext)

    return (
        <Button onClick={()=> setshowPlayer((showPlayer) => !showPlayer)}>
            Play
        </Button>
    )
}