# MapRicostruzioneTrasparente
ixmaps platform and maps for ricostruzione trasparente

Repository del codice di una mappa (work in progress) per vedere dataset raccolti nel progetto Ricostruzione Trasparente.

La mappa interattiva si trova qui: [mappa interattiva](http://projects.ixmaps.com.s3-website-eu-west-1.amazonaws.com/MapRicostruzioneTrasparente/app/Ricostruzione%20Trasparente/)

Non sono riuscito di servire la mappa direttamente da GitHub (raw) per qualche problema crossdomain, cosi ho fatto il hosting su un server mio. Ma tutto il codice della piattaforma e la configurazione si trovan su qui su GitHub.

La configurazione della mappa per RT si trova nella cartelle **app/Ricostruzione Trasparente** 
  * index.html - *inizia l'applicazione*
  * storia/master/index.html - *è la storia che descrive e evoca i temi*
  * storia/master/themes.js - *i vari temi definiti in JSON*
  
 ```javascript
 var RT_nonagibili =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "",
	"style": {
		"type": "CHART|BUBBLE|EQUIDISTANT|SIZE|ZEROISVALUE|NEGATIVEISVALUE|SUM|VALUES",
		"colorscheme": [
			"red"],
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"values": [
			"EDIFICI_AGIBILI",
			"EDIFICI_NON__AGIBILI___PARZIALM"],
		"label": [
			"Edifici agibili",
			"Edifici non o solo parzialmente agibili"],
		"units": "",
		"scale": "1",
		"labelfield": "COMUNE",
		"labelupper": "1:500000",
		"title": "Edifici non agibili o parzialmente non agibili"
		}
	};
```
come si vede, il tema prende i dati direttamenta da un foglio di *google docs* (i fogli si trovano nella cartella drive condivisa Sviluppo Software > Scraping > agibilità ...)

**https://corsme.herokuapp.com** è n piccolo proxy per aggirare il problema 'crossdomain'. 

**storia/master/index.html** è una pagina html con jquery e bootstrap; per mettere un tema sulla mappa ci vuole questo Javascript:

```javascript
<a class="button" href='javascript:ixmaps.newTheme("",RT_CONTRIBUTI_AUTONOMA_SISTEMAZIONE,"clear");' >totale x comune</a>
 ```
 
 * il primo argomento "" e vouto; potrebbe contenere il nome della mappa in caso ci sono più di una mappa (p.e. due mappe accanto per due anni diversi)
 * il secondo argomento è il nome del oggetto JSON che definisce il tema
 * "clear" pulisce la mappa prima di presentare il tema; senza 'clear' il tema viene aggiunto 
 
 Spero di poter aggiungere presto il link alla documentazione del dialetto JSON per i temi 
