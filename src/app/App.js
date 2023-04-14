import { Switch, Route } from "react-router-dom";
import AuthorizationPage from "./components/personalAccount";
import MainPageStore from "./components/mainPageStore";
import PersonalAccount from "./components/personalAccount";
import ShoppingCart from "./components/shoppingCart";
import NavigationPanel from "./components/navigationPanel";
import ProductList from "./components/productList";

function App() {
  return (
    <div>
      <NavigationPanel className="navigation-bar" />
      <Switch>
        <Route path="/catalog" component={ProductList} />
        <Route path="/shoppingCart" component={ShoppingCart} />
        <Route path="/personalAccount" component={PersonalAccount} />
        <Route path="/authorizationPage" component={AuthorizationPage} />
        <Route path="/" component={MainPageStore} exact />
      </Switch>
    </div>
  );
}
// /:productId
export default App;
