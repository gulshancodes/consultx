import { useEffect } from "react";

const useDocTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - ConsultX`;
    }, []);

    return null;

};

export default useDocTitle;