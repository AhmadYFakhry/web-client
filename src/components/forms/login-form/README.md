firebase.auth().signInWithEmailAndPassword(LoginFormInput.email, LoginFormInput.password)
.then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.error("Sign-In Successful");
}).catch((error) => {
    console.error("Sign-In Error", error);
});