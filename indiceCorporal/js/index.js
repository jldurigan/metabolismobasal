// coloque aqui o seu código em javascript puro
function calculate_bmi() {
  var tab = $(".nav-tabs .active").text();
  //standard in feet inches and weight in pound
  if (tab == "Standard") {
    //calculate the height in total inches
    var feet = Number(document.getElementById("height_std_feet").value);
    //feet to inches
    feet_meter = feet * 0.3048;
    var inch = Number(document.getElementById("height_std_inch").value);
    inch_meter = inch * 0.0254;
    height_meter = feet_meter + inch_meter;
    var pound = Number(document.getElementById("weight_std_pound").value);
    pound_kg = pound * 0.4535;
    var bmi =
      Math.round((pound_kg / Number(Math.pow(height_meter, 2))) * 10) / 10;
    document.getElementById("bmi_val").innerHTML = bmi;
  } else if (tab == "Metric") {
    var height = Number(document.getElementById("height_met_cm").value);
    var weight = Number(document.getElementById("weight_met_kg").value);
    var bmi = Math.round((weight / Number(Math.pow(height, 2))) * 10) / 10;
    document.getElementById("bmi_val").innerHTML = bmi;
  }
  document.getElementById("bmi_lbl").removeAttribute("hidden");
}
