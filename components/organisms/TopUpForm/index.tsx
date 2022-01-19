import InputForm from '../../molecules/InputForm';
import NominalTopUp from '../NominalTopUp';
import PaymentMethod from '../PaymentMethod';

export default function TopUpForm() {
  return (
    <form action="/checkout" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <InputForm title="Verify ID" name="ID" placeholder="Enter your ID" />
        </div>
      </div>
      <NominalTopUp />
      <PaymentMethod />
      <InputForm title="Bank Account Name" name="bankAccount" placeholder="Enter your Bank Account Name" />
      <div className="d-sm-block d-flex flex-column w-100">
        <a
          href="/checkout"
          type="submit"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue

        </a>
      </div>
    </form>
  );
}
