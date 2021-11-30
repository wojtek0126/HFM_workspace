

/** @jsxImportSource theme-ui */
import Hamburger from 'hamburger-react'
import { useState } from "react";
import { Flex } from "theme-ui";
import OptionButton from "./atoms/OptionButton";
import OptionList from "./OptionList";

export function MobileNav() {
    const [isOpen, setOpen] = useState(false);
    const [showbox, setShowbox] = useState('none');
    const [slideMenu, setSlideMenu] = useState('100%');

    const switchShowMenuDisplay = () => {
        if (slideMenu === '100%') setSlideMenu('60%');
        else setSlideMenu('100%');
    };

    const switchShowboxOptionsDisplay = () => {
        if (showbox === 'none') setShowbox('flex');
        else setShowbox('none');
    };

    const hideOptionsDisplay = () => {
        setShowbox('none');
        setOpen(false);
        setSlideMenu('100%');
  };
  

  return (     
      <Flex sx={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: '#fff',
      }}>       
         
          <Flex sx={{              
              transition: '2s',
              height: '600px',
              width: '100%',
              backgroundColor: 'black',
              borderBottomLeftRadius: '242px',
              flexDirection: 'column',
              marginRight: '40px',
              position: 'absolute',
              top: '80px',
              left: slideMenu,
          }}>

            <Flex sx={{
              flexDirection: 'column',
              backgroundColor: "black"
              }}>
                  <OptionButton
                      color={'#fff'}
                      content={'showbox'}
                      onClick={switchShowboxOptionsDisplay}
            onBlur={hideOptionsDisplay}
            
                  />
                  <OptionList display={showbox} options={<>
                      <OptionButton color={'#fff'} content={'list'} width={'max-content'} onClick={hideOptionsDisplay}/>
                      <OptionButton color={'#fff'} content={'movies'} onClick={hideOptionsDisplay}/>
                      <OptionButton color={'#fff'} content={'calculator'} onClick={hideOptionsDisplay} />
                      <OptionButton color={'#fff'} content={'weather'} onClick={hideOptionsDisplay}/>
                      <OptionButton color={'#fff'} content={'organizer'} width={'max-content'} onClick={hideOptionsDisplay}/>
                      <OptionButton color={'#fff'} content={'chat'} onClick={hideOptionsDisplay}/>
                  </>} />
            </Flex>                  

             <OptionButton color={'#fff'} content={'about me'} onClick={hideOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'my tech'} onClick={hideOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'my interests'} onClick={hideOptionsDisplay}/>
             <OptionButton color={'#fff'} content={'contact'} onClick={hideOptionsDisplay}/>          
          </Flex>
          
          <Flex sx={{
              marginRight: '10px'
                }}>                      
              <Hamburger toggled={isOpen} toggle={setOpen} onToggle={switchShowMenuDisplay} />
          </Flex>
      
      </Flex>
  );
}

export default MobileNav;

