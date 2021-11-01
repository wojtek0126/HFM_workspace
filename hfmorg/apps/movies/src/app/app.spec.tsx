import { render, screen, waitFor, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
// import { act } from 'react-dom/test-utils';
// import renderer from 'react-test-renderer';


import App from './app';
import MovieTinder from './MovieTinder';
import TinderCard from 'react-tinder-card';
// import Enzyme, {mount, configure} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// Enzyme.configure({ adapter: new Adapter() });


const  globalRef:any = global;

beforeEach(() => {
  globalRef.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({    
      imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      title: "Inferno",
      summary: "Lorem ipsum....",
      rating: 5.3
    })
  }));
 })

afterEach(() => {
  cleanup();
})




// describe('App', () => {
//   it('should render successfully', () => {
   
//     const { baseElement, debug } = render(<MovieTinder />);
//     console.log(debug());
//     expect(baseElement).toBeTruthy();
//   });

//   it('should have a title', () => {
//     const { getByText } = render(<App />);

//     expect(getByText("ChozzAndWatch")).toBeInTheDocument();
//   });

  // describe('App', () => {
    // it('should render movie cards', async () => {
    //   const { getByText, debug } = render(<TinderCard/>);
    //   await waitFor(() => {
    //     console.log(debug);
    //     expect(getByText("ChozzAndWatch")).toBeInTheDocument();
    //   })
    // })
  // })

// why not import fetch get function here, its mock anyway and try to call it here?

describe("App", () => {
  it("should load data on mount", () => {
    const {container, debug} = render(<MovieTinder />);
    console.log(debug());
    expect(container.innerHTML).toMatch("Inferno")
  })
})
 
    
    // await act(async () => debug(<App />));
    
      // await waitFor(() => {
      // })
    // expect(screen.getByText("ChozzAndWatch")).toBeInTheDocument(); 
//   });
// });

// describe('matches snapshot', () => {
//   const tree = renderer.create(<MovieTinder />).toJSON;
//   console.log(tree)
// })




