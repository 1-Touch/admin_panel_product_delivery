import React from 'react';
import "bootstrap-css-only/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css"; // Import mdreact CSS before importing datatables
import { MDBDataTable} from 'mdbreact';

/** Note :-
 *  npx create-next-app data_table :- First Run This Commnad To Create Your Project
 *  npm install react-bootstrap bootstrap :- Second Run This Command To Install Bootstrap Globally
 *  npm install --save @zeit/next-css :- Third Run This Command To For Next.js To Support Your Global Css
 *  Create next.config.js file in your project root folder and paste below code :-
 
 *  Paste This Code In Your next.config.js :- 
    
    const withCSS = require('@zeit/next-css')
    module.exports = withCSS({// my next config })

    npm install --save-dev css-loader ts-loader
    
 *  npm install --save mdbreact :- First Install mdreact 
 *  https://mdbootstrap.com/docs/react/tables/datatables/ To Acess All Functinality Of mdbreact
 *  https://www.npmjs.com/package/mdbreact : Look This Link Also
 *  Import all the global css files into the pages/_app.js like below :-
 *  import "bootstrap-css-only/css/bootstrap.min.css";
 *  import "@fortawesome/fontawesome-free/css/all.min.css";
 *  import "mdbreact/dist/css/mdb.css"; // Import mdreact CSS before importing datatables 
 */

const DatatablePage = (props) => {

    let data = {};
    
    if(props.type === 'vendor'){

        const columns = [
            { label: <span>Name &#x021F5;</span>, field: 'name', sort: 'asc', width: 270},
            { label: <span>Mobile &#x021F5;</span>, field: 'mobile', sort: 'asc', width: 270 },
            { label: <span>Address &#x021F5;</span>, field: 'address', sort: 'asc', width: 200 },
            { label: 'Action', field: 'action', sort: 'disabled', width: 100 },
        ];

        const rows = props.data;
        data = { columns, rows };

    }else if(props.type === 'admin'){

        const columns = [
            { label:<span>Name &#x021F5;</span>, field: 'name', sort: 'asc', width: 270, },
            { label:<span>Mobile &#x021F5;</span>, field: 'mobile', sort: 'asc', width: 270 },
            { label:<span>Address &#x021F5;</span>, field: 'address', sort: 'asc', width: 200 },
            { label:'Action', field: 'action', sort: 'disabled', width: 100 },
        ];

        const rows = props.data;
        data = { columns, rows };
    }else if(props.type === 'category'){

        const columns = [
            { label: <span>Name &#x021F5;</span>, field: 'category_name', sort: 'asc', width: 270 },
            { label: <span>Owner Name &#x021F5;</span>, field: 'category_owner_name', sort: 'asc', width: 270 },
            { label: <span>Seller Name &#x021F5;</span>, field: 'seller_name', sort: 'asc', width: 270 },            
            { label: 'Action', field: 'action', sort: 'disabled', width: 100 },
        ];

        const rows = props.data;
        data = { columns, rows };

    }else if(props.type === 'product'){

        const columns = [
            { label: <span>Product Name &#x021F5;</span>, field: 'product_name', sort: 'asc', width: 270 },
            { label: <span>Category Name &#x021F5;</span>, field: 'category_name', sort: 'asc', width: 270 },
            { label: <span>Vendor Name &#x021F5;</span>, field: 'vendor_name', sort: 'asc', width: 270 },            
            { label: 'Action', field: 'action', sort: 'disabled', width: 100 },
        ];

        const rows = props.data;
        data = { columns, rows };

    }else if(props.type === 'orders'){

        const columns = [
            { label: <span>Order Id &#x021F5;</span>, field: 'unique_order_id', sort: 'asc', width: 270 },
            { label: <span>Transaction Id  &#x021F5;</span>, field: 'transaction_id', sort: 'asc', width: 270 },
            { label: <span>Coupon Applied &#x021F5;</span>, field: 'coupon_name', sort: 'asc', width: 270 },
            { label: <span>Address  &#x021F5;</span>, field: 'full_address', sort: 'asc', width: 270 },
            { label: <span>Quantity &#x021F5;</span>, field: 'quantity', sort: 'asc', width: 270 },
            { label: <span>Actual Price  &#x021F5;</span>, field: 'actual_price', sort: 'asc', width: 270 },
            { label: <span>Applied Price  &#x021F5;</span>, field: 'applied_price', sort: 'asc', width: 270 },
            { label: <span>Total Price  &#x021F5;</span>, field: 'total_price', sort: 'asc', width: 270 },
            { label: <span>Payment Mode  &#x021F5;</span>, field: 'payment_mode', sort: 'asc', width: 270 },            
            { label: 'Action', field: 'action', sort: 'disabled', width: 100 },
        ];

        const rows = props.data;
        data = { columns, rows };
    }
       
    return (
            <MDBDataTable
                striped
                bordered
                hover
                btn
                data={data}
                noBottomColumns
                exportToCSV
                filter="name"
                theadColor="blue"
                noRecordsFoundLabel="No Record Found"
            />
    );
}


export default DatatablePage;