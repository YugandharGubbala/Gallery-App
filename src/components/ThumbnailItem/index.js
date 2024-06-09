// Write your code here.
import './index.css'

const ThambnailItem = props => {
  const {details, galleryImage, active} = props

  const {thumbnailUrl, thumbnailAltText, id} = details
  const val = active ? '' : 'nonactive'
  const check = () => {
    galleryImage(id)
  }
  return (
    <li className="thumbbtn">
      <button className="type" onClick={check}>
        <img src={thumbnailUrl} className={val} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThambnailItem
