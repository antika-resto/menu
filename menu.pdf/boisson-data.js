/* ============================================================
   SOURCE — Carte des boissons (apéro, cocktails, vins, bulles,
   bières, softs, spiritueux). Les Digestifs & Boissons chaudes
   sont réutilisés depuis desserts-data.js (source unique).

   Noms de marque / cocktails = identiques dans toutes les langues (n:"…").
   Seuls les libellés génériques sont traduits via i18n[lang].names / desc.
   Items :
     {k,n,p}                      → prix unique
     {k,n,variants:[[labelKey,p]]}→ plusieurs formats
     {k,n,p,d:1}                  → avec descriptif (i18n desc[k])
     {sub:"key"}                  → sous-titre (i18n subs[key])
   ============================================================ */
window.BOISSON = {
  sections: [
    {id:"apero", items:[
      {k:"aperol", n:"Aperol Spritz", p:"9,40", img:"aperol.jpg"},
      {k:"aperol0", n:"Aperol Spritz 0%", p:"8,40", img:"aperol.jpg"},
      {k:"hugo", n:"Hugo Spritz", p:"9,90", img:"hugo.jpg"},
      {k:"limoncello_spritz", n:"Limoncello Spritz", p:"9,40", img:"limoncello_spritz.jpg"},
      {k:"mandarinetto", n:"Mandarinetto Spritz", p:"9,40", img:"mandarinetto.jpg"},
      {k:"campari", n:"Campari Orange", p:"8,90", img:"campari.jpg"},
      {k:"martini_bianco", n:"Martini Bianco", p:"6,80", img:"martini_bianco.jpg"},
      {k:"martini_rosso", n:"Martini Rosso", p:"6,80", img:"martini_rosso.jpg"},
      {k:"martini_bellini", n:"Martini Bellini", p:"8,90", img:"martini_bellini.jpg"},
      {k:"porto", n:"Porto White / Red", p:"6,80", img:"porto.jpg"},
      {k:"ricard", n:"Ricard", p:"7,20", img:"ricard.jpg"}
    ]},
    {id:"cocktails", items:[
      {sub:"signature"},
      {k:"antika_sunset", n:"Antika Sunset", p:"12,50", d:1, img:"antika_sunset.jpg"},
      {sub:"house"},
      {k:"pornstar", n:"Pornstar Martini", p:"13,00", img:"pornstar.jpg"},
      {k:"mojito", n:"Mojito", p:"12,00", img:"mojito.jpg"},
      {k:"amaretto_sour", n:"Amaretto Sour", p:"11,00", img:"amaretto_sour.jpg"},
      {sub:"classics"},
      {k:"margarita", n:"Margarita", p:"12,00", img:"margarita.jpg"},
      {k:"cosmopolitan", n:"Cosmopolitan", p:"11,00", img:"cosmopolitan.jpg"},
      {k:"pina_colada", n:"Piña Colada", p:"11,00", img:"pina_colada.jpg"},
      {k:"espresso_martini", n:"Espresso Martini", p:"12,00", img:"espresso_martini.jpg"},
      {k:"strawberry_daiquiri", n:"Strawberry Daiquiri", p:"12,00", img:"strawberry_daiquiri.jpg"},
      {sub:"mule"},
      {k:"disaronno_mule", n:"Disaronno Mule", p:"12,00", d:1, img:"disaronno_mule.jpg"},
      {k:"dominican_mule", n:"Dominican Mule", p:"12,00", d:1, img:"dominican_mule.jpg"},
      {k:"london_mule", n:"London Mule", p:"12,00", d:1, img:"london_mule.jpg"},
      {k:"mexican_mule", n:"Mexican Mule", p:"12,00", d:1, img:"mexican_mule.jpg"},
      {k:"fire_mule", n:"Fire Mule", p:"12,00", d:1, img:"fire_mule.jpg"},
      {sub:"mocktails"},
      {k:"antika_sweet", n:"Antika Sweet", p:"10,00", z:1, img:"antika_sweet.jpg"},
      {k:"antika_bitter", n:"Antika Bitter", p:"10,00", z:1, img:"antika_bitter.jpg"},
      {k:"ginger_mule", n:"Ginger Mule", p:"10,00", z:1, img:"ginger_mule.jpg"}
    ]},
    {id:"wine", items:[
      {k:"wine_house", variants:[["glass","5,50"],["q","9,90"],["h","17,00"],["bottle","26,00"]], img:"wine_house.jpg"},
      {k:"wine_quality", variants:[["glass","7,00"],["q","12,00"],["h","22,00"],["bottle","33,00"]], img:"wine_quality.jpg"}
    ]},
    {id:"bubbles", items:[
      {k:"prosecco", n:"Prosecco", variants:[["glass","6,50"],["bottle","32,00"]], img:"prosecco.jpg"},
      {k:"pinot_grigio", n:"Pinot Grigio Rosé", variants:[["half375","18,90"],["bottle75","34,50"]], img:"pinot_grigio.jpg"},
      {sub:"champagne"},
      {k:"lanson", n:"Lanson Black", variants:[["half375","48,00"],["bottle75","85,00"]], img:"lanson.jpg"},
      {k:"veuve", n:"Veuve Clicquot", variants:[["bottle75","110,00"]], img:"veuve.jpg"},
      {k:"moet", n:"Moët · Ice Impérial", variants:[["bottle75","130,00"]], img:"moet.jpg"}
    ]},
    {id:"beer", items:[
      {k:"jupiler25", n:"Jupiler 25 cl · Draft", p:"3,30", logo:"jupiler.png"},
      {k:"jupiler33", n:"Jupiler 33 cl · Draft", p:"3,90", logo:"jupiler.png"},
      {k:"jupiler0", n:"Jupiler 0%", p:"3,50", logo:"jupiler-0.png"},
      {k:"corona0", n:"Corona 0%", p:"4,70", logo:"corona-0.png"},
      {k:"leffe_blonde0", n:"Leffe Blonde 0%", p:"4,80", logo:"leffe.png"},
      {k:"peja", n:"Birra Peja (Kosova)", p:"4,00", logo:"peja.png"},
      {k:"leffe_blonde", n:"Leffe Blonde · Draft", p:"4,90", logo:"leffe.png"},
      {k:"leffe_bruin", n:"Leffe Bruin", p:"4,90", logo:"leffe-bruin.png"},
      {k:"hoegaarden", n:"Hoegaarden Blanche · Draft", p:"3,90", logo:"hoegaarden.png"},
      {k:"karmeliet", n:"Tripel Karmeliet · Draft", p:"5,50", logo:"karmeliet.png"},
      {k:"omer", n:"Omer", p:"5,40", logo:"omer.png"},
      {k:"hoegaarden_rose", n:"Hoegaarden Rosé", p:"4,00", logo:"hoegaarden-rose.png"},
      {k:"duvel", n:"Duvel", p:"5,10", logo:"duvel.png"},
      {k:"buta_biru", n:"Buta Biru · Local Sweynbeer", p:"4,80", link:"https://sweyn.beer/", img:"buta_biru.jpg"},
      {k:"hubeer", n:"Hubeer · Local Sweynbeer", p:"4,80", link:"https://sweyn.beer/", img:"hubeer.jpg"},
      {k:"chili_ipa", n:"Chili IPA · Local Sweynbeer", p:"4,80", link:"https://sweyn.beer/", img:"chili_ipa.jpg"},
      {k:"corona", n:"Corona", p:"5,20", logo:"corona.png"}
    ]},
    {id:"soft", items:[
      {k:"coca", n:"Coca-Cola", p:"3,50", logo:"coca.png"},
      {k:"coca_zero", n:"Coca-Cola Zero", p:"3,50", logo:"coca-zero.png"},
      {k:"fanta", n:"Fanta", p:"3,50", logo:"fanta.png"},
      {k:"sprite", n:"Sprite", p:"3,50", logo:"sprite.png"},
      {k:"fuze_sparkling", n:"Fuze Tea Sparkling", p:"3,70", logo:"fuze-sparkling.png"},
      {k:"fuze_peach", n:"Fuze Tea Peach", p:"3,70", logo:"fuze-peach.png"},
      {k:"fuze_mango", n:"Fuze Tea Mango", p:"3,70", logo:"fuze-green.png"},
      {k:"chaud", n:"Chaudfontaine", p:"3,00", logo:"chaudfontaine.png"},
      {k:"chaud_half", n:"Chaudfontaine 1/2 L", p:"5,50", logo:"chaudfontaine.png"},
      {k:"chaud_1l", n:"Chaudfontaine 1 L", p:"8,50", logo:"chaudfontaine.png"},
      {k:"chaud_p", n:"Chaudfontaine Pétillante", p:"3,00", logo:"chaudfontaine-red.png"},
      {k:"chaud_p_half", n:"Chaudfontaine Pétillante 1/2 L", p:"5,50", logo:"chaudfontaine-red.png"},
      {k:"chaud_p_1l", n:"Chaudfontaine Pétillante 1 L", p:"8,50", logo:"chaudfontaine-red.png"},
      {k:"tonic_indian", n:"Royal Bliss Indian Tonic", p:"3,80", logo:"rb-tonic.png"},
      {k:"tonic_agrume", n:"Royal Bliss Agrumes Tonic", p:"3,80", logo:"rb-agrumes.png"},
      {k:"tonic_lemon", n:"Royal Bliss Lemon Tonic", p:"3,80", logo:"rb-lemon.png"},
      {k:"tonic_pink", n:"Royal Bliss Pink Tonic", p:"3,80", logo:"rb-pink.png"},
      {k:"mm_appel", n:"Minute Maid Apple", p:"3,70", logo:"mm-appel.png"},
      {k:"mm_appel_kers", n:"Minute Maid Apple-Cherry", p:"3,70", logo:"mm-kers.png"},
      {k:"mm_pompelmoes", n:"Minute Maid Grapefruit", p:"3,70", logo:"mm-pompelmoes.png"},
      {k:"mm_multi", n:"Minute Maid Multivitamin", p:"3,70", logo:"mm-multi.png"},
      {k:"almdudler", n:"Almdudler", p:"3,90", logo:"almdudler.png"},
      {k:"redbull", n:"Red Bull", p:"4,30", logo:"redbull.png"},
      {k:"golden_eagle", n:"Golden Eagle", p:"3,50", logo:"golden-eagle.png"}
    ]},
    {id:"spirits", items:[
      {sub:"rum"},
      {k:"bacardi", n:"Bacardi Carta Blanca", p:"8,50", logo:"bacardi.png"},
      {k:"havana", n:"Havana Club 3 Años", p:"8,70", logo:"havana.png"},
      {k:"don_papa_rum", n:"Don Papa", p:"14,50", logo:"donpapa.png"},
      {sub:"whiskey"},
      {k:"jack", n:"Jack Daniel's", p:"8,80", logo:"jack.png"},
      {k:"jack_honey", n:"Jack Daniel's Honey", p:"8,80", logo:"jack-honey.png"},
      {k:"jack_fire", n:"Jack Daniel's Fire", p:"8,80", logo:"jack-fire.png"},
      {k:"johnnie", n:"Johnnie Walker Red Label", p:"8,50", logo:"johnnie.png"},
      {k:"chivas12", n:"Chivas Regal 12", p:"9,80", logo:"chivas.png"},
      {sub:"vodka"},
      {k:"eristoff", n:"Eristoff", p:"7,90", logo:"eristoff.png"},
      {k:"eristoff_red", n:"Eristoff Red", p:"7,90", logo:"eristoff-red.png"},
      {k:"absolut", n:"Absolut Vodka", p:"8,50", logo:"absolut.png"},
      {k:"ciroc", n:"Cîroc", p:"9,80", logo:"ciroc.png"},
      {k:"belvedere", n:"Belvedere", p:"9,90", logo:"belvedere.png"},
      {k:"grey_goose", n:"Grey Goose", p:"9,90", logo:"greygoose.png"},
      {sub:"gin"},
      {k:"gordons", n:"Gordon's Gin", p:"8,50", logo:"gordons.png"},
      {k:"hendricks", n:"Hendrick's", p:"8,90", logo:"hendricks.png"},
      {k:"gin_mare", n:"Gin Mare", p:"9,20", logo:"ginmare.png"},
      {k:"copperhead", n:"Copperhead", p:"9,30", logo:"copperhead.png"},
      {k:"monkey47", n:"Monkey 47", p:"11,60", logo:"monkey47.png"}
    ]}
  ],

  /* ordre d'ajout des sections partagées (depuis desserts-data.js) */
  sharedTail: ["hotdrinks", "specialcoffee", "digestif"],

  i18n: {
    fr:{
      hero:{ lead:"Commencez la soirée comme il se doit…", al:"…avec le cocktail parfait." },
      web:"antikaresto.com",
      sections:{
        apero:{s:"Pour ouvrir", t:"Apéro"},
        cocktails:{s:"Signature & classiques", t:"Cocktails"},
        wine:{s:"Blanc · Rouge · Rosé", t:"Vins"},
        bubbles:{s:"Prosecco & champagne", t:"Bulles"},
        beer:{s:"Pression & bouteille", t:"Bières"},
        soft:{s:"Sans alcool", t:"Softs"},
        spirits:{s:"Rhum · Whisky · Vodka · Gin", t:"Spiritueux"}
      },
      subs:{signature:"Signature", house:"Coups de cœur maison", classics:"Classiques", mule:"Mule", mocktails:"Mocktails", champagne:"Champagne", rum:"Rhum", whiskey:"Whisky", vodka:"Vodka", gin:"Gin"},
      labels:{glass:"Verre", q:"1/4 L", h:"1/2 L", bottle:"Bouteille", half375:"1/2 bouteille · 37,5 cl", bottle75:"Bouteille · 75 cl"},
      names:{porto:"Porto Blanc / Rouge", wine_house:"Sélection maison", wine_quality:"Vins de qualité sélectionnés", mm_appel:"Minute Maid Pomme", mm_appel_kers:"Minute Maid Pomme-Cerise", mm_pompelmoes:"Minute Maid Pamplemousse", mm_multi:"Minute Maid Multivitaminé"},
      desc:{antika_sunset:"Cîroc · fruit de la passion · citron vert · sirop de vanille · prosecco", disaronno_mule:"Liqueur", dominican_mule:"Rhum", london_mule:"Gin", mexican_mule:"Tequila", fire_mule:"Whisky"}
    },
    nl:{
      hero:{ lead:"Start de avond goed…", al:"…met de perfecte cocktail." },
      web:"antikaresto.com",
      sections:{
        apero:{s:"Om te openen", t:"Apéro"},
        cocktails:{s:"Signature & klassiekers", t:"Cocktails"},
        wine:{s:"Wit · Rood · Rosé", t:"Wijnen"},
        bubbles:{s:"Prosecco & champagne", t:"Bubbels"},
        beer:{s:"Van 't vat & fles", t:"Bieren"},
        soft:{s:"Fris", t:"Frisdrank"},
        spirits:{s:"Rum · Whisky · Vodka · Gin", t:"Sterke drank"}
      },
      subs:{signature:"Signature", house:"Huisfavorieten", classics:"Klassiekers", mule:"Mule", mocktails:"Mocktails", champagne:"Champagne", rum:"Rum", whiskey:"Whisky", vodka:"Vodka", gin:"Gin"},
      labels:{glass:"Glas", q:"1/4 L", h:"1/2 L", bottle:"Fles", half375:"Halve fles · 37,5 cl", bottle75:"Fles · 75 cl"},
      names:{porto:"Porto Wit / Rood", wine_house:"Selectie van het huis", wine_quality:"Geselecteerde kwaliteitswijnen", mm_appel:"Minute Maid Appel", mm_appel_kers:"Minute Maid Appel-Kers", mm_pompelmoes:"Minute Maid Pompelmoes", mm_multi:"Minute Maid Multivitamine"},
      desc:{antika_sunset:"Cîroc · passievrucht · limoen · vanillesiroop · prosecco", disaronno_mule:"Likeur", dominican_mule:"Rum", london_mule:"Gin", mexican_mule:"Tequila", fire_mule:"Whisky"}
    },
    en:{
      hero:{ lead:"Start the evening right…", al:"…with the perfect cocktail." },
      web:"antikaresto.com",
      sections:{
        apero:{s:"To open", t:"Apéro"},
        cocktails:{s:"Signature & classics", t:"Cocktails"},
        wine:{s:"White · Red · Rosé", t:"Wines"},
        bubbles:{s:"Prosecco & champagne", t:"Bubbles"},
        beer:{s:"Draft & bottle", t:"Beers"},
        soft:{s:"Soft drinks", t:"Soft Drinks"},
        spirits:{s:"Rum · Whisky · Vodka · Gin", t:"Spirits"}
      },
      subs:{signature:"Signature", house:"House favorites", classics:"Classics", mule:"Mule", mocktails:"Mocktails", champagne:"Champagne", rum:"Rum", whiskey:"Whiskey", vodka:"Vodka", gin:"Gin"},
      labels:{glass:"Glass", q:"1/4 L", h:"1/2 L", bottle:"Bottle", half375:"Half bottle · 37.5 cl", bottle75:"Bottle · 75 cl"},
      names:{porto:"Port White / Red", wine_house:"House selection", wine_quality:"Selected quality wines"},
      desc:{antika_sunset:"Cîroc · passion fruit · lime · vanilla syrup · prosecco", disaronno_mule:"Liqueur", dominican_mule:"Rum", london_mule:"Gin", mexican_mule:"Tequila", fire_mule:"Whiskey"}
    },
    al:{
      hero:{ lead:"Filloni mbrëmjen si duhet…", al:"…me koktejin perfekt." },
      web:"antikaresto.com",
      sections:{
        apero:{s:"Për të hapur", t:"Apéro"},
        cocktails:{s:"Signature & klasikë", t:"Kokteje"},
        wine:{s:"I bardhë · I kuq · Rosé", t:"Verëra"},
        bubbles:{s:"Prosecco & shampanjë", t:"Të gazuara"},
        beer:{s:"Draft & shishe", t:"Birra"},
        soft:{s:"Pa alkool", t:"Pije freskuese"},
        spirits:{s:"Rum · Whisky · Vodka · Gin", t:"Pije alkoolike"}
      },
      subs:{signature:"Signature", house:"Të preferuarat e shtëpisë", classics:"Klasikë", mule:"Mule", mocktails:"Mocktails", champagne:"Shampanjë", rum:"Rum", whiskey:"Whisky", vodka:"Vodka", gin:"Gin"},
      labels:{glass:"Gotë", q:"1/4 L", h:"1/2 L", bottle:"Shishe", half375:"Gjysmë shishe · 37,5 cl", bottle75:"Shishe · 75 cl"},
      names:{porto:"Porto i bardhë / i kuq", wine_house:"Përzgjedhja e shtëpisë", wine_quality:"Verëra cilësore të përzgjedhura", mm_appel:"Minute Maid Mollë", mm_appel_kers:"Minute Maid Mollë-Qershi", mm_pompelmoes:"Minute Maid Grejpfrut", mm_multi:"Minute Maid Multivitaminë"},
      desc:{antika_sunset:"Cîroc · fruta pasioni · limon jeshil · shurup vanilje · prosecco", disaronno_mule:"Liker", dominican_mule:"Rum", london_mule:"Gin", mexican_mule:"Tekila", fire_mule:"Whisky"}
    }
  }
};
