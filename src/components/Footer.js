import React from 'react'

const styles = {
  footer: {
    color: '#fff'
  },
  anchor: {
    textDecoration: 'none',
    color: '#fff'
  },
}

export default () => (
    <div className="row center-xs" style={{zIndex: 10}}>
      <p style={styles.footer} className="col-xs-12"><a target="_blank" href="" style={styles.anchor}>hanhyuk83.cho@gmail.com</a> | <a target="_blank"  href="https://github.com/dev-hanhyuk" style={styles.anchor}>github</a> | <a target="_blank" href="https://www.linkedin.com/in/devhanhyuk" style={styles.anchor}>linkedIn</a></p>
    </div>
)
