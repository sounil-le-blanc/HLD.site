import Programme from './components/programme';
import Banniere from './components/banniere'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <img 
            src="/rnp_original_logo.png" 
            alt="Roots'n Permaculture" 
            className="w-24 h-24 mx-auto mb-6" 
          />
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Holistic Life Design
          </h1>
          <p className="text-xl text-green-700 mb-4">
            Écologie de soi & Soin du monde
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Un stage ancré et accessible, pour celles et ceux qui souhaitent prendre un temps 
            pour clarifier leur chemin de vie, faire le lien entre leur bien-être personnel 
            et leur impact dans le monde.
          </p>
        </div>
        </div>
  <Banniere />
<div className="container mx-auto px-4 py-16">
        <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <img src="/photo_rakesh.jpg" alt="Rakesh Rootsman Rak" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Rakesh "Rootsman Rak"
            </h3>
            <p className="text-gray-700">
              Designer en permaculture humaine
            </p>
          </div>
          <div className="text-center">
            <img src="/sounil.jpg" alt="Sounil Le Blanc" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Sounil Le Blanc
            </h3>
            <p className="text-gray-700">
              Naturopathe et praticien du soin vivant
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Une approche basée sur :
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <img src="/logos/ecoute.png" alt="oreil stylisée symbolisant l'ecoute profonde" className="w-32 h-32 mx-auto  object-cover"/>
              <h4 className="font-semibold text-green-700 text-xl mb-3">L'écoute profonde</h4>
              <p className="text-gray-700">du corps et du vivant</p>
            </div>
            <div className="text-center p-6">
              <img src="/logos/permaculture.png" alt="arbre en cercle symbolisant la permaculture" className="w-32 h-32 mx-auto  object-cover"/>
              <h4 className="font-semibold text-green-700 text-xl mb-3">La permaculture</h4>
              <p className="text-gray-700">méthodologie du design</p>
            </div>
            <div className="text-center p-6">
              <img src="/logos/collectif.png" alt="cercle de bonhomme symbolisant le collectif" className="w-32 h-32 mx-auto  object-cover"/>
              <h4 className="font-semibold text-green-700 text-xl mb-3">Le collectif</h4>
              <p className="text-gray-700">Une dynamique bienveillante</p>
            </div>
          </div>
        </div>

         <Programme />

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Vous repartirez avec
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <h4 className="font-semibold text-green-700 text-xl mb-3">Une vision claire</h4>
              <p className="text-gray-700">de ce que vous souhaitez nourrir dans votre vie</p>
            </div>
            <div className="text-center p-6">
              <h4 className="font-semibold text-green-700 text-xl mb-3">Des outils de design</h4>
              <p className="text-gray-700">pour avancer à votre rythme</p>
            </div>
            <div className="text-center p-6">
              <h4 className="font-semibold text-green-700 text-xl mb-3">Une expérience partagée</h4>
              <p className="text-gray-700">dans un lieu inspirant et vivant</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Dates
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-green-700 mb-2">
              Du 25 au 31 Octobre 2025
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Château du Vergnet
          </h2>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              Un lieu inspirant et vivant pour votre transformation personnelle
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Tarifs en conscience
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-center text-green-700 mb-6">
              Stage (7 jours - 3 repas végétariens inclus)
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h4 className="font-semibold text-green-700 mb-2">Minimum</h4>
                <p className="text-2xl font-bold text-green-800">250€</p>
                <p className="text-gray-600">sans hébergement</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-green-500">
                <h4 className="font-semibold text-green-700 mb-2">Médian</h4>
                <p className="text-2xl font-bold text-green-800">350€</p>
                <p className="text-gray-600">sans hébergement</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h4 className="font-semibold text-green-700 mb-2">Idéal</h4>
                <p className="text-2xl font-bold text-green-800">450€</p>
                <p className="text-gray-600">sans hébergement</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-center text-green-700 mb-6">
              Hébergement (7 nuits)
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h4 className="font-semibold text-green-700 mb-2">Dortoir</h4>
                <p></p>
                <p className="text-2xl font-bold text-green-800">105€</p>
                <p className="text-gray-600">15€ x 7 nuits</p>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="font-semibold text-green-700">Total avec stage :</p>
                  <p className="text-sm text-gray-600">355€ (min) / 455€ (med) / 555€ (id)</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h4 className="font-semibold text-green-700 mb-2">Château - Lit Simple</h4>
                <p className="text-gray-600">(chambre de 2 à 4 lits)</p>
                <p className="text-2xl font-bold text-green-800">210€</p>
                <p className="text-gray-600">30€ x 7 nuits</p>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="font-semibold text-green-700">Total avec stage :</p>
                  <p className="text-sm text-gray-600">460€ (min) / 560€ (med) / 660€ (id)</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h4 className="font-semibold text-green-700 mb-2">Château - Lit double</h4>
                <p className="text-gray-600">(chambre 1 lit)</p>
                <p className="text-2xl font-bold text-green-800">420€</p>
                <p className="text-gray-600">60€ x 7 nuits</p>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="font-semibold text-green-700">Total avec stage :</p>
                  <p className="text-sm text-gray-600">670€ (min) / 770€ (med) / 870€ (id)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Inscription
          </h2>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-700 mb-6">
              Prêt(e) à vivre cette expérience transformatrice ?
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-gray-600 mb-4">
                Formulaire d'inscription à venir...
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg">
                S'inscrire au stage
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-16 bg-green-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>rakeshaji@gmail.com</p>
            <p>www.facebook.com/rootsmanrak</p>
          </div>
        </footer>
      </div>
    </main>
  )
}