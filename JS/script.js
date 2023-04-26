// Our Amazing Work
let ourAmazingWorkImages = document.querySelector('.our-amazing-work-images');
const ourAmazingWorkTabs = document.querySelector('.our-amazing-work-tabs');
const arrOurAmazingWorkTab = document.querySelectorAll('.tab');
const tabAll = document.querySelector('#all');
const tabGraphicDesign = document.querySelector('#graphic-design');
const tabWebDesign = document.querySelector('#web-design');
const tabLandingPages = document.querySelector('#landing-pages');
const tabWordpress = document.querySelector('#wordpress');
const btnLoadMore = document.querySelector('.our-amazing-work-button');
const loading = document.querySelector('.loading-container');

let arrImages = [{
        src: '../img/our-amazing-work-images/graphic-design1.jpg',
        id: 'graphic-design'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design2.jpg',
        id: 'graphic-design'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design3.jpg',
        id: 'graphic-design'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design4.jpg',
        id: 'web-design'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design5.jpg',
        id: 'web-design'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design6.jpg',
        id: 'web-design'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design7.jpg',
        id: 'landing-pages'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design8.jpg',
        id: 'landing-pages'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design9.jpg',
        id: 'landing-pages'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design10.jpg',
        id: 'wordpress'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design11.jpg',
        id: 'wordpress'
    },
    {
        src: '../img/our-amazing-work-images/graphic-design12.jpg',
        id: 'wordpress'
    }
];

let arrImages2 = [{
        src: '../img/our-amazing-work-images/Layer 24.png',
        id: 'graphic-design'
    },
    {
        src: '../img/our-amazing-work-images/Layer 25.png',
        id: 'graphic-design'
    },
    {
        src: '../img/our-amazing-work-images/Layer 26.png',
        id: 'graphic-design'
    },
    {
        src: '../img/our-amazing-work-images/Layer 27.png',
        id: 'web-design'
    },
    {
        src: '../img/our-amazing-work-images/Layer 28.png',
        id: 'web-design'
    },
    {
        src: '../img/our-amazing-work-images/Layer 29.png',
        id: 'web-design'
    },
    {
        src: '../img/our-amazing-work-images/Layer 30.png',
        id: 'landing-pages'
    },
    {
        src: '../img/our-amazing-work-images/Layer 31.png',
        id: 'landing-pages'
    },
    {
        src: '../img/our-amazing-work-images/Layer 32.png',
        id: 'landing-pages'
    },
    {
        src: '../img/our-amazing-work-images/Layer 33.png',
        id: 'wordpress'
    },
    {
        src: '../img/our-amazing-work-images/Layer 34.png',
        id: 'wordpress'
    },
    {
        src: '../img/our-amazing-work-images/Layer 24.png',
        id: 'wordpress'
    }
];

function addImg() {
    removeImg();
    arrImages.forEach(function (element) {
        let image = document.createElement('img');
        image.classList.add('our-amazing-work-img');
        image.setAttribute('src', `${element.src}`);
        image.setAttribute('id', `${element.id}`);
        image.setAttribute('data-src', `${element.src}`);
        ourAmazingWorkImages.append(image);
    });
};

addImg();

function removeImg() {
    while (ourAmazingWorkImages.firstChild) {
        ourAmazingWorkImages.removeChild(ourAmazingWorkImages.firstChild);
    }
}

ourAmazingWorkTabs.addEventListener('click', function (event) {
    ourAmazingWorkImages = document.querySelector('.our-amazing-work-images');
    if (event.target.id === 'all') {
        addImg();
        Array.from(arrOurAmazingWorkTab).forEach(function (element) {
            element.classList.remove('active-tab');
        });
        event.target.classList.add('active-tab');
    } else {
        removeImg();
        arrImages.forEach(function (element) {
            if (event.target.id === element.id) {
                let image = document.createElement('img');
                image.classList.add('our-amazing-work-img');
                image.setAttribute('src', `${element.src}`);
                image.setAttribute('id', `${element.id}`);
                image.setAttribute('data-src', `${element.src}`);
                ourAmazingWorkImages.append(image);
            };
        });
        Array.from(arrOurAmazingWorkTab).forEach(function (element) {
            element.classList.remove('active-tab');
        });
        event.target.classList.add('active-tab');
    };
});

btnLoadMore.addEventListener('click', function (event) {
    loading.style.display = 'flex';
    setTimeout(download, 5000);
});

function download() {
    arrImages = [...arrImages, ...arrImages2]
    const activeTab = document.querySelector('.active-tab');
    if (activeTab.getAttribute('id') === 'all') {
        addImg();
    } else {
        removeImg();
        arrImages.forEach(function (element) {
            if (activeTab.getAttribute('id') === element.id) {
                let image = document.createElement('img');
                image.classList.add('our-amazing-work-img');
                image.setAttribute('src', `${element.src}`);
                image.setAttribute('id', `${element.id}`);
                image.setAttribute('data-src', `${element.src}`);
                ourAmazingWorkImages.append(image);
            };
        });
    }

    btnLoadMore.remove();
    loading.style.display = 'none';
};

//Клік на картинку

ourAmazingWorkImages.addEventListener('click', function (event) {
    if (event.target.classList.contains('our-amazing-work-img')) {
        const DivInsteadImg = document.createElement('div');
        DivInsteadImg.setAttribute('id', event.target.getAttribute('data-src'));
        DivInsteadImg.classList.add('div-instead-img');
        DivInsteadImg.classList.add('forClick');
        event.target.replaceWith(DivInsteadImg);
        const DivImages = document.createElement('div');
        DivImages.classList.add('div-images');
        DivImages.classList.add('forClick');
        DivInsteadImg.append(DivImages);
        const circle1 = document.createElement('img');
        const circle2 = document.createElement('img');
        circle1.classList.add('forClick');
        circle2.classList.add('forClick');
        circle1.setAttribute('src', './img/circle1.png');
        circle2.setAttribute('src', './img/circle2.png');
        DivImages.append(circle1);
        DivImages.append(circle2);
        const textCreativeDesign = document.createElement('div');
        textCreativeDesign.classList.add('creative-design');
        textCreativeDesign.classList.add('forClick');
        textCreativeDesign.innerText = 'CREATIVE DESIGN';
        DivInsteadImg.append(textCreativeDesign);
        const textTab = document.createElement('div');
        textTab.classList.add('text-tab');
        textTab.classList.add('forClick');
        Array.from(arrOurAmazingWorkTab).forEach(function (element) {
            if (element.id === event.target.id) {
                textTab.innerText = element.innerText;
            }
        })
        DivInsteadImg.append(textTab);
    }
    if (event.target.classList.contains('forClick')) {
        let elem = event.target.closest('.div-instead-img').id;
        let image = document.createElement('img');
        image.classList.add('our-amazing-work-img');
        image.setAttribute('src', elem);
        arrImages.forEach(function (element) {
            if (element.src === elem) {
                image.setAttribute('id', `${element.id}`);
            }
        })
        image.setAttribute('data-src', elem);
        event.target.closest('.div-instead-img').replaceWith(image);
    }
});


//Our Services

const arrOurServices = [{
        name: 'web-design',
        img: '../img/our-services/web-design1.jpg',
        text: `Web design encompasses many different skills and disciplines in the production and maintenance
        of websites. The different areas of web design include web graphic design; user interface design
        (UI design); authoring, including standardised code and proprietary software; user experience
        design (UX design); and search engine optimization. Often many individuals will work in teams
        covering different aspects of the design process, although some designers will cover them
        all.`
    },
    {
        name: 'graphic-design',
        img: '../img/our-services/web-design2.jpg',
        text: `Graphic design is a profession, academic discipline and applied art whose activity consists in projecting visual communications
         intended to transmit specific messages to social groups, with specific objectives. Graphic design is an interdisciplinary branch 
         of design and of the fine arts. Its practice involves creativity, innovation and lateral thinking using manual or digital tools,
         where it is usual to use text and graphics to communicate visually.`
    },
    {
        name: 'online-support',
        img: '../img/our-services/web-design3.jpg',
        text: `Online support means delivering customer service digitally through multiple channels such as email, 
        live chat, social media platforms, messaging apps, etc. 
        Nowadays, many customers prefer this form of communication over a phone call or personal contact.`
    },
    {
        name: 'app-design',
        img: '../img/our-services/web-design4.jpg',
        text: `What is app design? App design is an ongoing process comprising user experience (UX) and user interface (UI) elements. 
        Designers ideate, define solutions, create the app's flow and structure, 
        and make stylistic choices from colors to fonts. Designers base choices on user research and feedback.`
    },
    {
        name: 'online-marketing',
        img: '../img/our-services/web-design5.jpg',
        text: `Online marketing is a set of tools and methodologies used for promoting products and services through the internet. 
        Online marketing includes a wider range of marketing elements than traditional business marketing due to the extra channels and
        marketing mechanisms available on the internet.`
    },
    {
        name: 'seo-service',
        img: '../img/our-services/web-design6.jpg',
        text: `SEO services are search engine optimization services offered by an agency, freelancer,
        or consultant that optimize your site for SEO so you can capture more traffic and revenue from search.`
    }

]

const tabsOurServices = document.querySelector('.our-services-tabs');
const arrTabs = Array.from(document.querySelectorAll('.our-services-tab'));
const imgOurServices = document.querySelector('.our-services-content-image');
const textOurServices = document.querySelector('.our-services-content-text');


tabsOurServices.addEventListener('click', function (event) {
    arrTabs.forEach(function (element) {
        if (element.classList.contains('active-our-services-tab')) {
            element.classList.remove('active-our-services-tab');
        }
    });
    event.target.classList.add('active-our-services-tab');
    arrOurServices.forEach(function (element) {
        if (element.name === event.target.id) {
            imgOurServices.setAttribute('src', element.img);
            textOurServices.innerText = element.text;
        }
    })
})

//about the Ham
const aboutTheHamListPortrait = Array.from(document.querySelectorAll('.about-the-ham-list-portrait'));
const portraitImg = Array.from(document.querySelectorAll('.portrait-img'));
const arrowLeft = document.querySelector('.about-the-ham-list-arrow-left');
const arrowRight = document.querySelector('.about-the-ham-list-arrow-right');
const wrapperAboutTheHamListPortrait = document.querySelector('.wrapper-about-the-ham-list-portrait');
const comment = document.querySelector('.about-the-ham-info-about');
const nameComment = document.querySelector('.about-the-ham-info-name');
const post = document.querySelector('.about-the-ham-info-post');
const photo = document.querySelector('.portrait');
const aboutTheHamInfo = document.querySelector('about-the-ham-info');

let arrСommentators = [{
        name: 'James',
        post: 'Designer',
        img: '../img/portrets/1.jpg',
        text: 'We’re most impressed with Burst Digital’s flexibility and willingness to go the extra mile to cater to our needs.'
    },
    {
        name: 'Robert',
        post: 'Programmer',
        img: '../img/portrets/2.jpg',
        text: 'I was most impressed with DBC’s personable approach and supportiveness.'
    },
    {
        name: 'John',
        post: 'Marketer',
        img: '../img/portrets/3.jpg',
        text: 'We were 100% satisfied with their work, and they exceeded our expectations.'
    },
    {
        name: 'Michael',
        post: 'Recruiter',
        img: '../img/portrets/4.jpg',
        text: 'Our team has only good feedback on their involvement.'
    },
    {
        name: 'David',
        post: 'Developer',
        img: '../img/portrets/5.jpg',
        text: 'They come up with a nice and clean concept that works for our business.'
    },
    {
        name: 'William',
        post: ' Manager',
        img: '../img/portrets/6.jpg',
        text: 'The team is ready to defend their product and explain why it will work.'
    }
];

//слайд

function animate() {
    photo.classList.remove('animation-photo');
}

let arrPhoto = [];
arrСommentators.forEach(function (commentator) {
    arrPhoto.push(commentator.img);
});

let index = 0;
portraitImg.forEach(function (img) {
    img.src = arrPhoto[index];
    index++;
});

let active = document.getElementById('active-portrait-img');
let activeProfile = active.getAttribute('src');

arrowRight.addEventListener('click', function (event) {
    photo.classList.add('animation-photo');
    setTimeout(animate, 3000);
    let index = 0;
    let ativeNew = document.querySelector('.active-portrait').id;

    if (+ativeNew === 4) {
        let photo = arrPhoto.shift();
        arrPhoto.push(photo);
        portraitImg.forEach(function (img) {
            img.setAttribute('src', arrPhoto[index]);
            index++;
        });
    };

    if (+ativeNew < 4) {
        aboutTheHamListPortrait.forEach(function (portrait) {
            portrait.classList.remove('active-portrait');
        });
        ativeNew = +ativeNew + 1;
        let element = document.getElementById(+ativeNew);
        element.classList.add('active-portrait');
    } else {
        aboutTheHamListPortrait.forEach(function (portrait) {
            portrait.classList.remove('active-portrait');
        });
        ativeNew = +ativeNew;
        let element = document.getElementById(+ativeNew);
        element.classList.add('active-portrait');
    }
    let activeProf = document.querySelector('.active-portrait')
    activeProfile = activeProf.childNodes[0].getAttribute('src');
    showComment(activeProfile);
});



arrowLeft.addEventListener('click', function (event) {
    photo.classList.add('animation-photo');
    setTimeout(animate, 3000);
    let index = 0;
    let ativeNew = document.querySelector('.active-portrait').id;

    if (+ativeNew === 1) {
        let photo = arrPhoto.pop();
        arrPhoto.unshift(photo);
        portraitImg.forEach(function (img) {
            img.setAttribute('src', arrPhoto[index]);
            index++;
        });
    };

    if (+ativeNew > 1) {
        aboutTheHamListPortrait.forEach(function (portrait) {
            portrait.classList.remove('active-portrait');
        });
        ativeNew = +ativeNew - 1;
        let element = document.getElementById(+ativeNew);
        element.classList.add('active-portrait');
    } else {
        aboutTheHamListPortrait.forEach(function (portrait) {
            portrait.classList.remove('active-portrait');
        });
        ativeNew = +ativeNew;
        let element = document.getElementById(+ativeNew);
        element.classList.add('active-portrait');
    }
    let activeProf = document.querySelector('.active-portrait')
    activeProfile = activeProf.childNodes[0].getAttribute('src');
    showComment(activeProfile);
});

wrapperAboutTheHamListPortrait.addEventListener('click', function (event) {
    photo.classList.add('animation-photo');
    setTimeout(animate, 3000);

    if (event.target.tagName === 'IMG') {
        aboutTheHamListPortrait.forEach(function (element) {
            element.classList.remove('active-portrait');
        });
        event.target.closest('.about-the-ham-list-portrait').classList.add('active-portrait');
        activeProfile = event.target.getAttribute('src');
        showComment(activeProfile);
    };

});

function showComment(activeProfile) {
    arrСommentators.forEach(function (element) {
        if (element.img === activeProfile) {
            comment.innerText = element.text;
            nameComment.innerText = element.name;
            post.innerText = element.post;
            photo.setAttribute('src', element.img);
        };
    });
};

showComment(activeProfile);



var $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
        itemSelector: '.grid-item',
        columnWidth: 32.5,
        percentPosition: true,
        gutter: 2.5
    });
});

var $grid1 = $('.grid1').imagesLoaded(function () {
    $grid1.masonry({
        itemSelector: '.grid-item1',
        columnWidth: 45,
        percentPosition: true,
        gutter: 0.1
    });
});

var $grid2 = $('.grid2').imagesLoaded(function () {
    $grid2.masonry({
        itemSelector: '.grid-item2',
        columnWidth: 121,
        percentPosition: true,
        gutter: 0.1
    });
});

//gallery

const galleryContent = document.querySelector('.gallery-content');

galleryContent.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'IMG') {
        const wrapperGridItem = event.target.closest('.wrapper-grid-item');
        const gridItemHover = document.createElement('div');
        gridItemHover.classList.add('grid-item-hover');
        wrapperGridItem.append(gridItemHover);
        gridItemHover.innerHTML = `<div class="wrapper-icons">
        <a href="#">
            <div class="magnifier">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.37262 5.66669L9 9" stroke="white" />
                    <circle cx="3.5" cy="3.5" r="3" stroke="white" />
                </svg>
            </div>  
        </a>
        <a href="#">
            <div class="arrows">
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.700061 10C0.700061 10.1657 0.834376 10.3 1.00006 10.3L3.70006 10.3C3.86575 10.3 4.00006 10.1657 4.00006 10C4.00006 9.83431 3.86575 9.7 3.70006 9.7H1.30006V7.3C1.30006 7.13431 1.16575 7 1.00006 7C0.834376 7 0.700061 7.13431 0.700061 7.3L0.700061 10ZM3.78793 6.78787L0.787929 9.78787L1.21219 10.2121L4.21219 7.21213L3.78793 6.78787Z"
                        fill="#F8FCFE" />
                    <path
                        d="M0.999864 0.700202C0.834179 0.700267 0.699917 0.834634 0.699982 1.00032L0.701042 3.70032C0.701107 3.866 0.835474 4.00027 1.00116 4.0002C1.16685 4.00014 1.30111 3.86577 1.30104 3.70008L1.3001 1.30008L3.7001 1.29914C3.86579 1.29908 4.00005 1.16471 3.99998 0.999024C3.99992 0.833338 3.86555 0.699077 3.69986 0.699141L0.999864 0.700202ZM4.21321 3.78681L1.21203 0.787986L0.787933 1.21242L3.78911 4.21124L4.21321 3.78681Z"
                        fill="#F8FCFE" />
                    <path
                        d="M11.3001 1C11.3001 0.834315 11.1657 0.7 11.0001 0.7L8.30006 0.7C8.13438 0.7 8.00006 0.834315 8.00006 1C8.00006 1.16569 8.13438 1.3 8.30006 1.3H10.7001V3.7C10.7001 3.86569 10.8344 4 11.0001 4C11.1657 4 11.3001 3.86569 11.3001 3.7L11.3001 1ZM8.21219 4.21213L11.2122 1.21213L10.7879 0.787868L7.78793 3.78787L8.21219 4.21213Z"
                        fill="#F8FCFE" />
                    <path
                        d="M11.0297 10.2727C11.1954 10.2712 11.3285 10.1357 11.327 9.97001L11.3026 7.27012C11.3011 7.10445 11.1656 6.97135 10.9999 6.97285C10.8342 6.97435 10.7011 7.10988 10.7026 7.27555L10.7243 9.67546L8.32442 9.69717C8.15874 9.69867 8.02565 9.8342 8.02715 9.99988C8.02865 10.1656 8.16417 10.2986 8.32985 10.2971L11.0297 10.2727ZM7.7898 7.21404L10.8168 10.1868L11.2372 9.75869L8.2102 6.78596L7.7898 7.21404Z"
                        fill="#F8FCFE" />
                </svg>
            </div>
        </a>
    </div>`
    };

    galleryContent.addEventListener('mouseout', function (event) {
        if (event.target.classList.contains('grid-item-hover')) {
            event.target.remove();
        }
    })
});