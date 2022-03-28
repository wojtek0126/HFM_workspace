import { Flex, Paragraph } from "theme-ui";
import about from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/about.jpg';


export function HomeAbout() {
    return <Flex sx={{     
        alignSelf: 'center'
    }}>
        <Flex sx={{
                    position: 'relative'                 
                }}>  
                 <img src={about} />  
        </Flex>     
    </Flex>

}

export default HomeAbout;
