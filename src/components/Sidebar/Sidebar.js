import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  SupervisorAccount as AdminIcon,
  Person as PersonIcon,
  Category as CategoryIcon,
  LocalMall as ProductIcon,
  BorderAll as TableIcon,
  ArrowBack as ArrowBackIcon,
  FilterNone as UIElementsIcon,
  ShoppingCart as OrderIcon
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },
  { id: 2, label: "Tables",  link: "/app/tables", icon: <TableIcon /> },
  { id: 3, label: "Sellers", link: "/app/admins", icon: <AdminIcon /> },
  { id: 4, label: "Vendors", link: "/app/vendors", icon: <PersonIcon/>},
  // { id: 5, label: "Category",link: "/app/category", icon: <CategoryIcon />},
  { id: 6, label: "Product", link: "/app/product/0", icon: <ProductIcon />},
  {
    id: 7,
    label: 'UI Elements',
    link: '/app/ui',
    icon: <UIElementsIcon />,
    children: [
      { label: 'Icons', link: '/app/ui/icons' },
      { label: 'Charts', link: '/app/ui/charts' },
      { label: 'Maps', link: '/app/ui/maps' },
    ],
  },
];

function Sidebar({ location }) {
  let user_type = 3 ;
  var classes = useStyles();
  var theme = useTheme();

  if(user_type === 3){ // If user is a vendor then show Orders Details :-
    
    let a = structure.some( (val) => val.label === "Orders");
    
    if(!a){
      structure.push({ id: 8, label: "Orders", link: "/app/order", icon: <OrderIcon />});
    }
  }

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
