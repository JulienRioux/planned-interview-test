import * as React from "react";

import { UsersPage } from "./pages/users";
import { API_URL } from "./configs";
import { ProvidersWrapper } from "./state/reduce-providers";

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
