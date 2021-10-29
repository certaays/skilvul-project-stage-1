import { getPosts, getRandomPics, getPostsIndonesia, getBerita, persenData } from './helpers.js' 

const createListElement = (allPostIndonesia) => {

    const homeKasusPositif = document.querySelector("#homeKasusPositif")
    const homeKasusPositif1 = document.querySelector("#homeKasusPositif1")
    const homeKasusKematian = document.querySelector("#homeKasusKematian")
    const homeKasusKematian1 = document.querySelector("#homeKasusKematian1")
    const homeKasusSembuh = document.querySelector("#homeKasusSembuh")
    const homeKasusSembuh1 = document.querySelector("#homeKasusSembuh1")
    const homeJumlahTotal = document.querySelector("#homeJumlahTotal")
    const homeUpdateTerakhir = document.querySelector("#homeUpdateTerakhir")

    let jumlahKasusTotalIndonesia = (allPostIndonesia.positif + allPostIndonesia.sembuh + allPostIndonesia.meninggal)

    homeKasusPositif.textContent = allPostIndonesia.positif;
    homeKasusKematian.textContent = allPostIndonesia.meninggal;
    homeKasusSembuh.textContent = allPostIndonesia.sembuh;
    homeUpdateTerakhir.textContent = allPostIndonesia.lastUpdate.slice(0,10);

    homeKasusPositif1.style.width = `${persenData(allPostIndonesia.positif, jumlahKasusTotalIndonesia)}%`
    homeKasusKematian1.style.width = `${persenData(allPostIndonesia.meninggal, jumlahKasusTotalIndonesia)}%`
    homeKasusSembuh1.style.width = `${persenData(allPostIndonesia.sembuh, jumlahKasusTotalIndonesia)}%`
}

const createDaerahElement = (image, data, index) => {

    const elDaftarDaerah = document.querySelector('#daftar-daerah')
    const elCard = document.createElement('div')
    const elIconBox = document.createElement('div')
    const elCardImg = document.createElement('img')
    const elCardTitle = document.createElement('h4')
    const elCardTitleLink = document.createElement('a')
    const elCardLink = document.createElement('p')
    
    elCard.classList.add('col-xl-3', 'col-md-6', 'd-flex', 'align-items-stretch', 'my-4', 'mt-md-0')
    elIconBox.classList.add('icon-box')
    elCard.setAttribute('data-aos', 'zoom-in')
    elCard.setAttribute('data-aos-delay','100')
    elCardTitleLink.setAttribute('id',`${index}`)
    elCardTitleLink.setAttribute('href',`./detail-daerah.html?title=${data.provinsi}&index=${index}`)
    elCardImg.setAttribute('src', image)
    elCardImg.classList.add('img-fluid', 'mb-3')

    elCard.appendChild(elIconBox)
    elIconBox.appendChild(elCardImg)
    elIconBox.appendChild(elCardTitle)
    elIconBox.appendChild(elCardTitleLink)
    elIconBox.appendChild(elCardLink)

    elCardTitleLink.innerHTML = data.provinsi
    elDaftarDaerah.appendChild(elCard)
}

const createBeritaElement = (berita, index) => {

    const elDaftarBerita = document.querySelector('#daftar-berita')
    const elCard = document.createElement('div')
    const elIconBox = document.createElement('div')
    const elCardImg = document.createElement('img')
    const elCardTitle = document.createElement('h4')
    const elCardTitleLink = document.createElement('a')
    const elCardLink = document.createElement('p')
    
    elCard.classList.add('col-xl-3', 'col-md-6', 'd-flex', 'align-items-stretch', 'my-4', 'mt-md-0')
    elIconBox.classList.add('icon-box')
    elCard.setAttribute('data-aos', 'zoom-in')
    elCard.setAttribute('data-aos-delay','100')
    elCardTitleLink.setAttribute('id',`${index}`)
    elCardTitleLink.setAttribute('href',`${berita.link}`)
    elCardImg.setAttribute('src', berita.thumbnail)
    elCardImg.classList.add('img-fluid', 'mb-3')

    elCard.appendChild(elIconBox)
    elIconBox.appendChild(elCardImg)
    elIconBox.appendChild(elCardTitle)
    elIconBox.appendChild(elCardTitleLink)
    elIconBox.appendChild(elCardLink)

    elCardTitleLink.innerHTML = berita.title
    elDaftarBerita.appendChild(elCard)
}

const renderPosts = async () => {

    const allPostIndonesia = await getPostsIndonesia()
    createListElement(allPostIndonesia);
    
    const data = await getPosts()
        for (let i = 0; i < 4; i++) {
            console.log(data[i]);
            const image = await getRandomPics(0);
            createDaerahElement(image, data[i], i)
        }

    const data2 = await getBerita()
    const berita = data2.data.posts

    const DataFiltered = berita.filter(
        (berita) => berita.title.includes('vaksin') || berita.title.includes('Vaksin') || berita.title.includes('COVID') || berita.title.includes('covid') || berita.title.includes('Covid') || berita.title.includes('VAKSIN')  
    )

        for (let i = 0; i < 4; i++) {
            createBeritaElement(DataFiltered[i], i)
        }
}

renderPosts()