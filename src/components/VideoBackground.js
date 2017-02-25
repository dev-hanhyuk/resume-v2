import React from 'react'

const styles = {
  video: {
    objectFit: 'cover',
    height: '100vh',
    width: '100%',
    top: '0',
    padding: 'none',
    zIndex: '-1',
    position: 'fixed'
  },

}

export default () => (
  <section>
    <video style={styles.video} loop autoPlay controls>
      <source src="/bg-video.mp4" type="video/mp4" />
      <source src="/bg-video.mp4" type="video/ogg" />
      Your browser does not support the video tag.
    </video>


  </section>
)


