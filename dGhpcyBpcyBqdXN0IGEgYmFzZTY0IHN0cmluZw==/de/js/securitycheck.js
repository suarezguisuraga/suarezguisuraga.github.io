<!-- Return to security check -->
var ref = document.referrer;
if(!ref.match(/^https?:\/\/([^\/]+\.)?suarezguisuraga\.com(\/|$)/i)){
	window.location = "http://www.suarezguisuraga.com";
}
