import { BrowserRouter, Routes, Route} from "react-router-dom";
import { publicRoutes } from "./Router";
import {DefaultLayout} from "./component/Layout";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route,index)=>{
          const Page = route.component

          let Layout = DefaultLayout 

          if(route.Layout != null){
            Layout = route.Layout
          }
          else if(route.Layout === null){
            Layout = Fragment;
          }

          return <Route key={index} path={route.path} element={
          <Layout>
            <Page/>
          </Layout>}/>
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
