export default function Exercise3() {
  return (
    <div className="container">
      <h1>Exercice 3</h1>

      <p>Consignes :</p>

      <ul>
        <li>Mettre en forme l&apos;exercice 3</li>
        <li>Recopier le formulaire d&apos;inscription précédent ci-dessous</li>
        <li>
          Grâce au fichier globals.css, mettre le texte des labels en bleu,
          agrandir la police dans les input texte, placer un bloc en position
          absolue à droite du champ adresse email avec un texte de votre choix
          en police 10px rouge.
        </li>
      </ul>

      <form method="post" action="/api/register">
        <div>
          <label htmlFor="firstname" className="form-label">
            Prénom
          </label>
          <input
            className="form-control"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
          />
        </div>

        <div>
          <label className="form-label" htmlFor="lastname">
            Nom
          </label>
          <input
            className="form-control"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Nom"
          />
        </div>

        <div id="address-block">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <div className="warning-block">Ici un warning</div>
        </div>

        <div>
          <label className="form-label" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
          />
        </div>

        <div>
          <label className="form-label" htmlFor="cgu">
            CGU
          </label>
          <input type="checkbox" id="cgu" name="cgu" />
        </div>

        <div>
          <button className="btn btn-primary" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
