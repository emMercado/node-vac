Final Proyect - Backend in NODEJS 

---

Points of Vaccination La Rioja.

---

Description.

-Environment backend microservice for final proyect in complement with ReactJs & ReactNativeJS.

The microservice provides the use of different endpoints such as: 

Root `https://final-proyect-vac.herokuapp.com/`

- Get -/points/ : Brings default vaccination points from a data.js.
  -   for example `https://final-proyect-vac.herokuapp.com/points/`
- Get for -/places/ : Brings all the vaccination sites from the database.
  -   for example `https://final-proyect-vac.herokuapp.com/places/`
- Get for -/places/:id : Returns the vaccination point by Id.
  -   for example `https://final-proyect-vac.herokuapp.com/places/610d8de0233529221c60677c`
- Post for -/places/ : We enter a new vaccination site to the database.
  -   for example `https://final-proyect-vac.herokuapp.com/places/`
- Delete for -/places/ : We delete the vaccination point by id.
  -   for example `https://final-proyect-vac.herokuapp.com/places/610d8de0233529221c60677c`
- Patch for -/places/ : We modify the vaccination place from a body json, entering the Id & other fields.
  -   for example `https://final-proyect-vac.herokuapp.com/places/610d8de0233529221c60677c`
     In Body / raw - Json
     {  "id": "610f0a5c0b34eb1190c58511",
     "name": "some name",
     "address": "some address",
     "latitude": "lat min 9 charact, max 10charact",
     "longitude": "lat min 9 charact, max 10charact",
     "url": "not is required webpage" }
    
    
Methods POST & Patch are validated by using JOI

---

Author: 

Mercado Babi Emmanuel Eduardo 

----

###Version: 0.1


