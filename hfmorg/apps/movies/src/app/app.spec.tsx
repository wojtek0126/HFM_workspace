import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import { act } from 'react-dom/test-utils';

import App from './app';
import MovieTinder from './MovieTinder';

const  globalRef:any = global;


describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieTinder />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a title', () => {
    const { getByText } = render(<App />);

    expect(getByText('ChozzAndWatch')).toBeTruthy();
  });
  

  globalRef.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({    
      imageURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      title: "Inferno",
      summary: "Lorem ipsum....",
      rating: 5.3
    })
  }));

  it('should load movie data on mount', async () => {
    // @ts-ignore
    await act(async () => render(<App />));
    
    expect(screen.getByText("Inferno")).toBeInTheDocument(); //
  });
});




