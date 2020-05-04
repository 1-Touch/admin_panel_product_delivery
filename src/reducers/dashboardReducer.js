const initialState = {

	userDetails : [
    
      {
          id : 1,
          title : "Seller's Details",
          monthTitle : "Salers Registred/Unregistred This Month",
          success : "Salers Registred This Month",
          failed : "Salers Unregistred This Month",
          totalSuccessThisMonth : 300,
          totalFailedThisMonth : 300,
          totalActive : 700,
          totalDeactive : 350,
          status : "Salers Status",
          activeTitle   : "Active Salers",
          inactiveTitle : "Inactive Salers",
          totalUserTitle : "Total Salers",
          totalUser : 1050
      },
    
      {
          id : 2,
          title : "Vendor's Details",
          monthTitle : "Vendors Registred/Unregistred This Month",
          success : "Vendors Registred This Month",
          failed : "Vendors Unregistred This Month",
          totalSuccessThisMonth : 200,
          totalFailedThisMonth : 300,
          status : "Vendor Status",
          activeTitle   : "Active Vendor",
          inactiveTitle : "Inactive Vendors",
          totalActive : 600,
          totalDeactive : 150,
          totalUserTitle : "Total Vendors",
          totalUser : 750
      },
    
      {
          id : 3,
          title : "Customer's Details",
          monthTitle : "Customers Registred/Unregistred This Month",
          success : "Customers Registred This Month",
          failed : "Customers Unregistred This Month",
          totalSuccessThisMonth : 1000,
          totalFailedThisMonth : 300,
          totalThisMonth : 1000,
          status : "Customer Status",
          activeTitle   : "Active Customers",
          inactiveTitle : "Inactive Customers",
          totalActive : 800,
          totalDeactive : 250,
          totalUserTitle : "Total Customers",
          totalUser : 1050
      },

      {
          id : 4,
          title : "Product's Details",
          monthTitle : "Product Sold/Return This Month",
          success : "Product Sold This Month",
          failed : "Product Return This Month",
          totalSuccessThisMonth : 300,
          totalFailedThisMonth : 300,
          status : "Total Product Sale",
          activeTitle   : "Products Sold",
          inactiveTitle : "Products Return",
          totalActive : 800,
          totalDeactive : 350,
          totalUserTitle : "Total Products",
          totalUser : 1150
      },

      {
          id : 5,
          title : "Transaction's Details",
          monthTitle : "Earn/Refund This Month",
          success : "Earn This Month",
          failed : "Refund This Month",
          totalSuccessThisMonth : "300$",
          totalFailedThisMonth : "300$",
          status : "Total Earning",
          activeTitle   : "Total Earning",
          inactiveTitle : "Total Refund",
          totalActive : "800$",
          totalDeactive : "350$",
          totalUserTitle : "Total Transaction",
          totalUser : "1150$"
      }
  ]
}


const dashboardReducer = (state = initialState, action) => {

	switch(action.type){
		default:
			return state ;
	}
}

export default dashboardReducer ;

