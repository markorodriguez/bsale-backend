
# Backend Bsale

Se desarrolló una tienda virtual bajo una arquitectura cliente-servidor. Debido a esto, las funciones para cada capa quedan claramente establecidas.

Por un lado, en el lado del cliente se desplegarán los productos y se podrán realizar operaciones como búsqueda, ordenar de forma ascendente o decreciente según el precio del producto.

Por otro lado, en la capa de servidor se realizan tareas tales como la conexión a la base de datos y la ejecución de consultas.

Las tecnologías empleadas para el desarrollo del ejercicio son Vanilla JavaScript, HTML y SCSS para el apartado del frontend. El backend del mismo proyecto se desarrolló en TypeScript usando Express.js como framework para el servidor bajo Node.JS.

Repositorio Frontend: https://github.com/markorodriguez/bsale-frontend  
Repositorio Backend: https://github.com/markorodriguez/bsale-backend

Despliegue Backend: https://bsale-markorod.herokuapp.com/  
Despliegue Frontend: https://bsalefrontend.netlify.app/  


## Instalación y ejecución

Clonar el proyecto

```bash
  git clone https://github.com/markorodriguez/bsale-backend
```

Acceder al directorio

```bash
  cd bsale-backend
```

Instalar dependencias

```bash
  npm install
```

Ejecutar servidor

```bash
  npm run start
```


## API Endpoints

#### Get all items

```http
  GET /products
```

Ejemplo de respuesta JSON

```javascript
{
    "next": {
        "page": 2
    },
    "numberOfPages": 7,
    "results": [
        {
            "id": 1,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "category": 1,
            "namecat": "bebida energetica",
            "newPrice": 1192
        },
        {
            "id": 1,
            "name": "ENERGETICA RED BULL",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
            "price": 1490,
            "discount": 0,
            "category": 1,
            "namecat": "bebida energetica",
            "newPrice": 1490
        }
```

#### Buscar un producto 

```http
  POST /products/buscar
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `product` | `string` | Nombre del producto |

Ejemplo de respuesta JSON

```javascript
- product : " red bull "

{
    "numberOfPages": 1,
    "results": [
        {
            "id": 1,
            "name": "ENERGETICA RED BULL",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
            "price": 1490,
            "discount": 0,
            "category": 1,
            "namecat": "bebida energetica",
            "newPrice": 1490
        }
    ]
}
```

#### Obtener productos según la paginación

```http
  POST /products/paginado
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `int` | Número de la paginación |

Ejemplo de respuesta JSON

```javascript
- page: 5

{
    "next": {
        "page": 6
    },
    "previous": {
        "page": 4
    },
    "numberOfPages": 7,
    "results": [
        {
            "id": 3,
            "name": "RON BARCELO AÑEJO",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/barceloanejo9553.jpg",
            "price": 4990,
            "discount": 0,
            "category": 3,
            "namecat": "ron",
            "newPrice": 4990
        },
        {
            "id": 3,
            "name": "RON BARCELO DORADO",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/barcelodorado9567.jpg",
            "price": 3990,
            "discount": 0,
            "category": 3,
            "namecat": "ron",
            "newPrice": 3990
        }
```

#### Filtrar productos por categoría

```http
  POST /products/filtrado-categoria
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `category` | `int` | Id de la categoria |

Ejemplo de respuesta JSON

```javascript
- category: 2 (pisco)

{
    "next": {
        "page": 2
    },
    "numberOfPages": 3,
    "results": [
        {
            "id": 2,
            "name": "PISCO ALTO DEL CARMEN 35º",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto8532.jpg",
            "price": 7990,
            "discount": 10,
            "category": 2,
            "namecat": "pisco",
            "newPrice": 7191
        },
        {
            "id": 2,
            "name": "PISCO ALTO DEL CARMEN 40º ",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/alto408581.jpg",
            "price": 5990,
            "discount": 0,
            "category": 2,
            "namecat": "pisco",
            "newPrice": 5990
        }
```

#### Obtener categorías

```http
  GET /categories
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `category` | `int` | Id de la categoria |

Respuesta JSON

```javascript
[
    {
        "id": 1,
        "name": "Bebida energetica"
    },
    {
        "id": 2,
        "name": "Pisco"
    },
    {
        "id": 3,
        "name": "Ron"
    },
    {
        "id": 4,
        "name": "Bebida"
    },
    {
        "id": 5,
        "name": "Snack"
    },
    {
        "id": 6,
        "name": "Cerveza"
    },
    {
        "id": 7,
        "name": "Vodka"
    }
]
```


