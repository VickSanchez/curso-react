import { render, screen } from "@testing-library/react"
import { MainApp } from "../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <MainApp/>', () => { 

    test('Debe de mostrar el HomePage', () => { 
        
        render(
            <MemoryRouter>
            <MainApp/>
            </MemoryRouter>
        )
        screen.debug()
        expect( screen.getAllByText('HomePage')).toBeTruthy()


    })

    test('Debe de mostrar el LoginPage', () => { 
        
        render(
            <MemoryRouter initialEntries={['/login']}>
            <MainApp/>
            </MemoryRouter>
        )
        screen.debug()
        expect( screen.getAllByText('LoginPage')).toBeTruthy()


    });

    test('Debe de mostrar el LoginPage', () => { 
        
        render(
            <MemoryRouter initialEntries={['/about']}>
            <MainApp/>
            </MemoryRouter>
        )
        screen.debug()
        expect( screen.getAllByText('AboutPage')).toBeTruthy()


    });

})
