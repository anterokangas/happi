/**
 * This file contain data that simulates (some) db data 
 * like definition of happenings and groups
 */

 // eslint-disable-next-line
export const happenings = {
    "Vuosijuhla": {
        "title": "TTOT:n 35-vuotisjuhla 30.4.2018",
        "description": "TTOT:n 35-vuotisjuhla",
        "parts": []
    },
    "Lavatanssikurssi": {
        "title": "Lavatanssikurssi 15.10.2018",
        "description": "Fusku, hidas foksi ja rumba"
    },
    "Kevätkonsertti": {
        "title": "TTOT:n Kevätkonsertti 2019 - ilmoita ryhmäsi esiintyjäksi",
        "description": "Tanssiryhmien esiintyminen Sampolassa"
    },
    "Tanssimylly": {
        "title": "Tanssimylly - ilmoittaudu TTOT:n talkoolaiseksi",
        "description": "Nuoriseurat ry:n tanssitapahtuma Tampereella"
    },
    "Lohjan Purpuri": {
        "title": "Lohjan Purpuri - ilmoittaudu TTOT:n esiintyvään ryhmään",
        "description": "SKY:n ja KTNL:n kesäjuhlat 2019"
    },
    
    "Rieväkylän Rimppa": {
        "title": "Rieväkylän Rimppa - SKY:n kesäjuhla 2015",
        "description": "SKY:n ja KTNL:n kesäjuhla Tampereella 2015 - Osallistujan ilmoittautuminen", 
        "activated": true,
        "subtotal": "Välisumma",
        "total": "Kaikki yhteensä",
        "numberName": "Lukumäärä",
        "priceSumName": "yhteensä",
        "parts": [
            {"header": "Henkilötiedot",
                "products": [
                {"name": "Etunimi",
                "type": "text",
                "required": true},
                {"name": "Sukunimi",
                "type": "text",
                "required": true},
                {"name": "Puhelin",
                "type": "text",
                "required": true},
                {"name": "Sähköposti",
                "type": "email",
                "required": true},
                ]
            }, 
            {"header": "Henkilötiedot2",
                "products": [
                {"name": "Etunimi",
                "type": "text",
                "required": true},
                {"name": "Sukunimi",
                "type": "text",
                "required": true},
                {"name": "Puhelin",
                "type": "text",
                "required": true},
                {"name": "Sähköposti",
                "type": "email",
                "required": true},
                ]
             },
            // {"header": "Ilmoittautumistiedot",
            //     "products": [
            //     {"name": "Yhdistys",
            //         "type": "select",
            //         "required": true,
            //         "properties": [
            //             "Ahjolan Tanhuajat",
            //             "Helsingin Pitäjän Tanhuujat",
            //             "Nokian Kansantanssin Ystävät",
            //             "Tampereen Työväenopiston Tanhuajat",
            //         ],
            //         // "extra": "onchange=\"makeChoices('selectGroups', this.value, groups, 'required')\"",
            //         "comment": "Jos yhdistyksesi ei ole luettelossa, pyydä ryhmäsi vetäjää luomaan sellainen"
            //     },
            //     {"name": "Ryhmä",
            //     "type": "div",
            //     "required": true,
            //     "id": "selectGroups",
            //     "initial": "Valitse ensin ryhmä",
            //     "comment": "Jos ryhmäsi ei ole luettelossa, pyydä ryhmäsi vetäjää luomaan sellainen"
            //     },  
            //     {"name": "Missä rool(e)issa osallistut",
            //     "type": "checkbox",
            //     "required": true,
            //     "properties": [
            //         "Tanssija",
            //         "Soittaja", 
            //         "Ohjaaja", 
            //         "Ryhmän yhteyshenkilö", 
            //         "Muu"
            //         ]
            //     },
            //     {"name": "Osallistun",
            //         "type": "checkbox",
            //         "properties": [
            //         "Kulkueeseen",
            //         "Kenttäohjelmaan"       
            //         ]
            //     },
            //     {"name": "Osallistumismaksu",
            //         "type": "subtotal",
            //         "value": 80
            //     }, 
            //     ]
            // },
            // {"header": "Majoitus",
            // "subtotal": "Majoitus yhteensä",
            // "products": [
            //     {"name": "Valitse majoitustapasi",
            //         "type": "radio",
            //         "required": true,
            //         "properties": [
            //         "Koulumajoitus pe/la, la/su: 25 €",
            //         "Koulumajoitus la/su: 20 €",
            //         "Matkailuauto- tai matkailuvaunupaikka: 15 €",
            //         "Järjestän itse majoitukseni: 0 €"
            //         ]
            //     },
            //     {"name": "Majoitus yhteensä",
            //         "type": "subtotal",
            //         "value": 0
            //     }, 
            //  ]
            // },
            // {"header": "Ruokailu",
            //     "subtotal": "Ruokailu yhteensä",
            //     "products": [
            //     {"name": "Valitse ateriasi",
            //         "type": "checkbox",
            //         "properties": [
            //         "Pe-iltapala: 5 €",
            //         "La-aamupala: 7 €",                 
            //         "La-lounas: 7 €",
            //         "La-päivällinen: 10 €",
            //         "La-iltapala: 5 €",
            //         "Su-aamupala: 7 €",
            //         "Su-lounas: 7 €",
            //         ]
            //     },
            //     {"name": "Ruokailu yhteensä",
            //         "type": "subtotal",
            //         "value": 0
            //     }, 
            //     {"name": "Erityisruokavaliosi",
            //         "type": "checkbox",
            //         "properties": [
            //         "Vähälaktoositon",
            //         "Maidoton",
            //         "Vilja-allergia"
            //         ],
            //         "comment": "Huom! Erityisruokavaliotietoasi käytetään vain erityisaterioiden tilaamiseksi. Henkilökohtaisia erityisruokavaliotietojasi ei välitetä eteenpäin."
            //     },
            //     {"name": "Henkilökohtainen erityisruokavaliosi",
            //      "type": "textarea",
            //      "rows": 3,
            //      "cols": 72,
            //      "comment": " Huom! Jos ilmoitat henkilökohtaisen ruokavaliosi, niin valitsemiesi ruokailujen yheydessä järjestetään sinulle nimelle varustettu ateria."
            //     }                   
            //     ]
            // },
            // {"header": "Aktiviteetit",
            //  "subtotal": "Aktiviteetit yhteensä",
            //  "products": [
            //     {"name": "Valitse aktiviteetit",
            //      "type": "checkbox",
            //      "properties": [
            //         "Pe-pelimannitanssit: 5 €",
            //         "La-Kansantanssikonsertti: 10 €",
            //         "La-Opastettu puistokierros: 0 €",
            //      ]
            //     },
            //     {"name": "Aktiviteetit yhteensä",
            //      "type": "subtotal",
            //      "value": 0
            //     }
            //     ],
            // },
            // {"header": "Ostokset",
            //  "subtotal": "Ostokset yhteensä",
            //  "products": [
            //      {"name": "Pinssi: 5 €",
            //       "type": "number",
            //       "min": 0
            //      },
            //      {"name": "Juomapullo: 10 €",
            //       "type": "number"
            //      },
            //      {"name": "Huivi: 15 €",
            //       "type": "number"
            //      },
            //      {"name": "Ostokset yhteensä",
            //       "type": "subtotal",
            //       "value": 0
            //      }
            //  ]
            // }
        ]
    }
}
/*

                {"Ostokset": {       
                    "products": [
                        {"name": "Tapahtumapinssi",
                        "type": "number",
                        "min": 0,
                        "desc": "Metallia, emalipainatus, halkaisija 2,00 cm, tapahtuman logo ja päivämäärä",
                        "properties": ["Kappalehinta: 3 €, anna lukumäärä"],
                        },
                        {"name": "Naisten T-paita",
                        "type": "table",
                        "desc": "Elastaania, pyöreä kaula-aukko, ladyfit, tapahtuman logo hihassa",
                        "properties": ["Kappalehinta: 20 €"],
                        "cells": ["Väri", "Koko"],
                        "Väri": ["Punainen", "Vihreä", "Sininen", "Musta", "Pinkki", "Valkoinen"],
                        "Koko": ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
                        },
                        {"name":"Suora T-paita",
                        "type": "table",
                        "desc": "100 % puuvillaa, pyöreä kaula-aukko, suora unisex-malli, tapahtuman logo hihassa",
                        "properties": ["Kappalehinta: 20 €"],
                        "cells": ["Väri", "Koko"],
                        "Väri": ["Punainen", "Vihreä", "Sininen", "Musta"],
                        "Koko": ["S", "M", "L", "XL", "XXL"],
                        }
                    ]}
                }
            ]
        }
    ]
*/

 // eslint-disable-next-line
export const groups = {
    "Ahjolan Tanhuajat": ["Maanantai", "Tiistai", "Bygarit"],
    "Tampereen Työväenopiston Tanhuajat": ["Maanantai", "Tiistai", "Seniorit", "Torstai"]
   }
