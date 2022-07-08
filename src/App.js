import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import Index from './pages/client/client.index';
import Author from './pages/authors/author.index';
import Admin from './pages/admin/admin.index';
import { LoginPage } from './pages/auth/auth.login';
import { NotFoundPage } from './pages/errors/404';
import { AdminLayout } from './pages/layouts/admin.layout';
import { ClientLayout } from './pages/layouts/client.layout';
import { AuthorsLayout } from './pages/layouts/authors.layout';
import { RegisterPage } from './pages/auth/auth.register';
import { Authorial } from './components/ProtectedPage';

import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles>
        <BrowserRouter>
          <Routes>
            {/*protected page*/}
            <Route
              path={'/'}
              element={
                <Authorial>
                  <ClientLayout></ClientLayout>
                </Authorial>
              }
            >
              <Route index path={'/'} element={<Index></Index>}></Route>
            </Route>
            <Route path={'/author'} element={<AuthorsLayout></AuthorsLayout>}>
              <Route index path={'/author'} element={<Author></Author>}></Route>
            </Route>
            <Route path={'/admin'} element={<AdminLayout></AdminLayout>}>
              <Route index path={'/admin'} element={<Admin></Admin>}></Route>
            </Route>
            <Route path={'/auth'}>
              <Route
                index
                path={'/auth'}
                element={<LoginPage></LoginPage>}
              ></Route>
              <Route
                path={'register'}
                element={<RegisterPage></RegisterPage>}
              ></Route>
            </Route>
            <Route path={'*'} element={<NotFoundPage></NotFoundPage>}></Route>
          </Routes>
        </BrowserRouter>
      </GlobalStyles>
    </Provider>
  );
}

export default App;
