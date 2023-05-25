import React from 'react';

import { render, screen } from '@testing-library/react';

import Home from '@/pages';

describe('Scenario : HomePage tests suite', () => {
  describe('Given ', () => {
    describe('When ', () => {
      test('Then it should ', () => {
        render(<Home />);

        const heading = screen.getByText('Home page');

        expect(heading).toBeInTheDocument();

        expect(1).toBe(1);
      });
    });
  });
});
