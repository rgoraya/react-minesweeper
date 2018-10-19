import React, {Component} from 'react'

export default class Timer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      seconds: 0,
      progress: this.props.progress
    }
  }

  componentWillUpdate (nextProps) {
    if (nextProps.progress !== this.state.progress) {
      this.setState({ progress: nextProps.progress });
    }  
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.progress !== this.state.progress) {
      switch (this.state.progress) {
        case "on": 
          this.startTimer();
          break;
        case "off":
          this.stopTimer();
          break;
        case "initial":
        default:
          this.resetTimer();
          break;
      }
    }
  }

  tick () {
    this.setState({seconds: (this.state.seconds + 1)})
  }

  startTimer () {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  stopTimer () {
    clearInterval(this.timer);
    this.props.onGameEnd(this.formattedTime());
  }

  resetTimer () {
    clearInterval(this.timer);
    this.setState({ seconds: 0})
  }

  formattedTime() {
    return new Date(this.state.seconds * 1000).toISOString().substr(11, 8)
  }

  render () {
    return (
      <div className="timer ml-3">
        { this.formattedTime() }
        <span className="oi oi-clock ml-2"></span>
      </div>
    )
  }
}