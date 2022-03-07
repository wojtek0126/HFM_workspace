import { Flex, Heading, Paragraph } from "theme-ui";
import { ComponentsProps } from "../interfaces";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import mobtester from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/5gTest.jpg';
import mobtester2 from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/5g2.jpg';
import mobtester3 from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/5g3.jpg';


export function MobileTester() {
    return <Flex sx={{
        position: 'absolute',
        // padding: '30px',
        // position: position,
        // top: top,
        // marginTop: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
        // backgroundColor: backgroundColor,
        // color: '#fff',
        // flexDirection: 'column',
        // display: display,
        zIndex: -7,
        // transition: '1s',
        // opacity: opacity
        // width: '100%',

    }}>
        <Flex sx={{
                    position: 'relative',
                    // width: '100px',
                    maxHeight: '600px',
                    // zIndex: 0
                }}>
        <Carousel centerMode={false} showThumbs={false}>
                <Flex sx={{
                    // position: 'absolute',
                    // width: '100%',
                    // height: '100%',
                    // zIndex: -8
                }}>
                    <img src={mobtester} />
                    <p className="legend">Legend 1</p>
                </Flex>
                <Flex sx={{
                    // width: '100%',
                    // height: '100%'
                }}>
                    <img src={mobtester2} />
                    <p className="legend">Legend 2</p>
                    </Flex>
                <Flex sx={{
                    // width: '100%',
                    // height: '100%'
                }}>
                    <img src={mobtester3} />
                    <p className="legend">Legend 3</p>
                    </Flex>
            </Carousel>
        </Flex>
            
       {/* <img src={mobtester} style={{
           width: '40%',
       }} /> */}
       {/* <Flex sx={{
           flexDirection: 'column'
           
       }}>
       <Heading>
            5G Tester knowledge
        </Heading>
        <Paragraph>
            This is few terms necessary to know to become 5G tester:
            <ul>
                <li>Linux shell Telecom</li>
                <li>LTE basics</li>
                <li>Network mechanisms</li>
                <li>Modulation in mobile networks</li>
                <li>MIMO</li>
                <li>Draw 2x2 MIMO</li>
                <li>Intermodulation - Telecom standards</li>
                <li>Network architecture elements(i.e. LTE network diagram, BSC)</li>
                <li>The quality of radio signal(i.e. EVM, intermodulation etc.)</li>
                <li>Differences between 4G and 5G</li>
                <li>Architecture of LTE</li>
                <li>NSA</li>
                <li>SA networks: IPv4 vs IPv6</li>
                <li>UDP vs TCP</li>
                <li>Switch vs Router</li>
                <li>ISO OSI reference moduleFileExtensions</li>
                <li>What is wireshark</li>
                <li>What is a subnet mask</li>
                <li>How to check the route between two devices</li>
            </ul>
            
        </Paragraph>
       </Flex> */}
 
    </Flex>

}

export default MobileTester;
