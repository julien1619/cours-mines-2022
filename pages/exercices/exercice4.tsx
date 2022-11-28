export default function Exercise4() {
  return (
    <div className="container">
      <h1>Exercice 4</h1>
      <p>Consignes :</p>
      <ul>
        <li>Recopier les exercices 1 et 2 ci-dessous</li>
        <li>
          Les adapter pour que les 2 exercices soient sur 2 colonnes différentes
          sur Desktop, et sur une seule colonne sur Mobile
        </li>
        <li>
          Adapter le formulaire pour qu&apos;il respecte les guidelines
          Bootstrap sur les formulaires
        </li>
      </ul>

      <div className="row">
        <div className="col-md">
          <table className="table">
            <tr>
              <th>Balise</th>
              <th>Contenu</th>
            </tr>
            <tr>
              <td>a</td>
              <td>texte</td>
            </tr>
            <tr>
              <td>ul</td>
              <td>li</td>
            </tr>
          </table>
        </div>
        <div className="col-md">
          <form method="post" action="/api/register">
            <div className="mb-3">
              <label className="form-label" htmlFor="firstname">
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

            <div className="mb-3">
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

            <div className="mb-3">
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
            </div>

            <div className="mb-3">
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

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="cgu"
                name="cgu"
              />
              <label className="form-check-label" htmlFor="cgu">
                CGU
              </label>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary" type="submit">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
