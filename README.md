# React – simple task 0
## Instructions Short (🏴󠁧󠁢󠁥󠁮󠁧󠁿 EN)

Create the following app with React => https://ciamac-da.github.io/react-simple-task-0/

## Anweisungen kurz (🇩🇪 DE)
Implementiere folgende App mittels React => https://ciamac-da.github.io/react-simple-task-0/

## Details

🏴󠁧󠁢󠁥󠁮󠁧󠁿 EN

0. Create a React App using the `npx` command that you have learned.  Create a *components* folder in *src* and delete all files (or their content) that you don't need.

1. Create TWO new components (`UserInput` and `UserOutput`) inside your components folder.

2. UserInput should hold an input element (`<input>`), UserOutput two paragraphs (`<p>`). 

3. Output multiple `UserOutput` components in the `App` (App.js) component (any paragraph texts of your  choice).

4. Pass a username (of your choice) to `UserOutput` via props and display it in this component.

5. Add state to the `App` component (=> the username) and pass the username to the `UserOutput` component.

6. Add to the `App` component a method to manipulate the state (=> an event-handler method).

7. Pass the *event-handler method* to the `UserInput` component and bind it to the input change eventListener (`onChange`). Passing means you have to use *props*

8. Ensure that the new input entered by the user overwrites immediately the old username passed to `UserOutput` (if you don't understand this point: open the website and start typing a username. You will see that the changes appear immediately).

9. Add styling of your choice to your components/elements - both with inline styles and stylesheets.

10. OPTIONAL: Try to make a new Branch and refactor your Class-Component(s) to Functional-Components (You need to use the state hook. We haven't done it so far but feel free to google it "react state hook")

🇩🇪 DEU 

0. Erstelle eine React App mit dem `npx` Befehl, den du gelernt hast.  Erstelle einen *components* Ordner in *src* und lösche alle Dateien (oder deren Inhalt), die du nicht benötigst.

1. Erstelle ZWEI neue Komponenten (`UserInput` und `UserOutput`) in deinem components Ordner.

2. UserInput sollte ein Eingabe-Element (`<input>`) enthalten, UserOutput zwei Paragraphen (`<p>`). 

3. Gib mehrere `UserOutput` Komponenten in der `App` (App.js) Komponente aus (verwende beliebige Absatztexte).

4. Übergib einen Benutzernamen (deiner Wahl) an `UserOutput` über props und zeige ihn in dieser Komponente an.


5. Füge der `App` Komponente einen State hinzu (=> den Benutzernamen) und übergebe den Benutzernamen an die `UserOutput` Komponente.

6. Füge der `App` Komponente eine Methode hinzu, um den Status zu manipulieren (=> eine Event-Handler Methode).

7. Übergebe die *Event-Handler-Methode* an die `UserInput` Komponente und binde sie an den Input Change EventListener (`onChange`). Übergeben bedeutet, dass du *Props* verwenden musst.

8. Stelle sicher, dass die neue Eingabe des Benutzers den alten Benutzernamen, der an `UserOutput` übergeben wurde, sofort überschreibt (wenn du diesen Punkt nicht verstehst: öffne die Webseite und beginne einen Benutzernamen einzutippen. Du wirst sehen, dass die Änderungen sofort erscheinen).

9. Füge ein Styling deiner Wahl zu deinen Komponenten/Elementen hinzu - sowohl mit Inline-Styles als auch mit Stylesheets.


10. OPTIONAL: Versuche, einen neuen Branch zu erstellen und deine Class-Component(s) zu Functional-Components zu refaktorisieren (Du musst den State Hook verwenden. Wir haben es noch nicht gemacht, aber du kannst es gerne googeln: "react state hook")

*Anweisungen übersetzt mit www.DeepL.com/Translator (kostenlose Version)*

### Bonus
- EN: Implement a delete Button, so the user can delete the `UserOutput` Elements from the website
- DE: Implementiere einen Delete Button, damit der Benutzer die `UserOutput` Elemente von der Website löschen kann

![](readmeImage/1.jpg)
![](readmeImage/2.jpg)