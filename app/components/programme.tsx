// components/Programme.tsx

export default function Programme() {
  return (
    <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Et si vous preniez 7 jours pour réaligner votre vie ?
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Dans le calme vibrant du domaine de Moulares, ce stage propose une immersion dans les pratiques de soin profond du corps et de design vivant.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Détox, régénération, exploration intérieure, projets de vie...
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Vous serez accompagné pas à pas pour :
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>Comprendre les déséquilibres de votre mode de vie</li>
          <li>Prendre soin de votre vitalité avec des pratiques simples et naturelles</li>
          <li>Redessiner votre quotidien avec clarté, ancrage et désir</li>
        </ul>

        <h3 className="text-2xl font-semibold text-green-700 mb-4">Activités proposées :</h3>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Bilan naturopathique personnalisé</li>
          <li>Auto-massages & exploration du toucher conscient</li>
          <li>Cure de jus et jeûne doux (optionnel)</li>
          <li>Yoga matinal & respiration consciente</li>
          <li>Iridologie et décodage des surcharges</li>
          <li>Ateliers de réflexion : projet de vie, écologie intérieure, équilibre corps / mental / esprit</li>
          <li>Balades botaniques & cueillette sauvage</li>
          <li>Préparation de remèdes naturels (infusions, teintures, cataplasmes...)</li>
          <li>Temps de silence, écoute et transformation collective</li>
        </ul>
      </div>
    </section>
  );
}
