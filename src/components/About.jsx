import React from 'react'
import Navbar from './Navbar'
import './css/about.css'
import Footer from './Footer'

const About = () => {
  return (<>
    <Navbar/>
    <div className='aboutmain'>
        <div className='aboutimage'>
            <img src='https://images.unsplash.com/opengraph/1x1.png?auto=format&fit=crop&w=1200&h=630&q=60&mark-w=64&mark-align=top%2Cleft& mark-pad=50&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1612036782180-6f0b6cd846fe%3Fixlib%3Drb-4.0.3%26w%3D1200%26fit%3Dcrop%26q%3D60%26fm%3Djpg%26crop%3Dfaces%252Cedges%26cs%3Dtinysrgb%26auto%3Dformat%26h%3D630%26mark-w%3D750%26mark-align%3Dmiddle%252Ccenter%26blend-mode%3Dnormal%26blend-alpha%3D10%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fsearch-input.png%253Fauto%253Dformat%2526fit%253Dcrop%2526w%253D750%2526h%253D84%2526q%253D60%2526txt-color%253D000000%2526txt-size%253D40%2526txt-align%253Dmiddle%25252Cleft%2526txt-pad%253D80%2526txt-width%253D660%2526txt-clip%253Dellipsis%2526txt%253Dmarvel%26blend%3D000000' alt='no image'/>
        </div>
        <div className='aboutpara'>

      <p>With over 3,500 comics and books available, MARVEL-STORE offers its most popular titles at an unprecedented value, while providing the highest quality reading experience possible. Single-issue comics are priced as low as just $0.99 and we also offer an extensive list of free introductory #1 issues. Additionally, DH Digital "comic bundles" group together story arcs spanning multiple issues into easily affordable packages, allowing readers to get the three or four issues that comprise a complete narrative starting at just $3.99 and up.</p>
<p>
And through cloud based technology, Digital Store purchases can be read and enjoyed on your laptop, desktop, mobile browser, and Dark Horse Bookshelf App available now on iTunes and Google Play.

To get started, simply click here to create an account, and begin building your collection today.

</p>
<h3>Consumer Inquiries</h3>
<p>

For FAQ's related to Marvel Comics and Marvel.com: Visit the Help Page.

Marvel.com, Marvel Comics app, and Marvel Digital Comics Unlimited Subscriptions:
For any inquiries unresolved by the Help Page, please use the Contact Form here.

</p>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default About
