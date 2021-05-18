/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1000,
    reset: true
});

sr.reveal(' .jumbotron_title, .jumbotron_subtitle, .jumbotron_img, .features_img, .features_title, .galery_title, .GaleryDesign, .designer_img, .designer_title, .designer_subtitle, .contact_title',  
{
    interval: 200
})