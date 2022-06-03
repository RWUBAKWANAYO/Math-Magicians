import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

describe('User Interact with navigation', () => {
  it('Home link must exist', () => {
    render(<Router><Navbar /></Router>);
    expect(screen.getByText(/Home/)).toBeInTheDocument();
  });

  it('Quotes link must exist', () => {
    render(<Router><Navbar /></Router>);
    expect(screen.getByText(/Quotes/)).toBeInTheDocument();
  });

  it('Calculator link must exist', () => {
    render(<Router><Navbar /></Router>);
    expect(screen.getByText(/Calculator/)).toBeInTheDocument();
  });

  it('By click Home link should change to home page', () => {
    render(<Router><Navbar /></Router>);
    const checkbox = screen.getByText(/Home/);
    fireEvent.click(checkbox);
    const url = window.location.href;
    expect(url).toBe(checkbox.href);
  });

  it('By click Calculator link should change to Calculator page', () => {
    render(<Router><Navbar /></Router>);
    const checkbox = screen.getByText(/Calculator/);
    fireEvent.click(checkbox);
    const url = window.location.href;
    expect(url).toBe(checkbox.href);
  });

  it('By click Quotes link should change to Quotes page', () => {
    render(<Router><Navbar /></Router>);
    const checkbox = screen.getByText(/Quotes/);
    fireEvent.click(checkbox);
    const url = window.location.href;
    expect(url).toBe(checkbox.href);
  });
});
