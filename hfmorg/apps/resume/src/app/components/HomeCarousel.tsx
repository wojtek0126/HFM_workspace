import { Flex, Paragraph } from "theme-ui";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import jira from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/jira2.webp';
import testrail from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/testrail.jpeg';
import conflu from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/conflu1.webp';
import devops from 'C:/Users/GPC-393/Desktop/HFM_workspace/hfmorg/apps/resume/src/assets/devops1.png';


export function HomeCarousel() {
    return <Flex sx={{
      
        zIndex: 0
    }}>
        <Flex>
        <Carousel centerMode={false} showThumbs={false}>
                <Flex>
                    <img src={jira} height="800px"/>
                    <Paragraph className="legend">Kanban tasks, Logging defects, retesting, regression with JIRA. </Paragraph>
                </Flex>
                <Flex>
                    <img src={testrail} height="800px"/>
                    <Paragraph className="legend">Creating test scenarios and test cases, executing test runs using Testrail</Paragraph>
                    </Flex>
                <Flex>
                    <img src={conflu} height="800px"/>
                    <Paragraph className="legend">Product and test documentation with Confluence</Paragraph>
                    </Flex>
                    <Flex>
                    <img src={devops} height="800px"/>
                    <Paragraph className="legend">Cooperating with Azure Devops</Paragraph>
                    </Flex>
            </Carousel>
        </Flex>     
    </Flex>

}

export default HomeCarousel;
