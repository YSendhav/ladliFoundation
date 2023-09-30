import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeWrapper from "../screens/HomeWrapper";
import Test from "../component/atoms/Test";
import FounderWrapper from "../screens/Founder/FounderWrapper";
import AdversoryWrapper from "../screens/Adversory/AdversoryWrapper";
import ExecutiveTeamWrapper from "../screens/ExecutiveTeam/ExecutiveTeamWrapper";
import VideoGalleryWrapper from "../screens/videoGallery/VideoGalleryWrapper";
import PressMediaWrapper from "../screens/PressMedia/PressMediaWrapper";
import OurPresence from "../screens/ourPresence/OurPresence";
import Pathansala from "../screens/E-Pathansala/Pathansala";
import InternshipProgram from "../screens/InternshipProgram/InternshipProgram";
import MRite from "../screens/M-Rite/MRite";
type Props = {};

const PageRoute = (props: Props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/test' element={<TestimonialCardWrapper />} /> */}
          <Route path="/" element={<HomeWrapper />} />
          <Route path="/test" element={<Test />} />
          <Route path="/founder" element={<FounderWrapper />} />
          <Route path="/advisory" element={<AdversoryWrapper />} />
          <Route path="/executive-team" element={<ExecutiveTeamWrapper />} />
          <Route path="/video-gallery" element={<VideoGalleryWrapper />} />
          <Route path="/press" element={<PressMediaWrapper />} />
          <Route path="/our-presence" element={<OurPresence />} />
          <Route path="/e-pathanshala" element={<Pathansala />} />
          <Route path="/social-internship" element={<InternshipProgram />} />
          <Route path="/m-rite" element={<MRite/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PageRoute;
