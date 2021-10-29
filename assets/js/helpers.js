export const getPosts = async () => {
    const result = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
    return result.json()
}

export const getBerita = async () => {
    const result = await fetch('https://api-berita-indonesia.vercel.app/suara/health/')
    return result.json()
}

export const getPostsIndonesia = async () => {
    const result = await fetch('http://apicovid19indonesia-v2.vercel.app/api/indonesia')
    return result.json()
}

export const getRandomPic = async () => {
    try {
        const image = await fetch('https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=0d6eea8c95c54af68882d77e6a722cc3')
        return image.json()
    } catch (error) {
        console.log('getRandomPic', error)
        throw error
    }
}

export const getRandomPics = async (index) => {
    try {
        if(index == 0){
            const image = await fetch('https://pict-b.sindonews.net/dyn/620/pena/news/2021/02/26/173/348284/beragam-nama-jakarta-sejak-tahun-397-sampai-sekarang-txm.jpg')
            return image.url
        }
    } catch (error) {
        console.log('getRandomPic', error)
        throw error
    }
}

//hardcode jumlah rakyat
export const jumlahRakyat = (index) => {
    if(index == 0){
        return 11204714
    }
    if(index == 1){
        return 48270000
    }
    if(index == 2){
        return 36516035
    }
    if(index == 3){
        return 40670000
    }
}

export const persenData = (pembilang,pembagi) => {
    return ((pembilang/pembagi)*100)
}