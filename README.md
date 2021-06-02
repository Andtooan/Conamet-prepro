# Conamet Web Climatica

About
El Consejo Nacional de Meteorología de la Ciudad de México (CONAMET) requiere un desarrollo de Dashboard a través del cual los usuarios puedan visualizar de una manera simple y didáctica la información climática.



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

- Debe ser un diseño responsive
- Presentar como información principal el estado del clima de la cuidad principal de Mexico.
- El historial de datos climático por estados presentado en el API debe ser mostrado en el portal organizados por categorías y deberá agregarse animaciones para representas los diferentes estado cimáticas (nublado, soleado..)
- Agregar páginación contenida en el EndPoint
- Protipado / Maquetación y desarrollo del portal (Pueden inspirarse de [Dribble](https://dribbble.com/search/shots/popular/web-design?q=weather) u otros portales)
- Dicho Dashboard debe ser alimentado de la siguiente API:
[https://api.datos.gob.mx/v1/condiciones-atmosfericas](https://api.datos.gob.mx/v1/condiciones-atmosfericas)
- Diseñar casos de pruebas y crearlas con Cypress

## Authors
@Antonio Fernandez
