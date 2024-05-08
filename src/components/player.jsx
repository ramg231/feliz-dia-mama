import React from 'react'
import Player from "@madzadev/audio-player";
 
function player() {
    const tracks = [
        {
          url: "https://firebasestorage.googleapis.com/v0/b/music-b5e6f.appspot.com/o/musica.mp3?alt=media&token=5cad05fb-3652-4f59-97e7-8632f6eacd04",
          title: "",
          tags: ["house"],
              },
          ];
      const colors = {
        tagsBackground: "#3e32e4",
        tagsText: "#ffffff",
        tagsBackgroundHoverActive: "#6e65f1",
        tagsTextHoverActive: "#ffffff",
        searchBackground: "#18191f",
        searchText: "#ffffff",
        searchPlaceHolder: "#D6846E",
        playerBackground: "#D6846E",
        titleColor: "#ffffff",
        timeColor: "#ffffff",
        progressSlider: "#ffffff",
        progressUsed: "#ffffff",
        progressLeft: "#ffffff",
        bufferLoaded: "#D6846E",
        volumeSlider: "#ffffff",
        volumeUsed: "#ffffff",
        volumeLeft: "#151616",
        playlistBackground: "#D6846E",
        playlistText: "#575a77",
        playlistBackgroundHoverActive: "#18191f",
        playlistTextHoverActive: "#ffffff",
    }
  return (
    <div>
        <Player
        trackList={tracks} 
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
        sortTracks={false}
        autoPlayNextTrack={true}
        customColorScheme={colors}
        />
    </div>
  )
}

export default player