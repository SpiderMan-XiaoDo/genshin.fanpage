// import Bodypart from './components/Bodypart';
// import Heading from './components/Heading';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout'
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            if(route.layout){
              Layout = route.layout
            }
            else if(Layout===null){
              Layout = Fragment
            }
            const Page = route.component
            return <Route path={route.path} key={index} element={<Layout>
              <Page />
            </Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
