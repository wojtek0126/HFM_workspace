import LinkButton from "./atoms/LinkButton";

export function Nav() {
  return (
   
     
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff'
      }}>       
         
          <div style={{
              display: 'flex',
              flexDirection: 'row',
          }}>
             <LinkButton color={'#fff'} content={'showbox'} />
             <LinkButton color={'#fff'} content={'about me'} />
             <LinkButton color={'#fff'} content={'my tech'} />
             <LinkButton color={'#fff'} content={'my exp'} />
             <LinkButton color={'#fff'} content={'my interests'} />
             <LinkButton color={'#fff'} content={'projects'} />
             <LinkButton color={'#fff'} content={'contact'} />          
          </div>
          
        <div style={{display: 'none'}}>                      
        mobile nav       
       </div>
      
      </div>

  );
}

export default Nav;

const btnMenuDesktop = {
    color: '#fff',
    textDecoration: 'none'
}