/** @jsxImportSource theme-ui */

import { useState } from "react";
import { Flex } from "theme-ui";
import OptionButton from "./atoms/OptionButton";
import OptionList from "./OptionList";

export function Nav() {
    const [slideMenu, setSlideMenu] = useState('-243px');


    const switchShowboxOptionsDisplay = () => {
        if (slideMenu === '-243px') {         
            setSlideMenu('65px');
        }
        else {
            setSlideMenu('-243px');
        };
    };

    const hideShowboxOptionsDisplay = () => {        
        setSlideMenu('-243px');     
    };

  return (   
     
      <Flex sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff'
      }}>       
         
          <Flex sx={{
            position: 'relative',
            flexDirection: 'row',
            marginRight: '40px'
          }}>

            <Flex sx={{
              flexDirection: 'column',
              }}>
                  <OptionButton
                      color={'#fff'}
                      content={'showbox'}
                      onClick={switchShowboxOptionsDisplay}
                  />
                  <OptionList top={slideMenu}
                      display={'flex'}
                      zIndex={'-1'} options={<>
                      <OptionButton color={'#fff'} content={'list'} onClick={switchShowboxOptionsDisplay} />
                      <OptionButton color={'#fff'} content={'movies'} onClick={switchShowboxOptionsDisplay} />
                      <OptionButton color={'#fff'} content={'calculator'} onClick={switchShowboxOptionsDisplay} />
                      <OptionButton color={'#fff'} content={'weather'} onClick={switchShowboxOptionsDisplay} />
                      <OptionButton color={'#fff'} content={'organizer'} onClick={switchShowboxOptionsDisplay} />
                      <OptionButton color={'#fff'} content={'chat'} onClick={switchShowboxOptionsDisplay} />
                  </>} />
            </Flex>                  

             <OptionButton color={'#fff'} content={'about me'} onClick={hideShowboxOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'my tech'} onClick={hideShowboxOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'my interests'} onClick={hideShowboxOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'contact'} onClick={hideShowboxOptionsDisplay}/>          
          </Flex>   
      
      </Flex>

  );
}

export default Nav;

