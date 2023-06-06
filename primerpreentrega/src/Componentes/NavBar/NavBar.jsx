import CartWidget from './CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
<header className='navbar navbar-expand-lg bg-body-tertiary'>
<div class="container-fluid">
    <div className="navbar-brand">
        PuntoES Uniformes
    </div>
    <div className="categories">
        <ol className='categoriesList'>
            <li><button>Uniformes</button></li>
            <li><button>Verano</button></li>
            <li><button>Invierno</button></li>
        </ol>
    </div>
    <CartWidget/>
</div>
</header>
  )
}

export default NavBar