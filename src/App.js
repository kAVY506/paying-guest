import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OwnerDashboardPage from './pages/OwnerDashboardPage';

const App = () => {
    const ownerId = 'YOUR_OWNER_ID'; // Replace with actual logic to get the owner's ID

    return (
        <Router>
            <Routes>
                <Route path="/" element={<OwnerDashboardPage ownerId={ownerId} />} />
            </Routes>
        </Router>
    );
};

export default App;
