import face from "../img/face.png"
import insta from "../img/insta.png"
import zap from "../img/zap.png"


function Footer(){
    return(
        <div className="footer">
            <a href="https://web.facebook.com/mkautodetails" target="_blanck" ><img width='45px' src={face} alt="facebook mk details"></img> Facebook </a>

            <a href="https://www.instagram.com/mkdetailss/" target="_blanck" ><img width='45px' src={insta} alt="instagram mk details"></img> Instagram </a>

            <a href="https://api.whatsapp.com/send?phone=5521966774003" target="_blanck"><img width='50px' src={zap} alt="whatsapp mk details"></img> Whatsapp </a>
        </div>
    )
}

export default Footer