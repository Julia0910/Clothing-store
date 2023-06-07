import { Switch, Route } from "react-router-dom";
import NavigationPanel from "./components/navigationPanel";
import Product from "./layouts/product";
import Basket from "./layouts/basket";
import Account from "./layouts/account";
import Registration from "./layouts/registration";
import Main from "./layouts/main";
import { Provider } from "react-redux";
import store from "../app/store/index";
import Footer from "./components/footer/footer";
import AdminPanel from "./components/adminPanel/adminPanel";

function App() {
    return (
        <Provider store={store}>
            <NavigationPanel className="navigation-bar" />
            <Switch>
                <Route path="/adminPanel" component={AdminPanel} />
                <Route path="/catalog/:productId?" component={Product} />
                <Route path="/shoppingCart" component={Basket} />
                <Route
                    path="/personalAccount/register"
                    component={Registration}
                />
                <Route path="/personalAccount" component={Account} exact />
                <Route path="/" component={Main} exact />
            </Switch>
            <Footer />
        </Provider>
    );
}
export default App;
