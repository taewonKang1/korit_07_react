import HelloProps from './types/types';

function HelloComponent({ name, age }: HelloProps) {
  return (
    <>
      Hello, {name}, you are {age} years old!
    </>
  );
}
export default HelloComponent;