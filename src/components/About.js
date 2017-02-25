import React from 'react'
import Iphone from 'material-ui/svg-icons/hardware/tablet-mac';

const styles={
  section: {
    // width: '100%',
    backgroundColor: 'transparent',
    paddingTop: '10vh',
    // paddingBottom: '10vh'
  },
}

export default () => (
    <section style={styles.section} className="col-xs-11">
    <div className="row around-xs">
      <div className="col-xs-1 col-sm-1"></div>
      <div className="col-xs-10 col-sm-6" style={{transform: 'translateZ(80px) scale(0.8)', paddingLeft: '5%'}}>
        <div className="row"><h1 style={{fontSize: '5vh', marginTop: 0, marginBottom: '2vh', color: '#00bbdc'}}>Who am I?</h1></div>

        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>I am a software developer with financial consulting background.</p></div>


        <div className="row"><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Challenging</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}> I like the fact that although there are bounded rules in terms of programming language syntax, there is no one way to solve programming issues. For this reason, I consider programming a form of art and working on creative projects has always motivated me.</p></div>

        <div className="row"><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Passionate</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>I successfully graduated from 17 week-immersive software development program at Fullstack Academy of Code in New York. New technologies are always fascinating to me and I am really excited to learn and apply them to real production.</p></div>

        <div className="row"><h2 style={{fontSize: '3vh', color: '#00bbdc', marginBottom: '1vh'}}>Team Working</h2></div>
        <div className="row"><p style={{fontSize: '1rem', lineHeight: 1.5, color: '#FFF'}}>I grew up in South Korea, a culture which values collectivism and caring for other team members. My previous experience as a team leader helps me motivate others to work toward a common goal and improve productivity in group settings.</p></div>
      </div>

      <div className="col-xs-10 col-sm-4">
        <div className="row center-xs middle-xs" style={{marginTop: '5vh'}}>
          <img src="/images/profile_img_1.png" style={{width: '100%', height: '120vh'}} />
        </div>
      </div>

    </div>
  </section>
)


//<img src="http://placehold.it/300x600" style={{width: '100%', height: '80vh'}}/>
//<Iphone color="#DDD" style={{width: '100%', height: '100vh'}}/>