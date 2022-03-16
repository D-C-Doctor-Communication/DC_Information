$(function(){
    $('#fullpage').fullpage({
		//options here
		anchors: ['SymptomRegisteration','ConditionAnalysis','MedicalChart','DoctorMeeting','HowToUse'],
		
		autoScrolling:true,
		scrollHorizontally: true,
		scrollingSpeed: 1500,
		fixedElements: '#header, .footer, .testing',
	});
});