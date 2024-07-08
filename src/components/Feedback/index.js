import {Component} from 'react'
import Emojicard from '../Emojicard'
import './index.css'

class Feedback extends Component {
  state = {isBeginning: true}

  changeStatus = id => {
    this.setState({isBeginning: false})
    console.log(id)
  }

  render() {
    const {isBeginning} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="cont-1">
        {isBeginning ? (
          <div className="cont-2">
            <h1 className="wraper header">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="lister">
              {emojis.map(x => (
                <Emojicard
                  key={x.id}
                  changeStatus={this.changeStatus}
                  cardDetails={x}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="cont-2">
            <img className="imager" alt="love emoji" src={loveEmojiUrl} />
            <h1>Thank you</h1>
            <p className="wraper">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
