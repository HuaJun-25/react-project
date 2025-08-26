import $ from 'jquery'
import '../sass/app0826-3.css'
import { useEffect } from 'react'

const App = () => {

    useEffect(()=>{
        // has檢查是否有指定id名稱
            $('a:has(.tipshow)').on('mouseover',function (e) {
                $('.wrap').append('<div id="tippanel">' + $(this).children('.tipshow').html() + '</div>')
                $('#tippanel').css({ top: (e.pageY+10) + 'px', left: (e.pageX+10) + 'px' }).fadeIn('fast')
            }).on('mousemove',function(e){
                $('#tippanel').css({ top: (e.pageY+10) + 'px', left: (e.pageX+10) + 'px' })
            }).on('mouseout',function(){
                $('#tippanel').remove();
            })
    },[])
  return (
    <>
    <div className="wrap">
        <h1>Tooltip</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium perferendis impedit, temporibus
            dolore fugiat ut atque, porro saepe neque
            <a href="#">exercitationem <span className="tipshow">內容說明</span>
            </a> voluptate facilis fugit labore commodi nam quod earum quia hic repellendus repellat reiciendis ea odit
            voluptatum. Quaerat itaque in omnis ipsum sunt magni quo nobis, earum totam molestiae iste deleniti odit
            nostrum tempore soluta voluptates quisquam cumque. Neque, veritatis quae odit, omnis repellat ipsa,
            doloremque vel assumenda 
            <a href="#">architecto <span className="tipshow">內容說明</span></a>
            numquam velit ipsum esse natus! Hic, minima non. Doloremque nisi maiores
            possimus dolores, est omnis, ipsa incidunt quo accusantium quod rem quidem odio architecto obcaecati sit
            consequatur eligendi saepe minima tenetur modi magni! Debitis aut obcaecati veniam sapiente quisquam
            incidunt nulla fuga dicta minima, labore, architecto unde. Omnis, doloribus. Totam a quae dicta modi
            doloribus magnam praesentium ipsam enim 
            <a href=""><img src="../images/icons8-umbrella-30.png" alt=""/><span className="tipshow">圖片說明</span></a>
            
            voluptates, facilis officia culpa porro id fuga est? Harum repellat
            porro quae amet suscipit minima vero aliquam? Sint, magni. Amet cupiditate rerum dolores. Illo
            veniam quas ab ipsa alias aspernatur maiores eligendi voluptate, saepe magnam! Numquam quod eum in autem,
            cumque quae illo libero, facilis corrupti laudantium aut! Fuga labore non ab placeat consequatur commodi a
            quis culpa corporis cumque et maiores similique, perspiciatis nulla, reprehenderit quidem neque voluptas!
            Dolorem, quos.
        </p>
    </div>
    </>
  )
}

export default App