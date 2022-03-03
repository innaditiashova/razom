import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAOjg23Ska7kA5Vzwx3ntRiZDdZ_yAaEvo',
    authDomain: 'razom-c6314.firebaseapp.com',
    projectId: 'razom-c6314',
    storageBucket: 'razom-c6314.appspot.com',
    messagingSenderId: '208972449486',
    appId: '1:208972449486:web:8d20dcc294702b4ac7f29f',
    measurementId: 'G-8HPRW23Z57',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
