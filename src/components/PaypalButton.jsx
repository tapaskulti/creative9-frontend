import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AcA2KJ9ftu-JsUUx95Sx8P2DVdbMGzMXYTcqGNPbbSnNgiLJ0_suCdwJIdX3D_SkHEAzhNEtBL0_xy1k" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '10.00'
              }
            }]
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function(details) {
            console.log(details);
            // Show success message to the user
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
