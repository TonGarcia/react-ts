import { Catalog } from './pages/Catalog';
import { Cart } from './pages/Cart';
import { Tweets } from './pages/Tweets';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/tweets" element={<Tweets/>}/>
            </Routes>
        </Router>
    )
}