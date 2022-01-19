import PaymentItem from '../../molecules/PaymentItem';

export default function PaymentMethod() {
  return (
    <div className="pb-md-50 pb-20">
      <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
      <fieldset id="paymentMethod">
        <div className="row justify-content-between">
          <PaymentItem title="Transfer" desc="Worldwide Available" />
          <PaymentItem title="VISA" desc="Credit Card" />
          <div className="col-lg-4 col-sm-6">
            {/* <!-- Blank --> */}
          </div>
        </div>
      </fieldset>
    </div>
  );
}
