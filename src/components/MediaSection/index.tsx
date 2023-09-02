import React, { FC, HTMLAttributes } from "react";
import { IconWrapper } from './style'
import InstagramLogo from '../../assets/icons8-instagram.svg'
import SpotifyLogo from '../../assets/icons8-spotify.svg'
import DeezerLogo from '../../assets/icons8-deezer.svg'
import SoundcloudLogo from '../../assets/icons8-soundcloud.svg'
import ItunesLogo from '../../assets/icons8-itunes.svg'
import YoutubeLogo from '../../assets/icons8-youtube.svg'

type MediaType = HTMLAttributes<HTMLElement>


export const MediaSection: FC<MediaType> = (props) => (
    <IconWrapper {...props}>
      <img {...InstagramLogo} alt="Instagram logo"/>
      <img {...SpotifyLogo} alt="Spotify logo"/>
      <img {...DeezerLogo} alt="Deezer logo"/>
      <img {...SoundcloudLogo} alt="Soundcloud logo"/>
      <img {...ItunesLogo} alt="AppleMusic logo"/>
      <img {...YoutubeLogo} alt="Youtube logo"/>
    </IconWrapper>
  )

export default MediaSection