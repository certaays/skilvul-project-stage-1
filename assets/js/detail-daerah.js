import { getRandomPics, getPosts, jumlahRakyat, persenData } from './helpers.js'

  const createListElement = (comment, index) => {

    const elPostTitle = document.querySelector('#post-title')
    const elPostTitleBawah = document.querySelector('#post-title-bawah')

    let elGrafik1 = document.querySelector("#ntl")
    let elGrafik11 = document.querySelector("#ntl1")
    
    let elGrafik2 = document.querySelector("#ntl2")
    let elGrafik22 = document.querySelector("#ntl22")

    let elGrafik3 = document.querySelector("#ntl3") // Satu div sama aria-valuenow
    let elGrafik33 = document.querySelector("#ntl33") 
    
    let elGrafik4 = document.querySelector("#ntl4")

    elGrafik11.textContent = comment.kasus;
    elGrafik22.textContent = comment.meninggal;
    elGrafik33.textContent = comment.sembuh;
    elPostTitle.textContent = `Data Statistik di ${comment.provinsi}`;
    elPostTitleBawah.textContent = `Statistik Total yang Ada di Kota ${comment.provinsi}`;

    let jumlahKasusTotal = (comment.kasus + comment.meninggal + comment.sembuh)

    elGrafik4.textContent = jumlahRakyat(index);
    
    let persenDataSembuh = persenData(comment.sembuh, jumlahKasusTotal)
    let persenDataPositif = persenData(comment.kasus, jumlahKasusTotal)
    let persenDataKematian = persenData(comment.meninggal, jumlahKasusTotal)

    elGrafik3.style.width = `${persenDataSembuh}%`;
    elGrafik1.style.width = `${persenDataPositif}%`;
    elGrafik2.style.width = `${persenDataKematian}%`;

    elGrafik1.textContent = `${persenDataPositif.toFixed(2)}%`;
    elGrafik2.textContent = `${persenDataKematian.toFixed(2)}%`;
    elGrafik3.textContent = `${persenDataSembuh.toFixed(2)}%`;

  }

  const createPostElement = (image, data, index) => {

    const elDaftarDaerah = document.querySelector('#daftar-daerah')
    const elCard = document.createElement('div')
    const elIconBox = document.createElement('div')
    const elCardImg = document.createElement('img')
    const elCardTitle = document.createElement('h4')
    const elCardTitleLink = document.createElement('a')
    const elCardLink = document.createElement('p')
    
    elCard.classList.add('col-xl-4', 'col-md-6', 'd-flex', 'align-items-stretch', 'my-4', 'mt-md-0')
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

  const renderPost = async () => {
    
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    
    const comments = await getPosts()
      for (let i = 0; i < comments.length; i++) {
          createListElement(comments[params.index],params.index)
      }

    let n = 9
      for (let i = 0; i < n; i++) {
        if(i!=params.index){
            const image = await getRandomPics(0);
            createPostElement(image, comments[i], i)    
        }
        else{
            n++
        }
      }
  }

renderPost()