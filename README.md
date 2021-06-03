# Conamet Web Climatica

About
The National Meteorology Council of Mexico City (CONAMET) requires a Dashboard development through which users can view climate information in a simple and didactic way.


## Tech Stack

**Client:** HTLM/PUG, CSS/LESS, Javascript.

**Server:** Cypress, Postman



## API Reference

#### Get all items

```http
  GET https://api.datos.gob.mx/v1/condiciones-atmosfericas
```


#### Get item

```http
  GET https://api.datos.gob.mx/v1/condiciones-atmosfericas?results=Tijuana

  
### Deployment

https://andtooan.github.io/Conamet-prepro/

### Requerimientos

---

350 / 5000

- It must be a responsive design
- Present as main information the state of the climate of the main city of Mexico.
- The history of climatic data by states presented in the API must be shown in the portal organized by categories and animations must be added to represent the different cystic states (cloudy, sunny ...) 
-Add page contained in EndPoint
- Protyping / Layout and development of the portal (They can be inspired by [Dribble] (https://dribbble.com/search/shots/popular/web-design?    q=weather) or other portals)
- Said Dashboard must be powered by the following API:
[https://api.datos.gob.mx/v1/condiciones-atmosfericas](https://api.datos.gob.mx/v1/condiciones-atmosfericas)
- Design test cases and create them with Cypress 

## Authors
@Antonio Fernandez
