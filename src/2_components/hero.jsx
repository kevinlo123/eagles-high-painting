import React from 'react';
import BackgroundImage from 'gatsby-background-image'
import '../../styles/main.scss';

const Hero = ({hero}) => {
   
   return (
      <section class="overlay">
         <BackgroundImage
            Tag="section"
            fluid={hero.placeholderImage.childImageSharp.fluid}
            className="hero"
            backgroundColor={`#040e18`}
         >
         </BackgroundImage>
      </section>
   )
}

export default Hero;