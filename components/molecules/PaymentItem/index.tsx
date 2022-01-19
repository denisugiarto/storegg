import Image from 'next/image';

interface PaymentItemProps {
    title: string;
    desc: string;
}
export default function PaymentItem(props: PaymentItemProps) {
  const { title, desc } = props;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={title}
    >
      <input
        className="d-none"
        type="radio"
        id={title}
        name="paymentMethod"
        value={title}
      />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 fw-medium m-0">{title}</p>
          <Image src="/icon/ic-check.svg" width={20} height={20} alt="icon check" />
        </div>
        <p className="text-lg color-palette-1 m-0">{desc}</p>
      </div>
    </label>
  );
}
