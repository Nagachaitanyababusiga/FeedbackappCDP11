import './index.css'

const Emojicard = props => {
  const {cardDetails, changeStatus} = props
  const {id, name, imageUrl} = cardDetails
  const change = () => {
    changeStatus(id)
  }
  return (
    <li className="listitem">
      <img className="image" onClick={change} alt={name} src={imageUrl} />
      <p className="para">{name}</p>
    </li>
  )
}

export default Emojicard
