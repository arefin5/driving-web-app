import React from "react";
const moment = require("moment");
import pricingPaymentPostHook from "../../Hooks/pricingPaymentPostHook";
import useGetSingleUserData from "@/src/Hooks/users/useGetSingleUserData";
import StripeCheckout from "react-stripe-checkout";

const PricingPayment = ({ plan }) => {

  const currentDate = moment();
  const date = currentDate.add(plan?.duration, "months");
  const endDate = date?.format("YYYY-MM-DD");
  const { data: userInfo } = useGetSingleUserData();
  const id = userInfo?._id;
  const tokenHandler = (token) => {
    
    const pricingPaymentDetails = {
      token,
      price: plan?.price,
      user: userInfo,
      plan,
      endDate: endDate,
      userId: userInfo?._id,
    };
    pricingPaymentPostHook(
      "https://backend.driveshikhun.com/api/v1/payment/addPayment",
      pricingPaymentDetails,
      id
    );
  };

  return (
    <StripeCheckout
      amount={plan?.price * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51L1TVtFBIaSlFfNXVsw7wg2WrEnZ7w8b0amGGpxAiJT7sns5U0VhzfKI57g3Pdd0alwzvLSyZDeaQJPRT88ieIif00GQdQn6kg"
      currency="USD"
    >
      <button className="w-full bg-white py-3 font-semibold text-xl rounded text-secondarySolid dark:bg-darkbg dark:text-white">
        সাবস্ক্রিপশন নিন
      </button>
    </StripeCheckout>
  );
};

export default PricingPayment;
