import couchPic from "./pics/cartoon-couch-background.jpg"
import couch from "./pics/couch.jpg"
import aboutUs1 from "./pics/about-us-pic1.png"
import aboutUs2 from "./pics/about-us-pic2.png"
import aboutUs3 from "./pics/about-us-pic3.png"
import { useInView } from "react-intersection-observer"

const AboutUs = () => {
    const {ref: imgRefs, inView: imgVisible} = useInView({triggerOnce: true})
    const {ref: captionRefs, inView: captionVisible} = useInView({triggerOnce: true})

    return ( 
        <div className="home">
            <img src={couchPic} alt="" className="couch-pic"/>
            <div className="about-us">
                <p className="about-us-title">We are <span className="couch-king-bolded">CouchKing</span>.</p>
                <p className="about-us-subtitle">WINDSOR'S BEST TEAM OF CONSULTANTS ON COUCHES</p>
                <p className="about-us-desc">With our specialized team of experts on couches, you'll never pick an ugly couch again. Our mission has always been to eliminate all the uninteresting and poorly designed couches from all homes across Canada. With you on board, you can help us at CouchKing accomplish this.</p>
                <div className={`${'about-us-images'} ${imgVisible ? 'about-us-animation' : ''}`} ref={imgRefs}>
                    <img src={aboutUs1} alt="" />
                    <img src={aboutUs2} alt="" />
                    <img src={aboutUs3} alt="" />
                </div>
                <div className={`${'img-captions'} ${captionVisible ? 'caption-animation' : ''}`} ref={captionRefs}>
                    <p>STEP 1: PLAN</p>
                    <p>STEP 2: INTERIOR DESIGN</p>
                    <p>STEP 3: EXECUTE</p>
                </div>
            </div>
        </div>  
     );
}
 
export default AboutUs;