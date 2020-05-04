import React from "react";
import PageTitle from "../../components/PageTitle";
import Userdashboard from './Users_Dashboard';
import { useSelector } from 'react-redux';

export default function Dashboard(props) {

  const { userDetails } = useSelector( (state) => state.dashboard);

  return (
    <>
      <PageTitle title="Dashboard"  button="Refresh Dashboard" />
       { 
          userDetails.map( (userDetails) => <Userdashboard key = {userDetails.id}  {...userDetails}  /> ) 
       }
    </>
  );
}
