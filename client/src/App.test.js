import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GeneralContextProvider from './context/GeneralContext';
import App from './App';
import axios from 'axios';

jest.mock('axios');

test('renders App component without crashing', () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: [] }));
  axios.post.mockImplementation(() => Promise.resolve({ data: {} }));
  axios.interceptors = {
    request: { use: jest.fn(), eject: jest.fn() },
    response: { use: jest.fn(), eject: jest.fn() }
  };

  render(
    <BrowserRouter>
      <GeneralContextProvider>
        <App />
      </GeneralContextProvider>
    </BrowserRouter>
  );
});

