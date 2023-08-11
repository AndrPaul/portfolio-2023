import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Contact from '../pages/contact/Contact';
import Portfolio from '../pages/portfolio/Portfolio';
import Home from '../pages/home/Home';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes