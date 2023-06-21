import * as React from "react";

import { UsersPage } from "./pages/users";
import { ProvidersWrapper } from "./states/reduce-providers";

function App() {
  return (
    <div className="App">
      <ProvidersWrapper>
        <UsersPage />
      </ProvidersWrapper>
    </div>
  );
}

export default App;
