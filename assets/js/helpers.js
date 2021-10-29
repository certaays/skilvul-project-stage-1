export const getPosts = async () => {
    const result = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
    return result.json()
}

export const getBerita = async () => {
    const result = await fetch('https://api-berita-indonesia.vercel.app/suara/health/')
    return result.json()
}