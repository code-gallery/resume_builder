import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

import Success from "../../Generic/Success";

const OrderSuccess = () => {
  const history = useHistory();

  const goToCategoriesList = () => {
    history.push("/categories-list");
  };

  return (
		<Success>
			<center>
				<div className="font-24">Your order has been placed.</div>
				<div className="font-24">
					We sent you an order confirmation to your email.
				</div>
				<div className="mt-3">
					<Button
						htmlType="submit"
						className="pop-medium font-24 blue-bg white curved-btn"
						onClick={goToCategoriesList}
					>
						Continue Browsing
					</Button>
				</div>
			</center>
		</Success>
	);
};

export default OrderSuccess;