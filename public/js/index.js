
$(document).on('ready', function() {
  $('#header-container').slideDown('slow');
  $('#page-container').delay(1600).fadeIn(1600);
  $('#social-links-bkgrnd').delay(1600).fadeIn(1600);
  $('#footer-container').delay(1600).fadeIn(1600);
});

$('.main-nav')
    .css("right",-$(this).width())
    .animate({
        right: '24px'
    }, 800);

$('.title-container')
    .css("margin-left",-$(this).width())
    .animate({
        marginLeft: '35%'
    }, 1600);


//Review Star Selector
  var liClass;
  $('#star-rating li').hover(
    function() {
      liClass = $(this).attr('class');
      if (liClass === 'star-1'){
        $('#star-rating').css({'background-position': '160px -160px'});
        $(this).find('input').prop('checked', true);
        $(this).mousedown(
          $.post(
             "/reviews/improvements", 
             {starRating: $("[name='star-rating']:checked").val()}, 
             function(data){}
          )
        )
    
      }else if (liClass === 'star-2'){
        $('#star-rating').css({'background-position': '160px -320px'});
        $(this).prop('checked', true)
      }else if (liClass === 'star-3'){
        $('#star-rating').css({'background-position': '160px -480px'});
        $(this).prop('checked', true)
      }else if (liClass === 'star-4'){
        $('#star-rating').css({'background-position': '160px -640px'});
        $(this).prop('checked', true)
      }else if (liClass === 'star-5'){
        $('#star-rating').css({'background-position': '160px -800px'});
        $(this).prop('checked', true)
      }
      console.log(liClass);
    },
    function(){
      $('#star-rating').css({'background-position': '160px 0'});
    }
  );


//  function() {
//    console.log('5 hover out');
//    
//  }
//);
//
////Review POST redirect
//
//$('.star-1, .star-2').click(function() {
//  console.log('1 or 2 mouse click');
//  var value = $('#star-rating input:checked').val();
//  console.log(value);
//  
//})
//
//$('.star-3, .star-4, .star-5').click(function() {
//  console.log('3, 4, or 5 mouse click');
//})

window.onload = function() {
  //Modal for apt schedule

    var modalWrap = document.getElementById('modal-wrap');
    var modalApt = document.getElementById('apt-modal');
    var aptModalLnk = document.getElementById('nav-apt');
    var aptModalBtn = document.getElementById('schedule-apt');

    aptModalLnk.onclick = function(){
      modalWrap.style.display='block';
      modalApt.style.display='block';
    };  

   // Modal Clear
    window.onclick = function(event) {
        if (event.target == modalWrap) {
            modalApt.style.display="none";
            modalWrap.style.display='none';
        }
    }
  
  if (window.location.pathname == '/'){ 
    
    aptModalBtn.onclick = function(){
      modalWrap.style.display='block';
      modalApt.style.display='block';
    };
    
    //Navigation for Patient Portal Button
    var patientPortalBtn = document.getElementById('patient-portal-button');
    var patientPortal = document.getElementById('patient-portal');
    
    patientPortalBtn.onclick = function(){
      window.location.href = "http://localhost:3000/resources";
      
    }
    

    //Modal for patient reviews

    var modalReview = document.getElementById('review-modal');
    var reviewModalBtn = document.getElementById('review-us');

    reviewModalBtn.onclick = function() {
      modalWrap.style.display = 'block';
      modalReview.style.display = 'block';
    }

    //Modal Premium Eye Screening

    var modalPremium = document.getElementById('premium-modal');
    var premiumModalBtn = document.getElementById('premium-eye')

    var glaucomaPkg = document.getElementById('glaucoma-pkg');
    var retinalPkg = document.getElementById('retinal-pkg');
    var glaucomaLnk = document.getElementById('glaucoma-link');
    var retinalLnk = document.getElementById('retinal-link');

    premiumModalBtn.onclick = function() {
        modalWrap.style.display='block';
        modalPremium.style.display='block';
        glaucomaLnk.style.backgroundColor='#848BAE';
    }

    //Toggle Premium Eye Packages

    glaucomaLnk.onclick = function () {
        glaucomaPkg.style.display='block';
        glaucomaLnk.style.backgroundColor='#848BAE';
        retinalPkg.style.display='none';
        retinalLnk.style.backgroundColor='';
    }

    retinalLnk.onclick = function () {
        glaucomaPkg.style.display='none';
        glaucomaLnk.style.backgroundColor='rgba(0,0,0,0.0)';
        retinalPkg.style.display='block';
        retinalLnk.style.backgroundColor='#848BAE';
    }

    //Modal Follow Us

    var modalFollow = document.getElementById('follow-modal');
    var followModalBtn = document.getElementById('follow-us');

    followModalBtn.onclick = function() {
      modalWrap.style.display='block';
      modalFollow.style.display='block';
    }

    // Modal Clear
    window.onclick = function(event) {
        if (event.target == modalWrap) {
            modalFollow.style.display='none';
            modalPremium.style.display='none';
            modalReview.style.display='none';
            modalApt.style.display="none";
            modalWrap.style.display='none'
        }
    }
}
  else if (window.location.pathname == '/service'){

    //SERVICE PAGE JS
    
    //Content Id's
      var staticNav = document.getElementById('static-nav');
      var eyeExamEle = document.getElementById('eye-exam-content');
      var glsClsEle = document.getElementById('gls-cls-content');
      var eyeInjuryEle = document.getElementById('injury-content');
      var eyeDiseaseEle = document.getElementById('disease-content');
      var laserVisionEle = document.getElementById('laser-vis-content');
      var eyeImplantEle = document.getElementById('implant-content');
      var pediatricOpthEle = document.getElementById('pediatric-content');
      var cosmeticsEle = document.getElementById('cosmetics-content');
   
    //Navigation ID's
      var eyeExamNav = document.getElementById('Eye Exams');
      var glsClsNav = document.getElementById('Glasses and Contacts');
      var eyeInjuryNav = document.getElementById('Eye Injuries and Infections');
      var eyeDiseasesNav = document.getElementById('Eye Diseases');
      var laserVisionNav = document.getElementById('Laser Vsion Correction');
      var eyeImplantNav = document.getElementById('Eye Implants');
      var pediatricOpthNav = document.getElementById('Pediatric Ophthamology');
      var cosmeticsNav = document.getElementById('Cosmetics');
    
    //Element Positions
      var eyeExamPos = eyeExamEle.getBoundingClientRect();
      var glsClsPos = glsClsEle.getBoundingClientRect();
      var eyeInjuryPos = eyeInjuryEle.getBoundingClientRect();
      var eyeDiseasePos = eyeDiseaseEle.getBoundingClientRect();
      var laserVisionPos = laserVisionEle.getBoundingClientRect();
      var eyeImplantPos = eyeImplantEle.getBoundingClientRect();
      var pediatricOpthPos = pediatricOpthEle.getBoundingClientRect();
      var cosmeticsPos = cosmeticsEle.getBoundingClientRect();
    
    function removeStaticNavClass(){
     var elems = document.querySelectorAll(".static-active");
      [].forEach.call(elems, function(el) {
        el.classList.remove("static-active");
      });
    }
    
    //Scroll Function
    document.addEventListener('scroll', function(){
      var windowScrollY = window.scrollY;
      if (windowScrollY < eyeExamPos.top){
        staticNav.style.opacity='0.0';
        removeStaticNavClass();
      }else if(windowScrollY > eyeExamPos.top && windowScrollY < eyeExamPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        eyeExamNav.className ='static-active';
        //alert("You entered the eye exam zone");
      }else if (windowScrollY > glsClsPos.top && windowScrollY < glsClsPos.bottom) {
        staticNav.style.opacity='100';
        removeStaticNavClass();
        glsClsNav.className ='static-active';
      }else if (windowScrollY > eyeInjuryPos.top && windowScrollY < eyeInjuryPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        eyeInjuryNav.className ='static-active';
      }else if (windowScrollY > eyeDiseasePos.top && windowScrollY < eyeDiseasePos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        eyeDiseasesNav.className ='static-active';
      }else if (windowScrollY > laserVisionPos.top && windowScrollY < laserVisionPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        laserVisionNav.className ='static-active';
      }else if (windowScrollY > eyeImplantPos.top && windowScrollY < eyeImplantPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        eyeImplantNav.className ='static-active';
      }else if (windowScrollY > pediatricOpthPos.top && windowScrollY < pediatricOpthPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        pediatricOpthNav.className ='static-active';
      }else if (windowScrollY > cosmeticsPos.top && windowScrollY < cosmeticsPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        cosmeticsNav.className ='static-active';
      }
    });
    
    //Scroll to links
      //functions
        var eyeExamScroll = function(){
          window.scrollTo(0,eyeExamPos.top);
          removeStaticNavClass();
          eyeExamNav.className='static-active';
        }
        
        var glsClsScroll = function(){
          window.scrollTo(0,glsClsPos.top);
          removeStaticNavClass();
          glsClsNav.className='static-active';
        }
        
        var eyeInjuryScroll = function(){
          window.scrollTo(0,eyeInjuryPos.top);
          removeStaticNavClass();
          eyeInjuryNav.className='static-active';
        }
        
        var eyeDiseaseScroll = function(){
          window.scrollTo(0,eyeDiseasePos.top);
          removeStaticNavClass();
          eyeDiseasesNav.className='static-active';
        }
        
        var laserVisionScroll = function(){
          window.scrollTo(0,laserVisionPos.top);
          removeStaticNavClass();
          laserVisionNav.className='static-active';
        }
        
        var eyeImplantScroll = function(){
          window.scrollTo(0,eyeImplantPos.top);
          removeStaticNavClass();
          eyeImplantNav.className='static-active';
        }
        
        var pediatricOpthScroll = function(){
          window.scrollTo(0,pediatricOpthPos.top);
          removeStaticNavClass();
          pediatricOpthNav.className='static-active';
        }
        
        var cosmeticScroll = function(){
          window.scrollTo(0,cosmeticsPos.top);
          removeStaticNavClass();
          cosmeticsNav.className='static-active';
        }
      //Event Listeners
        eyeExamNav.addEventListener('click', eyeExamScroll);
        glsClsNav.addEventListener('click', glsClsScroll);
        eyeInjuryNav.addEventListener('click', eyeInjuryScroll);
        eyeDiseasesNav.addEventListener('click', eyeDiseaseScroll);
        laserVisionNav.addEventListener('click', laserVisionScroll);
        eyeImplantNav.addEventListener('click', eyeImplantScroll);
        pediatricOpthNav.addEventListener('click', pediatricOpthScroll);
        cosmeticsNav.addEventListener('click', cosmeticScroll);
    
    //Keep static nav from entering footer
      //Header & Footer elements
        var headerEle = document.getElementById('header-container');
      //Header & Footer positions
        var headerPos = headerEle.getBoundingClientRect();
    
      document.addEventListener('scroll', function(){
        var windowScrollY = window.scrollY;
        if (windowScrollY < headerPos.bottom){
          staticNav.style.top='15%';
        }else if (windowScrollY < cosmeticsPos.top){
          staticNav.style.top='15%';
        }else if (windowScrollY > cosmeticsPos.top){
          staticNav.style.top='3%';
        }
      });
      
    //Insurance List
    var medicalInsurances = [ 
     {name: 'AARP - UHC', 
      phone: '1-866-301-2918' },
     {name: 'Advantica', 
      phone: '1-866-354-2020'},
     {name: 'Advantra Freedom', 
      phone: ' 1-800-765-7197'},
     {name: 'Aetna', 
      phone: '1-800-872-3862'},
     {name: 'Aetna Senior Supplemental', 
      phone: '1-800-264-4000'},
     {name: 'All Savers', 
      phone: '1-800-291-2634'},
     {name: 'Alliance Healthcare Solutions', 
      phone: '1-866-939-0100'},
     {name: 'Allied Benefit Systems', 
      phone: '1-800-288-2078'},
     {name: 'AlwaysCare Benefits', 
      phone: '1-888-729-5433'},
     {name: 'Ambetter', 
      phone: '1-800-743-3333'},
     {name: 'American Administrator', 
      phone: '1-717-591-8280'},
     {name: 'American Republic', 
      phone: '1-800-247-2190'},
     {name: 'Ameritas Life', 
      phone: '1-800-776-9446'},
     {name: 'Anthem IN Medicaid', 
      phone: '1-866-864-2544'},
     {name: 'Anthem Indiana', 
      phone: '1-866-804-9321'},
     {name: 'Anthem Kentucky', 
      phone: '1-800-810-2583'},
     {name: 'APWU', 
      phone: '1-800-222-2798'},
     {name: 'Assurant Health', 
      phone: '1-800-553-7654'},
     {name: 'Bankers Life', 
      phone: '1-800-621-3724'},
     {name: 'Baptist Health Plan', 
      phone: '1-800-787-2680'},
     {name: 'Beech Street', 
      phone: '1-800-877-1444'},
     {name: 'Benefit Planners', 
      phone: '1-334-382-7476'},
     {name: 'Benesight', 
      phone: '1-602-674-2345'},
     {name: 'Benovision', 
      phone: '1-513-872-7505'},
     {name: 'Block Vision', 
      phone: '1-866-265-0517'},
     {name: 'Blue Cross Blue Shield of Georgia', 
      phone: '1-855-397-9267'},
     {name: 'Blue Cross Blue Shield of Illinois', 
      phone: '1-800-538-8833'},
     {name: 'Blue Cross Blue Shield of Indiana', 
      phone: '1-800-810-2583'},
     {name: 'Blue Cross Blue Shield of Kentucky', 
      phone: '1-800-810-2583'},
     {name: 'BP Benefit Planners', 
      phone: '1-800-890-4100'},
     {name: 'CareFirst Administrators', 
      phone: '1-866-945-9839'},
     {name: 'Caresource Just4Me - Indiana', 
      phone: '1-800-418-0172'},
     {name: 'Caresource Just4Me - Kentucky', 
      phone: '1-800-833-3239'},
     {name: 'CHA Health', 
      phone: '1-800-580-8574'},
     {name: 'ChampVA', 
      phone: '1-800-733-8387'},
     {name: 'Christian Brothers Services', 
      phone: '1-800-807-0100'},
     {name: 'Cigna', 
      phone: '1-800-627-7534'},
     {name: 'Cigna Medical Access', 
      phone: '1-800-668-3813'},
     {name: 'Coloniel Penn', 
      phone: '1-800-523-9100'},
     {name: 'consumers life member service', 
      phone: '1-866-925-2542'},
     {name: 'Co-ordinated Benefits Plan', 
      phone: '1-800-753-1000'},
     {name: 'Coresource', 
      phone: '1-800-832-3332'},
     {name: 'Corporate Benefit', 
      phone: '1-800-277-9476'},
     {name: 'Coventry', 
      phone: '1-301-581-0600'},
     {name: 'Empire Plan', 
      phone: '1-877-769-7447'},
     {name: 'Essence', 
      phone: '1-866-597-9560'},
     {name: 'Eyecare of America', 
      phone: '1-877-887-6327'},
     {name: 'Family Life Insurance Company', 
      phone: '1-800-877-7703'},
     {name: 'Federated', 
      phone: '1-507-455-5200'},
     {name: 'First Health', 
      phone: '1-800-937-6824'},
     {name: 'Freedom Life Insurance', 
      phone: '1-800-387-9027'},
     {name: 'Gateway Health', 
      phone: '1-800-392-1147'},
     {name: 'GEHA', 
      phone: '1-800-821-6136'},
     {name: 'GHI', 
      phone: '1-800-624-2414'},
     {name: 'Gilsbar', 
      phone: '1-888-472-4352'},
     {name: 'GMMI', 
      phone: '1-954-370-6404'},
     {name: 'Golden Rule', 
      phone: '1-800-657-8205'},
     {name: 'Great West', 
      phone: '1-800-701-8255'},
     {name: 'Guardian - Davis Vision', 
      phone: '1-877-393-7363'},
     {name: 'Guardian - VSP', 
      phone: '1-877-814-8970'},
     {name: 'Harington Benefits Services', 
      phone: '1-800-216-2166'},
     {name: 'Health Partners', 
      phone: '1-800-883-2177'},
     {name: 'Health Smart', 
      phone: '1-214-574-3546'},
     {name: 'HealthStar', 
      phone: '1-423-581-5925'},
     {name: 'Hoosier Alliance', 
      phone: '1-800-356-1204'},
     {name: 'Humana', 
      phone: '1-800-833-6917'},
     {name: 'Humana Caresource', 
      phone: '1-855-852-7005'},
     {name: 'Indiana Farm Bureau Insurance', 
      phone: '1-800-777-8252'},
     {name: 'Kentucky Health Cooperative', 
      phone: '1-502-287-1285'},
     {name: 'Key Benefit Administrators', 
      phone: '1-800-331-4757'},
     {name: 'Klais Co', 
      phone: '1-800-331-1096'},
     {name: 'Loyal American', 
      phone: '1-866-459-4272'},
     {name: 'Mailhandlers', 
      phone: '1-800-410-7778'},
     {name: 'Managed Health Services', 
      phone: '1-877-647-4848'},
     {name: 'MDWise', 
      phone: '1-800-356-1204'},
     {name: 'Medben', 
      phone: '1-800-686-8425'},
     {name: 'Medicaid Indiana', 
      phone: '1-317-713-9627'},
     {name: 'Medicaid KY EDS', 
      phone: '1-800-372-2973'},
     {name: 'Medical Mutual', 
      phone: '1-800-382-5729'},
     {name: 'Medical Mutual of Ohio', 
      phone: '1-800-382-5729'},
     {name: 'Medicare B Kentucky', 
      phone: '1-866-276-9558'},
     {name: 'Medicare IN', 
      phone: '1-800-633-4227'},
     {name: 'Medico Insurance Company', 
      phone: '1-800-228-6080'},
     {name: 'Mega Life', 
      phone: '1-800-527-5504'},
     {name: 'Meritain Health', 
      phone: '1-800-925-2272'},
     {name: 'MOAA', 
      phone: '1-800-234-6622'},
     {name: 'Mutual of Omaha', 
      phone: '1-800-775-1000'},
     {name: 'NALC', 
      phone: '1-703-729-4677'},
     {name: 'NGS American', 
      phone: '1-800-521-1555'},
     {name: 'Nippon Life', 
      phone: '1-800-374-1835'},
     {name: 'North American Administrators', 
      phone: '1-800-411-3650'},
     {name: 'Passport Health Plan', 
      phone: '1-800-578-0603'},
     {name: 'Passport Medicare Advantage Plan', 
      phone: '1-844-859-6152'},
     {name: 'PHCS', 
      phone: '1-800-922-4362'},
     {name: 'Physicians Mutual Insurance Company', 
      phone: '1-800-228-9100'},
     {name: 'PIA', 
      phone: '1-800-424-4244'},
     {name: 'Preferred Helath Plan', 
      phone: '1-800-832-8212'},
     {name: 'Principal Life', 
      phone: '1-800-986-3343'},
     {name: 'Railroad Medicare', 
      phone: '1-877-288-7600'},
     {name: 'Sagamore', 
      phone: '1-800-364-3469'},
     {name: 'SIHO', 
      phone: '1-812-378-7000'},
     {name: 'Standard Life & Accident Ins', 
      phone: '1-888-350-1488'},
     {name: 'Starark', 
      phone: '1-847-615-1313'},
     {name: 'Sterling Option', 
      phone: '1-800-688-0010'},
     {name: 'Superior Vision', 
      phone: '1-800-879-6901'},
     {name: 'Three Rivers Preferred', 
      phone: '1-260-479-3553'} ]
    
    window.onload = getInsuranceName();
    document.getElementById('insurance-picker').onclick = getInsuranceName;
    
    function getInsuranceName() {
      //Get insurance name from service dropdown 
      var insuranceName = document.getElementById('insurance-picker');
      var insuranceNameVal = insuranceName.value;
      
      insuranceNameVal = insuranceName.value;
      function findinsurance(insInfo){
        return insInfo.name === insuranceNameVal;
      }
    
      
      //gets object for selected insurance carrier
      var insuranceObj = medicalInsurances.find(findinsurance);
      
      //html for insurance carrier
      document.getElementById('insurance-name').innerHTML = insuranceObj.name;
      
      //html for insurance phone /w tel link      
      document.getElementById('insurance-phone').innerHTML = 'Phone: ' + insuranceObj.phone;
      document.getElementById('insurance-phone').setAttribute('href', "tel:"+insuranceObj.phone);
    }
    
    //common problem selector
      
    var commonProblemsArry = [ 
      { name: 'Farsighted',
       condition: "<strong>Farsightedness (hyperopia)</strong> is a condition in which the cornea is too flat causing light to focus past the retina. This condition causes a person to see blurry up close and occasionally blurry far away (though better than up close). Most of the time this condition can be resolved using contacts, glasses, or LASIK."},
      { name: "Nearsightedness",
      condition: "<strong>Nearsightedness (myopia)</strong> is a condition in which the cornea is too curved or the eye itself is too long causing light to focus in front of the retina. This condition causes a person to see blurry far away and somewhat sharper up close. Most of the time this condition can be resolved using contacts, glasses, or LASIK."},
      {name: "Presbyopia",
      condition: "<strong>Presbyopia</strong> is a condition that naturally occurs around age 40 wherein the lens inside the eye loses its elasticity and ability to change shape. Without being able to change shape the eye can no longer accommodate meaning that a person can generally see far away but gets increasingly blurry vision up close as they age. Most of the time this condition can be resolved using bifocal contacts and glasses or reading glasses."},
      {name: "Astigmatism",
      condition: "<strong>Astigmatism</strong> is a condition wherein the cornea is shaped more like a football than a basketball. This condition causes light to focus on more than one point on the retina resulting in generally blurry vision at any distance. Most of the time this condition can be resolved using contacts, glasses, or LASIK."},
      {name: "Dry Eye Syndrome",
      condition: "<strong>Dry Eye Syndrome</strong> is caused by insufficient moisture in the eye. Constant dryness, scratching sensations, intermittent blurred vision and excessive watering are all symptoms of dry eye syndrome. This condition is a natural effect of the aging process of the eye where the quality of tear film produced begins to lessen. Most of the time over-the-counter drops can be used to alleviate this condition; however, Dr. Conrad can provide varying solutions from punctual plugs to prescription strength drops."},
      {name: "Cataracts",
      condition: "<strong>Cataracts</strong> are cloudy or hazy opacities in the natural lens of the eye. They are a natural aging process of the lens and result from the gradual breakdown of the crystalline structure. Symptoms of cataracts include hazy or blurred vision, poor night vision, sensitivity to sunlight, and glare. Dr. Conrad will be able to determine the progression of a cataract, and once mature glasses and contacts can no longer alleviate the vision problems produced by cataracts. Thankfully Dr. Conrad is a highly skilled surgeon in the removal of the natural lens and replacement with a standard or premium intraocular lens implant"},
      {name: "Glaucoma",
      condition: "<strong>Glaucoma</strong> is usually a very progressive and slow acting eye disease. Like diabetic eye disease it is important to stay in annual contact with your ophthalmologist as most symptoms do not become noticeable until it is too late. Glaucoma results from increased pressure in the eyes usually caused by either too much production of the fluid within the eye or a problem in releasing fluid from the eye. Gradual vision loss can occur starting in the periphery of the visual field and working its way inward toward the center of your field of view. Many drops and some surgical procedures have proven highly successful in the treatment and management of glaucoma. Dr. Conrad will be able to assess your risk factors and help determine the right approach for each individual."},
      {name: "Macular degeneration",
      condition: "<strong>Macular degeneration</strong> is a condition in which the integrity of the nerve layer in the macula (part of the eye responsible for focusing fine details in your central vision) is gradually lost. Unlike glaucoma macular degeneration starts affecting vision in the central field of view and works outward. Studies have shown certain vitamins and other naturally occurring nutrients can help stave off the effects of the disease. Macular degeneration has been linked to heredity, so Dr. Conrad will discuss your personal risk factors and medical history before starting any treatment."},
      {name: "Floaters and flashes",
      condition: "<strong>Floaters and flashes</strong> are generally harmless, but they can be signs of a serious condition called a retinal detachment. Floaters are caused by tiny bits of debris or fibers “floating” through the back chamber of your eye. You interpret these obstructions in your eyes as hair-like or bug-like objects in your line of sight. The flashes are usually caused by the tugging of the materials in the back of your eye on the nerve layer. Experiencing floaters or flashes should not be alarming, but you should visit an ophthalmologist to make sure they are not serious. Dr. Conrad conducts a thorough exam of the back layers of your eye to make sure there are no serious problems and continues to monitor them at each visit. Though you cannot necessarily get rid of floaters the human brain is generally good at tuning them out after they remain in the same area for a while."},
      {name: "Pink Eye",
      condition: "<strong>\"Pink Eye\" (conjunctivitis)</strong> is a condition wherein the conjunctiva (thin membranous layer covering the inside of the eyelids and the outer surface of the eye) becomes inflamed due to allergies or viral/bacterial infection. Symptoms include red, itchy, painful, scratchy, and/or watering eyes. If you show any symptoms you should call and schedule and appointment right away. Several eye drops have been shown to be very effective at treating conjunctivitis, but Dr. Conrad will conduct a thorough exam of your individual case before prescribing anything."}
    ];
    
    //Common problem variables
    window.onload = getProblemName();
    document.getElementById('common-problem').onclick = getProblemName;
    
    function getProblemName() {
      var problemName = document.getElementById('common-problem');
      var problemNameVal = problemName.value;
      //Get selected common problem value
        problemNameVal = problemName.value;
        console.log(problemNameVal);
      function findCommonProblem(problemInfo){
        return problemInfo.name === problemNameVal;
      }
    //Gets problem object from array
    var problemObject = commonProblemsArry.find(findCommonProblem);
      console.log(problemObject);
    
    //HTML for problem condition
    document.getElementById('common-problem-text').innerHTML = problemObject.condition;
    }
  }
  else if (window.location.pathname == '/about'){
    //ABOUT PAGE JS
    
    //Content Id's
      var generalEle = document.getElementById('general-content');
      var bioEle = document.getElementById('bio-content');
      var historyEle = document.getElementById('history-content');
      var medicalCentersEle = document.getElementById('medical-centers');
   
    //Navigation ID's
      var staticNav = document.getElementById('static-nav');
      var generalNav = document.getElementById('Office Info');
      var bioNav = document.getElementById('Tim J. Conrad, M.D.');
      var historyNav = document.getElementById('CEC: Past, Present, and Future');
      var medicalCentersNav = document.getElementById('Suburban Excimer Laser Center and hysicians Medical Center');
    
    //Element Positions
      var generalPos = generalEle.getBoundingClientRect();
      var bioPos = bioEle.getBoundingClientRect();
      var historyPos = historyEle.getBoundingClientRect();
      var medicalCenterPos = medicalCentersEle.getBoundingClientRect();
    
    function removeStaticNavClass(){
     var elems = document.querySelectorAll(".static-active");
      [].forEach.call(elems, function(el) {
        el.classList.remove("static-active");
      });
    }
    
    //Scroll Function
    document.addEventListener('scroll', function(){
      var windowScrollY = window.scrollY;
      if (windowScrollY < generalPos.top){
        staticNav.style.opacity='0.0';
        removeStaticNavClass();
      }else if(windowScrollY > generalPos.top && windowScrollY < generalPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        generalNav.className ='static-active';
        //alert("You entered the eye exam zone");
      }else if (windowScrollY > bioPos.top && windowScrollY < bioPos.bottom) {
        staticNav.style.opacity='100';
        removeStaticNavClass();
        bioNav.className ='static-active';
      }else if (windowScrollY > historyPos.top && windowScrollY < historyPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        historyNav.className ='static-active';
      }else if (windowScrollY > medicalCenterPos.top && windowScrollY < medicalCenterPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        medicalCentersNav.className ='static-active';
      }
    });
    
    //Scroll to links
      //functions
        var generalScroll = function(){
          window.scrollTo(0,generalPos.top);
          removeStaticNavClass();
          generalNav.className='static-active';
        }
        
        var bioScroll = function(){
          window.scrollTo(0,bioPos.top);
          removeStaticNavClass();
          bioNav.className='static-active';
        }
        
        var historyScroll = function(){
          window.scrollTo(0,historyPos.top);
          removeStaticNavClass();
          historyNav.className='static-active';
        }
        
        var medicalCenterScroll = function(){
          window.scrollTo(0,medicalCenterPos.top);
          removeStaticNavClass();
          medicalCentersNav.className='static-active';
        }
        
      //Event Listeners
        generalNav.addEventListener('click', generalScroll);
        bioNav.addEventListener('click', bioScroll);
        historyNav.addEventListener('click', historyScroll);
        medicalCentersNav.addEventListener('click', medicalCenterScroll);
    
    //Keep static nav from entering footer
      //Header & Footer elements
        var headerEle = document.getElementById('header-container');
      //Header & Footer positions
        var headerPos = headerEle.getBoundingClientRect();
    
      document.addEventListener('scroll', function(){
        var windowScrollY = window.scrollY;
        if (windowScrollY < headerPos.bottom){
          staticNav.style.top='15%';
        }else if (windowScrollY < medicalCenterScroll.top){
          staticNav.style.top='15%';
        }else if (windowScrollY > medicalCenterScroll.top){
          staticNav.style.top='3%';
        }
      });
    
    //Time tracker for location hours
    function businessHours(){
      var t = new Date();
      var day = t.getDay();
      var h = t.getHours();
      var m = t.getMinutes();
      console.log('Time: '+t);
      console.log('Day: '+day);
      console.log('Hours: '+h);
      console.log('Min: '+m);
      //Get Status Elements
      //Louisville
      var louMonday = document.getElementsByClassName('status-1-1')[0];
      var louTuesday = document.getElementsByClassName('status-1-2')[0];
      var louWednesday = document.getElementsByClassName('status-1-3')[0];
      var louThursday = document.getElementsByClassName('status-1-4')[0];
      var louFriday = document.getElementsByClassName('status-1-5')[0];
      var louSaturday = document.getElementsByClassName('status-1-6')[0];
      var louSaturday = document.getElementsByClassName('status-1-7')[0];
      //New Albany
      var newAlbanyMonday = document.getElementsByClassName('status-2-1')[0];
      var newAlbanyTuesday = document.getElementsByClassName('status-2-2')[0];
      var newAlbanyWednesday = document.getElementsByClassName('status-2-3')[0];
      var newAlbanyThursday = document.getElementsByClassName('status-2-4')[0];
      var newAlbanyFriday = document.getElementsByClassName('status-2-5')[0];
      var newAlbanySaturday = document.getElementsByClassName('status-2-6')[0];
      var newAlbanySunday = document.getElementsByClassName('status-2-7')[0];
      
      //Select day and update status'
      //Monday
      if (day === 1) {
        //Closed before 12:30
        if (h <= 12 && m <= 30) {
          louMonday.innerHTML='Closed';
          newAlbanyMonday.innerHTML='Closed';
        }else if (h === 12 && m <= 59){
          louMonday.innerHTML='Closed';
          newAlbanyMonday.innerHTML='Opening Soon';
        }else if ( h <= 16 && m <= 30) {
          louMonday.innerHTML='Open';
          newAlbanyMonday.innerHTML='Open';
        }else if (h === 16 && m <= 59){
          louMonday.innerHTML='Closing Soon';
          newAlbanyMonday.innerHTML='Closing Soon';
        }else if (h >= 17){
          louMonday.innerHTML = 'Closed';
          newAlbanyMonday.innerHTML = 'Closed';
        }
      }else if (day === 2) {
        console.log("today is day 3");
        //Closed before 8:30
        if (h <= 8 && m <= 30) {
          louTuesday.innerHTML='Closed';
          newAlbanyTuesday.innerHTML='Closed';
        }else if (h === 8 && m <= 59){
          louTuesday.innerHTML='Opening Soon';
          newAlbanyTuesday.innerHTML='Closed';
        }else if ( h <= 16 && m <= 30) {
          louTuesday.innerHTML='Open';
          newAlbanyTuesday.innerHTML='Closed';
        }else if (h === 16 && m <= 59){
          louTuesday.innerHTML='Closing Soon';
          newAlbanyTuesday.innerHTML='Closed';
        }else if (h >= 17){
          louTuesday.innerHTML = 'Closed';
          newAlbanyTuesday.innerHTML = 'Closed';
        }
      }else if (day === 3) {
        //Closed before 8:30
        if (h <= 8 && m <= 30) {
          louWednesday.innerHTML='Closed';
          newAlbanyWednesday.innerHTML='Closed';
        }else if (h === 8 && m <= 59){
          louWednesday.innerHTML='Opening Soon';
          newAlbanyWednesday.innerHTML='Opening Soon';
        }else if ( h <= 16 && m <= 30) {
          louWednesday.innerHTML='Open';
          newAlbanyWednesday.innerHTML='Open';
        }else if (h === 16 && m <= 59){
          louWednesday.innerHTML='Closing Soon';
          newAlbanyWednesday.innerHTML='Closing Soon';
        }else if (h >= 17){
          louWednesday.innerHTML = 'Closed';
          newAlbanyWednesday.innerHTML = 'Closed';
        }
      }else if (day === 4) {
        //Closed before 8:30
        if (h <= 8 && m <= 30) {
          louThursday.append='Closed';
          newAlbanyThursday.innerHTML='Closed';
        }else if (h === 8 && m <= 59){
          louThursday.append='Opening Soon';
          newAlbanyThursday.innerHTML='Closed';
        }else if ( h <= 16 && m <= 30) {
          louThursday.innerHTML='Open';
          newAlbanyThursday.innerHTML='Closed';
        }else if (h === 16 && m <= 59){
          louThursday.innerHTML='Closing Soon';
          newAlbanyThursday.innerHTML='Closed';
        }else if (h >= 17){
          louThursday.innerHTML = 'Closed';
          newAlbanyThursday.innerHTML = 'Closed';
        }
      }else if (day === 5) {
        //Closed before 8:30
        if (h <= 8 && m <= 30) {
          louThursday.append='Closed';
          newAlbanyThursday.innerHTML='Closed';
        }else if (h === 8 && m <= 59){
          louThursday.append='Opening Soon';
          newAlbanyThursday.innerHTML='Closed';
        }else if ( h <= 16 && m <= 30) {
          louThursday.innerHTML='Open';
          newAlbanyThursday.innerHTML='Closed';
        }else if (h === 16 && m <= 59){
          louThursday.innerHTML='Closing Soon';
          newAlbanyThursday.innerHTML='Closed';
        }else if (h >= 17){
          louThursday.innerHTML = 'Closed';
          newAlbanyThursday.innerHTML = 'Closed';
        }
      }else if (day === 6) {
        //Closed before 8:30
        if (h >= 0) {
          louThursday.append='Closed';
          newAlbanyThursday.innerHTML='Closed';
        }
      }else if (day === 7) {
        //Closed before 8:30
        if (h >= 0) {
          louThursday.append='Closed';
          newAlbanyThursday.innerHTML='Closed';
        }
      }
    }
    window.onload = businessHours();
           
  }
  else if(window.location.pathname == '/resources'){
    //Resource PAGE JS
    
    //Content Id's
      var patientPortalEle = document.getElementById('patient-portal-content');
      var privacyPracticeEle = document.getElementById('privacy-practice-content');
      var insuranceEle = document.getElementById('insurance-content');
    
    //Navigation ID's
      var staticNav = document.getElementById('static-nav');
      var patientPortalNav = document.getElementById('Patient Portal');
      var privacyPracticeNav = document.getElementById('Notice of Privacy Practices');
      var insuranceNav = document.getElementById('Insurance Options');
    
    //Element Positions
      var patientPortalPos = patientPortalEle.getBoundingClientRect();
      var privacyPracticePos = privacyPracticeEle.getBoundingClientRect();
      var insurancePos = insuranceEle.getBoundingClientRect();
    
    function removeStaticNavClass(){
     var elems = document.querySelectorAll(".static-active");
      [].forEach.call(elems, function(el) {
        el.classList.remove("static-active");
      });
    }
    
    //Scroll Function
    document.addEventListener('scroll', function(){
      var windowScrollY = window.scrollY;
      if (windowScrollY < patientPortalPos.top){
        staticNav.style.opacity='0.0';
        removeStaticNavClass();
      }else if(windowScrollY > patientPortalPos.top && windowScrollY < patientPortalPos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        patientPortalNav.className ='static-active';
        //alert("You entered the eye exam zone");
      }else if (windowScrollY > privacyPracticePos.top && windowScrollY < privacyPracticePos.bottom) {
        staticNav.style.opacity='100';
        removeStaticNavClass();
        privacyPracticeNav.className ='static-active';
      }else if (windowScrollY > insurancePos.top && windowScrollY < insurancePos.bottom){
        staticNav.style.opacity='100';
        removeStaticNavClass();
        insuranceNav.className ='static-active';
      }
    });
    
    //Scroll to links
      //functions
        var patientPortalScroll = function(){
          window.scrollTo(0,patientPortalPos.top);
          removeStaticNavClass();
          patientPortalNav.className='static-active';
        }
        
        var privacePracticeScroll = function(){
          window.scrollTo(0,privacyPracticePos.top);
          removeStaticNavClass();
          privacyPracticeNav.className='static-active';
        }
        
        var insuranceScroll = function(){
          window.scrollTo(0,insurancePos.top);
          removeStaticNavClass();
          insuranceNav.className='static-active';
        }
        
      //Event Listeners
        patientPortalNav.addEventListener('click', patientPortalScroll);
        privacyPracticeNav.addEventListener('click', privacePracticeScroll);
        insuranceNav.addEventListener('click', insuranceScroll);
    
    //Keep static nav from entering footer
      //Header & Footer elements
        var headerEle = document.getElementById('header-container');
      //Header & Footer positions
        var headerPos = headerEle.getBoundingClientRect();
    
      document.addEventListener('scroll', function(){
        var windowScrollY = window.scrollY;
        if (windowScrollY < headerPos.bottom){
          staticNav.style.top='15%';
        }else if (windowScrollY < insurancePos.top){
          staticNav.style.top='15%';
        }else if (windowScrollY > insurancePos.top){
          staticNav.style.top='3%';
        }
      });
    
    //Insurance List
      var medicalInsurances = [ 
       {name: 'AARP - UHC', 
        phone: '1-866-301-2918' },
       {name: 'Advantica', 
        phone: '1-866-354-2020'},
       {name: 'Advantra Freedom', 
        phone: ' 1-800-765-7197'},
       {name: 'Aetna', 
        phone: '1-800-872-3862'},
       {name: 'Aetna Senior Supplemental', 
        phone: '1-800-264-4000'},
       {name: 'All Savers', 
        phone: '1-800-291-2634'},
       {name: 'Alliance Healthcare Solutions', 
        phone: '1-866-939-0100'},
       {name: 'Allied Benefit Systems', 
        phone: '1-800-288-2078'},
       {name: 'AlwaysCare Benefits', 
        phone: '1-888-729-5433'},
       {name: 'Ambetter', 
        phone: '1-800-743-3333'},
       {name: 'American Administrator', 
        phone: '1-717-591-8280'},
       {name: 'American Republic', 
        phone: '1-800-247-2190'},
       {name: 'Ameritas Life', 
        phone: '1-800-776-9446'},
       {name: 'Anthem IN Medicaid', 
        phone: '1-866-864-2544'},
       {name: 'Anthem Indiana', 
        phone: '1-866-804-9321'},
       {name: 'Anthem Kentucky', 
        phone: '1-800-810-2583'},
       {name: 'APWU', 
        phone: '1-800-222-2798'},
       {name: 'Assurant Health', 
        phone: '1-800-553-7654'},
       {name: 'Bankers Life', 
        phone: '1-800-621-3724'},
       {name: 'Baptist Health Plan', 
        phone: '1-800-787-2680'},
       {name: 'Beech Street', 
        phone: '1-800-877-1444'},
       {name: 'Benefit Planners', 
        phone: '1-334-382-7476'},
       {name: 'Benesight', 
        phone: '1-602-674-2345'},
       {name: 'Benovision', 
        phone: '1-513-872-7505'},
       {name: 'Block Vision', 
        phone: '1-866-265-0517'},
       {name: 'Blue Cross Blue Shield of Georgia', 
        phone: '1-855-397-9267'},
       {name: 'Blue Cross Blue Shield of Illinois', 
        phone: '1-800-538-8833'},
       {name: 'Blue Cross Blue Shield of Indiana', 
        phone: '1-800-810-2583'},
       {name: 'Blue Cross Blue Shield of Kentucky', 
        phone: '1-800-810-2583'},
       {name: 'BP Benefit Planners', 
        phone: '1-800-890-4100'},
       {name: 'CareFirst Administrators', 
        phone: '1-866-945-9839'},
       {name: 'Caresource Just4Me - Indiana', 
        phone: '1-800-418-0172'},
       {name: 'Caresource Just4Me - Kentucky', 
        phone: '1-800-833-3239'},
       {name: 'CHA Health', 
        phone: '1-800-580-8574'},
       {name: 'ChampVA', 
        phone: '1-800-733-8387'},
       {name: 'Christian Brothers Services', 
        phone: '1-800-807-0100'},
       {name: 'Cigna', 
        phone: '1-800-627-7534'},
       {name: 'Cigna Medical Access', 
        phone: '1-800-668-3813'},
       {name: 'Coloniel Penn', 
        phone: '1-800-523-9100'},
       {name: 'consumers life member service', 
        phone: '1-866-925-2542'},
       {name: 'Co-ordinated Benefits Plan', 
        phone: '1-800-753-1000'},
       {name: 'Coresource', 
        phone: '1-800-832-3332'},
       {name: 'Corporate Benefit', 
        phone: '1-800-277-9476'},
       {name: 'Coventry', 
        phone: '1-301-581-0600'},
       {name: 'Empire Plan', 
        phone: '1-877-769-7447'},
       {name: 'Essence', 
        phone: '1-866-597-9560'},
       {name: 'Eyecare of America', 
        phone: '1-877-887-6327'},
       {name: 'Family Life Insurance Company', 
        phone: '1-800-877-7703'},
       {name: 'Federated', 
        phone: '1-507-455-5200'},
       {name: 'First Health', 
        phone: '1-800-937-6824'},
       {name: 'Freedom Life Insurance', 
        phone: '1-800-387-9027'},
       {name: 'Gateway Health', 
        phone: '1-800-392-1147'},
       {name: 'GEHA', 
        phone: '1-800-821-6136'},
       {name: 'GHI', 
        phone: '1-800-624-2414'},
       {name: 'Gilsbar', 
        phone: '1-888-472-4352'},
       {name: 'GMMI', 
        phone: '1-954-370-6404'},
       {name: 'Golden Rule', 
        phone: '1-800-657-8205'},
       {name: 'Great West', 
        phone: '1-800-701-8255'},
       {name: 'Guardian - Davis Vision', 
        phone: '1-877-393-7363'},
       {name: 'Guardian - VSP', 
        phone: '1-877-814-8970'},
       {name: 'Harington Benefits Services', 
        phone: '1-800-216-2166'},
       {name: 'Health Partners', 
        phone: '1-800-883-2177'},
       {name: 'Health Smart', 
        phone: '1-214-574-3546'},
       {name: 'HealthStar', 
        phone: '1-423-581-5925'},
       {name: 'Hoosier Alliance', 
        phone: '1-800-356-1204'},
       {name: 'Humana', 
        phone: '1-800-833-6917'},
       {name: 'Humana Caresource', 
        phone: '1-855-852-7005'},
       {name: 'Indiana Farm Bureau Insurance', 
        phone: '1-800-777-8252'},
       {name: 'Kentucky Health Cooperative', 
        phone: '1-502-287-1285'},
       {name: 'Key Benefit Administrators', 
        phone: '1-800-331-4757'},
       {name: 'Klais Co', 
        phone: '1-800-331-1096'},
       {name: 'Loyal American', 
        phone: '1-866-459-4272'},
       {name: 'Mailhandlers', 
        phone: '1-800-410-7778'},
       {name: 'Managed Health Services', 
        phone: '1-877-647-4848'},
       {name: 'MDWise', 
        phone: '1-800-356-1204'},
       {name: 'Medben', 
        phone: '1-800-686-8425'},
       {name: 'Medicaid Indiana', 
        phone: '1-317-713-9627'},
       {name: 'Medicaid KY EDS', 
        phone: '1-800-372-2973'},
       {name: 'Medical Mutual', 
        phone: '1-800-382-5729'},
       {name: 'Medical Mutual of Ohio', 
        phone: '1-800-382-5729'},
       {name: 'Medicare B Kentucky', 
        phone: '1-866-276-9558'},
       {name: 'Medicare IN', 
        phone: '1-800-633-4227'},
       {name: 'Medico Insurance Company', 
        phone: '1-800-228-6080'},
       {name: 'Mega Life', 
        phone: '1-800-527-5504'},
       {name: 'Meritain Health', 
        phone: '1-800-925-2272'},
       {name: 'MOAA', 
        phone: '1-800-234-6622'},
       {name: 'Mutual of Omaha', 
        phone: '1-800-775-1000'},
       {name: 'NALC', 
        phone: '1-703-729-4677'},
       {name: 'NGS American', 
        phone: '1-800-521-1555'},
       {name: 'Nippon Life', 
        phone: '1-800-374-1835'},
       {name: 'North American Administrators', 
        phone: '1-800-411-3650'},
       {name: 'Passport Health Plan', 
        phone: '1-800-578-0603'},
       {name: 'Passport Medicare Advantage Plan', 
        phone: '1-844-859-6152'},
       {name: 'PHCS', 
        phone: '1-800-922-4362'},
       {name: 'Physicians Mutual Insurance Company', 
        phone: '1-800-228-9100'},
       {name: 'PIA', 
        phone: '1-800-424-4244'},
       {name: 'Preferred Helath Plan', 
        phone: '1-800-832-8212'},
       {name: 'Principal Life', 
        phone: '1-800-986-3343'},
       {name: 'Railroad Medicare', 
        phone: '1-877-288-7600'},
       {name: 'Sagamore', 
        phone: '1-800-364-3469'},
       {name: 'SIHO', 
        phone: '1-812-378-7000'},
       {name: 'Standard Life & Accident Ins', 
        phone: '1-888-350-1488'},
       {name: 'Starark', 
        phone: '1-847-615-1313'},
       {name: 'Sterling Option', 
        phone: '1-800-688-0010'},
       {name: 'Superior Vision', 
        phone: '1-800-879-6901'},
       {name: 'Three Rivers Preferred', 
        phone: '1-260-479-3553'} ]
    
    window.onload = getInsuranceName();
    document.getElementById('insurance-picker').onclick = getInsuranceName;
    
    function getInsuranceName() {
      //Get insurance name from service dropdown 
      var insuranceName = document.getElementById('insurance-picker');
      var insuranceNameVal = insuranceName.value;
      
      insuranceNameVal = insuranceName.value;
      function findinsurance(insInfo){
        return insInfo.name === insuranceNameVal;
      }
    
      
      //gets object for selected insurance carrier
      var insuranceObj = medicalInsurances.find(findinsurance);
      
      //html for insurance carrier
      document.getElementById('insurance-name').innerHTML = insuranceObj.name;
      
      //html for insurance phone /w tel link      
      document.getElementById('insurance-phone').innerHTML = 'Phone: ' + insuranceObj.phone;
      document.getElementById('insurance-phone').setAttribute('href', "tel:"+insuranceObj.phone);
    }
  }
  else if(window.location.pathname == '/contact'){
    //CONTACT PAGE JS
      var scheduleAptLink = document.getElementById('Schedule Appointment');
      var scheduleAptContent = document.getElementById('contact-schedule-apt');
      var LouisvilleOfficeLink = document.getElementById('Louisville Office');
      var louisvilleOfficeContent = document.getElementById('louisville-office');
      var newAlbanyOffficeLink = document.getElementById('New Albany Office');
      var newAlbanyOfficeContent = document.getElementById('new-albany-office');
    
      var contactNavClear = function(){
        scheduleAptContent.style.display='none';
        louisvilleOfficeContent.style.display='none';
        newAlbanyOfficeContent.style.display='none';
      }
      
      scheduleAptLink.onclick = function(){
        contactNavClear();
        scheduleAptContent.style.display='block';
      }
      
      LouisvilleOfficeLink.onclick = function(){
        contactNavClear();
        louisvilleOfficeContent.style.display='block';
      }
      
      newAlbanyOffficeLink.onclick = function(){
        contactNavClear();
        newAlbanyOfficeContent.style.display='block';
      }
  }
}
