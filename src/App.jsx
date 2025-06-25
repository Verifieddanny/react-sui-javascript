import { SuiProvider } from "./providers/SuiProvider";
import Home from "./pages/Home";

function App() {
  return (
    <SuiProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900">
        <Home />
      </div>
    </SuiProvider>
  );
}

export default App;
