import { Flex, Paragraph } from "theme-ui";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import jira from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/jira2.webp';
import testrail from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/testrail.jpeg';
import conflu from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/conflu1.webp';
import devops from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/devops1.png';
import { useEffect, useState } from "react";
import { carouselText1, carouselText2, carouselText3, carouselText4 } from '../content/contentEN';


export function HomeCarousel() {
    // const [width, setWidth] = useState(window.innerWidth);
    // const breakPoint = 820; 

    // useEffect(() => {
    //     const handleWindowResize = () => setWidth(window.innerWidth);
    //     window.addEventListener("resize", handleWindowResize);    
    //     return () => window.removeEventListener("resize", handleWindowResize);
    //    },[]);

    // const setHeight = () => {
    //     return width > breakPoint ? 'unset' : '600px';
    // }   

    return <Flex sx={{
        // height: setHeight(),
        zIndex: 0
    }}>
        {/* <Flex> */}
        <Carousel centerMode={false} showThumbs={false}>
                <Flex>
                    <img src={jira} alt="jira"/>
                    <Paragraph className="legend">{carouselText1}</Paragraph>
                </Flex>
                <Flex>
                    <img src={testrail} alt="testrail"/>
                    <Paragraph className="legend">{carouselText2}</Paragraph>
                    </Flex>
                <Flex>
                    <img src={conflu} alt="confluence"/>
                    <Paragraph className="legend">{carouselText3}</Paragraph>
                    </Flex>
                    <Flex>
                    <img src={devops} alt="devops"/>
                    <Paragraph className="legend">{carouselText4}</Paragraph>
                    </Flex>
            </Carousel>
        {/* </Flex>      */}
    </Flex>

}

export default HomeCarousel;
