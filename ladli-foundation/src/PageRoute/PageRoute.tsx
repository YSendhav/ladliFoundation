import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from '../component/atoms/Test';
import FounderWrapper from '../screens/Founder/FounderWrapper';
import AdversoryWrapper from '../screens/Adversory/AdversoryWrapper';

import ExecutiveTeamWrapper from '../screens/ExecutiveTeam/ExecutiveTeamWrapper';
type Props = {}

const PageRoute = (props: Props) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/test' element={<Test />} />
                    <Route path='/founder' element={<FounderWrapper />} />
                    <Route path='/advisory' element={<AdversoryWrapper />} />
                    <Route path='/executive-team' element={<ExecutiveTeamWrapper />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageRoute