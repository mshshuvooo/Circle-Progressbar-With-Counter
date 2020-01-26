$(document).ready(function(){
        /*
           * Example 3:
           *
           * - very custom gradient
           * - listening to `circle-animation-progress` event and display the dynamic change of the value
           */
          // first
           $('.first.circle').circleProgress({
              size: 330,
              thickness: 30,
              fill: {
                color:'#ffff00'
              }
           }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text(stepValue.toFixed(2).substr(1));
          });
    
            var circles1 = $('.first.circle');

            circles1.appear({ force_process: true });

            circles1.on('appear', function() {
              var circle1 = $(this);
              if (!circle1.data('inited')) {
                circle1.circleProgress({ value: 0.40 });
                circle1.data('inited', true);
              }
            });
    
          // second
          $('.second.circle').circleProgress({
            size: 230,
              thickness: 8,
              fill: {
                color:'#409054'
              }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text(stepValue.toFixed(2).substr(1));
          });
    
            var circles2 = $('.second.circle');

            circles2.appear({ force_process: true });

            circles2.on('appear', function() {
              var circle2 = $(this);
              if (!circle2.data('inited')) {
                circle2.circleProgress({ value: 0.25 });
                circle2.data('inited', true);
              }
            });
    
          // third
          $('.third.circle').circleProgress({
            size: 230,
              thickness: 8,
              fill: {
                color:'#FF6D18'
              }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text(stepValue.toFixed(2).substr(1));
          });
    
            var circles3 = $('.third.circle');

            circles3.appear({ force_process: true });

            circles3.on('appear', function() {
              var circle3 = $(this);
              if (!circle3.data('inited')) {
                circle3.circleProgress({ value: 0.30 });
                circle3.data('inited', true);
              }
            });
    
          // fourth
          $('.fourth.circle').circleProgress({
            size: 230,
              thickness: 8,
              fill: {
                color:'#EDDC39'
              }
          }).on('circle-animation-progress', function(event, progress, stepValue) {
            $(this).find('strong').text(stepValue.toFixed(2).substr(1));
          });
    
            var circles4 = $('.fourth.circle');

            circles4.appear({ force_process: true });

            circles4.on('appear', function() {
              var circle4 = $(this);
              if (!circle4.data('inited')) {
                circle4.circleProgress({ value: 0.75 });
                circle4.data('inited', true);
              }
            });
    
            // counterUP
           $('.counter').counterUp({
                delay: 10,
                time: 1000
            }); 
});