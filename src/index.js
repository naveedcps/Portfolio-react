import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Contact from './components/contact/contact'
import Footer from './components/footer/footer';
import Portfolio from './components/hadWorkedWith/Portfolio'
import QuickLinks from './components/quickLinks/quickLinks';
import reportWebVitals from './reportWebVitals';
import { Analytics } from "@vercel/analytics/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Analytics />
    <Header />
    <QuickLinks />
    <Banner />
    <Portfolio />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
