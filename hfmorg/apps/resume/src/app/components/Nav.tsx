/** @jsxImportSource theme-ui */

import { useState } from "react";
import { Flex } from "theme-ui";
import OptionButton from "./atoms/OptionButton";
import OptionList from "./OptionList";

export function Nav() {
    const [showbox, setShowbox] = useState('none');

    const switchShowboxOptionsDisplay = () => {
        setShowbox('flex');       
    };

    const hideShowboxOptionsDisplay = () => {
        setShowbox('none');    };

  return (
   
     
      <Flex sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff'
      }}>       
         
          <Flex sx={{
            //   display: 'none',
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
                      onBlur={hideShowboxOptionsDisplay}
                  />
                  <OptionList display={showbox} options={<>
                      <OptionButton color={'#fff'} content={'list with filters'} />
                      <OptionButton color={'#fff'} content={'movie tinder'} />
                      <OptionButton color={'#fff'} content={'calculator'} />
                      <OptionButton color={'#fff'} content={'organizer app'} />
                      <OptionButton color={'#fff'} content={'chat app'} />
                  </>} />
            </Flex>                  

             <OptionButton color={'#fff'} content={'about me'} onClick={hideShowboxOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'my tech'} onClick={hideShowboxOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'my interests'} onClick={hideShowboxOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'contact'} onClick={hideShowboxOptionsDisplay}/>          
          </Flex>
          
          {/* <Flex sx={{
              marginRight: '40px'
                }}>                      
        mobile nav       
       </Flex> */}
      
      </Flex>

  );
}

export default Nav;

