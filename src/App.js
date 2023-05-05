import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isSaved: true,
    input: '',
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  editableText = () => {
    const {isSaved, input} = this.state
    return (
      <div>
        {isSaved ? (
          <div className="input-cont">
            <input
              type="text"
              onChange={this.onChangeInput}
              className="input-box"
              value={input}
            />
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="input-cont">
            <p className="text">{input}</p>
            <button
              type="button"
              className="button"
              onClick={this.onClickButton}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="white-cont">
          <h1 className="heading">Editable Text Input</h1>
          {this.editableText()}
        </div>
      </div>
    )
  }
}

export default App
