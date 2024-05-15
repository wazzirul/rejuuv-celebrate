import React, { useEffect, useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CelebrateSection, CelebrateNavbar, CelebrateContent } from './celebrate.style';
import radialLight from '../../public/assets/images/radial-light.png';

function Celebrate() {
    const [showRadial, setShowRadial] = useState(false);
    const [showLampPillarFront, setShowLampPillarFront] = useState(false);
    const [showLampPillarBehind, setShowLampPillarBehind] = useState(false);
    const [showLeaf, setShowLeaf] = useState(false);
    const [showRadialParticles, setShowRadialParticles] = useState(false);

    const circles = [];
    
    for (let i = 1; i <= 200; i++) {
        circles.push(
        <div key={i} className="circle-container">
            <div className="circle"></div>
        </div>
        );
    }


    useEffect(() => {
      const timeoutRadial = setTimeout(() => {
        setShowRadial(true);
      }, 0); // milliseconds delay
  
      const timeoutLampPillarFront = setTimeout(() => {
        setShowLampPillarFront(true);
      }, 500); // milliseconds delay
  
      const timeoutLampPillarBehind = setTimeout(() => {
        setShowLampPillarBehind(true);
      }, 1000); // milliseconds delay
  
      const timeoutLeaf = setTimeout(() => {
        setShowLeaf(true);
      }, 2000); // milliseconds delay
  
      const timeoutRadialParticles = setTimeout(() => {
        setShowRadialParticles(true);
      }, 4000); // milliseconds delay
  
      // Clear timeouts
      return () => {
        clearTimeout(timeoutRadial);
        clearTimeout(timeoutLampPillarFront);
        clearTimeout(timeoutLampPillarBehind);
        clearTimeout(timeoutLeaf);
        clearTimeout(timeoutRadialParticles);
      };
    }, []);

    return(
      <CelebrateSection>
        <Navbar />
        <div className='gradient-overlay'></div>
        <Hero />
        <div className='hero-background'>
          {showRadialParticles && (
            <img
              className="radial-light-particles"
              src={'/assets/images/particles-radial-light.png'}
              alt='Particles Radial Light'
              width={1387}
              height={677}
            />
          )}
          {showRadial && (
            <img
              className="radial-light"
              src={'/assets/images/radial-light.png'}
              alt='Radial Light'
              width={1337}
              height={1015.737}
            />
          )}
          {showLampPillarFront && (
            <>
              <img
                  className="lamp-pillar-front lamp-pillar-front--dekstop"
                  src={'/assets/images/lamp-pillar-front.png'}
                  alt='Lamp Pillar Front'
                  width={988}
                  height={643}                    
              />
              <img
                  className="lamp-pillar-front lamp-pillar-front--mobile"
                  src={'/assets/images/lamp-pillar-front-mobile.png'}
                  alt='Lamp Pillar Front'
                  width={366.3}
                  height={238.7}                    
              />
            </>
          )}
          {showLampPillarBehind && (
            <img
                className="lamp-pillar-behind"
                src={'/assets/images/lamp-pillar-behind.png'}
                alt='Lamp Pillar Behind'
                width={1440}
                height={826}
            />
          )}
          {showLeaf && (
            <img
                className="leaf-pillar"
                src={'/assets/images/leaf.png'}
                alt='Leaf Pillar'
                width={1365}
                height={916}
            />
          )}
          <div className='particles'>
            {circles}
          </div>
        </div>
        <div className='gradient-overlay-bottom'></div>
      </CelebrateSection>
    )
}

const Navbar = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <CelebrateNavbar>
            <div className="container">
                <div className='navbar-wrapper'>
                    <div className='left-menu'>
                        <button type='button' className='navbar-hamburger-button'>
                            <Image src={'/assets/images/icon-hamburger.svg'} alt='Hamburger Icon' width={24} height={24} />
                        </button>
                        <Link href='/'>
                            <Image src={'/assets/images/rejuuv-logo.svg'} alt='Main Logo' className='navbar-logo' width={windowSize.width > 576 ? 120 : 92} height={34} />
                        </Link>
                        <div className='navbar-menu'>
                            <button type='button' className='navbar-dropdown-toggle'>
                                About Us
                                <Image src={'/assets/images/icon-caret-down.svg'} alt='Caret Down Icon' width={14} height={14} />
                            </button>
                            <button type='button' className='navbar-dropdown-toggle'>
                                Deals
                                <Image src={'/assets/images/icon-caret-down.svg'} alt='Caret Down Icon' width={14} height={14} />
                            </button>
                            <button type='button' className='navbar-dropdown-toggle'>
                                Activity
                                <Image src={'/assets/images/icon-caret-down.svg'} alt='Caret Down Icon' width={14} height={14} />
                            </button>
                        </div>
                    </div>
                    <div className='right-menu'>
                        <button type='button' className='cta-button'>Rejuuv Your Business</button>
                        <button type='button' className='icon-button'>
                            <Image src={'/assets/images/icon-heart.svg'} alt='Heart Icon' width={24} height={24} />
                        </button>
                        <button type='button' className='icon-button'>
                            <Image src={'/assets/images/icon-globe.svg'} alt='Globe Icon' width={24} height={24} />
                        </button>
                        <button type='button' className='profile-button'>
                            <div className='icon-wrap'>
                                <Image src={'/assets/images/icon-sort-ascending.svg'} alt='Sort Icon' width={24} height={24} />
                            </div>
                            <div className='icon-wrap-avatar'>
                                <Image src={'/assets/images/icon-user.svg'} alt='User Icon' width={24} height={24} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </CelebrateNavbar>
    )
}

const Hero = () => {
    return(
        <CelebrateContent>
            <div className="container">
                <div className='preview-content'>
                    <p className='preview-content-tag'>PROVIDER AWARDS</p>
                    <h1 className='preview-content-title'>Recognizing the Best in Care Giving</h1>
                    <p className='preview-content-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </CelebrateContent>
    )
}

export default Celebrate