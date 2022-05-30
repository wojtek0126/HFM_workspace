import { Flex, Heading, Paragraph } from "theme-ui";
import {
    aboutMeText,
    aboutGoalsHeading,
    aboutGoalsText,
    aboutSkillsHeading,
    aboutSkillsText,
    aboutAbilitiesHeading,
    aboutAbilitiesText,
    aboutInterestsHeading,
    aboutInterestsText
} from '../content/contentEN';
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
                            margin: '20px ',
                            backgroundColor: 'colorBackgroundTextAbout',
                            boxShadow: '5px 10px #888888',
                            padding: '20px', 
                            textAlign: 'center', 
                            justifyContent: 'center', 
                            alignItems: 'center'}}>
                        {aboutMeText}
                </Flex>
                <Flex sx={{flexDirection: 'row',
                           justifyContent: 'center', 
                           alignItems: 'center'}}>
                <Flex sx={{
                            margin: '20px',
                            backgroundColor: 'colorBackgroundTextAbout',
                            boxShadow: '5px 10px #888888',
                            padding: '20px', 
                            textAlign: 'center', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            flexDirection: 'column'}}>
                                <Heading>{aboutGoalsHeading}</Heading>
                                <Paragraph>{aboutGoalsText}</Paragraph>
                            </Flex>
                    <Flex sx={{
                            margin: '20px',
                            backgroundColor: 'colorBackgroundTextAbout',
                            boxShadow: '5px 10px #888888',
                            padding: '20px', 
                            textAlign: 'center', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            flexDirection: 'column'}}>
                                <Heading>{aboutSkillsHeading}</Heading>
                                <Paragraph>{aboutSkillsText}</Paragraph>
                            </Flex>
                    <Flex sx={{
                            margin: '20px',
                            backgroundColor: 'colorBackgroundTextAbout',
                            boxShadow: '5px 10px #888888',
                            padding: '20px', 
                            textAlign: 'center', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            flexDirection: 'column'}}>
                                 <Heading>{aboutAbilitiesHeading}</Heading>
                                <Paragraph>{aboutAbilitiesText}</Paragraph>
                            </Flex>
                    <Flex sx={{
                            margin: '20px',
                            backgroundColor: 'colorBackgroundTextAbout',
                            boxShadow: '5px 10px #888888',
                            padding: '20px', 
                            textAlign: 'center', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            flexDirection: 'column'}}>
                                 <Heading>{aboutInterestsHeading}</Heading>
                                <Paragraph>{aboutInterestsText}</Paragraph>
                            </Flex>
                </Flex>
        </Flex>     
    </Flex>

}

export default HomeAbout;
