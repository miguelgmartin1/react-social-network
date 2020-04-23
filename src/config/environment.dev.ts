import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: "AIzaSyBiZAzjoKrsuWijC_jp0S0lqHe3LmOkrzo",
    authDomain: "social-network-86139.firebaseapp.com",
    databaseURL: "https://social-network-86139.firebaseio.com",
    projectId: "social-network-86139",
    storageBucket: "social-network-86139.appspot.com",
    messagingSenderId: "86953744567",
    appId: "1:86953744567:web:e2737bab4af89ac5259532",
    measurementId: "G-KE3JQHVQ1V"
  },
  settings: {
    enabledOAuthLogin: true,
    enabledOffline: true,
    appName: 'Green',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
