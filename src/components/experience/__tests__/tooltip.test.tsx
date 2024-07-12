import { render, waitFor } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import Tooltip from '../tooltip';

let user: UserEvent;

beforeEach(() => {
  user = userEvent.setup();
});

describe('visibility', () => {
  it('is not visible by default', () => {
    const component = render(<Tooltip content="Hello">Hover me</Tooltip>);
    expect(component.getByText('Hello')).not.toBeVisible();
  });

  it('appears when mousing over children', async () => {
    const component = render(<Tooltip content="Hello">Hover me</Tooltip>);
    await user.hover(component.getByText('Hover me'));
    await waitFor(() => expect(component.getByText('Hello')).toBeVisible());
  });

  it('disappears when mousing out of children', async () => {
    const component = render(<Tooltip content="Hello">Hover me</Tooltip>);
    const hoverMe = component.getByText('Hover me');
    const tooltip = component.getByText('Hello');
    await user.hover(component.getByText('Hover me'));
    await waitFor(() => expect(tooltip).toBeVisible());
    await user.unhover(hoverMe);
    await waitFor(() => expect(tooltip).not.toBeVisible());
  });
});
