import React from 'react'

const styles={
  buttonStyle: {
    width: '180px',
    height: '2.4rem',
    outline: '0',
    background: 'transparent',
    border: '2px solid #00bbdc',
    fontWeight: '500',
    color: '#00bbdc',
    borderRadius: '2.4vh',
  },
  buttonHover: {
    width: '180px',
    height: '2.4rem',
    outline: '0',
    background: '#00bbdc',
    border: '2px solid #00bbdc',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '2.4vh',
  }
}

export default class  extends React.Component {
    constructor(props) {
      super(props)
      this.state = { hover: false }
    }

    handleMouseEnter = () => this.setState({hover: true});
    handleMouseLeave = () => this.setState({hover: false});
    handlePress = (e) => {
      e.preventDefault();
      this.setState({hover: false});
      this.props.clickHandler()
    }

    componentDidMount () {}

    render () {

      return (
        <button
          style={this.state.hover ? styles.buttonHover : styles.buttonStyle}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onTouchTap={this.handlePress}
        >
          {this.props.buttonText ? this.props.buttonText : 'Bacon ipsum dolor'}
        </button>
      )
    }
}
