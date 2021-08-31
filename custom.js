


         let oldplayer=document.querySelector('#my-video');

         $('#my-video').ready(()=>{

                oldplayer.play();

         })
        //  videojs(oldplayer).dispose();
    let count=0;
        document.querySelector('#prev').addEventListener('dblclick', ()=>{ backward()});

        document.querySelector('#next').addEventListener('dblclick',()=>{forward()});

        // document.querySelector('#next').addEventListener('dblclick',()=>
        // {
        //     alert("call Next ");
        // })

        var videoplayer=videojs('my-video',{
            controls:true,
            // autoplay:true,
             loop:true,
            playbackRates:[0.5,1,1.5,2,2.5,3,3.5]
           
            });
            // id="my-video_html5_api"

            videoplayer.seekButtons({
                forward: 30,
                back: 10
            })


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




