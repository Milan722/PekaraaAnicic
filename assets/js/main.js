$(document).ready(function(){
    console.log("Provera");
    //Promena boje nav elemenata na scroll
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if(scroll < 2000){
        $("#pocetna-nav").addClass("navbar-scroll");
      }else{
        $("#pocetna-nav").removeClass("navbar-scroll");
      }
      if(scroll >= 2000 && scroll < 3000){
        $("#o-nama-nav").addClass("navbar-scroll");
      }else{
        $("#o-nama-nav").removeClass("navbar-scroll");
      }
      if(scroll >= 3000 && scroll < 4000){
        $("#u-ponudi-nav").addClass("navbar-scroll");
      }else{
        $("#u-ponudi-nav").removeClass("navbar-scroll");
      }
      if(scroll >= 4000 && scroll < 4900){
        $("#kontakt-nav").addClass("navbar-scroll");
      }else{
        $("#kontakt-nav").removeClass("navbar-scroll");
      }
      if(scroll >= 4900){
        $("#o-autoru-nav").addClass("navbar-scroll");
      }else{
        $("#o-autoru-nav").removeClass("navbar-scroll");
      }
    });
  
    //#region Meni
    let neuredjenaLista = document.querySelector("#neuredjenaLista");
    let nazivOblasti = ["Početna","O nama","U ponudi","Kontakt","O autoru"];
    let idOblasti = ["pocetna-nav","o-nama-nav","u-ponudi-nav","kontakt-nav","o-autoru-nav"];
    let linkKaOblasti = ["#","#o-nama","#u-ponudi","#kontakt","#o-autoru"];
    var ispisNL = "";
    for(let i=0; i<nazivOblasti.length; i++)
    {
      ispisNL += `<li class="nav-item">
                        <a id="${idOblasti[i]}" class="nav-link" href="${linkKaOblasti[i]}">${nazivOblasti[i]}</a>
                  </li>`;
    }
    neuredjenaLista.innerHTML = ispisNL;
    document.querySelector("#pocetna-nav").classList.add("navbar-scroll");
    //#endregion
  
    //#region Slider
    var slajder = document.querySelector("#carousel");
    var pozicijaSlike = ["prva","druga","treca","cetvrta"];
    var slikaSlajd = ["assets/img/slider1.png","assets/img/slider2.png","assets/img/slider3.png", "assets/img/slider4.png"];
    var ispisCarousel = "";
    for(let i=0;i<slikaSlajd.length;i++)
    {
      ispisCarousel += `<img src="${slikaSlajd[i]}" class="img-fluid" alt="Ovo je ${pozicijaSlike} slika u okviru slajdera." class="col-12 px-0"/>`;
    }
    slajder.innerHTML = ispisCarousel;
    //Upotrebljen je plugin slick
      $("#carousel").slick({
        autoplay:true,
        speed:2000,
        dots: true,
        arrows:false,
        infinite: true,
        fade: true,
        cssEase: 'linear'
      });
    //#endregion
  
    //#region Podrucje rada
    var podrucjeRadaBlokoviTekst = [
      "U ponudi imamo različite vrste hlebova, mini pica, kiflica po kojima smo poznati, krofne, kao i druge pekarske proizvode i peciva. Kompletnu ponudu peciva možete da vidite <a class='vv-narandzasta-slova vv-fw-700' href='#u-ponudi-peciva'>ovde</a>.",
      
      "U ponudi imamo nekoliko vrsta pica. Neke od njih su kaprićoza, gurmanska i vulkan za najveće ljubitelje ovog italijanskog specijaliteta. Kompletnu ponudu možete da vidite <a class='vv-narandzasta-slova vv-fw-700' href='#u-ponudi-pice'>ovde</a>."];
    var podrucjeRadaFontAwesome = ["bread","pizza"];
    var podrucjeRadaDescId = ["bread", "pizza"];
  
    var podrucjeRadaSvojstva = document.querySelector("#podrucjeRadaSvojstva");
  
    var ispisPodrucjeRada = "";
    for(let i=0;i<podrucjeRadaBlokoviTekst.length;i++)
    {
      ispisPodrucjeRada += `<section class="col-12 col-xl-5 mr-xl-2 mr-0 mb-2 mb-xl-0 px-0">
                            <div class="desc">
                              <div class="d-flex justify-content-center">
                                <div class="vv-fa-block mt-4">
                                  <i class="fas fa-${podrucjeRadaFontAwesome[i]}-slice" aria-hidden="true"></i>
                                </div>
                              </div>
                              <div id="podrucje-rada-${podrucjeRadaDescId[i]}" class="pb-4 pt-2 px-4">
                                <p class="vv-ta-left vv-fs-26 vv-crna-slova">${podrucjeRadaBlokoviTekst[i]}</p>
                              </div>
                            </div>
                          </section>`;
    }
    podrucjeRadaSvojstva.innerHTML = ispisPodrucjeRada;
    //#endregion
  
    //#region O nama
    var misijaReg = document.querySelector("#misija");
    var idPR = ["misija","vizija"];
    var naslovPR = ["Naša misija", "Naša vizija"];
    var misijaId = ["misija-desc1","misija-desc2"];
    var klaseSekcMisija = ["mt-4 d-xl-block d-none", "d-xl-none d-block"];
    var klaseDivMisija = ["pb-4 mt-2 px-xl-3","px-xl-5 my-md-2"];
    var pt3Misija = ["","pt-3"];
    var ispisONama = "";
    for(let i=0; i<idPR.length;i++){
      var divMisija = `<div id="${misijaId[i]}" class="col-12 col-xl-6 row row-cols-1 mx-0 ${klaseSekcMisija[i]}">
                        <div class="px-2 pb-4 mt-2 px-xl-3 px-md-2 d-flex flex-column justify-content-center align-items-center ${klaseDivMisija}">
                          <h3 class="vv-h3 ${pt3Misija[i]}">Naša misija</h3>
                          <p class="vv-fs-22 pt-2">
                            Težimo da svojom ponudom pekarskih proizvoda, kao i pica, zadovoljimo sve potrebe potrošača koji žele kvalitetan obrok.
                          </p>
                          <p class="vv-fs-22 pt-2">
                            Želimo da kupci u formatu pekare dobiju kvalitetnu i raznovrsnu ponudu proizvoda po niskim cenama. Takođe, želimo da prepoznatiljivim, prijatnim ambijentom naše mušterije osete komfort.
                          </p>
                        </div>
                      </div>`;
      var divMisijaPic = `<div id="misija-pic" class="vv-bg-image vv-h-450 col-12 col-xl-6 px-0"></div>`;
      if(misijaId[i] == "misija-desc1")
      {
        ispisONama += divMisija + divMisijaPic;
      }else{
        ispisONama += divMisija;
      }
    }
    misijaReg.innerHTML = ispisONama;
  
    var descVizija = [
      "Vizija organizacije je da „Pekara Aničić“ bude sinonim za kvalitetnu i ukusnu hranu.",
  
      "Takođe, želimo da imamo lidersku poziciju na tržištu i da stalnim rastom broja objekata budemo dostupni što većem broju stanovništva, a podizanjem kvaliteta i standarda povećamo lojalnost kupaca."
    ];
    var vizijaDesc = document.querySelector("#vizija-desc");
    var ispisVizijaTekst = `<div class="px-2 px-xl-3 px-md-2 my-3 d-flex flex-column justify-content-center align-items-center d-none">
                              <h3 class="vv-h3">Naša vizija</h3>`;
    for(let i=0; i<descVizija.length; i++){
      ispisVizijaTekst += `<p class="vv-fs-22 pt-3">${descVizija[i]}</p>`;
    }
    ispisVizijaTekst += '</div>';
    vizijaDesc.innerHTML = ispisVizijaTekst;
    //#endregion
  
    //#region U ponudi
    var uPonudiPecivaSvojstva = document.querySelector("#uPonudiSvojstva");
    var pecivaPonuda = ["Krofne","Mini-pice","Kiflice sa viršlama","Hleb"];
    var cenaPeciva = ["30 RSD/kom","80 RSD/100 gr.","100 RSD/100 gr.","40 RSD/kom"];
    var pecivaId = ["kr","mi","ki","hl"];
    var ispisPonudaPeciva = "";
    for(let i=0;i<pecivaPonuda.length;i++)
    {
      ispisPonudaPeciva += `<article class="col-12 col-md-6 col-xl-3 mb-xl-0 mb-3">
                            <section class="vv-b-grey-double">
                              <div id="pecivo${i+1}-pic" class="vv-bg-image vv-h-320"></div>
                              <div class="vv-header-color naziv d-flex justify-content-center vv-bg-white vv-fw-700 vv-fs-22 py-2">${pecivaPonuda[i]}</div>
                              <div class="ponuda-btn">
                                <div class="d-flex align-items-center price row mx-0">
  
                                  <button type="button" disabled class="vv-fw-700 ponuda-fs btn-lg vv-br-0 col-sm-8 col-12 text-center px-0 mr-0 tx-b">${cenaPeciva[i]}</button>
                                  <button type="button" class="btn-secondary vv-br-0 btn-lg col-sm-4 col-12 text-uppercase text-center px-0 mr-0 btn-bg" onclick="window.location='#kontakt',poruci('${pecivaId[i]}'),konfDdl(getElementById('ponuda'),getElementById('kolicina'))">Poruči</button>
                                </div>
                              </div>
                            </section>
                          </article>`;
    }
    uPonudiPecivaSvojstva.innerHTML = ispisPonudaPeciva;
  
    var uPonudiPizzaSvojstva = document.querySelector("#uPonudiPizza");
    var pizzaPonuda = ["Margarita","Capriciosa","Quattro Stagioni","Vegeteriana"];
    var cenaPizza = ["100 RSD/parče","120 RSD/parče","140 RSD/parče","150 RSD/parče"];
    var pizzeId = ["ma","ca","qu","ve"];
  
    var ispisPonudaPizza = "";
    var ponuda = document.querySelector("#ponuda");
    var kolicina = document.querySelector("#kolicina");
    for(let i=0;i<pecivaPonuda.length;i++)
    {
      ispisPonudaPizza += `<article class="col-12 col-md-6 col-xl-3 mb-xl-0 mb-3">
                            <section class="vv-b-grey-double">
                              <div id="pizza${i+1}-pic" class="vv-bg-image vv-h-320"></div>
                              <div class="vv-header-color naziv d-flex justify-content-center vv-bg-white vv-fw-700 vv-fs-22 py-2">${pizzaPonuda[i]}</div>
                              <div class="ponuda-btn">
                                <div class="d-flex align-items-center price row mx-0">
                                  <button type="button" disabled class="vv-fw-700 ponuda-fs btn-lg vv-br-0 col-sm-8 col-12 text-center px-0 mr-0 tx-b">${cenaPizza[i]}</button>
                                  <button type="button" class="btn-secondary vv-br-0 btn-lg col-sm-4 col-12 text-uppercase text-center px-0 mr-0 btn-bg" onclick="window.location='#kontakt',poruci('${pizzeId[i]}'),konfDdl(getElementById('ponuda'),getElementById('kolicina'))">Poruči</button>
                                </div>
                              </div>
                            </section>
                          </article>`;
    }
    uPonudiPizzaSvojstva.innerHTML = ispisPonudaPizza;
    //#endregion
  
    //#region Kontakt
    var kontaktForma = document.getElementById("kontaktForma");
    var poljeFormaIdIAGP = ["poljeImePrezime","poljeAdresa","poljeGrad","poljePosBroj","poljeTelefon"];
    var formaIdIAGP = ["imePrezime","adresa","grad","posBroj","telefon"];
    var labelTekstIAGP = ["Ime i prezime","Adresa","Grad","Poštanski broj","Broj telefona"];
    var placeholderiIAGP = ["Marko Marković","Zdravka Čelara 16","Beograd","11060", "065323232"];
    var ispisPoljeFormIAGP = "";
    var pIdIAGPT = ["pImePrezime","pAdresa","pGrad","pPosBroj","pTelefon"];
    var tekstPoljeIAGPT = ["Pogrešno uneto ime i prezime, početno slovo mora biti veliko.",
                          "Pogrešno uneta adresa, unesite naziv ulice i broj.",
                          "Pogrešno unet grad, početno slovo mora biti veliko.",
                          "Pogrešno uneto, poštanski broj mora imati 5 cifara",
                          "Pogrešno unet  broj telefona. Morate uneti 9 ili 10 cifara."];
    var pIdIAGPTPrazno = ["pImePrezimePrazno","pAdresaPrazno","pGradPrazno","pPosBrojPrazno","pTelefonPrazno"];
    var tekstPoljeIAGPTPrazno = ["Molimo unesite Vaše ime i prezime.",
                                "Molimo unesite naziv Vaše ulice i broj.",
                                "Molimo unesite Vaš grad.",
                                "Molimo unesite Vaš poštanski broj.",
                                "Molimo unesite Vaš broj telefona."];
    for(let i=0;i<poljeFormaIdIAGP.length;i++)
    {
      ispisPoljeFormIAGP += `<div id="${poljeFormaIdIAGP[i]}" class="form-group row px-4">
                              <label class="col-12 px-0" for="${formaIdIAGP[i]}">${labelTekstIAGP[i]}:</label>
                              <input id="${formaIdIAGP[i]}" class="col-12 py-1 vv-br-025" type="text" name="${formaIdIAGP[i]}" placeholder="${placeholderiIAGP[i]}">
                              <p id="${pIdIAGPT[i]}" class="d-none">${tekstPoljeIAGPT[i]}</p>
                              <p id="${pIdIAGPTPrazno[i]}" class="d-none">${tekstPoljeIAGPTPrazno[i]}</p>
                            </div>`;
    }
    kontaktForma.innerHTML = ispisPoljeFormIAGP;
  
    var opcije = ["kr","mi","ki","hl","ma","ca","qu","ve"];
    var opcijeTekst = ["Krofne","Mini-pice","Kiflice sa viršlama","Hleb","Margarita","Capriciosa","Quattro Stagioni","Vegeteriana"];
    var ispisIzbor = `<div id="izbor" class="col-12 px-2">
                        <label for="ponuda">Odaberite proizvod:</label>
                        <select id="ponuda" class="form-control" onchange="konfDdl(ponuda,kolicina)">
                          <option value="0">Izaberite...</option>`;
    for(i=0; i<opcije.length;i++){
      ispisIzbor += `<option id="${opcije[i]}" value="${opcije[i]}">${opcijeTekst[i]}</option>`;
    }
    ispisIzbor += `</select>
                <p id="pPonuda" class="d-none">Morate izabrati neki od proizvoda.</p>
              </div>`;
    kontaktForma.innerHTML += ispisIzbor;
  
    var ispisKolicina = `<div id="ddlKolicina" class="col-12 px-2 pt-2 d-none">
                          <label for="kolicina">Odaberite količinu:</label>
                          <select id="kolicina" class="form-control">
                            <option value="0"> Izaberite...</option>
                          </select>
                          <p id="pKolicina" class="d-none">Morate izabrati količinu.</p>
                        </div>`;
    kontaktForma.innerHTML += ispisKolicina;
  
    var preuzimanjaId = ["licno","dostava"];
    var preuzimanjaValue = ["L","D"];
    var preuzimanjaLabelTekst = ["Lično preuzimanje","Dostava"];
    var ispisPreuzimanje = `<div id="nacinPreuzimanja" class="form-group row px-0 mt-4 mb-0">
                              <div class="offset-1"></div>`;
    for(let i=0; i<preuzimanjaId.length; i++){
      ispisPreuzimanje +=`<div class="form-check col-5">
                            <input class="form-check-input" id="${preuzimanjaId[i]}" type="radio" name="nacinPreuzimanja" value="${preuzimanjaValue[i]}">
                            <label class="form-check-label" for="${preuzimanjaId[i]}">${preuzimanjaLabelTekst[i]}</label>
                          </div>`;
    }
    ispisPreuzimanje += `<div class="col-12 row ml-3">
                      <p id="pPreuzimanje" class="col-12 vv-white14 d-none">Morate izabrati neku od opcija preuzimanja.</p>
                    </div>
                  </div>`;
    kontaktForma.innerHTML += ispisPreuzimanje;
  
    var ispisNovaPonuda = `<div class="form-group row px-0">
                            <div class="offset-1"></div>
                            <div class="form-check col-11">
                              <input class="form-check-input" id="novaPonuda" type="checkbox" name="novaPonuda" value="novaPonuda">
                              <label class="form-check-label" for="novaPonuda">Želim da budem obavešten o novim proizvodima i akcijama.</label>
                            </div>
                          </div>
                          <div id="uspesno" class="d-none col-12 px-4 py-2 mb-3">
                            
                          </div>
                          <div class="form-group d-flex justify-content-center">
                            <input id="btnPosalji" class="btn vv-br-025 vv-btn-grey" type="button" value="Pošalji"/>
                          </div>`;
    kontaktForma.innerHTML += ispisNovaPonuda;
    document.querySelector("#btnPosalji").addEventListener("click",provera);
    //#endregion
  
    //#region O autoru
    var oAutoruDescSvojstva = document.getElementById("oAutoruDescSvojstva");
  
    var oAutoruTekst = [
      "Zovem se Milan Aničić, rođen sam 19.09.2001. Živim u Beogradu. Pohađao sam srednju tehničku školu „PTT“. Trenutno studiram ICT, smer internet tehnologija. U slobodno vreme volim da igram košarku.",
      "Programiranje mi je od početka bilo veoma zanimljivo zato što imamo mogućnost da kreiramo solucije i programe koji će nekome olakšati život."
    ];
    var ispisOAutoru = "";
  
    for(let i=0;i<oAutoruTekst.length;i++)
    {
      ispisOAutoru += `<p class="vv-fs-22 mb-3">${oAutoruTekst[i]}</p>`;
    }
    oAutoruDescSvojstva.innerHTML = ispisOAutoru;
    //#endregion
  
    //#region Kreiranje footer-a u HTML-u
    var linksFooterAHref = ["#","#o-nama","#u-ponudi","#kontakt","#o-autoru"];
    var linksFooterAText = ["Početna","O nama","U ponudi","Kontakt","O autoru"];
    var linksFooterUl = document.querySelector("#linksFooterUl");
    var ispisLinksFooter = "";
    for(let i=0;i<linksFooterAHref.length;i++){
      ispisLinksFooter += `<li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="${linksFooterAHref[i]}">
                              <i class="fas fa-angle-right pr-1" aria-hidden="true"></i>
                              <p>${linksFooterAText[i]}</p>
                            </a>
                          </li>`;
    }
    linksFooterUl.innerHTML = ispisLinksFooter;
  
    var filesFooterAHref = ["rss.xml","sitemap.xml","dokumentacija.pdf"];
    var filesFooterATekstovi = ["RSS","Sitemap","Dokumentacija"];
    var filesFooterUl = document.querySelector("#filesFooterUl");
    var ispisFilesFooter = "";
  
    for(let i=0;i<filesFooterAHref.length;i++){
      ispisFilesFooter +=`<li class="nav-item">
                            <a class="nav-link d-flex align-items-center" href="${filesFooterAHref[i]}" target="_blank">
                              <i class="fas fa-angle-right pr-1" aria-hidden="true"></i>
                              <p>${filesFooterATekstovi[i]}</p>
                            </a>
                          </li>`;
    }
    filesFooterUl.innerHTML = ispisFilesFooter;
  
    var footerInfoUl = document.querySelector("#footerInfoUl");
    var footerInfoPTekstovi = ["+381 65 232 32 32","Zdravka Čelara 16","milan&#46;anicic&#46;87&#46;20&#64;ict&#46;edu&#46;rs"];
    var footerInfoAHref = ["tel:+381622323232",
                          "https://www.google.com/maps/place/Zdravka+%C4%8Celara+16,+Beograd+11000/@44.8147698,20.4825022,17z/data=!3m1!4b1!4m5!3m4!1s0x475a7a95dfdba1fb:0x7dd3ed9b437a11d6!8m2!3d44.8147698!4d20.4846909",
                          "mailto:milan.anicic.87.20@ict.edu.rs"];
    var ispisInfoFooter = "";
    for(let i=0;i<footerInfoPTekstovi.length;i++){
      ispisInfoFooter += `<li class="nav-item">
                            <a href="${footerInfoAHref[i]}" id="info-${i+1}" target="_blank">${footerInfoPTekstovi[i]}</a>
                          </li>`;
    }
    footerInfoUl.innerHTML = ispisInfoFooter;
  
    var footerSocialUl = document.querySelector("#footerSocialUl");
    var footerSocialIKlase = ["instagram","facebook-square","youtube"];
    var footerSocialPTekstovi = ["pekara_anicic","Pekara Anicic","Pekara Anicic"];
    var footerSocialAHref = ["https://www.instagram.com/","https://www.facebook.com/","https://www.youtube.com/"];
    
    var ispisSocialFooter = "";
    for(let i=0;i<footerSocialPTekstovi.length;i++){
      ispisSocialFooter += `<li class="nav-item mt-2 h-47">
                              <a class="nav-link d-flex align-items-center" href="${footerSocialAHref[i]}" target="_blank">
                                <i class="fab fa-${footerSocialIKlase[i]} pr-2" aria-hidden="true"></i>${footerSocialPTekstovi[i]}
                              </a>
                            </li>`;
    }
    footerSocialUl.innerHTML = ispisSocialFooter;
    //#endregion
  });
  //#region Funkcije za dodavanje dinamicki ispisane padajuce liste
  function konfDdl(ddl1, ddl2){
    var divKolicina = document.querySelector("#ddlKolicina");
    var ddlKomad = [];
    for(let i=1;i<=10;i++){
      if(i==1){
        ddlKomad.push(i + " komad");
      }else{
        ddlKomad.push(i + " komada");
      }
    }
    var ddlParce = [];
    for(let i=1;i<=10;i++){
      if(i==1){
        ddlParce.push(i + " parče");
      }else{
        ddlParce.push(i + " parčeta");
      }
    }
    var ddlGrami = [];
    for(let i=100;i<=1500;i+=50){
      if(i<1000){
        ddlGrami.push(i + " g");
      }else{
        ddlGrami.push(i/1000 + " kg");
      }
    }
  
    if(ddl1.value == "0"){
      divKolicina.classList.add("d-none");
    }else{
      divKolicina.classList.remove("d-none");
      switch(ddl1.value){
        case "kr": case "hl":
          ddl2.options.length = 1;
          for(let i in ddlKomad){
            kreirajOpciju(ddl2, ddlKomad[i], ddlKomad[i]);
          }
          break;
        case "ma": case "ca": case "qu": case "ve":
          ddl2.options.length = 1;
          for(let i in ddlParce){
            kreirajOpciju(ddl2, ddlParce[i], ddlParce[i]);
          }
          break;
        case "mi": case "ki":
          ddl2.options.length = 1;
          for(let i in ddlGrami){
            kreirajOpciju(ddl2, ddlGrami[i], ddlParce[i]);
          }
          break;
      }  
    }
  }
  function kreirajOpciju(ddl, tekst, val) {
    var opcija = document.createElement("option");
    opcija.value = val;
    opcija.text = tekst;
    ddl.appendChild(opcija);
  }
  //#endregion
  
  //#region Funkcija - Poruči dugme
  var nizPonuda = ["kr","mi","ki","hl","ma","ca","qu","ve"];
  function poruci(string){
    for(let i = 0; i<nizPonuda.length;i++){
      let brisiSelectedAttr = document.getElementById(`${nizPonuda[i]}`);
      brisiSelectedAttr.removeAttribute("selected");
    }
    var poruciProizvod = document.getElementById(string);
    if(string == "kr")return poruciProizvod.setAttribute("selected", "");
    else if(string == "mi")return poruciProizvod.setAttribute("selected", "");
    else if(string == "ki")return poruciProizvod.setAttribute("selected", "");
    else if(string == "hl")return poruciProizvod.setAttribute("selected", "");
    else if(string == "ma")return poruciProizvod.setAttribute("selected", "");
    else if(string == "ca")return poruciProizvod.setAttribute("selected", "");
    else if(string == "qu")return poruciProizvod.setAttribute("selected", "");
    else if(string == "ve")return poruciProizvod.setAttribute("selected", "");
  }
  //#endregion
  
  //#region Forma - provera
  function provera(){
    var brojGresaka = 0;
  
    var imePrezime = document.querySelector("#imePrezime");
    var valImePrezime = imePrezime.value;
    var pImePrezime = document.querySelector("#pImePrezime");
    var pImePrezimePrazno = document.querySelector("#pImePrezimePrazno");
  
    var adresa = document.querySelector("#adresa");
    var valAdresa = adresa.value;
    var pAdresa = document.querySelector("#pAdresa");
    var pAdresaPrazno = document.querySelector("#pAdresaPrazno");
  
    var grad = document.querySelector("#grad");
    var valGrad = grad.value;
    var pGrad = document.querySelector("#pGrad");
    var pGradPrazno = document.querySelector("#pGradPrazno");
  
    var posBroj = document.querySelector("#posBroj");
    var valPosBroj = posBroj.value;
    var pPosBroj = document.querySelector("#pPosBroj");
    var pPosBrojPrazno = document.querySelector("#pPosBrojPrazno");
  
    var telefon = document.querySelector("#telefon");
    var valTelefon = telefon.value;
    var pTelefon = document.querySelector("#pTelefon");
    var pTelefonPrazno = document.querySelector("#pTelefonPrazno");
  
    var ponuda = document.querySelector("#ponuda");
    var pPonuda = document.querySelector("#pPonuda");
  
    var kolicina = document.querySelector("#kolicina");
    var pKolicina = document.querySelector("#pKolicina");
  
    var nacinPreuzimanja=document.getElementsByName("nacinPreuzimanja");
    var pPreuzimanje = document.querySelector("#pPreuzimanje");
  
    var novaPonuda = document.querySelector("#novaPonuda");
    //Provera imena i prezimena
    let regImePrezime=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15})+$/;
    if(valImePrezime != ""){
      pImePrezimePrazno.setAttribute("class","d-none");
      if(!(regImePrezime.test(valImePrezime.trim()))){
        pImePrezime.removeAttribute("class");
        brojGresaka++;
      }else{
        pImePrezime.setAttribute("class","d-none");
      }
    }
    else{
      pImePrezime.setAttribute("class","d-none");
      pImePrezimePrazno.removeAttribute("class");
    }
    //Provera adrese
    let regAdresa=/^([A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s)+[0-9]{1,4}$/;
    if(valAdresa != ""){
      pAdresaPrazno.setAttribute("class","d-none");
      if(!(regAdresa.test(valAdresa.trim()))){
        pAdresa.removeAttribute("class");
        brojGresaka++;
      }
      else{
        pAdresa.setAttribute("class","d-none");
      }
    }else{
      pAdresa.setAttribute("class","d-none");
      pAdresaPrazno.removeAttribute("class");
    }
    //Provera grada
    let regGrad=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15})*$/;
    if(valGrad != ""){
      pGradPrazno.setAttribute("class","d-none");
      if(!(regGrad.test(valGrad.trim()))){
        pGrad.removeAttribute("class");
        brojGresaka++;
      }
      else{
        pGrad.setAttribute("class","d-none");
      }
    }else{
      pGrad.setAttribute("class","d-none");
      pGradPrazno.removeAttribute("class");
    }
    //Provera postanskog broja
    let regPosBroj=/^[0-9]{5}$/;
    if(valPosBroj != ""){
      pPosBrojPrazno.setAttribute("class","d-none");
      if(!(regPosBroj.test(valPosBroj.trim()))){
        pPosBroj.removeAttribute("class");
        brojGresaka++;
      }
      else{
        pPosBroj.setAttribute("class","d-none");
      }
    }else{
      pPosBroj.setAttribute("class","d-none");
      pPosBrojPrazno.removeAttribute("class");
    }
    //Provera broja telefona
    let regTelefon=/^06\d{7,8}$/;
    if(valTelefon != ""){
      pTelefonPrazno.setAttribute("class","d-none");
      if(!(regTelefon.test(valTelefon.trim()))){
        pTelefon.removeAttribute("class");
        brojGresaka++;
      }
      else{
        pTelefon.setAttribute("class","d-none");
      }
    }else{
      pTelefon.setAttribute("class","d-none");
      pTelefonPrazno.removeAttribute("class");
    }
    //Provera padajuce liste ponuda
    if(ponuda.options[ponuda.options.selectedIndex].value=="0"){
      pPonuda.removeAttribute("class");
      brojGresaka++;
    }
    else{
      pPonuda.setAttribute("class","d-none");
    }
    //Provera padajuce liste kolicina
    var izabraniInd = kolicina.options.selectedIndex
    if(kolicina.options[izabraniInd].value=="0"){
      pKolicina.removeAttribute("class");
      brojGresaka++;
    }
    else{
      pKolicina.setAttribute("class","d-none");
    }
    //Provera radio button-a
    var vrNacinPreuzimanja="";
    for(let i=0;i<nacinPreuzimanja.length;i++){
      if(nacinPreuzimanja[i].checked){
        vrNacinPreuzimanja=nacinPreuzimanja[i].value;
        break;
      }
    }
    if(vrNacinPreuzimanja==""){
      pPreuzimanje.removeAttribute("class");
      brojGresaka++;
    }
    else{
      pPreuzimanje.setAttribute("class","d-none");
    }
    var prijavaIspis = "";
    if(novaPonuda.checked){
      prijavaIspis = "Hvala na prijavi! Od sada će Vam stizati obaveštenja na Vašem mobilnom uređaju u vidu poruke.";
    }
    if(brojGresaka==0){
      var uspesno = document.querySelector("#uspesno");
      uspesno.innerHTML = `<b class="text-success">Uspešno ste izvršili porudžbinu.\n\n ${prijavaIspis}</b>`;
      uspesno.classList.remove("d-none");
    }
  }
  //#endregion