import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {

    test('getSaludo debe retornar un Objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: "El_Papi1502"
        }
        
        const user = getUser();
      
        expect( testUser ).toStrictEqual( user )


    });

    test( ' getUsuarioActivo debe retornar un objeto', () => {

        const nombre = "Vick"
        const usuario = {
            uid: 'ABC567',
            username: nombre
        }

        const usuario2 = getUsuarioActivo( nombre );

        expect( usuario ).toStrictEqual( usuario2 )
    })


});