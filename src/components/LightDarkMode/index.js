// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    light: false,
  }

  changeMode = () => {
    this.setState(prevState => ({light: !prevState.light}))
  }

  render() {
    const {light} = this.state
    return (
      <div className={light ? 'light' : 'dark'}>
        <h1>Click to change Mode</h1>
        <button onClick={this.changeMode} type="button">
          {light ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
