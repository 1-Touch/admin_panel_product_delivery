const initialState = {
	productFormFields : [
	    {
		 	type: 'text',
	 		label: 'Explain Your Reason',
	 	 	defaultValue: null,
	 	 	style: { width: '93%', height : "22%" },
	 	 	multiline : true
	 	}	
	],

	orders : [
		{
			order_id : 1,
			unique_order_id : "d2je541aschw215418",
			product_id : 56,
			user_id : 5,
			coupon_name : "LKTMSJD",
			full_address : " Marriott Marquis Washington DC U.S.A 20001",
			quantity : 2,
			actual_price : "200$",
			applied_price : "150$",
			total_price : "300$",
			payment_mode : "Credit Card",
			transaction_id : "1234552445",
		},
		{
			order_id : 2,
			unique_order_id : "lkutshbdaschw2154115",
			product_id : 46,
			user_id : 9,
			coupon_name : "No coupon applied",
			full_address : " Florida U.S.A 20004",
			quantity : 1,
			actual_price : "120$",
			applied_price : "90$",
			total_price : "300$",
			payment_mode : "Credit Card",
			transaction_id : "1234552445",
		}
	]
}

const orderReducer = (state = initialState, action) => {
	switch(action.type){
		default :
			return state ;
	}
}

export default orderReducer ;