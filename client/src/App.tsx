import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import Rituals from "@/pages/Rituals";
import Science from "@/pages/Science";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/products"} component={Products} />
      <Route path={"/product/:slug"} component={ProductDetail} />
      <Route path={"/rituals"} component={Rituals} />
      <Route path={"/science"} component={Science} />
      <Route path={"/about"} component={About} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <div className="flex flex-col min-h-screen bg-[#0A0015]">
              <Header />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
