import firebase from "firebase/compat/app";

// Configure Firebase.
const config = {
	apiKey: "AIzaSyBJ5DE5YKgx71tzo1uTMTqyr1US7F5Y7Y8",
	authDomain: "my-first-project-ff616.firebaseapp.com",
	// ...
};

const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: "popup",
	// We will display Google and Facebook as auth providers.
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.GithubAuthProvider.PROVIDER_ID],
	signInSuccessUrl: "http://localhost:5000",
};

export { config, uiConfig };
