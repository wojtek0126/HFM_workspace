import { render, screen, waitFor, cleanup, act } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import App from './app';
import MovieTinder from './MovieTinder';
import TinderCard from 'react-tinder-card';



const  globalRef:any = global;

beforeEach(() => {
  globalRef.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve([{    
      imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      title: "Inferno",
      summary: "Lorem ipsum....",
      rating: 5.3
    }])
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




describe("App", () => {
    it('should render successfully', () => {   
    const { baseElement, debug } = render(<App />);
    console.log(debug());
    expect(baseElement).toBeTruthy();
  });



  it("should load data on mount", async () => {
    //@ts-ignore
    await act(async () => render(<MovieTinder />))
    expect(screen.getByText("Inferno(5.3/10)")).toBeInTheDocument();
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




