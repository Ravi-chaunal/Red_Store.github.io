 import React from 'react'
 import "./Footer.css"

 const Footer = () => {
     return (
     <div className="main-footer">
         <div className="container">
                {/* <img  src='./assets/logo-white.png'  alt='logo'/>  <br/> */}

             <div className='row'>
                 {/* column1 */}
                 <div className='col'>
                     <h4 style={{textAlign: "center"}}> Useful Links</h4>
                     <ul className='list-unstyled' style={{textAlign: "center"}}>
                         <li>Coupons</li>
                         <li>Blog Post</li>
                         <li>Return Policy</li>
                         <li>Join Afflicate</li>
                     </ul>
                 </div>
                 {/* column2 */}
                 <div className='col'>
                     <h4 style={{textAlign: "center"}} >Get to Know US</h4>
                     <ul className='list-unstyled' style={{textAlign: "center"}}>
                        <li>About Us</li>     
                        <li>Careers</li>     
                        <li>Red Store Cares</li>     
                    </ul>
                 </div>
                 {/* column3 */}
                 <div className='col' >
                     <h4 style={{textAlign: "center"}}  ms-5>Follow Us</h4>
                     <ul className='list-unstyled' style={{textAlign: "center"}} >
                        <li>Facebook</li>     
                        <li>Twitter</li>     
                        <li>Instagram</li>     
                        <li>YouTube</li>     
                    </ul>
                 </div>
                 {/* column4 */}
                 <div className='col'>
                     <h4 style={{textAlign: "center"}}>Make Money With US</h4>
                     <ul className='list-unstyled' style={{textAlign: "center"}} >
                        <li>Sell on Red Store</li>     
                        <li>Sell under Red Store Accelerator</li>     
                        <li>Become an Affliate</li>     
                        <li>Advertise your Product</li>     
                    </ul>
                 </div>
                

             </div>
             <hr/>
             
             <div className='row'>
                 <p className='col-sm ' style={{textAlign: "center"}}>
                     &copy;{new Date().getFullYear()} The red store | All right reserved || Terms Of Service | Privacy
                 </p>

                <h6 style={{textAlign: "center"}}>Created by: Ravi Singh Chaunal</h6>
             </div>

         </div>
     </div>
     )
 } 
 export default Footer;
