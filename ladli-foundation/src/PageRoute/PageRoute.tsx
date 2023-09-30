import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeWrapper from '../screens/HomeWrapper';
import TestimonialCardWrapper from '../component/ui/TestimonialCard/TestimonialCardsWrapper';
import Test from '../component/atoms/Test';
import FounderWrapper from '../screens/Founder/FounderWrapper';
import AdversoryWrapper from '../screens/Adversory/AdversoryWrapper';
import VideoGalleryWrapper from '../screens/videoGallery/VideoGalleryWrapper';
import PressMediaWrapper from '../screens/PressMedia/PressMediaWrapper';
import OurPresence from '../screens/ourPresence/OurPresence';
import ThematicAreaWrapper from '../screens/ThematicArea/ThematicAreaWrapper';
type Props = {}

const PageRoute = (props: Props) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/test' element={<TestimonialCardWrapper />} />
                    <Route path="/" element={<HomeWrapper/>}/>
                    <Route path='/test' element={<Test />} />
                    <Route path='/founder' element={<FounderWrapper />} />
                    <Route path='/advisory' element={<AdversoryWrapper />} />
                    <Route path='/video-gallery' element={<VideoGalleryWrapper />} />
                    <Route path='/press' element={<PressMediaWrapper />} />
                    <Route path='/our-presence' element={<OurPresence />} />
                    <Route path='/thematic-areas' element={<ThematicAreaWrapper/>} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageRoute