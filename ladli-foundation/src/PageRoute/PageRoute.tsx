import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from '../component/atoms/Test';
import ImpactWrapper from '../component/ui/Impacts/ImpactWrapper';
type Props = {}

const PageRoute = (props: Props) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/test' element={<ImpactWrapper />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageRoute