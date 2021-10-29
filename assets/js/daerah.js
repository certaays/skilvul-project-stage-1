import { getPosts, getRandomPics } from './helpers.js'

    const createPostElement = (image, data, index) => {
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

    const renderPosts = async () => {
        
        const data = await getPosts()
            for (let i = 0; i < data.length; i++) {
                const image = await getRandomPics(0);
                createPostElement(image, data[i], i)
            }
    }

renderPosts()