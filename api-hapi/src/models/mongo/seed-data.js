export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      },
      admin: {
        firstName: "admin",
        lastName: "admin",
        email: "admin@simpson.com",
        password: "admin",
        isAdmin: true
      },
      lisa: {
        firstName: "Lisa",
        lastName: "Simpson",
        email: "lisa@simpson.com",
        password: "secret"
      }
    },
    pois: {
      _model: "Poi",
      regensburg: {
        name: "Regensburg",
        category: "River",
        img: [],
        userid: "->users.bart"
      },
      munich: {
        name: "Munich",
        category: "River",
        img: [],
        userid: "->users.lisa"
      },
      ammersee: {
        name: "Ammersee",
        category: "Lake",
        img: [],
        userid: "->users.homer"
      },
      balticSea: {
        name: "Baltic Sea",
        category: "Sea",
        img: [],
        userid: "->users.admin"
      },
      englishPond: {
        name: "English Pond",
        category: "Pond",
        img: [],
        userid: "->users.marge"
      },
      rhineRiver: {
        name: "Rhine River",
        category: "River",
        img: [],
        userid: "->users.bart"
      },
      neuschwanstein: {
        name: "Neuschwanstein Castle",
        category: "River",
        img: [],
        userid: "->users.lisa"
      },
      berlin: {
        name: "Berlin",
        category: "Lake",
        img: [],
        userid: "->users.bart"
      },
      zugspitze: {
        name: "Zugspitze",
        category: "River",
        img: [],
        userid: "->users.lisa"
      },
      bodensee: {
        name: "Lake Constance",
        category: "Lake",
        img: [],
        userid: "->users.homer"
      },
      norwegianFjords: {
        name: "Norwegian Fjords",
        category: "Sea",
        img: [],
        userid: "->users.admin"
      },
      blackForest: {
        name: "Black Forest",
        category: "River",
        img: [],
        userid: "->users.marge"
      },
      cologneCathedral: {
        name: "Cologne Cathedral",
        category: "River",
        img: [],
        userid: "->users.homer"
      },
      rhineFalls: {
        name: "Rhine Falls",
        category: "River",
        img: [],
        userid: "->users.bart"
      },
      starnbergerSee: {
        name: "Starnberger See",
        category: "Lake",
        img: [],
        userid: "->users.lisa"
      },
      chiemsee: {
        name: "Chiemsee",
        category: "Lake",
        img: [],
        userid: "->users.homer"
      },
      bodden: {
        name: "Bodden",
        category: "Sea",
        img: [],
        userid: "->users.admin"
      },
      tegernsee: {
        name: "Tegernsee",
        category: "Lake",
        img: [],
        userid: "->users.marge"
      },
      ammer: {
        name: "Ammer",
        category: "River",
        img: [],
        userid: "->users.bart"
      },
      constance: {
        name: "Lake Constance",
        category: "Lake",
        img: [],
        userid: "->users.lisa"
      },
      fuschlsee: {
        name: "Fuschlsee",
        category: "Lake",
        img: [],
        userid: "->users.homer"
      }
    },
    details: {
      _model: "Details",
      details_1: {
        description: "Die bayerische Stadt Regensburg liegt an der Donau im Südosten Deutschlands und ist für ihr gut erhaltenes mittelalterliches Zentrum bekannt. Eines ihrer Wahrzeichen ist die Steinerne Brücke aus dem 12. Jh. Sie ist 310 m lang, hat 16 Bögen und verbindet den Stadtteil Stadtamhof mit der Altstadt. Ein weiteres wichtiges Wahrzeichen ist der gotische Dom aus dem 13. Jh. mit seinen Zwillingstürmen. Hier sind die Regensburger Domspatzen zu Hause. In der Walhalla, einer im Stil des Parthenon erbauten Gedenkstätte östlich der Stadt, werden bedeutende deutsche Persönlichkeiten geehrt.",
        latitude: 49.0134297,
        longitude: 12.1016236,
        poiid: "->pois.regensburg"
      },
      details_2: {
        description: "Munich, the capital of Bavaria, is a vibrant city known for its rich history, culture, and beautiful architecture. It is home to iconic landmarks such as the Marienplatz square with its famous Glockenspiel, the Nymphenburg Palace with its stunning gardens, and the Frauenkirche with its distinctive twin towers. Munich is also renowned for its beer gardens, traditional Bavarian cuisine, and the annual Oktoberfest celebration. Visitors can explore museums, art galleries, and enjoy the lively atmosphere of this cosmopolitan city.",
        latitude: 48.1351253,
        longitude: 11.5819806,
        poiid: "->pois.munich"
      },
      details_3: {
        description: "Ammersee is a picturesque lake located in Bavaria, Germany. It is known for its crystal-clear waters and scenic surroundings. Visitors can enjoy various water activities such as swimming, boating, and fishing. The lake is surrounded by charming towns and offers beautiful hiking trails along its shores. Ammersee is a popular destination for both locals and tourists looking for relaxation and outdoor recreation.",
        latitude: 47.9768823,
        longitude: 11.1549247,
        poiid: "->pois.ammersee"
      },
      details_4: {
        description: "The Baltic Sea is a brackish sea located in Northern Europe, bordered by several countries including Germany, Sweden, and Denmark. It is known for its stunning coastal landscapes, sandy beaches, and charming seaside towns. The Baltic Sea offers a range of recreational activities such as swimming, sailing, and beachcombing. It is also home to unique marine life and attracts nature enthusiasts and birdwatchers.",
        latitude: 55.4331205,
        longitude: 14.4729517,
        poiid: "->pois.balticSea"
      },
      details_5: {
        description: "English Pond is a tranquil pond nestled in the countryside of England. Surrounded by lush greenery, it provides a serene escape from the bustling city life. Visitors can enjoy peaceful walks along the pond's edge, observe wildlife, and appreciate the natural beauty of the area. English Pond is a perfect spot for relaxation and connecting with nature.",
        latitude: 52.237049,
        longitude: -0.8481385,
        poiid: "->pois.englishPond"
      },
      details_6: {
        description: "The Rhine River is one of the major waterways in Europe, flowing through multiple countries including Germany, Switzerland, and the Netherlands. It is known for its scenic beauty, historic castles, and vineyards along its banks. The Rhine River offers river cruises, picturesque cycling routes, and opportunities for leisurely walks. It is a popular destination for exploring charming riverside towns and enjoying the breathtaking landscapes.",
        latitude: 47.6671607,
        longitude: 9.4636481,
        poiid: "->pois.rhineRiver"
      },
      details_7: {
        description: "Neuschwanstein Castle is a fairytale-like castle located in Bavaria, Germany. It is known for its romantic architecture and picturesque setting in the Bavarian Alps. The castle was commissioned by King Ludwig II and inspired the famous Disney castle. Visitors can explore the castle's stunning interior, enjoy panoramic views of the surrounding landscapes, and immerse themselves in the enchanting atmosphere of this iconic landmark.",
        latitude: 47.5575748,
        longitude: 10.7498002,
        poiid: "->pois.neuschwanstein"
      },
      details_8: {
        description: "Berlin, the capital of Germany, is a vibrant metropolis with a rich history and cultural scene. It is known for its iconic landmarks such as the Brandenburg Gate, the Berlin Wall, and the Reichstag building. The city offers a diverse range of attractions, including world-class museums, art galleries, theaters, and vibrant nightlife. Visitors can explore the historic neighborhoods, enjoy shopping and dining experiences, and immerse themselves in the multicultural atmosphere of this dynamic city.",
        latitude: 52.520008,
        longitude: 13.404954,
        poiid: "->pois.berlin"
      },
      details_9: {
        description: "Zugspitze is the highest peak in Germany, located in the Bavarian Alps near the Austrian border. It offers breathtaking panoramic views of the surrounding mountains and valleys. Visitors can reach the summit by cable car or hike to enjoy the stunning vistas. Zugspitze is a popular destination for skiing and snowboarding in winter, and hiking and mountaineering in summer. It is a must-visit for outdoor enthusiasts and nature lovers.",
        latitude: 47.4215272,
        longitude: 10.9859133,
        poiid: "->pois.zugspitze"
      },
      details_10: {
        description: "Lake Constance, also known as Bodensee, is a large freshwater lake situated on the borders of Germany, Switzerland, and Austria. It is renowned for its scenic beauty, charming lakeside towns, and recreational opportunities. Visitors can enjoy swimming, sailing, cycling along the lakeshore, and exploring historic attractions. The lake is also surrounded by vineyards and offers picturesque landscapes that attract artists and photographers.",
        latitude: 47.5854943,
        longitude: 9.7046782,
        poiid: "->pois.bodensee"
      },
      details_11: {
        description: "The Norwegian Fjords are a stunning natural wonder located along the coast of Norway. These deep, narrow inlets are surrounded by majestic mountains, cascading waterfalls, and picturesque villages. Visitors can experience the fjords by taking scenic cruises, hiking along the cliffs, or exploring the charming coastal towns. The Norwegian Fjords offer breathtaking views and opportunities for outdoor adventures.",
        latitude: 61.0481177,
        longitude: 6.9298197,
        poiid: "->pois.norwegianFjords"
      },
      details_12: {
        description: "The Black Forest, or Schwarzwald, is a mountainous region in southwestern Germany. It is known for its dense forests, picturesque villages, and charming half-timbered houses. The Black Forest offers numerous hiking and biking trails, scenic drives, and opportunities to explore nature. Visitors can also enjoy traditional Black Forest cuisine, which includes dishes like Black Forest ham and Black Forest cake.",
        latitude: 48.408889,
        longitude: 8.004444,
        poiid: "->pois.blackForest"
      },
      details_13: {
        description: "Cologne Cathedral, or Kölner Dom, is a Gothic masterpiece and one of the most iconic landmarks in Germany. Located in the city of Cologne, it is known for its impressive architecture, intricate stained glass windows, and towering spires. Visitors can climb the cathedral's steps for panoramic views of the city, explore its magnificent interior, and learn about its history and significance.",
        latitude: 50.9412787,
        longitude: 6.9582818,
        poiid: "->pois.cologneCathedral"
      },
      details_14: {
        description: "Rhine Falls, located near Schaffhausen in Switzerland, is the largest waterfall in Europe. The falls are a magnificent sight, with a width of 150 meters and a height of 23 meters. Visitors can experience the power of the falls up close by taking a boat ride or walking on the viewing platforms. The surrounding area offers hiking trails, picnic spots, and viewpoints to admire the natural beauty of the Rhine Falls.",
        latitude: 47.6778081,
        longitude: 8.6158215,
        poiid: "->pois.rhineFalls"
      },
      details_15: {
        description: "Starnberger See is a beautiful lake located in Bavaria, Germany. It is known for its crystal-clear waters, picturesque landscapes, and charming lakeside towns. Visitors can enjoy swimming, sailing, and sunbathing on the lake's shores. The surrounding area offers hiking and cycling trails, as well as opportunities for relaxation and leisurely boat trips. Starnberger See is a popular destination for both locals and tourists seeking tranquility and natural beauty.",
        latitude: 47.9328758,
        longitude: 11.3417079,
        poiid: "->pois.starnbergerSee"
      },
      details_16: {
        description: "Chiemsee is the largest lake in Bavaria, Germany, often referred to as the 'Bavarian Sea.' It is known for its crystal-clear waters, scenic islands, and picturesque surroundings. Visitors can explore the Herrenchiemsee Palace on the island of Herreninsel, modeled after the Palace of Versailles, or enjoy the tranquility of the Fraueninsel. Chiemsee offers a range of water activities, hiking trails, and relaxation options in a breathtaking natural setting.",
        latitude: 47.8564244,
        longitude: 12.3886203,
        poiid: "->pois.chiemsee"
      },
      details_17: {
        description: "Bodden is a coastal lagoon located in the Baltic Sea region of Germany. It is known for its diverse wildlife, including various bird species and marine life. Visitors can explore the tranquil waters by boat or kayak, observe migratory birds, and enjoy the peacefulness of the surrounding nature. Bodden is a haven for nature lovers and a popular destination for birdwatching and eco-tourism.",
        latitude: 54.2932951,
        longitude: 13.0890773,
        poiid: "->pois.bodden"
      },
      details_18: {
        description: "Tegernsee is a picturesque lake nestled in the Bavarian Alps, Germany. It is known for its crystal-clear waters, scenic mountain views, and charming lakeside villages. Visitors can enjoy swimming, sailing, and paddleboarding on the lake, as well as hiking or biking along the scenic trails that surround it. Tegernsee is also famous for its traditional Bavarian beer, which can be enjoyed at local breweries and beer gardens.",
        latitude: 47.7120945,
        longitude: 11.7298654,
        poiid: "->pois.tegernsee"
      },
      details_19: {
        description: "Ammer is a river that flows through Bavaria, Germany. It is known for its picturesque landscapes, meandering course, and tranquil atmosphere. Visitors can enjoy leisurely walks along the riverbanks, go fishing, or simply relax in the peaceful surroundings. The Ammer river offers a serene escape into nature and provides opportunities for outdoor activities and wildlife observation.",
        latitude: 47.9489934,
        longitude: 11.1545792,
        poiid: "->pois.ammer"
      },
      details_20: {
        description: "Lake Constance, also known as Bodensee, is a large freshwater lake situated on the borders of Germany, Switzerland, and Austria. It is renowned for its scenic beauty, charming lakeside towns, and recreational opportunities. Visitors can enjoy swimming, sailing, cycling along the lakeshore, and exploring historic attractions. The lake is also surrounded by vineyards and offers picturesque landscapes that attract artists and photographers.",
        latitude: 47.5680004,
        longitude: 9.2920476,
        poiid: "->pois.constance"
      },
      details_21: {
        description: "Fuschlsee is a picturesque lake located in the Austrian state of Salzburg. Surrounded by mountains and forests, it offers a tranquil retreat for nature lovers. Visitors can enjoy swimming, fishing, and boating on the lake, or explore the scenic hiking trails that wind through the surrounding countryside. Fuschlsee is also known for its luxury hotels and spas, providing a perfect combination of relaxation and natural beauty.",
        latitude: 47.785833,
        longitude: 13.284167,
        poiid: "->pois.fuschlsee"
      }
    }
  };
  