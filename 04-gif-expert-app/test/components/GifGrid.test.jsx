import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

GifGrid
describe('Pruebas en <GifGrid/>', () => { 

    const category = "Dragon Ball"
    test('Debe de mostrar el loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        
        render(<GifGrid category={ category }/>);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
        
    });
    
    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs ', () => { 
        
        const gifs= [ {
            id:'abc',
            title:'titulo',
            url:'www.hola.com'
        },
        {
            id:'abcd',
            title:'titulo2',
            url:'www.hola.com.mx' 
        }
        ];
    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    });
    
    render(<GifGrid category={ category }/>);
    screen.debug();        
    
    expect( screen.getAllByRole( 'img' ).length ).toBe(2)
    
      });
 });