import Avatar from '../assets/yo.jpg'

export const AvatarPhoto = ({ className = '' }) => {
  return <img src={Avatar.src} alt="jonny" className={className} />
}

export default AvatarPhoto
