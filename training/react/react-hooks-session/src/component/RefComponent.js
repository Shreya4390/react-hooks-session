import { useRef } from 'react';

export default function Ref() {
  let ref = useRef(0);

  function handleClick() {
    console.log("*******",ref.current);
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
    console.log("***2****",ref.current);
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
