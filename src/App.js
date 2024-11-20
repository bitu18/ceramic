import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from '~/layout';
import { publicRoutes } from '~/routes';
import { AutoScrollTop } from './components/hooks';

function App() {
    return (
        <BrowserRouter>
            <AutoScrollTop />
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = route.layout ? route.layout : route.layout === null ? <Fragment /> : DefaultLayout;

                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
