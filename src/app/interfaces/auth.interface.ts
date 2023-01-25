export interface AuthInterface {
    isSuccess: boolean,
    data: string,
    message: string,
    errors: null
}
export interface LoginInterface {
    correo: string,
    contrasenia: string
}
export interface RegisterInterface {
   nombre: string,
   correo:string,
   contrasenia: string,
   direccion: string,
   telefono: number,
   fechaNacimiento: string,
   idRoles: number,
}