import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../CounterApp";

describe('Test in <CounterApp/>', () => { 

  const initialValue = 10;
  
  test('Should be must match the snapshot ', () => { 

    const { container } = render( <CounterApp value={ initialValue } /> );
    expect( container ).toMatchSnapshot();

  });

  test('Should be show initial value 100', () => { 

    render( <CounterApp value={ 100 } /> );
    expect(screen.getByText('100')).toBeTruthy(); //find a specific value in the html

  });

  test('should be increment with button +1', () => { 

    render( <CounterApp value={ initialValue } /> );
    fireEvent.click(screen.getByText('+1')) // allows events to be executed
    // screen.debug();
    expect(screen.getByText('11')).toBeTruthy();

  });

  test('should be decrement with button -1', () => { 

    render( <CounterApp value={ initialValue } /> );
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('9')).toBeTruthy();

  });

  test('should be reset the initial value with button Reset', () => { 

    render( <CounterApp value={ initialValue } /> );
    fireEvent.click(screen.getByText('-1')) 
    fireEvent.click(screen.getByText('+1')) 
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'})) 
    expect(screen.getByText(initialValue)).toBeTruthy();

  });


});