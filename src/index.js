import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ChatPage from './components/pages/ChatPage.js'
import store from './redux/store.js'
import {Provider} from 'react-redux'
import {socketContext, socket} from './context/socket.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <socketContext.Provider value={socket}>
        <ChatPage />
      </socketContext.Provider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
