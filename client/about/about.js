Template.about.rendered = function() {
    
    // full page
        $('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage'],
				sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['First', 'Second', 'Third']
			});
    
}