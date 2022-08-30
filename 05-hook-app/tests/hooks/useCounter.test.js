import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en useCounter', () => {
    test('Debe retornar el valor por defecto', () => { 
        
        const { result } = (renderHook( () => useCounter() ));
        const { counter, increment, decrement, reset } = result.current;

        expect( counter ).toBe( 10 )
        expect( decrement ).toEqual( expect.any( Function ) )
        expect( increment ).toEqual( expect.any( Function ) )
        expect( reset ).toEqual( expect.any( Function ) ) 

    });

    test('Debe generar el counter con el valor de 100', () => { 
        
        const { result } = (renderHook( () => useCounter( 100 ) ));

        expect( result.current.counter ).toBe( 100 )

    });

    test('Debe de incrementar el contador', () => { 
        const { result } = (renderHook( () => useCounter(100) ));
        const { counter, increment } = result.current;
       
        act( () => {
        increment();
        })
        expect( result.current.counter ).toBe( 101 )

     });

     test('Debe de incrementar el contador', () => { 
        const { result } = (renderHook( () => useCounter(100) ));
        const { counter, decrement } = result.current;
       
        act( () => {
            decrement();
        });

        expect( result.current.counter ).toBe( 99 );

     });

     
     test('Debe de decrementar el contador', () => { 
        const { result } = (renderHook( () => useCounter(100) ));
        const { counter, decrement } = result.current;
       
        act( () => {
            decrement();
        });

        expect( result.current.counter ).toBe( 99 );

     });
     
     test('Debe de resetear el contador', () => { 
        const { result } = (renderHook( () => useCounter(100) ));
        const { counter, reset, decrement } = result.current;
       
        act( () => {
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe( 100 );
        console.log(result)

     });

 });

