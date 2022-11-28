export default function Exercise2() {
  return (
    <div>
      <h1>Exercice 2</h1>
      <p>Consignes :</p>
      <ul>
        <li>Mettre en forme l&apos;exercice 2</li>
        <li>
          Créer ci-dessous un formulaire d&apos;inscription contenant les champs
          : Prénom, nom, email, mot de passe, checkbox pour accepter un
          quelconque règlement et un bouton de validation.
        </li>
      </ul>

      <form method="post" action="/api/register">
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
          />
        </div>

        <div>
          <label htmlFor="lastname">Nom</label>
          <input type="text" id="lastname" name="lastname" placeholder="Nom" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>

        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
          />
        </div>

        <div>
          <label htmlFor="cgu">CGU</label>
          <input type="checkbox" id="cgu" name="cgu" />
        </div>

        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>

      <div id="main-content">
        <div className="box">
          <a href="https://google.Fr">Test</a>
        </div>
        <div className="box2">
          <a href="https://google.Fr">Pas sélectionné</a>
        </div>
      </div>

      <a className="special">Test 2</a>
    </div>
  );
}
