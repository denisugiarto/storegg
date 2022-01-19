import Image from 'next/image';

interface NominalItemProps {
    id: string;
    amount: number;
    desc: string;
    price: string;
}
export default function NominalItem(props: NominalItemProps) {
  const {
    id, amount, desc, price,
  } = props;
  return (
    <label
      className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
      htmlFor={id}
    >
      <input className="d-none" type="radio" id={id} name="topup" value={id} />
      <div className="detail-card">
        <div className="d-flex justify-content-between">
          <p className="text-3xl color-palette-1 m-0">
            <span className="fw-medium">
              {amount}
              {' '}
            </span>
            {desc}
          </p>
          <Image id="icon-check" src="/icon/ic-check.svg" width="20" height="20" alt="icon check" />
        </div>
        <p className="text-lg color-palette-1 m-0">{price}</p>
      </div>
    </label>
  );
}
