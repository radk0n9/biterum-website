import Carousel from "@/components/carousel";
import { getItems } from "@/components/get-items";
import Card from "@/components/card";
import { v4 as uuidv4 } from "uuid";
import path from "path";

export default function Home() {

  const itemsDirectory = path.join(process.cwd(), "components/itemsM");
  const allItems = getItems(itemsDirectory);

  return (
    <>
      <article className="pt-4 pb-6 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel />
      </article>
      <article>
        <div className="transition ease-in-out duration-500 md:hover:translate-x-24 md:hover:scale-[1.2] sm:hover:scale-0 py-6">
          <button disabled className="font-bold text-xl">
            <h1>Najwyższej jakości sklejka do cięcia laserem</h1>
          </button>
        </div>
        <p className="text-base text-justify leading-6 mb-2">
          Prowadzimy naszą firmę w Poznaniu. Zajmujemy się bezpośrednim importem
          i dystrybucją specjalistycznych produktów ze sklejki wytwarzanej w
          Europie. Jako producent sklejki na wymiar oferujemy lekkie brzozowe,
          brzozowo-świerkowe, topolowe oraz egzotyczne płyty sklejkowe, które
          charakteryzują się wysoką estetyką, jak również starannie szlifowanymi
          powierzchniami.
        </p>
        <p className="text-base text-justify leading-6 mb-2">
          Proponowane przez nas wyroby są wodoodporne, termoformowalne, a także
          antypoślizgowe. Mają wszechstronne zastosowanie w branży budowlanej w
          zależności od swojego wymiaru. Mogą służyć do wykonywania lekkich
          konstrukcji zewnętrznych czy wewnętrznych takich, jak stoiska targowe,
          ścianki działowe, drewniane budynki, podesty oraz estrady.
        </p>
        <p className="text-base text-justify leading-6mb-2">
          Płyta ze sklejki brzozowej do cięcia laserem pozwala na tworzenie
          bardzo estetycznych wyrobów, wykrojników i decoupage w każdym
          wymiarze. Płyty do formowania na gorąco pozwalają na przykład uzyskać
          różne kształty elementów mebli i wyposażenia wnętrz. Importowane przez
          nas produkty najwyższej jakości doskonale nadają się do tworzenia
          opakowań transportowych, ozdobnych oraz stanowią doskonały surowiec
          dla wszelkiego typu innych produktów.
        </p>
      </article>
      <article>
        <div className="transition ease-in-out duration-500 md:hover:translate-x-24 md:hover:scale-[1.2] sm:hover:scale-0 py-6">
          <button disabled className="font-bold text-xl">
            <h1>Naturalny materiał</h1>
          </button>
        </div>
        <p className="text-base text-justify leading-6 mb-2">
          Nasze płyty BIT-LASER nadają się idealnie do precyzyjnych cięć
          laserem. Są zaprojektowane i zoptymalizowane specjalnie do tego typu
          cięcia, jak i do formowania na gorąco. Posiadamy m.in. sklejki:
        </p>
        <ul className="list-disc list-outside md:ml-10 ml-4">
          <li className="text-base text-justify leading-6 mb-2">
            brzozowe i topolowe – to najpopularniejsze materiały wykorzystywane
            do wycinania laserem ozdób, dekoracji czy oryginalnych materiałów
            reklamowych. Są nie tylko naturalne, ale bardzo trwałe mimo swojej
            lekkości, a także niezwykle łatwe w obróbce. Należy je jednak
            stosować w warunkach suchych oraz unikać wilgoci. Możesz na nich
            uzyskać grawer od jasnego do ciemnobrązowego w zależności od
            ustawień lasera, którym operujesz. Nadają się do dokładnego wycięcia
            naw nawet bardzo skomplikowanych wzorów.
          </li>
          <li className="text-base text-justify leading-6 mb-2">
            świerkowe nadadzą się doskonale to tworzenia lekkich konstrukcji
            narażonych na obciążenia. Sprawdzą się w konstrukcjach zadaszeń, a
            także jako materiał podłogowy czy ozdobne opakowanie. Płyty
            wykorzystywane są w stolarce budowlanej i meblowej.
          </li>
        </ul>
      </article>
      <article className="grid md:grid-cols-3 sm:grid-cols-1 md:gap-x-6 md:gap-y-10 :md:my-10 sm:my-4 sm:gap-6 justify-items-center gap-4 grid-cols-1 my-2">
        {allItems.map((item) => (
          <Card
            key={uuidv4()}
            title={item.data.title}
            content={item.content}
            image={item.data.image}
            //odnosnik href do strony
          />
        ))}
      </article>
      <article>
        <div className="transition ease-in-out md:hover:scale-[1.2] sm:hover:scale-0 duration-500 pt-8 pb-6 text-center">
          <button disabled className="font-bold text-xl">
            Nasze produkty znajdują zastosowanie w następujących dziedzinach:
          </button>
        </div>
        <div className="grid md:grid-cols-3 md:gap-16 md:mt-2 sm:mt-4 sm:grid-cols-1 sm:gap-6">
          <ul className="text-base list-disc list-outside md:ml-20 ml-10">
            <li className="mb-1" key={uuidv4()}>
              cięcie laserem:
              <ul className="list-square list-outside ml-7">
                <li key={uuidv4()}>wykrojniki poligraficzne;</li>
                <li key={uuidv4()}>decoupage;</li>
                <li key={uuidv4()}>ozdobne opakowania;</li>
              </ul>
            </li>
            <li className="mb-1" key={uuidv4()}>
              obróbka CNC;
            </li>
            <li className="mb-1" key={uuidv4()}>
              produkcja opakowań transportowych;
            </li>
          </ul>
          <ul className="list-disc list-outside md:ml-20 ml-10">
            <li className="mb-1" key={uuidv4()}>
              żelbety:
              <ul className="list-square list-outside ml-7">
                <li key={uuidv4()}>formy w budownictwie żelbetowym;</li>
                <li key={uuidv4()}>prefabrykaty betonowe;</li>
              </ul>
            </li>
            <li className="mb-1" key={uuidv4()}>
              lekkie konstrukcje zewnętrzne i wewnętrzne:
              <ul className="list-square list-outside ml-7">
                <li key={uuidv4()}>stoiska targowe;</li>
                <li key={uuidv4()}>budynki drewniane;</li>
                <li key={uuidv4()}>ścianki działowe;</li>
                <li key={uuidv4()}>estrady, podesty;</li>
              </ul>
            </li>
          </ul>
          <ul className="list-disc list-outside md:ml-20 ml-10">
            <li className="mb-1" key={uuidv4()}>
              zabudowy transportowe:
              <ul className="list-square list-outside ml-7">
                <li key={uuidv4()}>skrzyniowe;</li>
                <li key={uuidv4()}>przyczepy;</li>
                <li key={uuidv4()}>naczepy.</li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
}
