import { useId } from "react";

function UniqueId() {
    const id = useId();
    return (
      <>
        <label htmlFor={id}>Do you like React?</label>
        <input id={id} type="checkbox" name="react"/>
      </>
    );
  };


export default UniqueId;