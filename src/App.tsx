import React from "react";
import { Route, Switch } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import PageContent from "./layouts/PageContent";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <MainLayout>
        <PageContent>
          <Header />
          <Switch>
            <Route path="/basketPage" component={BasketPage} />
            <Route path="/" exact component={MainPage} />
          </Switch>
        </PageContent>
      </MainLayout>
    </div>
  );
}

export default App;
