$( document ).ready(function() {
    swapTab();

    $('.pagination-page').on('click', function(e) {

    	e.preventDefault();

    	$(this).siblings().removeClass('selected');
    	$(this).addClass('selected');
    	swapTab();
    });
});

function swapTab () {

	var $selectedTab = $('body').find('.pagination-page.selected'),
    	$selectedTabLink = $selectedTab.children('a').data('id');

    $('#main-content').find('.tab-content').removeClass('isActive');
    $('#main-content').find('#' + $selectedTabLink).addClass('isActive');
}