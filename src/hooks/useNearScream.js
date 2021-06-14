import { useState , useEffect , useRef } from 'react';

export default function useNearScream({distance = '100px'} = {}) {
    const fromRef = useRef()
    const [isNearScream, setShow] = useState(false)

    useEffect(() => {
        const onChange = (entries , observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true) 
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange , {
            rootMargin: distance
        })
        observer.observe(fromRef.current)

        return () => observer.disconnect()
    })
    return {isNearScream , fromRef};
}