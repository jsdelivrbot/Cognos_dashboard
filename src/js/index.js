var $ = require("jquery");

$(".baten").on("click", function(){
  var iframe = document.createElement('iframe');
  iframe.src = "https://cognos-ontwikkeling.denhaag.nl/ibmcognos/cgi-bin/cognosisapi.dll?b_action=cognosViewer&ui.action=run&ui.object=CAMID(%22Haagnet%3au%3a19c7760545dd164f9fbadf6d8830de2f%22)%2ffolder%5b%40name%3d%27Persoonlijke%20mappen%27%5d%2ffolder%5b%40name%3d%27BudgetUitputiing%20Package%27%5d%2ffolder%5b%40name%3d%27Yassin%27%5d%2ffolder%5b%40name%3d%27iframe%27%5d%2ffolder%5b%40name%3d%27vb1%27%5d%2freport%5b%40name%3d%27rapport1%27%5d&ui.name=rapport1&run.outputFormat=&run.prompt=true"
  $(".wrapper").css("visibility", "hidden");
  document.body.appendChild(iframe);
})