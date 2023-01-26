export interface ProductoInterface {
    descripcion: string,
    estado: number,
    fechaRegistro: string,
    flag: number,
    id: number,
    idCategoria: number,
    nombre: string,
    precio: number
}
export interface ProductoGenerar {
    idCategoria: number,
    nombre: string,
    descripcion: string,
    precio: number
}
export interface BuscarProducto {
    filtro: {
        nombre: string,
        categoria:string
    }
}
export interface Carrito {
    Nombre : string,
    Descripcion : string,
    Precio : number,
    IdUsuario:number
}
export interface CarritoProductosInterface {
    id: number,
    nombre: string,
    descripcion : string,
    precio: number,
    estado: number,
    fechaRegistro:string
    IdUsuario: number
}

