
var snow = {
    animate: true,
    containerSelector: '.snowc',
    particleCount: 0,
    particles: [90, 90],
    sizes: [25, 40],
    svgHeights: [15, 30], // Sizes For SVG's
    svgWidths: [15, 30], // Sizes For SVG's
    heights: [4, 6],
    widths: [4, 6],
    speeds: [5, 12],
    delay: [0, 9],

    rotate: false, // Rotate On Fall

    useWind: true,
    windBlowingEast: true,
    windLinear: true, // Does wind drift when falling or straight to end point
    windStrength: 1,

    useSvg: false, // Use SVG Instead of styled div
    SVG: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="36.073px" height="36.073px" viewBox="0 0 36.073 36.073" style="enable-background:new 0 0 36.073 36.073;" xml:space="preserve"><g><path d="M33.526,19.58l-8.045,2.153l-6.404-3.697l6.404-3.698l8.045,2.155c0.045,0.013,0.091,0.018,0.136,0.018 c0.23,0,0.44-0.153,0.501-0.387c0.074-0.278-0.09-0.563-0.368-0.638l-7.038-1.885l6.708-3.874c0.248-0.144,0.333-0.462,0.19-0.711 c-0.146-0.25-0.464-0.334-0.712-0.19l-6.705,3.873l1.886-7.037c0.073-0.278-0.091-0.563-0.368-0.638 c-0.277-0.073-0.562,0.09-0.638,0.369l-2.155,8.042l-6.404,3.698V9.739l5.887-5.889c0.204-0.203,0.204-0.533,0-0.737 c-0.202-0.203-0.533-0.203-0.736,0l-5.151,5.153V0.521C18.558,0.234,18.324,0,18.037,0c-0.287,0-0.521,0.234-0.521,0.521v7.745 l-5.151-5.153c-0.204-0.203-0.534-0.203-0.737,0c-0.203,0.204-0.203,0.534,0,0.737l5.888,5.889v7.396l-6.405-3.698L8.956,5.394 C8.88,5.116,8.596,4.952,8.318,5.025C8.04,5.099,7.875,5.385,7.949,5.663l1.885,7.037L3.128,8.826 C2.88,8.683,2.561,8.767,2.417,9.017c-0.144,0.249-0.058,0.568,0.19,0.711l6.708,3.874l-7.039,1.885 C2,15.561,1.834,15.847,1.909,16.124c0.062,0.233,0.272,0.387,0.502,0.387c0.045,0,0.09-0.005,0.135-0.018l8.045-2.155l6.404,3.698 l-6.403,3.697l-8.045-2.154c-0.275-0.071-0.563,0.091-0.637,0.368C1.835,20.225,2,20.51,2.278,20.585l7.039,1.884l-6.708,3.874 c-0.249,0.145-0.334,0.462-0.19,0.712c0.097,0.167,0.272,0.261,0.452,0.261c0.088,0,0.178-0.021,0.26-0.069l6.708-3.874 L7.952,30.41c-0.074,0.278,0.091,0.563,0.369,0.637c0.045,0.013,0.091,0.019,0.136,0.019c0.229,0,0.439-0.153,0.502-0.387 l2.155-8.042l6.404-3.699v7.396l-5.887,5.89c-0.204,0.202-0.204,0.533,0,0.737c0.203,0.201,0.533,0.201,0.736,0l5.151-5.153v7.746 c0,0.286,0.233,0.521,0.521,0.521c0.287,0,0.521-0.234,0.521-0.521v-7.746l5.15,5.153c0.103,0.102,0.236,0.151,0.369,0.151 c0.135,0,0.268-0.052,0.368-0.151c0.204-0.204,0.204-0.535,0-0.737l-5.89-5.89v-7.394l6.403,3.697l2.155,8.044 c0.062,0.232,0.273,0.385,0.502,0.385c0.045,0,0.09-0.004,0.136-0.017c0.278-0.075,0.442-0.36,0.368-0.639l-1.888-7.035 l6.708,3.872c0.083,0.049,0.172,0.071,0.261,0.071c0.18,0,0.354-0.095,0.452-0.261c0.144-0.25,0.059-0.567-0.19-0.713l-6.708-3.873 l7.038-1.886c0.279-0.073,0.443-0.36,0.368-0.637C34.09,19.668,33.806,19.505,33.526,19.58z"/></g></svg>',

    init: function(){
        this.generateParticleCount();

        this.appendHTML();
        this.appendCSS();
    },

    generateParticleCount: function(){
        this.particleCount = this.particles[0] + (Math.round(Math.random() * (snow.particles[1] - snow.particles[0])));
    },

    appendHTML: function(jqselector){
        var html = this.generateHTML();

        jQuery(this.containerSelector).append(html);
    },

    generateHTML: function(){
        var html = '';
        for(var i=0; i<this.particleCount;i++)
        {
            if(this.useSvg){
                html += '<div class="snow snow-particle-'+i+'">';
                html += this.SVG;
                html += '</div>';
            }else{
            
                html += '<div class="snow snow-div snow-particle-'+i+'"></div>';
            };
        }
        return html;
    },

    appendCSS: function(){
        var css = this.generateCSS();
        css = '<style>' + css + '</style>';
        jQuery('head').append(css);
    },


    generateCSS: function(){
        var css = '';
        for(var i=0;i<this.particleCount;i++)
        {
            width  = this.widths[0]  + Math.round(Math.random()  * (this.widths[1] - this.widths[0]));
            height = this.heights[0] + Math.round(Math.random() * (this.heights[1] - this.heights[0]));
            time = this.speeds[0] + Math.random() * (this.speeds[1] - this.speeds[0]);
            delay = this.delay[0] + Math.random() * (this.delay[1] - this.delay[0]);
            rotateTime = Math.random() + 1;

            if(!this.useWind)
                startingLeft = Math.round(Math.random() * 100);
            else
                if(this.windBlowingEast){   
                    startingLeft = Math.round(Math.random() * 200) - 100;
                    endLeftPos = startingLeft + (Math.round(Math.random() * (this.windStrength * 50)));
                }
                else{
                    startingLeft = Math.round(Math.random() * 200) + 100;
                    endLeftPos = startingLeft - (Math.round(Math.random() * (this.windStrength * 50)));
                }

            css += '.snow-particle-' + i + '{';
            css += 'left:' + startingLeft + '%;';
            if(!this.useSvg){
                css += 'width: ' + width  + 'px;';
                css += 'height: '+ height + 'px;';
            }
          
            if(this.animate){
              css += 'animation: '+time+'s infinite ease-in anim-snow-particle-' + i + ', snow-rotate infinite '+rotateTime+'s linear;';
              css += 'animation-delay: ' + delay + 's;';
            }else{
              css += 'top:'  + endLeft + 'vh;';
            }
            css += '}';

            if(this.useSvg){
                svgWidth  = this.svgWidths[0]  + Math.round(Math.random()  * (this.svgWidths[1] - this.svgWidths[0]));
                svgHeight = this.svgHeights[0] + Math.round(Math.random() * (this.svgHeights[1] - this.svgHeights[0]));

                css += '.snow-particle-' + i + ' svg{';
                css + 'height: ' + svgHeight;
                css + 'width: ' + svgWidth;
                css += '}';
            }

            if(this.animate){
              css += '@keyframes anim-snow-particle-'+i+'{';
              css += '100%{';
              css += 'top: 101%;';
              if(this.useWind)
                  css += 'left: '+endLeftPos+'%';
              css += '}';
              css += '}';
            }
        }
        return css;
    }

};



/* END OF SNOW OBJECT - CODE PEN RELATED STUFF*/
snow.init();
jQuery('#fall').click(function(){
  jQuery(snow.containerSelector).toggleClass('paused');
});