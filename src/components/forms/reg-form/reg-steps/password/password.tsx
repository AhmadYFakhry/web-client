import React from 'react';
const PassStep = (props: any) => {
  const { title, next, prev } = props;
  return (
    <form>
      <p>
        <label htmlFor='password'>Password:</label>
        <input
          type='text'
          name='password'
          //   value={data.password}
          //   onChange={handleChange}
        />
      </p>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default PassStep;
