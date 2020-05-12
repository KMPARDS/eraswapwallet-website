 <script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>



<style>
.tm-padding-section {
  padding-top: 80px;
  padding-bottom: 0px !important;
}


</style>
<!-- Footer Area -->
<div class="tm-footer bg-gradient" style="z-index: auto">
    <div class="container">
    <img src="/images/chatbot.png" alt="chatbot" class="open-button" onclick="openForm()" style="width:120px">

<div class="chat-popup" id="myForm">
  <form class="form-container">
     <iframe
             allow="microphone;"
             width="350"
             height="430"
             src="https://console.dialogflow.com/api-client/demo/embedded/11b7c637-920a-4280-8c9e-f948a97e3ac6">
    </iframe>
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
  </form>
</div>
        <div class="tm-footer-toparea tm-padding-section" >
            <div class="row widgets tm-footer-widgets" style="padding-top: 0px !important; padding-bottom: 3px !important;">
                <div class="col-xl-5 col-lg- col-md-4 col-12">
                    <div class="single-widget widget-info" style="padding-right:0">
                        <a href="/" class="widget-info-logo">
                            <img src="/images/es_newlogo-white-min.png" width="180px" alt="">
                        </a>
                        <p>Eraswap Wallet is a decentralized wallet for the community to offer smooth and hassle free services.</p>
                       
                        <!-- <p>Dolor enim sit et perferendis quia in. Sed perferendis aliquid quo vel
                            necessitatibus commodi similique et. Veniam ducimus sed rerum cumque ipsum eos
                            omnis eos blanditiis.</p> -->
                    </div>
                </div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
     
      <div class="modal-body text-center">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                <span class=""><img src="/images/wallet-dash.png" height="30px" alt="S_LIFE"></span><br><br>
                <h3>New Update</h3>
                <br>
                <h6>Eraswap Wallet has shifted inside eraswap life so click below button go to eraswap.life</h6>
                <br><br>

                <a class="nav-link text-white tm-button tm-button-lg"  href="https://eraswap.life/" target="_blank"><span style="color:#fff">Proceed</span></a>
                    
      </div>
     
    </div>
  </div>
</div>
                <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                    <div class="single-widget">
                         <h5 class="widget-title">Other Links</h5> 
                        <ul>
                           
                            <li><i class="fa fa-angle-double-right"></i> <a data-toggle="modal" data-target="#exampleModal"><i class="zmdi zmdi-apple"></i>Create Wallet <span style="font-size:10px;">(New Users)</span></a></li>

                            <li><i class="fa fa-angle-double-right"></i> <a href="https://eraswap.life/access-my-wallet" target="_blank"><i class="zmdi zmdi-apple"></i>Load Wallet  <span style="font-size:10px; ">(Existing Users)</span></a></li>

                            <li><i class="fa fa-angle-double-right"></i> <a href="/pdf/Eraswap_Wallet_Terms.pdf" target="_blank"><i class="zmdi zmdi-apple"></i><span>Terms & Condition</span></a></li>

                            <li><i class="fa fa-angle-double-right"></i> <a href="/pdf/Eraswap_Wallet_Privacy_Policy.pdf" target="_blank"><i class="zmdi zmdi-apple"></i><span>Privacy Policy</span></a></li>

                           
                        </ul>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-12">
                    <div class="single-widget">
                         <h5 class="widget-title">Social Links</h5>
                        <ul class="policy_list">
                            <li><a href="https://www.facebook.com/eraswap/" target="_blank"><i class="fa fa-facebook" style="font-size:22px"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/eraswap/" target="_blank"><i class="fa fa-linkedin" style="font-size:22px"></i></a></li>
                            <li><a href="https://www.pinterest.com/eraswapt/" target="_blank"><i class="fa fa-pinterest" style="font-size:22px"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCGCP4f5DF1W6sbCjS6y3T1g" target="_blank"><i class="fa fa-youtube" style="font-size:22px"></i></a></li>
                            <li><a href="https://www.instagram.com/eraswap/" target="_blank"><i class="fa fa-instagram" style="font-size:22px"></i></a></li>
                            <li><a href="https://medium.com/@eraswap" target="_blank"><i class="fa fa-medium" aria-hidden="true" style="font-size:22px"></i></a></li>
                            <li><a href="https://coinmarketcap.com/currencies/era-swap/" target="_blank"><img src="/images/cmc.png" style="height: 22px; margin-bottom: 7px;" /></a></li>
                            <li style="margin-left:-4px"><a href="https://ethplorer.io/address/0xef1344bdf80bef3ff4428d8becec3eea4a2cf574" target="_blank"><img src="/images/ethplorer2.png" style="height: 22px; margin-bottom: 7px;" /></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-4 col-12" on:click={toggle}>
                   
                  
                  

            </div>
        </div>
    </div>
            <!-- <div class="row">
                <div class="col-md-12 offset-md-5">
                    <h4 class="text-white">Smart Contracts Address</h4><br>
                </div>
            </div>

            <div class="row offset-md-1" style="padding-bottom: 40px;">
                <div class="col-md-3">
                     <a href="https://etherscan.io/address/0xef1344bdf80bef3ff4428d8becec3eea4a2cf574#code" target="_blank" class="tm-button tm-button-lg tm-button-white tm-button-transparent" style="height: 41px; line-height: 36px"><i class="zmdi zmdi-apple"></i><span>Era Swap Token (ES)</span></a>
                </div>
                 <div class="col-md-3">
                     <a href="https://etherscan.io/address/0x20ee679d73559e4c4b5e3b3042b61be723828d6c#code" target="_blank" class="tm-button tm-button-lg tm-button-white tm-button-transparent" style="height: 41px; line-height: 36px"><i class="zmdi zmdi-apple"></i><span>Newly Released Token (NRT)</span></a>
                </div>
                 <div class="col-md-3">
                     <a href="https://etherscan.io/address/0x42225682113E6Ed3616B36B4A72BbaE376041D7c#code" target="_blank" class="tm-button tm-button-lg tm-button-white tm-button-transparent" style="height: 41px; line-height: 36px"><i class="zmdi zmdi-apple"></i><span>BetDeEx DApp</span></a>
                </div>
                 <div class="col-md-3">
                     <a href="https://etherscan.io/address/0x5630ee5f247bd6b61991fbb2f117bbeb45990876#code" target="_blank" class="tm-button tm-button-lg tm-button-white tm-button-transparent" style="height: 41px; line-height: 36px"><i class="zmdi zmdi-apple"></i><span>TimeAlly DApp</span></a>
                </div>
                <div class="col-md-3">
                     <a href="https://etherscan.io/address/0xbad9af4db5401b7d5e8177a18c1d69c35fc03fd3#code" target="_blank" class="tm-button tm-button-lg tm-button-white tm-button-transparent" style="height: 41px; line-height: 36px"><i class="zmdi zmdi-apple"></i><span>TSGAP DApp</span></a>
                </div>
            </div> -->
        <div class="tm-footer-bottomarea">
            <div class="row align-items-center">
                <div class="col-md-7">
                    <p class="tm-footer-copyright">Copyright 2020 <a rel="noopener noreferrer">Era Swap Wallet</a>. </p>
                    
                </div>
                <!-- <div class="col-md-5">
                            <ul class="tm-footer-social">
                                <li>
                                    <a href="#">
                                        <i class="zmdi fa fa-facebook"></i>
                                        <i class="zmdi zmdi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="zmdi zmdi-dribbble"></i>
                                        <i class="zmdi zmdi-dribbble"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="zmdi zmdi-behance"></i>
                                        <i class="zmdi zmdi-behance"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="zmdi zmdi-twitter"></i>
                                        <i class="zmdi zmdi-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="zmdi zmdi-pinterest"></i>
                                        <i class="zmdi zmdi-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div> -->

            </div>
        </div>
    </div>
</div>
<!--// Footer Area -->
