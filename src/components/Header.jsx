import headerImg from '../assets/troll-face.png';

export default function Header() {
  return (
    <header className="header">
      <img src={headerImg} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">by Hemanshu Waghmare</h4>
    </header>
  );
}
