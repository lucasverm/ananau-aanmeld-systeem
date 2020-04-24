export class Applicatie {
          id: String;
          achternaam: String;
          voornaam: String;
          email: String;
          straatnaam: String;
          huisnummer: String;
          bus: String;
          gemeente: String;
          postcode: String;
          geboorteDatum: Date;
          geboortePlaats: String;
          nationaliteit: String;
          paspoortNummer: String;
          telefoonNummer: String;
          telefoonnummerNood: String;
          voornaamNood: String;
          achternaamNood: String;
          emailNood: String;
          relatieNood: String;
          allergie: String;
          medischeAandoening: String;
          opleiding: String;
          ervaringVrijwillger: String;
          spaansNiveau: String;
          takenVrijwilliger: String;
          verwachtingenVrijwilliger: String;
          voorstellen: String;
          huidigeStap: Number;

          periodeStageVan: Date;
          periodeStageTot: Date;
          periodeVerblijfVan: Date;
          periodeVerblijfTot: Date;
          aantalWekenSpaans: String;


          static fromJSON(json: any): Applicatie {
                    var item = new Applicatie();
                    item.id = json.id;
                    item.achternaam = json.achternaam;
                    item.voornaam = json.voornaam;
                    item.email = json.email;
                    item.straatnaam = json.straatnaam;
                    item.huisnummer = json.huisnummer;
                    item.bus = json.bus;
                    item.gemeente = json.gemeente;
                    item.postcode = json.postcode;
                    item.geboorteDatum = new Date(json.geboorteDatum);
                    item.geboortePlaats = json.geboortePlaats;
                    item.nationaliteit = json.nationaliteit;
                    item.paspoortNummer = json.paspoortNummer;
                    item.telefoonNummer = json.telefoonNummer;
                    item.telefoonnummerNood = json.telefoonnummerNood;
                    item.voornaamNood = json.voornaamNood;
                    item.achternaamNood = json.achternaamNood;
                    item.emailNood = json.emailNood;
                    item.relatieNood = json.relatieNood;
                    item.allergie = json.allergie;
                    item.medischeAandoening = json.medischeAandoening;
                    item.opleiding = json.opleiding;
                    item.ervaringVrijwillger = json.ervaringVrijwillger;
                    item.spaansNiveau = json.spaansNiveau;
                    item.takenVrijwilliger = json.takenVrijwilliger;
                    item.verwachtingenVrijwilliger = json.verwachtingenVrijwilliger;
                    item.voorstellen = json.voorstellen;
                    item.huidigeStap = json.huidigeStap;
                    item.periodeStageVan  = json.periodeStageVan;
                    item.periodeStageTot = json.periodeStageTot; 
                    item.periodeVerblijfVan = json.periodeVerblijfVan;
                    item.periodeVerblijfTot = json.periodeVerblijfTot;
                    item.aantalWekenSpaans = json.aantalWekenSpaans;
          
                    return item;
          }
}
