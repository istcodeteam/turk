let timer = 10,menuStatus = true;
let mainSwipers = {};

window.passiveSupported = false;

try {
    const options = {
        get passive() { 
            window.passiveSupported = true;
            return false;
        }
    }
    window.addEventListener("test", null, options);
    window.removeEventListener("test", null, options)
} catch(err) {
    window.passiveSupported = false;
}

document.addEventListener('DOMContentLoaded', () => {

    if( document.getElementsByClassName('swiper').length > 0 )checkSwiper( swiperEvents );
    toggleMenuEventBinder();
    initAccordions();

    window.addEventListener('scroll', checkScroll.bind(this),(passiveSupported ? { passive: true } : false));

});

function checkSwiper( callback = null ) {
    
    try {
        if( new Swiper() )callback();
    } catch (error) {
        timer--;if( timer >0 ) setTimeout( checkSwiper.bind(this) , 100);
    }

}

function swiperEvents() {

    const mainPageSwiper = new Swiper("#mainpageSlider", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 1,
        speed: 800,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        mousewheel: true,
        on: {
            afterInit: afterInitEvent.bind(this)
        }
    });

    function afterInitEvent( sw ) {

        if( window.location.search.length > 0 && window.location.search.includes('section') ){

            for ( const query of window.location.search.slice(1).split('&') ) {
                
                if( query.split('=')[0] === "section" ){

                    const sl = query.split('=')[1];
                    
                    if( sl ){

                        let index = -1;

                        [...document.querySelectorAll('#mainpageSlider > .swiper-wrapper > .swiper-slide')].forEach( (x,i) => {

                            if( x.id && x.id === sl ) index = i;

                        } );
                        
                        if( index >= 0 ) {
                            setTimeout(() => {
                                mainPageSwiper.slideTo(index);
                            }, 10);
                        }
                        return false;

                    }
                }

            }

        }

        buildOtherSwipers()
    }


    mainPageSwiper.on('realIndexChange', (e) => {
        if( mainPageSwiper.activeIndex !== 0 ) {
            document.body.classList.add('scrolled');
        }else {
            document.body.classList.remove('scrolled');
        }
        if( window.innerWidth < 992 && e.slides[ e.activeIndex ].querySelector('.image-swiper, .user-image-slider') ) {
            const item = e.slides[ e.activeIndex ].querySelector('.image-swiper, .user-image-slider');
            mainSwipers[item.id].enable();
        }
    });

    function buildOtherSwipers () {

        [...document.getElementsByClassName('image-swiper')].forEach( ( item ) => {

            const swiper = new Swiper( item, {
                spaceBetween: 1,
                speed: 900,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }
            });

            if( document.getElementById('mainpageSlider') && window.innerWidth < 992 ) {
                if( !item.hasAttribute('id') ) item.id = idGenerate('image-slider');
                setTimeout(() => {
                    swiper.disable();
                }, 100);
                mainSwipers[item.id] = swiper;
            }
    
        } );
    
        [...document.getElementsByClassName('user-image-slider')].forEach( ( item ) => {
            
            const swiper = new Swiper( item, {
                slidesPerView: 'auto',
                spaceBetween: 16,
                speed: 400,
                loop: true,
                breakpoints:{
                    998:{
                       slidesPerView: 3,
                       spaceBetween: 32,
                    },
                    1366:{
                       slidesPerView: 4,
                       spaceBetween: 32,
                    },
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }
            });

            if( document.getElementById('mainpageSlider') && window.innerWidth < 992 ) {
                if( !item.hasAttribute('id') ) item.id = idGenerate('user-image-slider');
                setTimeout(() => {
                    swiper.disable();
                }, 100);
                mainSwipers[item.id] = swiper;
            }
    
        } );

    }

}    

function initMap() {
    // Haritanın konumlandırılacağı koordinatlar
    const mapDiv = document.getElementById('map');
    const myLatLng = { lat: parseFloat(mapDiv.getAttribute('data-lat')) || 41.0583419, lng: parseFloat(mapDiv.getAttribute('data-lng')) || 28.9751924 }; // San Francisco örnek koordinatları

    // Gri temalı harita stili
    const mapStyle = [
        {
            "elementType": "geometry",
            "stylers": [{ "color": "#212121" }]
        },
        {
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#212121" }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{ "color": "#757575" }]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9e9e9e" }]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#bdbdbd" }]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{ "color": "#181818" }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#616161" }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#1b1b1b" }]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#2c2c2c" }]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#8a8a8a" }]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{ "color": "#373737" }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{ "color": "#3c3c3c" }]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [{ "color": "#4e4e4e" }]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#616161" }]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#757575" }]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#3d3d3d" }]
        }
    ];

    // Haritayı oluştur
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: myLatLng,
        styles: mapStyle,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'none'
    });

    // Özel görselle pin ekle
    const marker = new google.maps.Marker({
        position: myLatLng,
        map,
        icon: {
            url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTgiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCA1OCA1OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjkiIGN5PSIyOSIgcj0iMjkiIGZpbGw9IiNBNTY5NDkiLz4KPHBhdGggZD0iTTQ5LjY5MjUgMjNIOFYyNS4wNTRIMTguMDM0OVYzNC4wOTQ0SDIwLjM5MjdWMjUuMDU0SDM3LjI5OThWMzQuMDk0NEgzOS42NTc2VjI1LjA1NEg0OS42OTI1VjIzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==", // Özel görsel URL'si
            scaledSize: new google.maps.Size(58, 58) // Görsel boyutları
        }
    });

    marker.addListener('click', () => {
        window.open(`https://www.google.com/maps?q=${myLatLng.lat},${myLatLng.lng}`, '_blank');
    });
}

function toggleMenuEventBinder(){

   [...document.getElementsByClassName('menu-btn')].forEach( ( btn ) => {

        btn.addEventListener('click', (e) => {
            
            if( menuStatus ){
                document.body.classList.toggle('menu-active');
                menuStatus = false;
                setTimeout(() => { menuStatus = true; }, 600);
            }

        })

   } );

}

function checkScroll() {

    let scrollTop = window.scrollY;

    if (window.scrollY === undefined) {
        scrollTop = window.pageYOffset;
    }

    if (scrollTop > 10 ) {
        document.body.classList.add('scrolled');
        setTimeout(() => {
            if (window.scrollY <= 0) {
                return false;
            }
            return document.body.classList.add('nav-active');
        }, 100);
    } else {
        document.body.classList.remove('scrolled');
        document.body.classList.remove('nav-active');
    }

}

function initAccordions() {

    [...document.getElementsByClassName('accordion-item-head')].forEach( btn => {

        btn.addEventListener('click', () => {

            const target = document.querySelector(btn.getAttribute('data-target'));

            if( target.style.maxHeight ) {
                target.style.maxHeight = null;
            } else {
                [...document.getElementsByClassName('accordion-item-head')].forEach( x => { x.classList.remove('active') } );
                [...document.getElementsByClassName('accordion-item-body')].forEach( x => { x.style.maxHeight = null } );
                target.style.maxHeight = target.scrollHeight + "px";
            }

            btn.classList.toggle('active');

        });

   } );

   
}

function idGenerate ( text = "id" ) {

    let id = '';

    const check = ( id ) => {

        return ( document.getElementById(id) === null );

    }

    const generate = ( _text ) => {

        id = _text;

        for (let i = 0; i < 5; i++) {
            id += "-"+(Math.random() * 10000).toFixed(0);
        }

        if ( !check( id ) ) {

            generate( _text ); 

        } else { return id; }

    }

    return generate( text );

}