export default function Exercise1() {
  return (
    <div>
      <h1>Exercice 1</h1>

      <p>Consignes :</p>

      <ul>
        <li>Mettre en forme l&apos;exercice 1</li>
        <li>
          En-dessous, regrouper les noms de balises vues jusqu&apos;ici dans un
          tableau avec en-têtes ayant pour colonnes : Balise, Contenu. Dans la
          colonne contenu spécifier la ou les balises qu&apos;il est possible
          d&apos;insérer à l&apos;intérieur, ou &quot;texte&quot; (pour les
          titres par exemple).
        </li>
      </ul>

      <table className="table">
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
}
