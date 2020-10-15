import React from "react";

import MainLayout from "./layouts/MainLayout";
import PageContent from "./layouts/PageContent";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <MainLayout>
        <PageContent>
          <Header />
          <MainPage />
        </PageContent>
      </MainLayout>
    </div>
  );
}

export default App;
