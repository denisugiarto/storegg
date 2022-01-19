import NominalItem from '../../molecules/NomimalItem';

export default function NominalTopUp() {
  return (
    <div className="pt-md-50 pb-md-50 pt-30 pb-20">
      <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
      <div className="row justify-content-between">
        <NominalItem id="topup1" amount={125} desc="Gold" price="Rp. 125.000" />
        <NominalItem id="topup2" amount={225} desc="Gold" price="Rp. 225.000" />
        <NominalItem id="topup3" amount={350} desc="Gold" price="Rp. 350.000" />
        <NominalItem id="topup4" amount={550} desc="Gold" price="Rp. 550.000" />
        <NominalItem id="topup5" amount={750} desc="Gold" price="Rp. 750.000" />

        <div className="col-lg-4 col-sm-6">
          {/* <!-- Blank --> */}
        </div>
      </div>
    </div>
  );
}
