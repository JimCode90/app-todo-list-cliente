

export const useFetch = (url, id, callback) => {
    console.log("id desde hooks", id)
    console.log("url", url)
    return async () => {
        try {
            const data = await fetch(url, {
                method: 'PUT'
            });
            const json = await data.json();
            callback && callback(json);
        } catch (err) {
            console.error(err);
        }
    }
}