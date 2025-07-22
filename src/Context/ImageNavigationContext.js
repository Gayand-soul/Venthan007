
import { createContext } from 'react';

export const ImageNavigationContext = createContext({
  goToPrev: () => console.warn('No Picture id found!'),
  goToNext: () => console.warn('No Picture id found!'),
});