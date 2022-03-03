import { Link } from "gatsby";
import * as React from "react";
import logo from "../images/logo.png"

const IndexPage = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light  rounded pt-2" >

      <div className=" container centerNavbar ">
        <Link className="nav-link active text-uppercase" aria-current="page" to="/accueil">
          <img src={logo} alt="" style={{ height: "41px;" }} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse w-80 " id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Bariatrique</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown07">
                <li><a class="dropdown-item" href="#">Sleeve gastrique</a></li>
                <li><a class="dropdown-item" href="#">Anneau gastrique</a></li>
                <li><a class="dropdown-item" href="#">By-pass gastrique</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Dentaires</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown07">
                <li><a class="dropdown-item" href="#">Implant dentaire</a></li>
                <li><a class="dropdown-item" href="#">Facettes Dentaires</a></li>
                <li><a class="dropdown-item" href="#">Blanchiment dents</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Esthetique</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown07">
                <li><a class="dropdown-item" href="#">Traitement Laser</a></li>
                <li><a class="dropdown-item" href="#">Mesobotox</a></li>
                <li><a class="dropdown-item" href="#">PRP</a></li>
                <li><a class="dropdown-item" href="#">Rhinoplastie Médicale</a></li>
                <li><a class="dropdown-item" href="#">Les Techniques d’Amincissement</a></li>
                <li><a class="dropdown-item" href="#">Fils Tenseurs</a></li>
                <li><a class="dropdown-item" href="#">Mésothérapie</a></li>
                <li><a class="dropdown-item" href="#">La Toxine Botulique</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Esthétique de l’intimité</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown07">
                <li><a class="dropdown-item" href="#">Nymphoplastie</a></li>
                <li><a class="dropdown-item" href="#">Penoplastie</a></li>
                <li><a class="dropdown-item" href="#">Vaginoplastie</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">PMA</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown07">
                <li><a class="dropdown-item" href="#">Biopsie testiculaire</a></li>
                <li><a class="dropdown-item" href="#">Fécondation in vitro</a></li>
                <li><a class="dropdown-item" href="#">Insémination artificielle</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Greffe de cheveux</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown07">
                <li><a class="dropdown-item" href="#">Greffe poils et cheveux</a></li>
                <li><a class="dropdown-item" href="#">Greffe de barbe</a></li>
                <li><a class="dropdown-item" href="#">Greffe et implants des sourcils</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown" aria-expanded="false">Chirurgie corps</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown07">
                <li><a class="dropdown-item" href="#">Chirurgie visage</a>
                  <ul >
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Blépharoplastie</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Genioplastie</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Lifting visage</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Mini lifting visage</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Otoplastie</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Rhinoplastie</a>
                    </li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="#">Chirurgie sein</a>
                  <ul >
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Augmentation mammaire</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Lifting des seins</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Lipofilling mammaire</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Réduction mammaire</a>
                    </li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="#">Chirurgie silhouette</a>
                  <ul >
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">LipoVaser ou Liposuccion Vaser</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Abdominoplastie</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Mini abdominoplastie</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Lifting des Bras</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Bodylift Tunise</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Liposuccion</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">lifting des cuisses</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Augmentation des mollets</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Augmentation fesses</a>
                    </li>
                    <li class="dropdown-item">
                      <a class="dropdown-item" href="#">Lipofilling fesses</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default IndexPage







