import Carousel from "../components/carousel";

export default function Home() {
  return (
    <div className="">
        <div className="pt-4 pb-6 h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel/>
        </div>
        <div>
          <div className="transition-all ease-in-out hover:translate-x-12 hover:scale-110 duration-700 py-6"> 
            <button disabled className="font-bold text-xl">Najwyższej jakości sklejka do cięcia laserem</button>
          </div>
          
          <p className="text-base text-justify leading-6 mb-2">Prowadzimy naszą firmę w Poznaniu. Zajmujemy się bezpośrednim importem i dystrybucją specjalistycznych produktów ze sklejki wytwarzanej w Europie. Jako producent sklejki na wymiar oferujemy lekkie brzozowe, brzozowo-świerkowe, topolowe oraz egzotyczne płyty sklejkowe, które charakteryzują się wysoką estetyką, jak również starannie szlifowanymi powierzchniami.</p>
          <p className="text-base text-justify leading-6 mb-2">Proponowane przez nas wyroby są wodoodporne, termoformowalne, a także antypoślizgowe. Mają wszechstronne zastosowanie w branży budowlanej w zależności od swojego wymiaru. Mogą służyć do wykonywania lekkich konstrukcji zewnętrznych czy wewnętrznych takich, jak stoiska targowe, ścianki działowe, drewniane budynki, podesty oraz estrady.</p>
          <p className="text-base text-justify leading-6mb-2">Płyta ze sklejki brzozowej do cięcia laserem pozwala na tworzenie bardzo estetycznych wyrobów, wykrojników i decoupage w każdym wymiarze. Płyty do formowania na gorąco pozwalają na przykład uzyskać różne kształty elementów mebli i wyposażenia wnętrz. Importowane przez nas produkty najwyższej jakości doskonale nadają się do tworzenia opakowań transportowych, ozdobnych oraz stanowią doskonały surowiec dla wszelkiego typu innych produktów.</p>
        </div>
        
    </div>
  )
}
