import GlobalNav from "./globalNav";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h1>Shun Yamanaka's Portfolio</h1>
        <GlobalNav />
      </div>
    </header>
  );
}
