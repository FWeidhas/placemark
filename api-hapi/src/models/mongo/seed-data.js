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
      lisa: {
        firstName: "Lisa",
        lastName: "Simpson",
        email: "lisa@simpson.com",
        password: "secret"
      },
      admin: {
        firstName: "admin",
        lastName: "admin",
        email: "admin@simpson.com",
        password: "admin",
        isAdmin: true,
      }
    },
    pois: {
      _model: "Poi",
      regensburg: {
        name: Regensburg,
        category: River,
        img: null,
        userid: "->users.bart"
      }
    },
    details: {
      _model : "Details",
      details_1 : {
        description: "Die bayerische Stadt Regensburg liegt an der Donau im Südosten Deutschlands und ist für ihr gut erhaltenes mittelalterliches Zentrum bekannt. Eines ihrer Wahrzeichen ist die Steinerne Brücke aus dem 12. Jh. Sie ist 310 m lang, hat 16 Bögen und verbindet den Stadtteil Stadtamhof mit der Altstadt. Ein weiteres wichtiges Wahrzeichen ist der gotische Dom aus dem 13. Jh. mit seinen Zwillingstürmen. Hier sind die Regensburger Domspatzen zu Hause. In der Walhalla, einer im Stil des Parthenon erbauten Gedenkstätte östlich der Stadt, werden bedeutende deutsche Persönlichkeiten geehrt.",
        latitude: 49.0134297,
        longitude: 12.1016236,
        poiid: "->pois.regensburg"
      },
    }
  };
  