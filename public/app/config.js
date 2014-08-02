//
// Require.js AMD Configuration
// =============================================================================
//
// * Author: [Ali Raza](ali@sweetpixelstudios.com)
// * Since: 8/12/2012
//
// -----------------------------------------------------------------------------
//

define(function () {
    'use strict';
    require.config({
        deps: ['init'],
        paths: {
            backbone			   : '../components/backbone/backbone',
            handlebars			 : '../components/handlebars/handlebars',
            jquery				   : '../components/jquery/dist/jquery.min',
            json				     : '../components/requirejs-plugins/src/json',
            text				     : '../components/requirejs-text/text/',
            underscore          : '../components/underscore/underscore-min',
            underscore_string   : '../components/underscore.string/lib/underscore.string',

			//Bootstrap Components
            'bootstrap/bootstrap-slider'     : '../components/bootstrap/js/slider',
            'bootstrap/bootstrap-affix'      : '../components/bootstrap/js/affix',
            'bootstrap/bootstrap-alert'      : '../components/bootstrap/js/alert',
            'bootstrap/bootstrap-button'     : '../components/bootstrap/js/button',
            'bootstrap/bootstrap-carousel'   : '../components/bootstrap/js/carousel',
            'bootstrap/bootstrap-collapse'   : '../components/bootstrap/js/bootstrap-collapse',
            'bootstrap/bootstrap-dropdown'   : '../components/bootstrap/js/bootstrap-dropdown',
            'bootstrap/bootstrap-modal'      : '../components/bootstrap/js/bootstrap-modal',
            'bootstrap/bootstrap-popover'    : '../components/bootstrap/js/bootstrap-popover',
            'bootstrap/bootstrap-scrollspy'  : '../components/bootstrap/js/bootstrap-scrollspy',
            'bootstrap/bootstrap-tab'        : '../components/bootstrap/js/bootstrap-tab',
            'bootstrap/bootstrap-tooltip'    : '../components/bootstrap/js/bootstrap-tooltip',
            'bootstrap/bootstrap-transition' : '../components/bootstrap/js/bootstrap-transition'
        },
        shim: {
            backbone               : { deps: ['underscore', 'jquery'], exports: 'Backbone' },
            bootstrap              : { deps: ['jquery'] },
            handlebars             : { exports: 'Handlebars' },
            underscore             : { exports: '_' },
            underscore_string      : { deps: ['underscore'] },

            'bootstrap/bootstrap-slider'     : { deps: ['jquery'], exports: '$.fn.slider' },
            'bootstrap/bootstrap-affix'      : { deps: ['jquery'], exports: '$.fn.affix' },
            'bootstrap/bootstrap-alert'      : { deps: ['jquery'], exports: '$.fn.alert' },
            'bootstrap/bootstrap-button'     : { deps: ['jquery'], exports: '$.fn.button' },
            'bootstrap/bootstrap-carousel'   : { deps: ['jquery'], exports: '$.fn.carousel' },
            'bootstrap/bootstrap-collapse'   : { deps: ['jquery'], exports: '$.fn.collapse' },
            'bootstrap/bootstrap-dropdown'   : { deps: ['jquery'], exports: '$.fn.dropdown' },
            'bootstrap/bootstrap-modal'      : { deps: ['jquery'], exports: '$.fn.modal' },
            'bootstrap/bootstrap-popover'    : { deps: ['jquery', 'bootstrap/bootstrap-tooltip'], exports: '$.fn.popover' },
            'bootstrap/bootstrap-scrollspy'  : { deps: ['jquery'], exports: '$.fn.scrollspy'},
            'bootstrap/bootstrap-tab'        : { deps: ['jquery'], exports: '$.fn.tab' },
            'bootstrap/bootstrap-tooltip'    : { deps: ['jquery'], exports: '$.fn.tooltip' },
            'bootstrap/bootstrap-transition' : { deps: ['jquery'], exports: '$.support.transition' },            
            }
    });
});
