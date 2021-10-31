import { render, screen, act } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
// import { act } from 'react-dom/test-utils';

import App from './app';

const  globalRef:any = global;

globalRef.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    title: "Star wars"
  })
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a title', () => {
    const { getByText } = render(<App />);

    expect(getByText('ChozzAndWatch')).toBeTruthy();
  });

  it('should load movie data on mount', async () => {
    // @ts-ignore
    await act(async () => render(<App />));
    
    expect(screen.getByText("Star wars")).toBeInTheDocument(); //
  });
});




