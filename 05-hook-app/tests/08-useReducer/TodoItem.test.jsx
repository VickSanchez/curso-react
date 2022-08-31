import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el <TodoItem/>', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() )

    test('Debe de mostrar el Todo pendiente de completar', () => { 
        
    render( <TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock } 
        />
    );

    const liElement= screen.getByRole('listitem');

    expect( liElement.className ).toBe( "list-group-item d-flex justify-content-between" )
    // screen.debug()

    const spanElement = screen.getByLabelText('span')
    
    expect( spanElement.className ).toContain( 'align-self-center' )
    expect( spanElement.className ).not.toContain( 'text-decoration-line-through' )

    
    
    });

    test('Debe de mostrar el Todo completado', () => { 

        todo.done = true;
        
        render( <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            />
        );
    
        const liElement= screen.getByRole('listitem');
    
        expect( liElement.className ).toBe( "list-group-item d-flex justify-content-between" )
        // screen.debug()
    
        const spanElement = screen.getByLabelText('span')
        
        expect( spanElement.className ).toContain( 'align-self-center' )
        expect( spanElement.className ).toContain( 'text-decoration-line-through' )
        
        
        
    });

    test('span debe llamar al OnToggleTodo', () => { 
            
        render( <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            />
        );

        const spanElement = screen.getByLabelText('span')
            
        fireEvent.click( spanElement )
            
        expect( onToggleTodoMock ).toHaveBeenCalled();
                   
            
            
    });


    test('button debe llamar al OnDeleteTodo', () => { 
            
        render( <TodoItem 
            todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock } 
            />
        );
    
        const buttonElement = screen.getByLabelText('borrar')
                
        fireEvent.click( buttonElement )
                
        expect( onDeleteTodoMock ).toHaveBeenCalled();
                       
                
                
    });
 });
