import { render, screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Tests in <FirstApp />', () => {

    const title    = 'Hi, I am Antonio';
    const subTitle = 'I am subtitle';
    
    test('Should be must match the snapshot', () => {
        
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();

    });

    test('Should be show the message "Hi, I am Antonio"', () => {
        
        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug();
    });

    test('Should be show the title in an h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    });

    test('Should be show the subtitle sent by props', () => {
        
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />  
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);

    });


});