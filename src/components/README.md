
Update Email
    var user = firebase.auth().currentUser;
    user.updateEmail(req.body.email).then(function() {
        console.log("Email Update Successful");
    }).catch(function(error) {
        console.error('Update Email Error', error);
    });


Verify Email
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
        console.log("Verification Email Sent");
    }).catch(function(error) {
        console.error('Verification Error', error);
    });


Set Password
    var user = firebase.auth().currentUser;
    var newPassword = getASecureRandomPassword();
        console.log("Verification Email Sent");
    user.updatePassword(newPassword).then(function() {
        // Update successful.
    }).catch(function(error) {
        console.error('Set Password Error', error);
    });


Send Password Reset Email
    var auth = firebase.auth();
    var emailAddress = "user@example.com";

    auth.sendPasswordResetEmail(emailAddress).then(function() {
        console.log("Password Reset Email Sent");
    }).catch(function(error) {
        console.error('Reset Email Error', error);
    });


Delete User
    var user = firebase.auth().currentUser;

    user.delete().then(function() {
        console.log("User Deleted");
    }).catch(function(error) {
        console.error('Deleted Error', error);
    });


Reauth User
    var user = firebase.auth().currentUser;
    var credential;

    // Prompt the user to re-provide their sign-in credentials

    user.reauthenticateWithCredential(credential).then(function() {
        console.log("User Re-Authed");
    }).catch(function(error) {
        console.error('Re-Auth Error', error);
    });