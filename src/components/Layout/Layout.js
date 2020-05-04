import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Tables from "../../pages/tables";
import Admin from "../../pages/admin/Adminlist";
import Vendor from "../../pages/vendors/Vendorlist";
import Category from "../../pages/category/Category";
import Product from "../../pages/product/Product";
import Order from "../../pages/orders/Order";
import Icons from "../../pages/icons/Icons";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();
  let user_type = 3 ;

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/admins" component={Admin} />
              <Route path="/app/vendors" component={Vendor} />
              {/* <Route path="/app/category" component={Category} /> */}
              <Route path="/app/product/:id" component={Product} />
              <Route path="/app/ui/icons" component={Icons} />
              { user_type === 3 && <Route path="/app/order" component={Order} /> }
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
