import { getBerita } from "./helpers.js";

    const createPostElement = (berita, index) => {
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
        const data = await getBerita()
        const berita = data.data.posts

        const DataFiltered = berita.filter(
            (berita) => berita.title.includes('vaksin') || berita.title.includes('Vaksin') || berita.title.includes('COVID') || berita.title.includes('covid') || berita.title.includes('Covid') || berita.title.includes('VAKSIN')  
        )

        for (let i = 0; i < DataFiltered.length; i++) {
            createPostElement(DataFiltered[i], i)
        }
    }

renderPosts()