import { render, screen, cleanup, act } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import App from './app';

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
 });

afterEach(() => {
  cleanup();
});

describe("App", () => {
    it('should render successfully', () => {   
    const { baseElement } = render(<App />);
    console.log(screen.debug());
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
    console.log(screen.debug());
    expect(screen.getByText("Inferno(5.3/10)")).toBeInTheDocument();
  });

  it("should load cards with title and rating", async () => {
    //@ts-ignore
    await act(async () => render(<App />))
    expect(screen.getByText("Inferno(5.3/10)")).toBeInTheDocument();
  });

  it("should load cards with movie description", async () => {
    //@ts-ignore
    await act(async () => render(<App />))
    expect(screen.getByText("Lorem ipsum....")).toBeInTheDocument();
  });

  it("should load card with button Accept being button", async () => {
    //@ts-ignore
    await act(async () => render(<App />))

    expect(screen.getByRole('button', { name: 'Accept' })).toBeInTheDocument();
  });

  it("should load card with button Decline being button", async () => {
    //@ts-ignore
    await act(async () => render(<App />))
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument();
  });

  it("should button Accept contain icon", async () => {
    //@ts-ignore
    await act(async () => render(<App />))
    const declineBtn = screen.getByRole('button', { name: 'Accept' })
    expect(declineBtn.querySelector('svg')).toBeInTheDocument();
  });

  it("should button Decline contain icon", async () => {
    //@ts-ignore
    await act(async () => render(<App />))
    const declineBtn = screen.getByRole('button', { name: 'Decline' })
    expect(declineBtn.querySelector('svg')).toBeInTheDocument();
  });
});
 
    





