

<script>
   import Navbar from './NavBar.svelte'
   import Footer from './Footer.svelte'
   let size = 128;
   function get_query(name){
      if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
         return decodeURIComponent(name[1]);
     }
   try{
   refer = get_query("refer").toLowerCase();}catch(e){
   }
   
</script>
<style>
   .tm-funfact{padding:0px; margin-bottom:10px}
   .tm-funfact-icon{margin-bottom:0px}
   .coin {
   position: relative;
   width: 300px;
   height: 300px;
   margin: 50px auto;
   transform-style: preserve-3d;
   animation: rotate3d 8s linear infinite;
   transition: all 0.3s;
   }
   .coin__front, .coin__back {
   position: absolute;
   width: 300px;
   height: 300px;
   border-radius: 50%;
   overflow: hidden;
   background-color: gold;
   }
   .coin__front:after, .coin__back:after {
   content: "";
   position: absolute;
   left: -150px;
   bottom: 100%;
   display: block;
   height: 200px;
   width: 600px;
   background: #fff;
   opacity: 0.3;
   animation: shine linear 4s infinite;
   }
   .coin__front {
   background-image: url("/images/Era-Swap-Coin-min.png");
   background-size: cover;
   transform: translateZ(10px);
   }
   .coin__back {
   background-image: url("/images/Era-Swap-Coin-min.png");
   background-size: cover;
   transform: translateZ(-10px) rotateY(180deg);
   }
   .coin__edge div:nth-child(1) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(94.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(94.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(2) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(99deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(99deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(3) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(103.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(103.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(4) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(108deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(108deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(5) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(112.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(112.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(6) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(117deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(117deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(7) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(121.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(121.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(8) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(126deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(126deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(9) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(130.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(130.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(10) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(135deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(135deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(11) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(139.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(139.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(12) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(144deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(144deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(13) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(148.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(148.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(14) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(153deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(153deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(15) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(157.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(157.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(16) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(162deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(162deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(17) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(166.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(166.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(18) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(171deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(171deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(19) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(175.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(175.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(20) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(180deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(180deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(21) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(184.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(184.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(22) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(189deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(189deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(23) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(193.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(193.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(24) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(198deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(198deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(25) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(202.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(202.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(26) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(207deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(207deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(27) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(211.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(211.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(28) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(216deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(216deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(29) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(220.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(220.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(30) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(225deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(225deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(31) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(229.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(229.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(32) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(234deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(234deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(33) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(238.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(238.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(34) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(243deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(243deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(35) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(247.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(247.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(36) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(252deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(252deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(37) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(256.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(256.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(38) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(261deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(261deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(39) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(265.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(265.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(40) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(270deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(270deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(41) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(274.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(274.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(42) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(279deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(279deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(43) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(283.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(283.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(44) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(288deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(288deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(45) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(292.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(292.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(46) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(297deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(297deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(47) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(301.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(301.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(48) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(306deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(306deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(49) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(310.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(310.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(50) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(315deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(315deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(51) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(319.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(319.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(52) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(324deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(324deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(53) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(328.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(328.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(54) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(333deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(333deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(55) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(337.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(337.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(56) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(342deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(342deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(57) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(346.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(346.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(58) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(351deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(351deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(59) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(355.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(355.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(60) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(360deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(360deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(61) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(364.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(364.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(62) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(369deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(369deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(63) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(373.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(373.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(64) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(378deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(378deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(65) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(382.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(382.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(66) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(387deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(387deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(67) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(391.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(391.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(68) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(396deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(396deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(69) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background:gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(400.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(400.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(70) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(405deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(405deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(71) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(409.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(409.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(72) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(414deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(414deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(73) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(418.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(418.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(74) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(423deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(423deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(75) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(427.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(427.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(76) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(432deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(432deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(77) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(436.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(436.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(78) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(441deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(441deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(79) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(445.5deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(445.5deg) translateX(150px) rotateY(90deg);
   }
   .coin__edge div:nth-child(80) {
   position: absolute;
   height: 11.775px;
   width: 20px;
   background: gold;
   transform: translateY(144.1125px) translateX(140px) rotateZ(450deg) translateX(150px) rotateY(90deg);
   -ms-transform: translateY(144.1125px) translateX(140px) rotateZ(450deg) translateX(150px) rotateY(90deg);
   }
   .coin__shadow {
   position: absolute;
   width: 300px;
   height: 20px;
   border-radius: 50%;
   background: #000;
   box-shadow: 0 0 100px 100px #000;
   opacity: 0.125;
   transform: rotateX(90deg) translateZ(-330px) scale(0.5);
   }
   @keyframes rotate3d {
   0% {
   transform: perspective(1000px) rotateY(0deg);
   }
   100% {
   transform: perspective(1000px) rotateY(360deg);
   }
   }
   @keyframes shine {
   0%, 15% {
   transform: translateY(600px) rotate(-40deg);
   }
   50% {
   transform: translateY(-300px) rotate(-40deg);
   }
   }
   .custom-height {
   height: 250px;
   }
   .anchor-link {
   /* color: blue; */
   text-decoration: underline;
   }
</style>
<!-- Wrapper -->
<div id="wrapper" class="wrapper">
<div class="tm-header tm-header-fixed tm-sticky-header">
   <div class="container-fluid">
      <Navbar title="EraSwap"/>
      <div class="tm-mobilenav"></div>
   </div>
</div>
<!-- Heroslider Area -->
<div id="tm-area-heroslider" class="tm-heroslider">
   <div class="tm-heroslider-inner">
      <img src="images/heroslider-overlay-shape-min.png" alt="heroslider ovelay" class="tm-heroslider-ovelayshape">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-xl-8 col-lg-7 order-2 order-lg-1">
               <div class="tm-heroslider-content">
                  <h1>Decentralized Wallet for Community</h1>
                  <p>Eraswap Wallet is a decentralized wallet for the community to offer smooth and hassle free services.  </p>
                  <div class="tm-buttongroup">
                     <a href="https://eraswap.life/" target="_blank" class="tm-button tm-button-lg tm-button-white tm-button-transparent" data-toggle="modal" data-target="#terms" ><span>Get it Now</span></a>
                  </div>
                  <a href="#tm-area-features" class="tm-heroslider-scrolldown">
                  <i class="zmdi zmdi-square-down"></i>
                  </a>
               </div>
            </div>
            <div class="col-xl-4 col-lg-5 order-1 order-lg-2">
               <div class="tm-heroslider-mobileshow">
                  <img src="images/eraswap-big-logo.png" alt="EraSwap Wallet">
                  <div class="tm-heroslider-mobileshowanim">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<!--// Heroslider Area -->
<!-- Page Content -->
<main class="page-content">
   <!-- Features Area -->
   <div id="tm-area-features" class="tm-features-area tm-section tm-padding-section bg-white" >
      <div class="container" id="about_us_1">
         <div class="tm-sectiontitle text-center">
            <!-- <h2>About Era Swap Life</h2> -->
            <h4>Eraswap Wallet Features</h4>
            <span class=""><img src="/images/S_LIFE.png" height="30px" alt="S_LIFE"></span>
            <br>
         </div>
         <div class="row justify-content-center mt-30-reverse">
            <!-- Single Features -->
            <div class="col-lg-4 col-md-6 col-12 mt-30">
               <div class="tm-feature">
                  <span class="tm-feature-icon">
                  <img src="images/2_1.png" />
                  </span>
                  <div class="tm-feature-content">
                     <h5>Safe</h5>
                     <p>Private Keys stored only with the users to ensure maximum security.</p>
                  </div>
               </div>
            </div>
            <!--// Single Features -->
            <!-- Single Features -->
            <div class="col-lg-4 col-md-6 col-12 mt-30">
               <div class="tm-feature">
                  <span class="tm-feature-icon">
                  <img src="images/6_1.png" />
                  </span>
                  <div class="tm-feature-content">
                     <h5>HD Wallet</h5>
                     <p>ESW Supports Hierarchical Deterministic Wallet which comes with 2FA</p>
                  </div>
               </div>
            </div>
            <!--// Single Features -->
            <!-- Single Features -->
            <div class="col-lg-4 col-md-6 col-12 mt-30">
               <div class="tm-feature">
                  <span class="tm-feature-icon">
                  <img src="images/12_1.png" />
                  </span>
                  <div class="tm-feature-content">
                     <h5>CCSS</h5>
                     <p>Cryptocurrency Security Standard.</p>
                  </div>
               </div>
            </div>
            <!--// Single Features -->
            <!-- Single Features -->
            <div class="col-lg-4 col-md-6 col-12 mt-30">
               <div class="tm-feature">
                  <span class="tm-feature-icon">
                  <img src="images/7_1.png" />
                  </span>
                  <div class="tm-feature-content">
                     <h5>Cold Storage</h5>
                     <p>Keep your private keys offline, and go online with a watching-only wallet. </p>
                  </div>
               </div>
            </div>
            <!--// Single Features -->
            <!-- Single Features -->
            <div class="col-lg-4 col-md-6 col-12 mt-30">
               <div class="tm-feature">
                  <span class="tm-feature-icon">
                  <img src="images/4_1.png" />
                  </span>
                  <div class="tm-feature-content">
                     <h5>Multiple Digital Assets</h5>
                     <p>ESW supports ES, BTC, ETH & all ERC20 tokens</p>
                  </div>
               </div>
            </div>
            <!--// Single Features -->
            <!-- Single Features -->
            <div class="col-lg-4 col-md-6 col-12 mt-30">
               <div class="tm-feature">
                  <span class="tm-feature-icon">
                  <img src="images/1_1.png"  />
                  </span>
                  <div class="tm-feature-content">
                     <h5>Paper Wallet</h5>
                     <p>ESW supports paper wallet</p>
                  </div>
               </div>
            </div>
            <!--// Single Features -->
         </div>
      </div>
   </div>
   <!--// Features Area -->
   <style>
      @media(min-width: 768px){
      .pcvid{
      width: 560px;
      height:315px;
      }
      }
   </style>
   <div id="tm-area-services" class="tm-services-area tm-section bg-white" >
      <div class="container">
         <div class="row ">
            <div class="col-lg-12 col-md-12 col-xl-12 col-xs-12" style="margin-bottom: -108px;">
               <div class="py-4 offset-md-3">
                  <div class="tm-service-image-1 is-visible" style="margin-top: -82px; margin-bottom: -130px;">
                     <!-- <iframe  class="pcvid" src="https://www.youtube-nocookie.com/embed/CHfxYfYnKpE?rel=0&amp;showinfo=0" frameborder="0"  allowFullScreen /> -->
                     <!-- <a class="anchor-link" href="https://www.youtube-nocookie.com/embed/WTydWvczn8g?rel=0&amp;" target="_blank" rel="noopenner noreferrer" >
                        <img src="/images/es-one-world.jpg" />
                        </a> -->
                     <!-- <iframe class="pcvid" src="https://www.youtube-nocookie.com/embed/BABmKitmkic" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                  </div>
                  <div class="tm-service-image-2">
                  </div>
                  <!-- <div class="tm-service-mobileshowanim">
                     <span></span>
                     <span></span>
                     <span></span>
                     </div> -->
               </div>
            </div>
         </div>
      </div>
   </div>
   <style>
      .flip-card {
      /* background-color: white; */
      /* width: 260px; */
      height: 125px;
      perspective: 1000px;
      }
      .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      }
      .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
      -mo-z-transform: rotateY(180deg);
      }
      .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      }
      .flip-card-front{background: #fff;}
      .flip-card-back {
      background-color: #2980b9;
      /* color: white; */
      transform: rotateY(180deg);
      /* -mo-z-transform: rotateY(0deg); */
      }
      .flip-card:hover .flip-card-back {
      backface-visibility: visible;
      -mo-z-transform: rotateY(180deg);
      }
   </style>
   <!-- About Us Area -->
   <div id="tm-area-about" class="tm-about-area tm-section tm-padding-section" style="background: #eef2f4">
   <div class="container">
   <div class="row justify-content-center">
      <div class="col-lg-12">
         <div class="tm-sectiontitle text-center">
            <!-- <h2>About Era Swap Life</h2> -->
            <h4>Join Era Swap Ecosystem</h4>
            <span class=""><img src="/images/S_LIFE.png" height="30px" alt="S_LIFE"></span>
            <br><br>
            <p>Era Swap Ecosystem includes interlinked multiple platforms where Era Swap Tokens can be utilized for exchange of services, availing discounts, getting rewards and other utilities. Era Swap Team will identify and help build more such platforms in future which are built for the community and willing to incorporate ES reward system.</p>
         </div>
      </div>
   </div>
   <div class="row justify-content-center">
      <div class="col-lg-12">
         <div class="row">
            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/13.png" alt="ESN Network">
                        </span>
                        <p style="font-size:13px">Decentralized  Marketplace</p>
                     </div>
                     <a href="https://eraswap.network/" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/esn-logo.png" alt="SW_logo" height="105px">
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>

            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/12-min.png" alt="12-min">
                        </span>
                        <p style="font-size:13px">Social Community Platform</p>
                     </div>
                     <a href="https://timeswappers.com/swapperswall" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/SW_Logo_Gold_Pyramid-01.png" alt="SW_logo" height="105px">
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/10-min.png" alt="10-min">
                        </span>
                        <p style="font-size:13px">Decentralized Token Vesting</p>
                     </div>
                     <a href="https://www.timeally.io/" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/g-min.png" alt="g-min" height="105px">
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/8-min.png" alt="8-min">
                        </span>
                        <p style="font-size:13px">Decentralized Wallet</p>
                     </div>
                     <a href="https://eraswapwallet.com/" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/f-min.png" alt="f-min" height="105px">
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            
         </div>
         <br><br>
         <div class="row">
            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/2-min.png" alt="2-min">
                        </span>
                        <p style="font-size:13px">P2P Marketplace Platform</p>
                     </div>
                     <a href="https://timeswappers.com" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/A-min.png" alt="A-min" height="105px">
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/9-min.png" alt="9-min">
                        </span>
                        <p style="font-size:13px">Affiliate Programme</p>
                     </div>
                     <a href="https://dayswappers.com/" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/d-min.png" alt="d-min" height="105px">
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/11-min.png" alt="11-min">
                        </span>
                        <p style="font-size:13px">Merchants & Shoppers e-Retail</p>
                     </div>
                     <a href="https://buzcafe.com/" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/c-min.png" alt="c-min" height="105px">
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/3-min.png" alt="3-min">
                        </span>
                        <p style="font-size:13px">eLearning Platform</p>
                     </div>
                     <a href="https://eraswap.academy/wallet-login" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/academy.png" alt="academy" height="105px">
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
           
         </div>
         <br><br>
         <div class="row">
             <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/5-min.png" alt="5-min">
                        </span>
                        <p style="font-size:13px">Decentralized Prediction Platform</p>
                     </div>
                     <a href="https://www.betdeex.com/" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/betdeex-logo.png" alt="betdeex-logo" height="105px">
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/7-min.png" alt="7-min">
                        </span>
                        <p style="font-size:13px">P2P Lend & Borrow</p>
                     </div>
                     <a href="https://computeex.net" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/comp-lb.png" alt="comp-lb" height="105px" >
                           </div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-md-3">
               <div class="flip-card">
                  <div class="flip-card-inner">
                     <div class="flip-card-front">
                        <span class="tm-funfact-icon">
                        <img src="/images/6-min.png" alt="6-min">
                        </span>
                        <p style="font-size:13px">Multi Exchange Solution</p>
                     </div>
                     <a href="https://computeex.net" target="_blank">
                        <div class="flip-card-back">
                           <div class="tm-funfact text-center">
                              <img src="images/comp.png" alt="comp" height="105px">
                           </div>
                     </a>
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <span class="tm-funfact-icon">
                           <img src="/images/minus-red.png" alt="faith minus">
                           </span>
                           <p style="font-size:13px">Decentralized Dispute Management </p>
                        </div>
                        <a href="http://faithminus.com/" target="_blank">
                           <div class="flip-card-back">
                              <div class="tm-funfact text-center">
                                 <img src="images/faithminus.png" alt="faith minus" height="105px" >
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
              
            </div>
            <br><br>
            <div class="row">
               <div class="col-md-3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <span class="tm-funfact-icon">
                           <img src="/images/Farmer.png" alt="Farmer">
                           </span>
                           <p style="font-size:13px">Farming Community</p>
                        </div>
                        <a href="https://valueoffarmers.org/" target="_blank">
                           <div class="flip-card-back">
                              <div class="tm-funfact text-center">
                                 <img src="images/vof.png" alt="vof" height="105px">
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <span class="tm-funfact-icon">
                           <img src="/images/certidaap-red.png" alt="certidaap">
                           </span>
                           <p style="font-size:13px">Blockchain Authentified Certificates</p>
                        </div>
                        <a href="https://certidapp.com/" target="_blank">
                           <div class="flip-card-back">
                              <div class="tm-funfact text-center">
                                 <img src="images/certidapp.png" alt="certidaap" height="105px">
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <span class="tm-funfact-icon">
                           <img src="/images/Kyc-red.png" alt="Kyc dapp">
                           </span>
                           <p style="font-size:13px">Blockchain Authentified KYC</p>
                        </div>
                        <a href="http://kycdapp.com/" target="_blank">
                           <div class="flip-card-back">
                              <div class="tm-funfact text-center">
                                 <img src="images/kycdapp.png" alt="Kyc dapp" height="105px" >
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="col-md-3">
                  <div class="flip-card">
                     <div class="flip-card-inner">
                        <div class="flip-card-front">
                           <span class="tm-funfact-icon">
                           <img src="/images/booking-red.png" alt="Booking dapp">
                           </span>
                           <p style="font-size:13px">P2P Booking</p>
                        </div>
                        <a href="http://bookingdapp.com/" target="_blank">
                           <div class="flip-card-back">
                              <div class="tm-funfact text-center">
                                 <img src="images/booking.png" alt="Booking dapp" height="105px">
                              </div>
                        </a>
                        </div>
                     </div>
                  </div>
                  
               </div>
               <br><br>
               <div class="row">
                  <div class="col-md-3">
                     <div class="flip-card">
                        <div class="flip-card-inner">
                           <div class="flip-card-front">
                              <span class="tm-funfact-icon">
                              <img src="/images/charity-red.png" alt="charity dapp">
                              </span>
                              <p style="font-size:13px">Decentralized Charity</p>
                           </div>
                           <a href="http://charitydapp.com/" target="_blank">
                              <div class="flip-card-back">
                                 <div class="tm-funfact text-center">
                                    <img src="images/charitydapp.png" alt="charity dapp" height="105px">
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="flip-card">
                        <div class="flip-card-inner">
                           <div class="flip-card-front">
                              <span class="tm-funfact-icon">
                              <img src="/images/rent-red.png" alt="renting dapp">
                              </span>
                              <p style="font-size:13px">Decentralized Renting</p>
                           </div>
                           <a href="http://rentingdapp.com/" target="_blank">
                              <div class="flip-card-back">
                                 <div class="tm-funfact text-center">
                                    <img src="images/rentingdapp.png" alt="renting dapp" height="105px" >
                                 </div>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-3">
                     <div class="flip-card">
                        <div class="flip-card-inner">
                           <div class="flip-card-front">
                              <span class="tm-funfact-icon">
                              <img src="/images/doctor-red.png" alt="curedapp">
                              </span>
                              <p style="font-size:13px">Decentralized Health Assistance </p>
                           </div>
                           <a href="http://www.curedapp.com/" target="_blank">
                              <div class="flip-card-back">
                                 <div class="tm-funfact text-center">
                                    <img src="images/curedapp.png" alt="curedapp" height="105px">
                                 </div>
                           </a>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-front">
                                 <span class="tm-funfact-icon">
                                 <img src="/images/Dating.png" alt="Dateswappers">
                                 </span>
                                 <p style="font-size:13px">Next Gen Dating and Match-Making</p>
                              </div>
                              <a href="https://dateswappers.com/" target="_blank">
                                 <div class="flip-card-back">
                                    <div class="tm-funfact text-center">
                                       <img src="images/date.png" alt="Dateswappers" height="105px">
                                    </div>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     
                  </div>
                  <br><br>
                  <div class="row">
                     <div class="col-md-3">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-front">
                                 <span class="tm-funfact-icon">
                                 <img src="/images/coupondapp-red.png" alt="Coupon dapp">
                                 </span>
                                 <p style="font-size:13px">ES Gift Card</p>
                              </div>
                              <a href="http://coupondapp.com/" target="_blank">
                                 <div class="flip-card-back">
                                    <div class="tm-funfact text-center">
                                       <img src="images/coupondapp.png" alt="Coupon dapp" height="105px">
                                    </div>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-front">
                                 <span class="tm-funfact-icon">
                                 <img src="/images/recycle-red.png" alt="recycling dapp">
                                 </span>
                                 <p style="font-size:13px">Blockchain Powered Waste Mgmt</p>
                              </div>
                              <a href="http://recyclingdapp.com/" target="_blank">
                                 <div class="flip-card-back">
                                    <div class="tm-funfact text-center">
                                       <img src="images/recyclingdapp.png" alt="recycling dapp" height="105px">
                                    </div>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3">
                        <div class="flip-card">
                           <div class="flip-card-inner">
                              <div class="flip-card-front">
                                 <span class="tm-funfact-icon">
                                 <img src="/images/pooling-red.png" alt="pooling dapp">
                                 </span>
                                 <p style="font-size:13px">P2P Ride Sharing</p>
                              </div>
                              <a href="Poolindapp.com" target="_blank">
                                 <div class="flip-card-back">
                                    <div class="tm-funfact text-center">
                                       <img src="images/poolingdapp.png" alt="pooling dapp" height="105px">
                                    </div>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!--// About Us Area -->
      <!--// Global Exchange -->
      <!--// Services Area -->
      <div id="tm-area-faq" class="tm-faq-area tm-section tm-padding-section bg-white" >
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-lg-8">
                  <div class="tm-sectiontitle text-center">
                     <h4>FAQ's</h4>
                     <span class=""><img src="/images/S_LIFE.png" alt="s_life" height="30px"></span>
                  </div>
               </div>
            </div>
            <div class="row align-items-center">
               <div class="col-lg-8 offset-md-2">
                  <!-- Accordion Wrapper -->
                  <div id="tm-accordion1" class="tm-accordion">
                     <div class="card">
                        <div class="card-header" id="tm-accordion1-heading1n1">
                           <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tm-accordion1-collapse1n1"
                                 aria-expanded="true" aria-controls="tm-accordion1-collapse1n1">
                              <img src="/images/q.png" alt="q"> How do I create a new wallet?
                              </button>
                           </h5>
                        </div>
                        <div id="tm-accordion1-collapse1n1" class="collapse" aria-labelledby="tm-accordion1-heading1n1"
                           data-parent="#tm-accordion1">
                           <div class="card-body offset-md-1">
                              <p>For creating a new wallet, please register on the ESW website. After registration, please login to the dashboard where you can create Ethereum Wallet, Bitcoin Wallet and Bitcoin Cash Wallet. </p>
                           </div>
                        </div>
                     </div>
                     <!-- <div class="card">
                        <div class="card-header" id="tm-accordion1-heading1n2">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tm-accordion1-collapse1n2"
                                    aria-expanded="true" aria-controls="tm-accordion1-collapse1n2">
                                    <img src="/images/q.png"> What is Single Sign-on in Era Swap Ecosystem?
                                </button>
                            </h5>
                        </div>
                        <div id="tm-accordion1-collapse1n2" class="collapse" aria-labelledby="tm-accordion1-heading1n2"
                            data-parent="#tm-accordion1">
                            <div class="card-body offset-md-1">
                              <p>Please watch this video to understand "Era Swap Life - One World"</p>
                              <iframe src="https://www.youtube-nocookie.com/embed/Wfxgd4l9cmM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        </div> -->
                     <div class="card">
                        <div class="card-header" id="tm-accordion1-heading1">
                           <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tm-accordion1-collapse1"
                                 aria-expanded="true" aria-controls="tm-accordion1-collapse1">
                              <img src="/images/q.png" alt="q"> How can I send transactions?
                              </button>
                           </h5>
                        </div>
                        <div id="tm-accordion1-collapse1" class="collapse" aria-labelledby="tm-accordion1-heading1"
                           data-parent="#tm-accordion1">
                           <div class="card-body offset-md-1">
                              <p>ESW lets anyone with a balance of ETH or ERC20 tokens send a transaction, without additional charges. Using the Ethereum blockchain takes gas, which is paid for in ETH, so we recommend having at least .01 ETH to cover around 2 - 3 transactions. </p>
                           </div>
                        </div>
                     </div>
                     <div class="card">
                        <div class="card-header" id="tm-accordion1-heading2">
                           <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tm-accordion1-collapse2"
                                 aria-expanded="false" aria-controls="tm-accordion1-collapse2">
                              <img src="/images/q.png" alt="q">  HI forgot my private key. What can I do?
                              </button>
                           </h5>
                        </div>
                        <div id="tm-accordion1-collapse2" class="collapse" aria-labelledby="tm-accordion1-heading2"
                           data-parent="#tm-accordion1">
                           <div class="card-body offset-md-1">
                              <p>ESW does not offer support to recover or reset private keys. We always suggest writing down private keys on physical paper/notebooks for safekeeping. Maybe you saved it on your computer! </p>
                           </div>
                        </div>
                     </div>
                     <div class="card">
                        <div class="card-header" id="tm-accordion1-heading3">
                           <h5 class="mb-0">
                              <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tm-accordion1-collapse3"
                                 aria-expanded="false" aria-controls="tm-accordion1-collapse3">
                              <img src="/images/q.png" alt="q">  I forgot my password. What can I do?
                              </button>
                           </h5>
                        </div>
                        <div id="tm-accordion1-collapse3" class="collapse" aria-labelledby="tm-accordion1-heading3"
                           data-parent="#tm-accordion1">
                           <div class="card-body offset-md-1">
                              <p>If you have forgotten the login password, you can recover it by using your email. Go to Signing page and click on forgot password. Please enter your email address to receive the password reset link. </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!--// Accordion Wrapper -->
               </div>
            </div>
         </div>
      </div>
      <!--// Frequently Ask Question -->
</main>
<!--// Page Content -->
</div>
<Footer />
<div id="css-only-modals">
   <input id="modal1" class="css-only-modal-check" type="checkbox" checked/>
   <!-- <div class="css-only-modal">
      <label for="modal1" class="css-only-modal-close"><i class="fa fa-times fa-2x"></i></label>
      <a href="https://www.probit.com/app/exchange/ES-BTC" target="_blank"><img src="images/annoncement2.jpeg" class="img-responsive svelte-1ewjq1k" alt="" style=" width:100%">  </a>
      </div> -->
   <div id="screen-shade"></div>
</div>

