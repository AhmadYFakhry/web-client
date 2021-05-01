

        var user = firebase.auth().currentUser;
        db.collection('Users')
        .doc(user.uid)
        .set({
            propertyType: propertyType,
            roomNumber: roomNumber,
            bathroomNumber: bathrooNumber,
            landlordType: landlordType
        })
        .then(function () {
            successToast();
            console.log('Database Update Successful');
        })
        .catch(function (error: any) {
            failedToast();
            console.error('Error Rewriting to Document', error);
        });


        user
        .updateProfile({
            photoURL: ,
        })
        .then(function () {
            console.log('User Update Successful');
            successToast();
        })
        .catch(function (error: any) {
            console.error('User Update Error', error);
            failedToast();
        });