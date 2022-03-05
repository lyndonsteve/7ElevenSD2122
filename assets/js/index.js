var Days = [31,28,31,30,31,30,31,31,30,31,30,31];// index => month [0-11]

var monthNames = ["month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]



$(document).ready(function(){
    var option = '<option value="day">Day</option>';
    var selectedDay="day";
    for (var i=1;i <= Days[0];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#inputStateDay').append(option);
    $('#inputStateDay').val(selectedDay);

    var option = '<option value="month">Month</option>';
    var selectedMon ="month";
    for (var i=1;i < monthNames.length ;i++){
        option += '<option value="'+ i + '">' + monthNames[i] + '</option>';
    }
    $('#inputStateMonth').append(option);
    $('#inputStateMonth').val(selectedMon);

    var option = '<option value="month" selected>Month</option>';
    var selectedMon ="month";
    for (var i=1;i <= 12;i++){
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    
  
    var d = new Date();
    var option = '<option value="year">Year</option>';
    selectedYear ="year";
    for (var i=1970;i <= d.getFullYear()-1;i++){// years start i
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $('#inputStateYear').append(option);
    $('#inputStateYear').val(selectedYear);
});
function isLeapYear(year) {
    year = parseInt(year);
    if (year % 4 != 0) {
	      return false;
	  } else if (year % 400 == 0) {
	      return true;
	  } else if (year % 100 == 0) {
	      return false;
	  } else {
	      return true;
	  }
}

function change_year(select)
{
    if( isLeapYear( $(select).val() ) )
	  {
		    Days[1] = 29;
		    
    }
    else {
        Days[1] = 28;
    }
    if( $("#inputStateMonth").val() == 2)
		    {
			       var day = $('#inputStateDay');
			       var val = $(day).val();
			       $(day).empty();
			       var option = '<option value="day">Day</option>';
			       for (var i=1;i <= Days[1];i++){ //add option days
				         option += '<option value="'+ i + '">' + i + '</option>';
             }
			       $(day).append(option);
			       if( val > Days[ month ] )
			       {
				          val = 1;
			       }
			       $(day).val(val);
		     }
  }

function change_month(select) {
    var day = $('#inputStateDay');
    var val = $(day).val();
    $(day).empty();
    var option = '<option value="day">Day</option>';
    var month = parseInt( $(select).val() ) - 1;
    for (var i=1;i <= Days[ month ];i++){ //add option days
        option += '<option value="'+ i + '">' + i + '</option>';
    }
    $(day).append(option);
    if( val > Days[ month ] )
    {
        val = 1;
    }
    $(day).val(val);
}