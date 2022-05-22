class Footer extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
		<footer class="">
        <div class="container">
            <div class="footer-cont">
                <div class="footer-nav">
                    <div class="fn-left">
                        <p>DEVELOPERS</p>
                        <div>
                            <a href="https://instagram.com/ayush_m_216?utm_medium=copy_link">Ayush Mohindroo</a>
                        </div>
                        <div>
                            <a href="https://instagram.com/aashu.18__?igshid=YmMyMTA2M2Y=">Ashutosh</a>
                        </div>
                        <div>
                            <a href="https://instagram.com/_bhavleensethi27?igshid=YmMyMTA2M2Y=">Bhavleen</a>
                        </div>
                        <div>
                            <a href="https://instagram.com/bhavika.bhateja?igshid=YmMyMTA2M2Y=">Bhavika</a>
                        </div>
                    </div>
                  
                    <div class="fn-right">
                        <p>HELPFUL LINKS</p>
                        <div>
                            <a href="./help.html">Help</a>
                        </div>
                        
                    </div>
                </div>
                <div class="social">
                    <ul>
                        <li>
                            <a href="https://instagram.com/soundcloud?igshid=YmMyMTA2M2Y="><span class="insta"></span></a>
                        </li>
                        <li class="center">
                            <a href="https://twitter.com/SoundCloud?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><span class="twitter"></span></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/SoundCloud/"><span class="face"></span></a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </footer>
        `;
    }
}

window.customElements.define('custom-footer', Footer);