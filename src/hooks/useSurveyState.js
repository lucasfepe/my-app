// useSurveyState.js
import { useState } from 'react';


const useSurveyState = () => {
    const [page, setPage] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [open, setOpen] = useState(true);

    const handleSubmit = () => {
        setSubmitted(true);
        alert("Survey submitted!");
        setOpen(false);
    };

    return {
        page,
        setPage,
        submitted,
        open,
        handleSubmit,
    };
};

export default useSurveyState;