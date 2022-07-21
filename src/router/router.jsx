import React from 'react';
import {Route,Routes,Navigate} from "react-router-dom";
import List from '../components/list';
import DetailPage from "../components/detailpage";


function RouterLink() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />}/>
            <Route path="/home" element={<List />}/>
            <Route path="/detail/:type" element={<DetailPage />}/>

        </Routes>
   );
}

export default RouterLink;
