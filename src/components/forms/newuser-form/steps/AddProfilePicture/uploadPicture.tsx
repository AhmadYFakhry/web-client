import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadPicture.css';
import { Container, Heading, Image, Button } from '@chakra-ui/react';
const UploadProfilePicture = (props: any) => {
  const { setProfilePicture, submitProfile, next, prev, dataRef } = props;

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setProfilePicture(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Container
      fontSize={['sm', 'md', 'lg', 'xl']}
      ww='100ch'
      bg='white'
      mw={['0vh', '50vw']}
      my={['35vh']}
      centerContent
    >
      <Heading>Last step! Upload your profile picture!</Heading>
      <Container className='dropzone' {...getRootProps()} centerContent>
        <Heading>Last Step!</Heading>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <Container centerContent>
            <Image
              className='upload-img'
              alt='upload here'
              src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyLjA1NiA1MTIuMDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDU2IDUxMi4wNTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxwYXRoIGQ9Ik00MjYuNjM1LDE4OC4yMjRDNDAyLjk2OSw5My45NDYsMzA3LjM1OCwzNi43MDQsMjEzLjA4LDYwLjM3QzEzOS40MDQsNzguODY1LDg1LjkwNywxNDIuNTQyLDgwLjM5NSwyMTguMzAzDQoJCQkJQzI4LjA4MiwyMjYuOTMtNy4zMzMsMjc2LjMzMSwxLjI5NCwzMjguNjQ0YzcuNjY5LDQ2LjUwNyw0Ny45NjcsODAuNTY2LDk1LjEwMSw4MC4zNzloODB2LTMyaC04MGMtMzUuMzQ2LDAtNjQtMjguNjU0LTY0LTY0DQoJCQkJYzAtMzUuMzQ2LDI4LjY1NC02NCw2NC02NGM4LjgzNywwLDE2LTcuMTYzLDE2LTE2Yy0wLjA4LTc5LjUyOSw2NC4zMjctMTQ0LjA2NSwxNDMuODU2LTE0NC4xNDQNCgkJCQljNjguODQ0LTAuMDY5LDEyOC4xMDcsNDguNjAxLDE0MS40MjQsMTE2LjE0NGMxLjMxNSw2Ljc0NCw2Ljc4OCwxMS44OTYsMTMuNiwxMi44YzQzLjc0Miw2LjIyOSw3NC4xNTEsNDYuNzM4LDY3LjkyMyw5MC40NzkNCgkJCQljLTUuNTkzLDM5LjI3OC0zOS4xMjksNjguNTIzLTc4LjgwMyw2OC43MjFoLTY0djMyaDY0YzYxLjg1Ni0wLjE4NywxMTEuODQ4LTUwLjQ4MywxMTEuNjYtMTEyLjMzOQ0KCQkJCUM1MTEuODk5LDI0NS4xOTQsNDc2LjY1NSwyMDAuNDQzLDQyNi42MzUsMTg4LjIyNHoiLz4NCgkJCTxwYXRoIGQ9Ik0yNDUuMDM1LDI1My42NjRsLTY0LDY0bDIyLjU2LDIyLjU2bDM2LjgtMzYuNjR2MTUzLjQ0aDMydi0xNTMuNDRsMzYuNjQsMzYuNjRsMjIuNTYtMjIuNTZsLTY0LTY0DQoJCQkJQzI2MS4zNTQsMjQ3LjQ2LDI1MS4yNzYsMjQ3LjQ2LDI0NS4wMzUsMjUzLjY2NHoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'
            />
            <p>Drag and drop your profile picture here or click to browse</p>
          </Container>
          // <p>Drag 'n drop your profile picture here, or click to browse</p>
        )}
      </Container>
      <Button onClick={submitProfile}>Submit</Button>
    </Container>
  );
};
export default UploadProfilePicture;
