import { getImagen } from "../../src/base-pruebas/11-async-await";


describe('Pruebas en 11-async-await', () => {

    test('getImagen debe retornar un URL de la imagen ', async() => {
        
        const url = getImagen();
    
        expect( typeof url ).toBe( String )
        
        });









});