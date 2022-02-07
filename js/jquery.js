$(document).ready(function () {
    $('.tab-panels .tabs li').on('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');
        var panelToShow = $(this).attr('rel');
        $panel.find('.panel.active').slideUp(300, showNextPanel);
        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
                $(this).addClass('active');
            });
        }
    });
	$.each($('#contact1 input:not([type="submit"])'), function(){
		var regex ={
			ime:/^[A-z]{2,20}$/,
			prezime:/^[A-z]{2,20}$/,
			email:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
		};
		$(this).on('focusout',function(){
			if(!regex[$(this).attr('name')].test($(this).val())){
				$(this).addClass('greska');
			}else{
				$(this).removeClass('greska');
			}
		});
	});
	$('#racun').on('click',function(){
		var pare = $('#num').val();
		var ecoin = 0;
		if ($('#btc').is(":checked")){
			ecoin=Number(pare)*100;
		}else if ($('#rsd').is(":checked")){
			ecoin=Number(pare)*0.0002808497;
		}else if ($('#eur').is(":checked")){
			ecoin=Number(pare)*0.0332635808;
		}else if ($('#usd').is(":checked")){
			ecoin=Number(pare)*0.0289848531;
		}else{
			ecoin='Izaberite Valutu';
		};
		$('#disp h1').html(ecoin);
	});
});

