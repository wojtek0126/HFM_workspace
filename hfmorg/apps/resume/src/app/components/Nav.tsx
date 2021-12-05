/** @jsxImportSource theme-ui */

import { useState } from "react";
import { Flex } from "theme-ui";
import OptionButton from "./atoms/OptionButton";
import OptionList from "./OptionList";

export function Nav() {
  const [slideMenu, setSlideMenu] = useState('-258px');
    // const [slideMenuOpa, setSlideMenuOpa] = useState('0');

  const [cooldown, setCoeoldown] = useState(false);


  const switchShowboxOptionsDisplay = () => {
    if (cooldown === false) {
      if (slideMenu === '-258px') {
        // setTimeout(() => {
        //   setSlideMenuOpa('1');
        //  }, 200);
        setSlideMenu('50px');
            setCoeoldown(true);
            setTimeout(() => {
              setCoeoldown(false);
            }, 1000);
        }
      else {
                    // setSlideMenuOpa('0');

            setSlideMenu('-258px');
            setCoeoldown(true);
                setTimeout(() => {
              setCoeoldown(false);
            }, 1000);
          }
      }      
    };

    const hideShowboxOptionsDisplay = () => {        
        setSlideMenu('-258px');     
    };

  return (
     <Flex id="nav-container" sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        position: 'absolute',
        top: '80px'        
      }}>
        <Flex id="options-wrapper" sx={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
                    marginRight: '40px'

      }}>       
         
          {/* <Flex sx={{
            position: 'relative',
            flexDirection: 'row',
            marginRight: '40px'
          }}> */}

            <Flex sx={{
              flexDirection: 'column',
              }}>
                  <OptionButton
                      color={'#fff'}
                      content={'showbox'}
                      onClick={switchShowboxOptionsDisplay}
                  />
          <OptionList top={slideMenu}
            // opacity={slideMenuOpa}
            display={'flex'}
            // position={'unset'}
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
        <OptionButton color={'#fff'} content={'my interests'} onClick={hideShowboxOptionsDisplay} />
        <OptionButton color={'#fff'} content={'quiz'} onClick={hideShowboxOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'contact'} onClick={hideShowboxOptionsDisplay}/>          
          {/* </Flex>    */}
      
      </Flex>

      </Flex>
     
    
  );
}

export default Nav;

