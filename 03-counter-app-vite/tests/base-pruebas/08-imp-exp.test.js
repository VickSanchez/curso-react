import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe( 'Pruebas en 08-imp-exp ', () => {

    test('getHeroeById debe retornar un héroe por ID', () => { 
      
        const id = 1;
        const hero = getHeroeById( id );


        expect( hero ).toEqual( { id: 1,name: 'Batman',owner: 'DC'});

    });

    test( 'getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy();

    });

    test('getHeroesByOwner debe retornar de lod heros de DC', () => { 
        
        const owner = "DC";
        const arregloHeroes = getHeroesByOwner( owner );

        expect( arregloHeroes.length ).toBe( 3 );

        expect( arregloHeroes ).toEqual( [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ]);

        expect( arregloHeroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));

    });

    test( 'getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const arregloHeroes2 = getHeroesByOwner( owner );

        expect( arregloHeroes2 ).toEqual( heroes.filter( (heroe) => heroe.owner === owner));

    
    });



});