import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from '../component/atoms/Test';
type Props = {}

const PageRoute = (props: Props) => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/test' element={<Test />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageRoute