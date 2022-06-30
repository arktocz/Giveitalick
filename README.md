## Kniha žádostí studenta:


 S využitím knihovny ReactJS vytvořte komponentu pro zpracování žádosti studenta. Předpokládejte existenci historie zpracování žádosti. Potřebná data převezměte z props.
 
 
Komponenta je v grafickém rozhraní rozdělena do 3 vzájemně propojených částí z čehož první část obsahuje pole na vložení kompletní žádosti studenta při prvotním zápisu. Druhá oblast obsahuje pole na odpověď nadřízeného s vyjádřením na  podanou žádost a následné rozdělení žádosti do tří kategorií: schváleno, nevyřízeno a zamítnuto s následným tlačítkem pro uložení odpovědi do databáze. Poslední část je uživatelem neupravitelná a slouží jako zobrazovací tabulka pro veškerou historii dané žádosti se zobrazením informací: 
- ID uživatele 
- Datum
- Poznámka vytvořená editorem žádosti v kolonce "Odpověď na žádost"
- Stav žádosti
- ID editora
- Jméno editora

Uživatel tedy zadá svou žádost a uživatelé jsou schopni přikládat poznámky a odpovídat na jeho žádost s hodnotou nevyřízeno až do doby, kdy uživatel označí žádost jako schválenou nebo odmítnutou. Při každě odpovědi se zobrazí v tabulce odpověď a je tak možné sledovat historii žádosti.

Celý projekt obsahuje dokumentaci vytvořenou pomocí jsdoc a požadovanou licenci MIT.
