import React from 'react';
const NameStep = (props: any) => {
  const { title, next, prev } = props;
  return (
    <form>
      <h1>{title}</h1>
      <p>
        <label htmlFor='firstname'>First Name:</label>
        <input
          type='text'
          name='name'
          //   value={data.firstname}
          //   onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor='lastname'>Last Name:</label>
        <input
          type='name'
          name='lastname'
          //   value={data.lastname}
          //   onChange={handleChange}
        />
      </p>
      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default NameStep;
