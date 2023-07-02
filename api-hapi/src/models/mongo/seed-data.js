const currentDate = new Date();
function getRandomDateFromLastWeek() {
  const lastWeekDate = new Date(
    currentDate.getTime() - Math.random() * 7 * 24 * 60 * 60 * 1000
  );
  return lastWeekDate.toISOString();
}

export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
      admin: {
        firstName: "admin",
        lastName: "admin",
        email: "admin@simpson.com",
        password: "admin",
        isAdmin: true,
        createdAt: getRandomDateFromLastWeek()
      },
      lisa: {
        firstName: "Lisa",
        lastName: "Simpson",
        email: "lisa@simpson.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
      margaret: {
        firstName: "Margaret",
        lastName: "Johnson",
        email: "margaret@example.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
      john: {
        firstName: "John",
        lastName: "Smith",
        email: "john@example.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
      sarah: {
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah@example.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
      alex: {
        firstName: "Alex",
        lastName: "Brown",
        email: "alex@example.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
      emma: {
        firstName: "Emma",
        lastName: "Davis",
        email: "emma@example.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
      david: {
        firstName: "David",
        lastName: "Wilson",
        email: "david@example.com",
        password: "secret",
        createdAt: getRandomDateFromLastWeek()
      },
    },
    pois: {
      _model: "Poi",
      regensburg: {
        name: "Regensburg",
        category: "River",
        img: [],
        userid: "->users.bart",
        createdAt: getRandomDateFromLastWeek()
      },
      munich: {
        name: "Munich",
        category: "River",
        img: [],
        userid: "->users.lisa",
        createdAt: getRandomDateFromLastWeek()
      },
      ammersee: {
        name: "Ammersee",
        category: "Lake",
        img: [],
        userid: "->users.homer",
        createdAt: getRandomDateFromLastWeek()
      },
      balticSea: {
        name: "Baltic Sea",
        category: "Sea",
        img: [],
        userid: "->users.admin",
        createdAt: getRandomDateFromLastWeek()
      },
      englishPond: {
        name: "English Pond",
        category: "Pond",
        img: [],
        userid: "->users.marge",
        createdAt: getRandomDateFromLastWeek()
      },
      rhineRiver: {
        name: "Rhine River",
        category: "River",
        img: [],
        userid: "->users.bart",
        createdAt: getRandomDateFromLastWeek()
      },
      neuschwanstein: {
        name: "Neuschwanstein Castle",
        category: "River",
        img: [],
        userid: "->users.lisa",
        createdAt: getRandomDateFromLastWeek()
      },
      berlin: {
        name: "Berlin",
        category: "Lake",
        img: [],
        userid: "->users.bart",
        createdAt: getRandomDateFromLastWeek()
      },
      zugspitze: {
        name: "Zugspitze",
        category: "River",
        img: [],
        userid: "->users.lisa",
        createdAt: getRandomDateFromLastWeek()
      },
      bodensee: {
        name: "Lake Constance",
        category: "Lake",
        img: [],
        userid: "->users.homer",
        createdAt: getRandomDateFromLastWeek()
      },
      norwegianFjords: {
        name: "Norwegian Fjords",
        category: "Sea",
        img: [],
        userid: "->users.admin",
        createdAt: getRandomDateFromLastWeek()
      },
      blackForest: {
        name: "Black Forest",
        category: "River",
        img: [],
        userid: "->users.marge",
        createdAt: getRandomDateFromLastWeek()
      },
      cologneCathedral: {
        name: "Cologne Cathedral",
        category: "River",
        img: [],
        userid: "->users.homer",
        createdAt: getRandomDateFromLastWeek()
      },
      rhineFalls: {
        name: "Rhine Falls",
        category: "River",
        img: [],
        userid: "->users.bart",
        createdAt: getRandomDateFromLastWeek()
      },
      starnbergerSee: {
        name: "Starnberger See",
        category: "Lake",
        img: [],
        userid: "->users.lisa",
        createdAt: getRandomDateFromLastWeek()
      },
      chiemsee: {
        name: "Chiemsee",
        category: "Lake",
        img: [],
        userid: "->users.homer",
        createdAt: getRandomDateFromLastWeek()
      },
      bodden: {
        name: "Bodden",
        category: "Sea",
        img: [],
        userid: "->users.admin",
        createdAt: getRandomDateFromLastWeek()
      },
      tegernsee: {
        name: "Tegernsee",
        category: "Lake",
        img: [],
        userid: "->users.marge",
        createdAt: getRandomDateFromLastWeek()
      },
      ammer: {
        name: "Ammer",
        category: "River",
        img: [],
        userid: "->users.bart",
        createdAt: getRandomDateFromLastWeek()
      },
      constance: {
        name: "Lake Constance",
        category: "Lake",
        img: [],
        userid: "->users.lisa",
        createdAt: getRandomDateFromLastWeek()
      },
      fuschlsee: {
        name: "Fuschlsee",
        category: "Lake",
        img: [],
        userid: "->users.homer",
        createdAt: getRandomDateFromLastWeek()
      },
      eiffelTower: {
        name: "Eiffel Tower",
        category: "River",
        img: [],
        userid: "->users.margaret",
        createdAt: getRandomDateFromLastWeek()
      },
      statueOfLiberty: {
        name: "Statue of Liberty",
        category: "Sea",
        img: [],
        userid: "->users.margaret",
        createdAt: getRandomDateFromLastWeek()
      },
      greatWallOfChina: {
        name: "Great Wall of China",
        category: "River",
        img: [],
        userid: "->users.margaret",
        createdAt: getRandomDateFromLastWeek()
      },
      johnLake: {
        name: "Lake Geneva",
        category: "Lake",
        img: [],
        userid: "->users.john",
        createdAt: getRandomDateFromLastWeek()
        },
      johnRiver: {
        name: "Danube River",
        category: "River",
        img: [],
        userid: "->users.john",
        createdAt: getRandomDateFromLastWeek()
        },
      johnSea: {
        name: "Mediterranean Sea",
        category: "Sea",
        img: [],
        userid: "->users.john",
        createdAt: getRandomDateFromLastWeek()
        },
      sarahLake: {
        name: "Plitvice Lakes",
        category: "Lake",
        img: [],
        userid: "->users.sarah",
        createdAt: getRandomDateFromLastWeek()
        },
      sarahRiver: {
        name: "Soca River",
        category: "River",
        img: [],
        userid: "->users.sarah",
        createdAt: getRandomDateFromLastWeek()
        },
      sarahSea: {
        name: "Adriatic Sea",
        category: "Sea",
        img: [],
        userid: "->users.sarah",
        createdAt: getRandomDateFromLastWeek()
        },
      alexLake: {
        name: "Lake Como",
        category: "Lake",
        img: [],
        userid: "->users.alex",
        createdAt: getRandomDateFromLastWeek()
        },
      alexRiver: {
        name: "Rhine River",
        category: "River",
        img: [],
        userid: "->users.alex",
        createdAt: getRandomDateFromLastWeek()
        },
      alexSea: {
        name: "Baltic Sea",
        category: "Sea",
        img: [],
        userid: "->users.alex",
        createdAt: getRandomDateFromLastWeek()
        },
      emmaLake: {
        name: "Lake Bled",
        category: "Lake",
        img: [],
        userid: "->users.emma",
        createdAt: getRandomDateFromLastWeek()
        },
      emmaRiver: {
        name: "Seine River",
        category: "River",
        img: [],
        userid: "->users.emma",
        createdAt: getRandomDateFromLastWeek()
        },
      emmaSea: {
        name: "Atlantic Ocean",
        category: "Sea",
        img: [],
        userid: "->users.emma",
        createdAt: getRandomDateFromLastWeek()
        },
      davidLake: {
        name: "Loch Ness",
        category: "Lake",
        img: [],
        userid: "->users.david",
        createdAt: getRandomDateFromLastWeek()
        },
      davidRiver: {
        name: "Thames River",
        category: "River",
        img: [],
        userid: "->users.david",
        createdAt: getRandomDateFromLastWeek()
        },
      davidSea: {
        name: "North Sea",
        category: "Sea",
        img: [],
        userid: "->users.david",
        createdAt: getRandomDateFromLastWeek()
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
      },
      details_22: {
        description: "The Eiffel Tower is an iconic landmark located in Paris, France. It is a wrought-iron lattice tower that stands at a height of 324 meters. The tower offers panoramic views of the city and is visited by millions of tourists each year. Visitors can take elevators or climb the stairs to reach the top and enjoy the breathtaking scenery.",
        latitude: 48.8583701,
        longitude: 2.2944813,
        poiid: "->pois.eiffelTower"
      },
      details_23: {
        description: "The Statue of Liberty is a colossal neoclassical sculpture located on Liberty Island in New York Harbor, United States. It was a gift from France to the United States and is a symbol of freedom and democracy. Visitors can take a ferry to the island and admire the statue up close. There is also a museum inside the pedestal that provides historical information about the statue's construction and significance.",
        latitude: 40.6892494,
        longitude: -74.0445004,
        poiid: "->pois.statueOfLiberty"
      },
      details_24: {
        description: "The Great Wall of China is an ancient fortification that stretches across the northern part of China. It is one of the most famous landmarks in the world and a UNESCO World Heritage Site. The wall was built to protect China from invasions and spans over 13,000 miles. Visitors can explore different sections of the wall, hike along its rugged paths, and learn about its historical significance.",
        latitude: 40.431908,
        longitude: 116.570374,
        poiid: "->pois.greatWallOfChina"
      },
      details_25: {
        description: "Lake Geneva is a stunning lake located on the border between Switzerland and France. Surrounded by the Alps and dotted with charming towns, it offers breathtaking views and various recreational activities, such as boating and lakeside walks.",
        latitude: 46.4090,
        longitude: 6.9117,
        poiid: "->pois.johnLake"
      },
      details_26: {
        description: "The Danube River is Europe's second-longest river, flowing through multiple countries including Germany, Austria, and Hungary. It is known for its scenic beauty, historic cities along its banks, and river cruises that offer a unique way to explore the region.",
        latitude: 48.2082,
        longitude: 16.3738,
        poiid: "->pois.johnRiver"
        },
      details_27: {
        description: "The Mediterranean Sea is a popular sea located between Europe, Africa, and Asia. With its crystal-clear waters, stunning beaches, and rich cultural heritage, it attracts millions of visitors each year who enjoy swimming, sailing, and exploring coastal towns.",
        latitude: 35.9579,
        longitude: 14.3836,
        poiid: "->pois.johnSea"
        },
      details_28: {
        description: "The Plitvice Lakes National Park in Croatia is a UNESCO World Heritage Site renowned for its cascading lakes, waterfalls, and lush greenery. Visitors can explore the park through a series of wooden footbridges and hiking trails, immersing themselves in the natural beauty of the area.",
        latitude: 44.8654,
        longitude: 15.5838,
        poiid: "->pois.sarahLake"
        },
      details_29: {
        description: "The Soca River in Slovenia is known for its stunning turquoise color and pristine surroundings. It offers opportunities for various water activities, including kayaking, rafting, and swimming. The river flows through picturesque valleys and is a paradise for nature lovers.",
        latitude: 46.3344,
        longitude: 13.7419,
        poiid: "->pois.sarahRiver"
        },
      details_30: {
        description: "The Adriatic Sea is a beautiful body of water located between Italy and the Balkan Peninsula. It is known for its stunning coastline, crystal-clear waters, and charming coastal towns such as Dubrovnik and Split, offering visitors a mix of natural beauty and cultural heritage.",
        latitude: 42.6507,
        longitude: 18.0944,
        poiid: "->pois.sarahSea"
        },
      details_31: {
        description: "Lake Como is a picturesque lake situated in the Italian Alps. Surrounded by mountains and dotted with charming villages, it offers a serene and romantic setting. Visitors can enjoy boat tours, waterfront promenades, and explore the elegant villas that line its shores.",
        latitude: 45.9644,
        longitude: 9.2188,
        poiid: "->pois.alexLake"
        },
      details_32: {
        description: "The Rhine River is one of Europe's major rivers, flowing through several countries including Switzerland, Germany, and the Netherlands. It is famous for its scenic landscapes, historic castles, and vineyards along its banks. River cruises are a popular way to experience the beauty of the Rhine.",
        latitude: 50.5503,
        longitude: 7.0547,
        poiid: "->pois.alexRiver"
        },
      details_33: {
        description: "The Baltic Sea is a brackish sea located between the countries of Scandinavia, the Baltic states, and Germany. It offers a unique blend of sandy beaches, rugged coastlines, and charming seaside resorts. Visitors can enjoy sailing, fishing, and exploring the picturesque coastal towns.",
        latitude: 56.9496,
        longitude: 21.1334,
        poiid: "->pois.alexSea"
        },
      details_34: {
        description: "Lake Bled is a stunning glacial lake nestled in the Julian Alps of Slovenia. With its crystal-clear waters, an island with a church, and a medieval castle perched on a cliff, it is a fairytale-like destination. Visitors can explore the lake by rowing traditional wooden boats known as pletnas.",
        latitude: 46.3676,
        longitude: 14.1140,
        poiid: "->pois.emmaLake"
        },
      details_35: {
        description: "The Seine River flows through the heart of Paris, France, and is an iconic symbol of the city. It is lined with famous landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum. Taking a boat cruise along the Seine is a popular way to experience the beauty of Paris.",
        latitude: 48.8599,
        longitude: 2.3471,
        poiid: "->pois.emmaRiver"
        },
      details_36: {
        description: "The Atlantic Ocean borders the western coast of Europe, offering vast expanses of water, stunning sunsets, and powerful waves. It is a playground for surfers, a habitat for diverse marine life, and a backdrop for coastal adventures and relaxation.",
        latitude: 48.2951,
        longitude: -14.0906,
        poiid: "->pois.emmaSea"
        },
      details_37: {
        description: "Loch Ness is a large freshwater lake located in the Scottish Highlands. It is famous for the legendary Loch Ness Monster, and visitors flock to the area in hopes of catching a glimpse of the mythical creature. Apart from its mystery, Loch Ness offers breathtaking scenery and opportunities for boating and hiking.",
        latitude: 57.3229,
        longitude: -4.4244,
        poiid: "->pois.davidLake"
        },
      details_38: {
        description: "The Thames River is the iconic river that flows through London, England. It is a historical and cultural landmark, lined with famous landmarks such as the Tower Bridge, the Houses of Parliament, and the London Eye. Taking a river cruise along the Thames provides a unique perspective of the city.",
        latitude: 51.5074,
        longitude: -0.1278,
        poiid: "->pois.davidRiver"
        },
      details_39: {
        description: "The North Sea is a part of the Atlantic Ocean located between the coasts of northern Europe. It is known for its dramatic coastline, sandy beaches, and rich maritime history. Visitors can enjoy coastal walks, explore fishing villages, and indulge in various water sports.",
        latitude: 55.4304,
        longitude: 7.3434,
        poiid: "->pois.davidSea"
        }
    }
  };
  