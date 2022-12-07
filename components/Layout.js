import Header from './Templates/Header';
import Footer from './Templates/Footer';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
