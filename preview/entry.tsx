import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../src/system.css';
import { Showcase } from './showcase';

createRoot(document.getElementById('root')!).render(<Showcase />);
