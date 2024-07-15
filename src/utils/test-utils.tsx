import { screen } from '@testing-library/react';

// This helps find elements that have text split across multiple elements
// Source: https://stackoverflow.com/a/68429756/3894163
export const getByTextContent = (text: string) =>
  screen.getByText((_, element: Element | null) => {
    const hasText = (element: Element | null) => element?.textContent === text;
    const elementHasText = hasText(element);
    // eslint-disable-next-line testing-library/no-node-access
    const childrenDontHaveText = Array.from(element?.children || []).every(
      (child) => !hasText(child),
    );
    return elementHasText && childrenDontHaveText;
  });
