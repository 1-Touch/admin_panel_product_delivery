import React from 'react';
import axios from 'axios';

export const userStatsAsyncSuccess = (userDetails) => {
	
	return {
		type : "user_stats_success",
		payload : userDetails,
		isLoading : false,
	}
}

export const userStatsAsyncError = () => {
	
	return {
		type 	  : "user_stats_failure",
		isLoading : false,
	}
}

export const userStats =  (user_id) => {
	return async (dispatch) => {

		let dashboardData = await axios.get("http://dummy.restapiexample.com/api/v1/employees");

		if(dashboardData.status === 200){
			dispatch(userStatsAsyncSuccess(dashboardData));
		}else{
			dispatch(userStatsAsyncError(dashboardData));
		}
		
		// let dashboardData = await axios.post("", { user_id : user_id } );
		// dispatch(userStatsAsync(dashboardData));
	}
}