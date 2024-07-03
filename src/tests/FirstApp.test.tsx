import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Tests in <FirstApp />', () => {
    
    test('Should be must match the snapshot', () => {
        
        const title = 'Hi, I am Antonio';
        const { container } = render( <FirstApp title={ title } /> ); //function that renders the component in memory

        expect( container ).toMatchSnapshot();

    });

    test('Should be show the title in an h1', () => {
        
        const title = 'Hi, I am Antonio';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title )
        expect( getByTestId('test-title').innerHTML ).toContain(title)

    });

    test('Should be show the subtitle sent by props', () => {
        
        const title = 'Hi, I am Antonio';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );

        expect( getAllByText(subTitle).length ).toBe(2);

    });

});