export interface ProductoInterface {
    descripcion: string,
    estado: number,
    fechaRegistro: string,
    flag: number,
    id:number,
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