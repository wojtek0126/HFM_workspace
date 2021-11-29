

/** @jsxImportSource theme-ui */
import Hamburger from 'hamburger-react'
// import { slide as Menu } from 'react-burger-menu';

import { useState } from "react";
import { Flex } from "theme-ui";
import OptionButton from "./atoms/OptionButton";
import OptionList from "./OptionList";

export function MobileNav() {
    const [isOpen, setOpen] = useState(false);
    const [showbox, setShowbox] = useState('none');
    const [showMenu, setShowMenu] = useState('none');

    const switchShowMenuDisplay = () => {
        if (showMenu === 'none') setShowMenu('flex');
        else setShowMenu('none');
    };

    const switchShowboxOptionsDisplay = () => {
        if (showbox === 'none') setShowbox('flex');
        else setShowbox('none');
    };

    const hideShowboxOptionsDisplay = () => {
        setShowbox('none');
    };

  return (
   
     
      <Flex sx={{
        justifyContent: 'center',
        alignItems: 'center',
          backgroundColor: 'black',
        // position: 'relative',
        color: '#fff'
      }}>       
         
          <Flex sx={{
              display: showMenu,
              height: '100%',
            //   minWidth: '100%', 
                        backgroundColor: 'black',

              flexDirection: 'column',
              marginRight: '40px',
              position: 'fixed',
              top: '80px',
          }}>

            <Flex sx={{
              flexDirection: 'column',
              backgroundColor: "black"
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
          
          <Flex sx={{
              marginRight: '10px'
                }}>                      
              <Hamburger toggled={isOpen} toggle={setOpen} onToggle={switchShowMenuDisplay} />
        </Flex>
      
      </Flex>

  );
}

export default MobileNav;

const styles: unknown = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#fff'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#fff'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
      background: 'black',
    
    // padding: '2.5em 1.5em 0',
    // fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
    bmItemList: {
        display: 'flex',
      flexDirection: 'column',
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}