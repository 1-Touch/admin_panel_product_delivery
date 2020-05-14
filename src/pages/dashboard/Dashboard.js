import React, { useEffect } from "react";
import PageTitle from "../../components/PageTitle";
import Userdashboard from './Users_Dashboard';
import { useSelector, connect, useDispatch } from 'react-redux';
import { userStats } from '../../actions/DashboardAction';

export default function Dashboard(props) {

  let user_id = 1 ;
  window.title = "Dashboard" ;
  const { userDetails, isLoading } = useSelector( (state) => state.dashboard);

  // Dispatch an action :- 
  const dispatchAction = useDispatch();

  useEffect( () => {
    const dashboardDetails = dispatchAction(userStats(user_id));  
    console.log(dashboardDetails);
  },[userDetails]);

  

  return (
    <>
      <PageTitle title="Dashboard"  button="Refresh Dashboard" />
       { 
          userDetails.map( (userDetails) => <Userdashboard key = {userDetails.id}  {...userDetails}  /> ) 
       }
    </>
  );
}

/*
const mapStateToProps = (state) => {
	return {
		userDetails : state.dashboard.userDetails		
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		getUserStats : dispatch({type : "user_stats"}),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
*/

