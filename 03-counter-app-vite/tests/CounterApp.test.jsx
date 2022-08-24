import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';


describe('Pruebas en el <CounterApp />', () => {

    const initialValue = 10;
    
    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100 <CounterApp value={100}>', () => {
        
        render( <CounterApp value={ 100 } /> );
        expect( screen.getByText(100) ).toBeTruthy();
        // expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')

    });

    test('Debe de multiplicar con el botón X2', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('Click X2') )
        expect( screen.getByText('20') ).toBeTruthy();

    });

    test('Debe de decrementar con el botón -1', () => {
        
        render( <CounterApp value={ initialValue } /> );
        fireEvent.click( screen.getByText('Click -1') );
        expect( screen.getByText('9') ).toBeTruthy();

    });

    test('Debe de funcionar el botón de Reset', () => {
        
        render( <CounterApp value={ 355 } /> );
        fireEvent.click( screen.getByText('Click X2') );
        fireEvent.click( screen.getByText('Click X2') );
        fireEvent.click( screen.getByText('Click X2') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });




});