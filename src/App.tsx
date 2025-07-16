import React from 'react';
import Header from './components/Header';
import FurnitureGallery from './components/FurnitureGallery';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <FurnitureGallery />
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default App;