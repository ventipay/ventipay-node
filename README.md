# Librería oficial de VentiPay para Node.js
Esta librería provee un acceso conveniente a la API REST de VentiPay para aplicaciones Node.js.

# Instalación
Instala la librería utilizando tu package manager favorito.
```bash
npm install @ventipay/ventipay
# o
yarn add @ventipay/ventipay
```
**Nota:** La librería requiere Node.js 12+.

# Uso
La idea de esta librería es reflejar lo más posible el diseño de nuestra [API](https://docs.ventipay.com/) para que, sólo leyendo su [documentación](https://docs.ventipay.com/), puedas entenderla y utilizarla de manera rápida y simple.

Por cada recurso disponible en la API encontrarás un recurso en esta librería y por cada uno de estos recursos encontrarás acciones a ejecutar sobre ellos.

## Inicio
El primer paso es requerir la librería y pasarle tu API Key. Puedes obtener una API Key en el [Dashboard](https://dashboard.ventipay.com/) de VentiPay y recuerda que esta puede ser usada en modo [live o test](https://docs.ventipay.com/reference/modes).

```javascript
// Requiere la librería y crea el cliente de VentiPay
const ventipay = require('@ventipay/ventipay')('key_test_...'); // Provee tu API Key de modo live o test como primer parámetro del cliente
```
Ya puedes utilizar la librería y ejecutar acciones sobre los recursos de la API.

## Recursos y acciones
La librería ahora te entrega un listado de recursos de la API con sus respectivas acciones. Un recurso se ve reflejado como una propiedad del cliente recién creado y cada acción como un método asociado a esta propiedad.

### Ejemplo
```javascript
// Llamando al método retrieve del recurso checkouts y pasando 2 parámetros.
const checkout = ventipay.checkouts.retrieve('chk_KaIq81HaHvaPq91c8FaK1ua6R', {
    expand: ['customer'],
});

// Imprimiendo el atributo id
console.log(checkout.id);
```

En este ejemplo se accede al recurso **checkouts** y al método **retrieve**. El método recibe 2 parámetros: el ID del recurso a obtener y el atributo opcional *expand*. Finalmente, se imprime el atributo *id* del recurso obtenido.

Usualmente los métodos que obtienen o actualizan un recurso (`create`, `update`, etc.) reciben un ID como primer parámetro y opciones como segundo parámetro, en cambio los métodos que listan recursos (`list`) reciben opciones como primer parámetro.

Estas opciones corresponden a los *query params* o *body params* encontrados en la documentación de la API.

## Listado de recursos

La librería expone un recurso por cada objeto de la API REST, con métodos que siguen las acciones de la [Referencia de API](https://docs.ventipay.com/reference) (`retrieve`, `list`, `create`, `update`, `del`, y las acciones propias de cada recurso). Los recursos y métodos disponibles se definen en [`src/resources.js`](src/resources.js).

# Promesas

Los métodos provistos por la librería retornan siempre una Promesa (`Promise`), por lo que puedes utilizar `async/await` o `then/catch` según tu preferencia.

# Versionamiento

Utilizamos [SemVer](https://semver.org) para el versionamiento, por lo que puedes actualizar de manera segura cambios a nivel *minor* y *patch*.

# Changelog

Utilizamos la [página de releases](https://github.com/ventipay/ventipay-node/releases) de GitHub para documentar cada release.

## License

MIT
