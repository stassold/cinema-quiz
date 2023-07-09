import React, { useState } from 'react';

export function useCheckboxHandler(initialState: number | null): [number | null, ((event: React.ChangeEvent<HTMLInputElement>) => void)] {
    const [checkedIndex, setCheckedIndex] = useState<number | null>(initialState);

    const HookHandleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = Number(event.target.value);
        setCheckedIndex(checkedIndex === index ? null : index);
    };

    return [checkedIndex, HookHandleCheckboxChange];
}