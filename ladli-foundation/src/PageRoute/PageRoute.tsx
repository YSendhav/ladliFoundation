import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeWrapper from '../screens/HomeWrapper';
import TestimonialCardWrapper from '../component/ui/TestimonialCard/TestimonialCardsWrapper';
type Props = {}

const PageRoute = (props: Props) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/test' element={<TestimonialCardWrapper />} />
                    <Route path="/" element={<HomeWrapper/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageRoute