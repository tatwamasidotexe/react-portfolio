import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from '../assets/parallax/moon1.png';
import mountainBack from '../assets/parallax/mountains.png';
import mountainFront from '../assets/parallax/mountains_front.png';
import stars from '../assets/parallax/stars.png';

export const MoonSection = () => {
    return (
        <div className="parallax-container">
            <Parallax className="parallax" pages={2}>
                
                <ParallaxLayer 
                    className="parallax-layer" 
                    speed={0.5} 
                    style={{ 
                        backgroundImage: `url(${stars})`, 
                        backgroundSize: 'contain', 
                        backgroundRepeat: 'repeat-y', 
                        height: '100%' 
                    }}
                />

                <ParallaxLayer 
                    className="parallax-layer" 
                    offset={0} 
                    speed={1.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
                >
                    <img className="moon" src={moon} alt="moon" style={{ width: '20%' }}/>
                </ParallaxLayer>

                <ParallaxLayer 
                    className="parallax-layer" 
                    offset={0.6} 
                    speed={0.9}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
                >
                    <img src={mountainBack} alt="mountains-back" style={{ width: '100%' }}/>
                </ParallaxLayer>

                <ParallaxLayer 
                    className="parallax-layer" 
                    offset={0.7} 
                    speed={1.1}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}
                >
                    <img src={mountainFront} alt="mountains-front" style={{ width: '100%' }}/>
                </ParallaxLayer>

            </Parallax>
        </div>
    );
}