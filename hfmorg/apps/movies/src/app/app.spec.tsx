import { render, screen, cleanup, act } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import App from './app';
// import MovieTinder from './MovieTinder';
// import TinderCard from 'react-tinder-card';

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

describe("App", () => {
    it('should render successfully', () => {   
    const { baseElement, debug } = render(<App />);
    console.log(debug());
    expect(baseElement).toBeTruthy();
  });

  it('should display title in header', () => {   
    const { getByText, debug } = render(<App />);
    console.log(debug());
    expect(getByText("ChozzAndWatch")).toBeInTheDocument();
  });

  it("should load data on mount", async () => {
    //@ts-ignore
    await act(async () => render(<App />))
    expect(screen.getByText("Inferno(5.3/10)")).toBeInTheDocument();
  })

  it("should load card with button Accept", async () => {
    //@ts-ignore
    await act(async () => render(<App />))
    expect(screen.getByText("Accept")).toBeInTheDocument();
  })

  it("should load card with button Decline", async () => {
    //@ts-ignore
    await act(async () => render(<App />))
    expect(screen.getByText("Decline")).toBeInTheDocument();
  })


})
 
    





