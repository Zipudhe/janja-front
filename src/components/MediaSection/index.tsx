"use client";

import React, { FC, HTMLAttributes } from "react";
import { IconWrapper } from './style'
import { faInstagram, faSpotify, faDeezer, faSoundcloud, faItunes, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type MediaType = HTMLAttributes<HTMLElement>


export const MediaSection: FC<MediaType> = (props) => (
    <IconWrapper {...props}>
      <FontAwesomeIcon size={'3x'} color="#0593DD" icon={faInstagram} />
      <FontAwesomeIcon size={'3x'} color="#0593DD" icon={faSpotify} />
      <FontAwesomeIcon size={'3x'} color="#0593DD" icon={faDeezer} />
      <FontAwesomeIcon size={'3x'} color="#0593DD" icon={faSoundcloud} />
      <FontAwesomeIcon size={'3x'} color="#0593DD" icon={faItunes} />
      <FontAwesomeIcon size={'3x'} color="#0593DD" icon={faYoutube} />
    </IconWrapper>
  )

export default MediaSection