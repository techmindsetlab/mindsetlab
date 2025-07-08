export const fetcher = (url: string) => fetch(url, {
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
    }
}).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
});