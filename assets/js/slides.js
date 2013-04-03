;( function($) {
	"use strict";

	$( document.documentElement ).keyup( function( e ) {
		event.preventDefault();

		var key_code = e.keyCode || e.which,
			arrow = { left: 37, up: 38, right: 39, down: 40 },
			$slide_active = $( '.slide.active' ),
			$slide_target;

		switch ( key_code ) {
			// Left/Previous
			case arrow.left :
			case arrow.up :
				if ( $slide_active.prev( '.slide' ).length ) {
					$slide_target = $slide_active.prev( '.slide' );
				} else {
					$slide_target = $( '.slide:last' );
				}
				break;

			// Right/Next
			case arrow.right :
			case arrow.down :
				if ( $slide_active.next( '.slide' ).length ) {
					$slide_target = $slide_active.next( '.slide' );
				} else {
					$slide_target = $( '.slide:first' );
				}
				break;
		}
		$slide_target.addClass( 'active' );
		$slide_active.removeClass( 'active' );
		// $slide_target.slideToggle( 'slow' );
		// $slide_active.sideToggle( 'slow' );
		// $slide_target.fadeToggle( 'slow' );
		// $slide_active.toggle( 'slow' );
		// $slide_active.hide( 'slide', { direction: 'left' }, 1000 );
		// $slide_target.show( 'slide', { direction: 'right' }, 1000 );
	} );
} )( jQuery );