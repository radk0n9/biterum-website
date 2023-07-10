import Carousel from "../components/carousel";

export default function Home() {
  return (
    <div className="">
        <div className="pt-4 pb-6 h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel/>
        </div>
        <div>
          <div className="transition-all ease-in-out md:hover:translate-x-12 md:hover:scale-110 sm:hover:scale-0 duration-700 py-6"> 
            <button disabled className="font-bold text-xl">Najwyższej jakości sklejka do cięcia laserem</button>
          </div>
          <p className="text-base text-justify leading-6 mb-2">Prowadzimy naszą firmę w Poznaniu. Zajmujemy się bezpośrednim importem i dystrybucją specjalistycznych produktów ze sklejki wytwarzanej w Europie. Jako producent sklejki na wymiar oferujemy lekkie brzozowe, brzozowo-świerkowe, topolowe oraz egzotyczne płyty sklejkowe, które charakteryzują się wysoką estetyką, jak również starannie szlifowanymi powierzchniami.</p>
          <p className="text-base text-justify leading-6 mb-2">Proponowane przez nas wyroby są wodoodporne, termoformowalne, a także antypoślizgowe. Mają wszechstronne zastosowanie w branży budowlanej w zależności od swojego wymiaru. Mogą służyć do wykonywania lekkich konstrukcji zewnętrznych czy wewnętrznych takich, jak stoiska targowe, ścianki działowe, drewniane budynki, podesty oraz estrady.</p>
          <p className="text-base text-justify leading-6mb-2">Płyta ze sklejki brzozowej do cięcia laserem pozwala na tworzenie bardzo estetycznych wyrobów, wykrojników i decoupage w każdym wymiarze. Płyty do formowania na gorąco pozwalają na przykład uzyskać różne kształty elementów mebli i wyposażenia wnętrz. Importowane przez nas produkty najwyższej jakości doskonale nadają się do tworzenia opakowań transportowych, ozdobnych oraz stanowią doskonały surowiec dla wszelkiego typu innych produktów.</p>
        </div>
      <div>
          <div className="transition-all ease-in-out md:hover:translate-x-12 md:hover:scale-110 sm:hover:scale-0 duration-700 py-6"> 
            <button disabled className="font-bold text-xl">Naturalny materiał</button>
          </div>
          <p className="text-base text-justify leading-6 mb-2">Nasze płyty BIT-LASER nadają się idealnie do precyzyjnych cięć laserem. Są zaprojektowane i zoptymalizowane specjalnie do tego typu cięcia, jak i do formowania na gorąco. Posiadamy m.in. sklejki:</p>
          <ul className="list-disc list-outside md:ml-10 ml-4">
            <li className="text-base text-justify leading-6 mb-2">brzozowe i topolowe – to najpopularniejsze materiały wykorzystywane do wycinania laserem ozdób, dekoracji czy oryginalnych materiałów reklamowych. Są nie tylko naturalne, ale bardzo trwałe mimo swojej lekkości, a także niezwykle łatwe w obróbce. Należy je jednak stosować w warunkach suchych oraz unikać wilgoci. Możesz na nich uzyskać grawer od jasnego do ciemnobrązowego w zależności od ustawień lasera, którym operujesz. Nadają się do dokładnego wycięcia naw nawet bardzo skomplikowanych wzorów.</li>
            <li className="text-base text-justify leading-6 mb-2">świerkowe nadadzą się doskonale to tworzenia lekkich konstrukcji narażonych na obciążenia. Sprawdzą się w konstrukcjach zadaszeń, a także jako materiał podłogowy czy ozdobne opakowanie. Płyty wykorzystywane są w stolarce budowlanej i meblowej.</li>
          </ul>
      </div>
      <div>
          <div className="transition-all ease-in-out md:hover:scale-110 sm:hover:scale-0 duration-700 pt-8 pb-6 text-center"> 
            <button disabled className="font-bold text-xl">Nasze produkty znajdują zastosowanie w następujących dziedzinach:</button>
          </div>
          <div className="grid lg:md:grid-cols-3 lg:md:gap-16 lg:md:mt-2 sm:mt-4 sm:grid-cols-1 sm:gap-6">
            <ul className="text-base list-disc list-outside md:ml-20 ml-10">
              <li className="mb-1">cięcie laserem:
                <ul className="list-square list-outside ml-7">
                  <li>wykrojniki poligraficzne;</li>
                  <li>decoupage;</li>
                  <li>ozdobne opakowania;</li>
                </ul>
              </li>
              <li className="mb-1">obróbka CNC;</li>
              <li className="mb-1">produkcja opakowań transportowych;</li>
            </ul>
            <ul className="list-disc list-outside md:ml-20 ml-10">
              <li className="mb-1">żelbety:
                <ul className="list-square list-outside ml-7">
                  <li>formy w budownictwie żelbetowym;</li>
                  <li>prefabrykaty betonowe;</li>
                </ul>
              </li>
              <li className="mb-1">lekkie konstrukcje zewnętrzne i wewnętrzne:
                <ul className="list-square list-outside ml-7">
                  <li>stoiska targowe;</li>
                  <li>budynki drewniane;</li>
                  <li>ścianki działowe;</li>
                  <li>estrady, podesty;</li>
                </ul>
              </li>
            </ul>
            <ul className="list-disc list-outside md:ml-20 ml-10">
              <li className="mb-1">zabudowy transportowe:
                <ul className="list-square list-outside ml-7">
                  <li>skrzyniowe;</li>
                  <li>przyczepy;</li>
                  <li>naczepy.</li>
                </ul>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}
