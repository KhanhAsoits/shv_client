import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './app/store';
import Index from './pages/client/client.index';
import Author from './pages/authors/author.index';
import Admin from './pages/admin/admin.index';
import {LoginPage} from "./pages/auth/auth.login";
import {NotFoundPage} from "./pages/errors/404";
import {AdminLayout} from "./pages/layouts/admin.layout";
import {ClientLayout} from "./pages/layouts/client.layout";
import {AuthorsLayout} from "./pages/layouts/authors.layout";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {/*protexted page*/}
                    <Route path={'/'} element={<ClientLayout></ClientLayout>}>
                        <Route index path={'/'} element={<Index></Index>}></Route>
                    </Route>
                    <Route path={'/author'} element={<AuthorsLayout></AuthorsLayout>}>
                        <Route index path={'/author'} element={<Author></Author>}></Route>
                    </Route>
                    <Route path={'/admin'} element={<AdminLayout></AdminLayout>}>
                        <Route index path={'/admin'} element={<Admin></Admin>}></Route>
                    </Route>
                    <Route path={'/auth'}>
                        <Route index path={'/auth'} element={<LoginPage></LoginPage>}></Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage></NotFoundPage>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
