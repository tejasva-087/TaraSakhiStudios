import TaraSakhiLogo from "../../assets/images/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={TaraSakhiLogo} alt="Tara sakhi logo" className="w-14" />
      <h3 className="font-extralight text-xl">TARA SAKHI STUDIO</h3>
    </div>
  );
}

export default Logo;
