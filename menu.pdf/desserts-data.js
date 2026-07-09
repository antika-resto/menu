/* ============================================================
   SOURCE UNIQUE — Desserts & Digestifs
   Utilisé par dessert.html ET par la fin de menu.html.
   Modifier un prix / un nom ICI se répercute aux deux endroits.

   Noms « maison » (Lady Blanche…) et marques (Baileys…) = identiques
   dans toutes les langues (voir n:"…"). Seuls les libellés génériques
   sont traduits via i18n[lang].names.
   ============================================================ */
window.DESSERTS = {
  sections: [
    {id:"hotdrinks", items:[
      {k:"coffee", n:"Coffee", p:"3,20"},
      {k:"macchiato", n:"Macchiato", p:"3,80"},
      {k:"cappuccino", n:"Cappuccino", p:"3,90"},
      {k:"espresso", n:"Espresso", p:"3,00"},
      {k:"double_espresso", n:"Double espresso", p:"4,20"},
      {k:"albanian_coffee", n:"Albanian coffee", p:"3,20"},
      {k:"mint_tea", n:"Fresh mint tea", p:"4,00"},
      {k:"tea", n:"Tea", p:"3,00"}
    ]},
    {id:"specialcoffee", items:[
      {k:"irish", n:"Irish Coffee", p:"8,50"},
      {k:"french", n:"French Coffee", p:"8,50"},
      {k:"italian", n:"Italian Coffee", p:"8,50"}
    ]},
    {id:"desserts", items:[
      {k:"panna", n:"Panna Cotta Del Sol", p:"9,00"},
      {k:"dreamisu", n:"Strawberry Dreamisu", p:"7,00"},
      {k:"lady", n:"Lady Blanche", p:"7,00"},
      {k:"flame", n:"Crème de la Flame", p:"11,00"},
      {k:"colonel", n:"The Ice Colonel", p:"10,00"},
      {k:"milkyway", n:"The 3 Milky Way", p:"8,00"},
      {k:"meltdown", n:"Chocolate Meltdown", p:"9,00"},
      {k:"balkan", n:"Artisan Balkan desserts", p:"6,00"},
      {k:"koffiebeleving", n:"Gourmet coffee experience", p:"8,00"}
    ]},
    {id:"digestif", items:[
      {k:"raki", n:"Raki", p:"7,90"},
      {k:"brandy", n:"Brandy", p:"8,20"},
      {k:"amaretto", n:"Amaretto", p:"7,50"},
      {k:"amaretto_velvet", n:"Amaretto Velvet", p:"7,50"},
      {k:"grand_marnier", n:"Grand Marnier", p:"8,50"},
      {k:"baileys", n:"Baileys", p:"7,50"},
      {k:"calvados", n:"Calvados", p:"9,00"},
      {k:"cointreau", n:"Cointreau", p:"7,70"},
      {k:"don_papa", n:"Don Papa", p:"14,50"},
      {k:"limoncello", n:"Limoncello", p:"7,50"},
      {k:"grappa", n:"Grappa", p:"7,90"},
      {k:"jack", n:"Jack Daniel's", p:"8,50"},
      {k:"chivas", n:"Chivas", p:"9,50"},
      {k:"genever", n:"Genever", p:"8,00"},
      {k:"cognac", n:"Cognac", p:"9,50"},
      {k:"sambuca", n:"Sambuca", p:"7,80"}
    ]}
  ],

  i18n: {
    fr:{
      head:{s:"Pour finir en douceur", t:"Dessert & Digestif"},
      sections:{
        hotdrinks:{s:"Café & thé", t:"Boissons chaudes"},
        specialcoffee:{s:"Avec un trait d'alcool", t:"Cafés spéciaux"},
        desserts:{s:"Douceurs maison", t:"Desserts"},
        digestif:{s:"Pour terminer", t:"Digestifs"}
      },
      names:{
        coffee:"Café", albanian_coffee:"Café albanais", mint_tea:"Thé à la menthe fraîche", tea:"Thé",
        balkan:"Desserts balkaniques artisanaux", koffiebeleving:"Café gourmand", genever:"Genièvre"
      }
    },
    nl:{
      head:{s:"Zoet afsluiten", t:"Dessert & Digestief"},
      sections:{
        hotdrinks:{s:"Koffie & thee", t:"Warme dranken"},
        specialcoffee:{s:"Met een shot", t:"Special Coffee"},
        desserts:{s:"Zoete lekkernijen", t:"Desserts"},
        digestif:{s:"Om af te sluiten", t:"Digestieven"}
      },
      names:{
        albanian_coffee:"Albanese koffie", double_espresso:"Dubbele espresso", mint_tea:"Verse muntthee", tea:"Thee",
        balkan:"Ambachtelijke Balkan toetjes", koffiebeleving:"Gourmet koffiebeleving"
      }
    },
    en:{
      head:{s:"A sweet ending", t:"Dessert & Digestif"},
      sections:{
        hotdrinks:{s:"Coffee & tea", t:"Hot Drinks"},
        specialcoffee:{s:"With a shot", t:"Special Coffee"},
        desserts:{s:"Sweet treats", t:"Desserts"},
        digestif:{s:"To finish", t:"Digestifs"}
      },
      names:{}
    },
    al:{
      head:{s:"Për të mbyllur ëmbël", t:"Ëmbëlsira & Digestive"},
      sections:{
        hotdrinks:{s:"Kafe & çaj", t:"Pije të nxehta"},
        specialcoffee:{s:"Me pikë alkooli", t:"Kafe speciale"},
        desserts:{s:"Të ëmbla", t:"Ëmbëlsira"},
        digestif:{s:"Për të mbyllur", t:"Digestive"}
      },
      names:{
        coffee:"Kafe", double_espresso:"Espresso dopio", albanian_coffee:"Kafe shqiptare",
        mint_tea:"Çaj mente i freskët", tea:"Çaj",
        balkan:"Ëmbëlsira artizanale ballkanike", koffiebeleving:"Përvojë kafeje gurme"
      }
    }
  }
};
