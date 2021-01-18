import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCIk3KYCuFX8hdmtWAkGfF9Krt4QSKnjp0',
  authDomain: 'trivia-d1771.firebaseapp.com',
  projectId: 'trivia-d1771',
  storageBucket: 'trivia-d1771.appspot.com',
  messagingSenderId: '889283176857',
  appId: '1:889283176857:web:aad3ffa4ea3b128a854b08',
  measurementId: 'G-QEMNHHSTGQ',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const loginWithGoogle = async () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const res = await firebase.auth().signInWithPopup(googleProvider)
  const { additionalUserInfo } = res
  const { username, profile } = additionalUserInfo
  const { avatar_url } = profile
  return {
    avatar: avatar_url,
    username,
  }
}
