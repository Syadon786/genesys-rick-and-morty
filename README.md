## Használt library-k React-on kívül

- **axios**:

  - Requestek küldésére használtam
  - a visszakapott adatokat már használható módra transzformálja
  - fetch api-val ellentétben XMLHttpRequest-ekkel dolgozik a motorháztető alatt ezért visszamenőleg is kompatibilis
  - könnyen konfigurálható

- **React-router-dom**:
  - navigációra használtam
- **classnames**:
  - egy utility library
  - megkönnyíti a classok conditional definiálását
- **react-toastify**:
  - mivel a filterezésnél a rick and morty api úgy viselkedik, hogyha nem találja a megadott filtert akkor egy 404-es státuszkóddal tér vissza, amit lekezeltem axiosban és csak a miheztartás kedvéért megjelenítettem egy kis toast ablakban az üzenetet
- **sass**:
  - ki akartam használni a jobb struktúrális felépítés miatt a nesting feature-t mivel natív css-ben még csak draft üzemmódban van ez a feature és nem annyira támogatott
  - nem kell mindenhol egyedi nevet kitalálni feleslegesen mivel egyedi nevekké transzformálja a háttérben class neveket
- **fontawesome**:
  - svg ikonok könnyebb használata végett
- **Tanstack react query**:
  - mivel a navigáció, paginálás, filterezés során és a profil oldalon összességében sok kérés történik ezért ki akartam használni a cache-elési feature-eit kulcsok definiálásával
  - ezért a már meglátogatott entitánsok ha már el lettek cache-lve így nem kell új kérést intézni hanem egyből kirenderelődhet
  - főleg az epizódok megjelenítésénél volt hasznos mivel így nem kell sok kérést folyton küldeni navigáció során, és más karaktereknél is felhasználhatóak az elcachelt adatok
  - gyorsabbá, reszponzívabbá teszi az oldalt, ezért a felhasználói élmény is jobb
