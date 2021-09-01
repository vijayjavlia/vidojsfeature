


         let oldplayer=document.querySelector('#my-video');

       window.load=function() {
            setTimeout(function() {
                oldplayer.play();
            }, 1000);
        }
        //  videojs(oldplayer).dispose();
    let count=0;
        document.querySelector('#prev').addEventListener('dblclick', ()=>{ backward()});

        document.querySelector('#next').addEventListener('dblclick',()=>{forward()});
        var videoplayer=videojs('my-video',{
            controls:true,
            // autoplay:true,
             loop:true,
            playbackRates:[0.5,1,1.5,2,2.5,3,3.5]
            ,preload:true,
            controlBar: {
                fullscreenToggle: true
            },
            userActions: {
                doubleClick: false
              }
             
            });

            // backwar and forward default plugin
            videoplayer.seekButtons({
                forward: 30,
                back: 10
            })

     // backwar and forward custom plugin
            const  skip=(time)=>
            {
                videoplayer.currentTime(videoplayer.currentTime()+time);
            }
            const forward=()=>{
            skip(30)
            }
            const backward=()=>{
                skip(-10)
            }


  let vj=document.querySelector('.video-js');

  vj.addEventListener('dblclick',function(event){
    console.log(event.screenX);
  });


  vj.addEventListener('touchstart',()=>{
      count++;
    if(count==2){

        alert(count);
        count=0;
    }

  })

  document.querySelector('#prev').addEventListener('dblclick', ()=>{ 
      
    count++;
    if(count==2){

        // alert(count);
        backward()
        count=0;
    }


});

  document.querySelector('#next').addEventListener('dblclick',()=>{forward()});


//   function is_touch_enabled() {
//             return ( 'ontouchstart' in window ) || 
//                    ( navigator.maxTouchPoints > 0 ) ||
//                    ( navigator.msMaxTouchPoints > 0 );
//         }


//     if(is_touch_enabled)
//     {

//         alert("touch enabled");
//     }



