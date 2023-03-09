import { Switch, Route } from "react-router-dom";
import AuthorizationPage from "./components/personalAccount";
import MainPageStore from "./components/mainPageStore";
import CargoCatalog from "./components/cargoCatalog";
import PersonalAccount from "./components/personalAccount";
import ShoppingCart from "./components/shoppingCart";
import NavigationPanel from "./components/navigationPanel";
import ProductList from "./components/productList";

function App() {
  return (
    <div>
      <NavigationPanel className="navigation-bar" />
      <Switch>
      <Route path="/productList" component={ProductList} />
        <Route path="/shoppingCart" component={ShoppingCart} />
        <Route path="/personalAccount" component={PersonalAccount} />
        <Route path="/catalog" component={CargoCatalog} />
        <Route path="/authorizationPage" component={AuthorizationPage} />
        <Route path="/" component={MainPageStore} exact />
      </Switch>
    </div>
  );
}

export default App;
