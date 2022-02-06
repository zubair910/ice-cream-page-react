import "./footer.css"
import FooterCard from "./footerCard"

const Footer = () => {
    const value1 = "productsssss"
    return (
        <div className="footerCardBox">
            <FooterCard value={value1} icon="fas fa-frown-open"   />
            <FooterCard value="our Story" icon="fas fa-dollar-sign" />
            <FooterCard value="our flavour" icon="fas fa-frog" />
            <FooterCard value="our Customer " icon="fas fa-futbol" />
            
            <div>
         <h4>This design is made with react</h4>
         <h4>DEVELOPER : MUHAMMAD ZUBAIR</h4>
         </div>
        
        </div>
    )
}

export default Footer