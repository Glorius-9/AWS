import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)  
    
    const request = useCallback(async(url, method = 'GET', body = null, headers ={}) => {
        setLoading(true)
        try {

            if (body) {
<<<<<<< HEAD
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, {method, body, headers});
            const data = await response.json()

            if(!response.ok){
                throw new Error(data.message || 'Un problème est survenu')
=======
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if(!response.ok){
                throw new Error(data.message || 'что-то пошло не так')
>>>>>>> 6258fc327a9463079901a804a70cb7b0e98ab8ff
            }

            setLoading(false)
            return data

        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])
    
    return { loading, request, error, clearError }
}