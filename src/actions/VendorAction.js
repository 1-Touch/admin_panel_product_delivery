import React from 'react';
import axios from 'axios';

export const vendorListAsyncSuccess = (userDetails) => {
	
	return {
		type : "vendor_list_success",
		payload : userDetails,
		isLoading : false,
	}
}

export const vendorListAsyncError = () => {
	
	return {
		type 	  : "vendor_list_failure",
		isLoading : false,
	}
}

export const vendorList =  (user_id) => {
	return async (dispatch) => {

		let dashboardData = await axios.get("http://dummy.restapiexample.com/api/v1/employees");

		if(dashboardData.status === 200){
			dispatch(vendorListAsyncSuccess(dashboardData));
		}else{
			dispatch(vendorListAsyncError(dashboardData));
		}
		
		// let dashboardData = await axios.post("", { user_id : user_id } );
		// dispatch(userStatsAsync(dashboardData));
	}
}