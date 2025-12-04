import Avatar from '../assets/yo.jpg'
import React from 'react'

export const AvatarPhoto = ({ className = '' }) => {
  return <img src={Avatar.src} alt="jonny" className={className} />
}

export default AvatarPhoto
