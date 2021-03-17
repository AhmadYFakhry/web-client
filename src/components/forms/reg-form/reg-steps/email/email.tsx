import React from 'react';
const EmailStep = (props: any) => {
  const { data, handleChange, next } = props;
  return (
    <form>
      <p>
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          name='email'
          // value={data.email}
          // onChange={handleChange}
        />
      </p>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default EmailStep;
