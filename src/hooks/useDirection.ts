import {useState, useEffect} from "react";
import {useTranslation} from "react-i18next";

const useDirection = () => {
    const {i18n} = useTranslation()
    const [direction, setDirection] = useState(i18n.dir());
    useEffect(() => {
        if (i18n.dir() !== direction)
            setDirection(i18n.dir())
    }, [i18n]);
    return [direction];
};

export default useDirection;