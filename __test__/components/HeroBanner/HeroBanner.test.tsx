import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroBanner from 'components/features/heroBanner/HeroBanner';
import { dataHB } from './data';
import Home from 'components/home';
import PrimaryButton from 'components/atoms/buttons/PrimaryButton';

describe('Hero Banner', () => {
  it('DOM', () => {
    render(<PrimaryButton link={dataHB['fields'].CTA} />);

    // const container = screen.getByTestId('home');
    // expect(container).toBeInTheDocument();
  });
});
