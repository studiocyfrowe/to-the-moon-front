export async function getAuthUserData() {
    setIsLoading(true)
    await axios.get('http://127.0.0.1:8000/api/user/dataProfile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then((res) => (res.data))
    .then((data) => {
        setIsLoading(false)
        setUserData(data)
    })
    .catch((e) => {
        console.log(e)
        setError(true)
    })
}
