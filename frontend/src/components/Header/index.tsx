import logo from '../../assets/imagens/logo.svg';

function Header() {
  return (
    <header>
    <div className="app-logo-container-centralizador">
        <img src={logo} alt="Giraalfajor" width="150px" height=""/>
        <h1>Giraalfajor</h1>
        <p>Desenvolvido por
            <a href="https://www.instagram.com/eukayson/" target="_blank">@eukayson</a>
        </p>
    </div>
</header>
  )

}

export default Header;