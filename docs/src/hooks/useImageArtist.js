import { useEffect, useState } from 'react'

const useImageArtist = (artistName) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        var routeImg = `../../assets/artistPictures/${artistName.toLowerCase().replace(/\s/g, '_')}.jpg`;
        try {
            import(routeImg).then( module => {
                setImage(module.default);
            });
        } catch (err) {
            setError(err)
        }
    }, [artistName])

    return {
        loading,
        error,
        image,
    }
}

export default useImageArtist