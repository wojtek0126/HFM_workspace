import { Flex, Paragraph } from "theme-ui";
import { aboutMeText } from '../content/contentEN';
import about from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/about.jpg';


export function HomeAbout() {
    return <Flex sx={{     
        alignSelf: 'center', 
        maxWidth: '100%'  
    }}>
        <Flex sx={{
                    // position: 'relative'     
                    flexDirection: 'column'                                
                }}>  
                 <img src={about} alt="about me" style={{maxWidth: '100%'}}/>  
                 <Flex sx={{
                            margin: '80px 20px',
                            backgroundColor: 'colorBackgroundTextAbout',
                            boxShadow: '5px 10px #888888',
                            padding: '20px', 
                            textAlign: 'center', 
                            justifyContent: 'center', 
                            alignItems: 'center'}}>
                        {aboutMeText}
                </Flex>
        </Flex>     
    </Flex>

}

export default HomeAbout;
