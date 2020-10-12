import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <img className="img-fluid logoPng" src="/logo.png" alt="" /> <br />
      <div className="footerMenu">
        <Link href="/damskie">Damskie</Link>
        <Link href="/meskie">Męskie</Link>
        <Link href="/zegary">Zegary</Link>
        <Link href="/zzgrawer">Zegarki z grawerem</Link>
      </div>
      <p>studio-web.pl</p>
    </footer>
  );
};

export default Footer;
