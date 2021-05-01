import React, { useEffect, useState } from 'react';
// import './Registration.css';
import axios from 'axios';
import { Step, Steps } from 'react-step-builder';
// import { EmailStep, PassStep, NameStep, UniStep } from './steps/index';
import {
  UploadProfilePicture,
  PropertyType,
  LandlordType,
  Rooms,
  Landing,
} from './steps/index';
import firebase from '../../../firebase';

const backendURL = 'https://testing-environment-300301.firebaseapp.com/';

// // Initialize FireStore Database
var db = firebase.firestore();

const NewUserForm = (props: any) => {
  const { firstName } = props;
  const [propertyType, setPropertyType] = useState<string>('');
  const [roomNumber, setRoomNumber] = useState<Number>(2);
  const [bathrooNumber, setBathroomNumber] = useState<Number>(2);
  const [landlordType, setLandlordType] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState(null);

  const onSubmit = () => {
    console.log(
      propertyType,
      roomNumber,
      bathrooNumber,
      landlordType,
      profilePicture
    );
    
    var user = firebase.auth().currentUser;
    if (user) {
      db.collection('Users')
      .doc(user.uid)
      .set({
          propertyType: propertyType,
          roomNumber: roomNumber,
          bathroomNumber: bathrooNumber,
          landlordType: landlordType
      })
      .then(function () {
          console.log('Database Update Successful');
      })
      .catch(function (error: any) {
          console.error('Error Rewriting to Document', error);
      });
    }
  };

  return (
    <Steps>
      <Step firstName={firstName} component={Landing} />
      <Step
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        component={PropertyType}
      />
      <Step
        roomNumber={roomNumber}
        bathroomNumber={bathrooNumber}
        setRoomNumber={setRoomNumber}
        setBathroomNumber={setBathroomNumber}
        component={Rooms}
      ></Step>
      <Step
        landlordType={landlordType}
        setLandlordType={setLandlordType}
        component={LandlordType}
      />
      <Step
        setProfilePicture={setProfilePicture}
        component={UploadProfilePicture}
        submitProfile={onSubmit}
      />
    </Steps>
  );
};

export default NewUserForm;
