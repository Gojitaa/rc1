import { Rudus, RudusDOM } from './Rudus';
// eslint-disable-next-line testing-library/no-dom-import
import { screen } from '@testing-library/dom';

describe('Rudus.createElement', () => {
  test('should return the right VNode', () => {
    /*
      JSX
      <div id='container'>
        <h1 id='title'>Hello World</h1>
      </div>
    */
    const VNode = Rudus.createElement(
      'div',
      {id: 'container'},
      Rudus.createElement(
        'h1',
        {id: 'title'},
        'Hello World'
      )
    );

    expect(VNode).toEqual({
        type: "div",
        props: {
          id: "container",
          children: {
            type: "h1",
            props: {
              id: "title",
              children: "Hello World",
            },
          },
        },
      });
  });

  test('should return the right VNode (deep)', () => {
    /*
      JSX
      <div>
        <div>
          <h1>Asd</h1>
        </div>
      </div>
    */
    const VNode = Rudus.createElement(
      'div',
      {},
      Rudus.createElement(
        'div',
        {},
        Rudus.createElement('h1', {}, 'Asd')
      )
    );

    expect(VNode).toEqual({
        type: "div",
        props: {
          children: {
            type: "div",
            props: {
              children: {
                type: 'h1',
                props: {
                  children: 'Asd'
                }
              },
            },
          },
        },
      });
  });
});


let root
describe('RudusDOM.render', () => {
  beforeAll(() => {
    document.body.innerHTML = `<div data-testid="root" id="root"></div>`
    root = screen.getByTestId('root')
  })

  test('should render node tree properly', () => {
    const VNode = Rudus.createElement(
      'div',
      {},
      Rudus.createElement(
        'div',
        {},
        Rudus.createElement('h1', {}, 'Asd')
      )
    );
    RudusDOM.render(VNode, root)

    expect(screen.getByText('Asd')).toBeTruthy();
  });
});
