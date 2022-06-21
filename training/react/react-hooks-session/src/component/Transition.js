import React, { useTransition } from 'react';

function Transition() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    function handleClick() {
        startTransition(() => {
            setCount(c => c + 1);
        })
    }

    return (
        <div>
            {isPending && <Spinner />}
            <button onClick={handleClick}>{count}</button>
        </div>
    );
}

export default Transition;