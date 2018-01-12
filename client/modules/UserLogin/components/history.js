import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

// server uses memory, client uses browser
export default createBrowserHistory();