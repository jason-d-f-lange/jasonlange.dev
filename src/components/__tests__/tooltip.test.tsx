import { render, screen, waitFor } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import Tooltip from '../tooltip';

let user: UserEvent;

beforeEach(() => {
  user = userEvent.setup();
});

describe('visibility', () => {
  it('is not visible by default', () => {
    render(<Tooltip content="Hello">Hover me</Tooltip>);
    expect(screen.getByText('Hello')).not.toBeVisible();
  });

  it('appears when mousing over children', async () => {
    render(<Tooltip content="Hello">Hover me</Tooltip>);
    await user.hover(screen.getByText('Hover me'));
    await waitFor(() => expect(screen.getByText('Hello')).toBeVisible());
  });

  it('disappears when mousing out of children', async () => {
    render(<Tooltip content="Hello">Hover me</Tooltip>);
    const hoverMe = screen.getByText('Hover me');
    const tooltip = screen.getByText('Hello');
    await user.hover(hoverMe);
    await waitFor(() => expect(tooltip).toBeVisible());
    await user.unhover(hoverMe);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  });
});
