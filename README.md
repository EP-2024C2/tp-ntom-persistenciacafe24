
# Estrategias de Persistencia - TP 2024

# Sistema de Gestión de Productos - API REST
Sistema interno de gestión de productos para una empresa de manufactura que fabrica productos tecnológicos. 

## Características Principales

- **Asociaciones 1 a N**: Un producto puede tener varios componentes.
- **Asociaciones N a M**: Un producto puede ser fabricado por varios fabricantes.
- **API REST**: Permite realizar operaciones CRUD sobre productos, componentes y fabricantes.
- **ORM Sequelize**: Utilizado para interactuar con la base de datos relacional.
  
## Endpoints Principales

### Productos
- `GET /productos`: Obtiene una lista de todos los productos.
- `GET /productos/:id`: Obtiene los detalles de un producto por su ID.
- `POST /productos`: Crea un nuevo producto.
- `PUT /productos/:id`: Actualiza los detalles de un producto existente.
- `DELETE /productos/:id`: Elimina un producto.

### Componentes de Productos
- `GET /productos/:id/componentes`: Lista todos los componentes asociados a un producto.
- `POST /productos/:id/componentes`: Añade un nuevo componente a un producto.
- `DELETE /productos/:id/componentes/:id_componente`: Elimina un componente de un producto.

### Fabricantes de Productos
- `GET /productos/:id/fabricantes`: Lista todos los fabricantes de un producto.
- `POST /productos/:id/fabricantes`: Asocia un fabricante a un producto.
- `DELETE /productos/:id/fabricantes/:id_fabricante`: Desasocia un fabricante de un producto.

## Requisitos del Proyecto

- Node.js

- Sequelize ORM

## Instalación y Configuración

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/EP-2024C2/tp-ntom-persistenciacafe24.git
   cd tp-ntom-persistenciacafe24

2. Instalar las dependencias:
   ```
   npm i
   ```
3. Iniciar la aplicación:
   ```
   npm start
   ```


Diagrama Entidad-Relación



