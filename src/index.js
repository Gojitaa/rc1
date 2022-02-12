import { Rudus, RudusDOM } from './Rudus'
import './index.css';

/** @jsxRuntime classic */
/** @jsx Rudus.createElement */
const App = <div id='container'>
              <div>
                <a href='/'>Hello Rudus</a>
              </div>
            </div>

const root = document.getElementById('root')

RudusDOM.render(App, root);
