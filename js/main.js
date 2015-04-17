jQuery(document).ready(function($){
    /*** Setup ***/
    var MqM = 768, // media query medium size
        MqL = 1026;  // media query large size

    var faqsSections = $('.cd-faq-group'),
        faqTrigger = $('.cd-faq-trigger'),
        faqsContainer = $('.cd-faq-items'),
        faqsCategoriesContainer = $('.cd-faq-categories'),
        faqsCategories = faqsCategoriesContainer.find('a'),
        closeFaqsContainer = $('.cd-close-panel');
    /*** Setup End ***/

    /*** Select a faq section ***/
        faqsCategories.on('click', function(event){ // when any of the links are clicked
            event.preventDefault();
            var selectedHref = $(this).attr('href'), // actual location of the link ex: #basics
                target       = $(selectedHref); // jquery wrapped object ex: ul#basics
            if ( $(window).width() < MqM ) {
                faqsContainer.scrollTop(0)
                    .addClass('slide-in').children('ul')
                    .removeClass('selected')
                    .end().children(selectedHref)
                    .addClass('selected');
                closeFaqsContainer.addClas('move-left');
                $('body').addClass('cd-overlay');
            }
            else {
                $('body,html').animate({ 'scrollTop': target.offset().top - 19}, 200);
            }
        });
    /*** END ***/
});