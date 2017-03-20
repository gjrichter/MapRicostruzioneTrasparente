
	// -----------------------------------------------------------
	// T H E M E S 
	// -----------------------------------------------------------

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
	var RT_nonagibili_grid =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "",
	"style": {
		"type": "CHART|BUBBLE|EQUIDISTANT|SIZE|ZEROISVALUE|NEGATIVEISVALUE|SUM|VALUES|AGGREGATE",
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
		"gridwidthpx": "50",
		"title": "Edifici non agibili o parzialmente non agibili"
		}
	}	
	var RT_agibili_nonagibili_totale_pie =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_AGIBILI|EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "TOTALE",
	"style": {
		"type": "CHART|PIE|EQUIDISTANT|SIZE|ZEROISVALUE|NEGATIVEISVALUE|AUTOCOMPLETE|DTEXT|VALUES",
		"colorscheme": [
			"green",
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
		"units100": "",
		"scale": "1",
		"labelfield": "COMUNE",
		"sizefield": "TOTALE",
		"labelupper": "1:500000",
		"valueupper": "1:500000",
		"title": "EDIFICI_AGIBILI, NON AGIBILI, TOTALE"
		}
	};
	
	var RT_agibili_percent_dynalpha_quantile =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_AGIBILI",
	"field100": "TOTALE",
	"style": {
		"type": "CHOROPLETHE|QUANTILE|DOPACITYMAX|VALUES|ZEROISVALUE|NEGATIVEISVALUE",
		"colorscheme": [
			"5",
			"RGB(221,0,0)",
			"RGB(207,255,51)",
			"3colors",
			"RGB(148,204,200)"],
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableType": "csv",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"datacache": "true",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"units": "%",
		"units100": "",
		"scale": "1",
		"alphafield": "TOTALE",
		"alphafield100": "$density$",
		"dopacitypow": "3.513443700437606",
		"dopacityscale": "0.9605960100000001",
		"title": "EDIFICI_AGIBILI - % "
		}
	};

	var RT_nonagibili_percent_dynalpha_quantile =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "TOTALE",
	"style": {
		"type": "CHOROPLETHE|QUANTILE|DOPACITYMAX|VALUES|ZEROISVALUE|NEGATIVEISVALUE",
		"colorscheme": [
			"5",
			"RGB(207,255,51)",
			"RGB(221,0,0)",
			"3colors",
			"RGB(148,204,200)"],
		"textcolor":"white",
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableType": "csv",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"datacache": "true",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"units": "%",
		"units100": "",
		"scale": "1",
		"alphafield": "TOTALE",
		"alphafield100": "$density$",
		"dopacitypow": "3.513443700437606",
		"dopacityscale": "0.9605960100000001",
		"title": "EDIFICI NON AGIBILE - % "
		}
	};
	
	var RT_nonagibili_percent_dynalpha_popolazione_quantile =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "pop_res_tot",
	"style": {
		"type": "CHOROPLETHE|QUANTILE|DOPACITYMAX|ZEROISVALUE|NEGATIVEISVALUE|VALUES|NOINLINETEXT|VALUEBACKGROUND",
		"colorscheme": [
			"5",
			"RGB(207,255,51)",
			"RGB(221,0,0)",
			"3colors",
			"RGB(148,204,200)"],
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"units": "%",
		"scale": "1",
		"alphafield100": "$density$",
		"dopacitypow": "4",
		"dopacityscale": "1",
		"textcolor": "white",
		"title": "EDIFICI NON AGIBILE - % "
		}
	}
	var RT_nonagibili_percent_dynalpha_popolazione_pop_quantile =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "pop_res_tot",
	"style": {
		"type": "CHOROPLETHE|QUANTILE|DOPACITYMAX|ZEROISVALUE|NEGATIVEISVALUE|VALUES|NOINLINETEXT|VALUEBACKGROUND",
		"colorscheme": [
			"5",
			"RGB(207,255,51)",
			"RGB(221,0,0)",
			"3colors",
			"RGB(148,204,200)"],
		"opacity": "0.7",
		"fillopacity": "0.1",
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"units": "%",
		"scale": "1",
		"alphafield": "pop_res_tot",
		"alphafield100": "$density$",
		"dopacitypow": "2",
		"dopacityscale": "5",
		"textcolor": "white",
		"title": "EDIFICI NON AGIBILE - % "
		}
	}

	var RT_nonagibili_permille_dynalpha_popolazione_quantile =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "pop_res_tot",
	"style": {
		"type": "CHOROPLETHE|PERMILLE|QUANTILE|DOPACITYMAX|ZEROISVALUE|NEGATIVEISVALUE|NOINLINETEXT|VALUEBACKGROUND|VALUES",
		"colorscheme": [
			"5",
			"RGB(74,74,255)",
			"RGB(245,41,38)",
			"dynamic"],
		"opacity": "0.7",
		"fillopacity": "0.1",
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"units": "",
		"scale": "1",
		"alphafield100": "$density$",
		"dopacitypow": "4",
		"dopacityscale": "8",
		"textcolor": "white",
		"title": "EDIFICI NON AGIBILE x 1000",
		"snippet": "Edifici non agibili o parzialmente agibili / 1000 abitanti"
		}
	}
	var RT_nonagibili_permille_dynalpha_popolazione_pop_quantile =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "pop_res_tot",
	"style": {
		"type": "CHOROPLETHE|PERMILLE|QUANTILE|DOPACITYMAX|ZEROISVALUE|NEGATIVEISVALUE|NOINLINETEXT|VALUEBACKGROUND|VALUES",
		"colorscheme": [
			"7",
			"#80AF9B",
			"#FF3D62",
			"3colors",
			"#FBCDAB"],
		"opacity": "0.7",
		"fillopacity": "0.1",
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"units": "",
		"scale": "1",
		"alphafield": "pop_res_tot",
		"alphafield100": "$density$",
		"dopacitypow": "2",
		"dopacityscale": "5",
		"textcolor": "white",
		"title": "EDIFICI NON AGIBILE x 1000",
		"snippet": "colore = n° non agibili o parzialmente agibili / 1000 abitanti<br>intensità = densità della popolazione"
		}
	}
	var RT_nonagibili_permille_dynalpha_popolazione_pop_circle =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "pop_res_tot",
	"style": {
		"type": "CHART|SYMBOL|SIZEP4|DOPACITY|ZEROISVALUE|NEGATIVEISVALUE|QUANTILE|VALUES|VALUEBACKGROUND|PERMILLE",
		"colorscheme": [
			"7",
			"#80AF9B",
			"#FF3D62",
			"3colors",
			"#FBCDAB"],
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"symbols": [
			"circle"],
		"units": "",
		"normalsizevalue": "10000",
		"scale": "1",
		"sizefield": "pop_res_tot",
		"dopacitypow": "2",
		"dopacityscale": "10",
		"linecolor": "none",
		"title": "EDIFICI NON AGIBILE x 1000",
		"snippet": "colore = n° non agibili o parzialmente agibili / 1000 abitanti<br>diametro = popolazione"
		}
	}
	var RT_agibili_nonagibili_symbols =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_AGIBILI|EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "",
	"style": {
		"type": "CHART|SYMBOL|SEQUENCE|CENTER|RINGS|ZEROISVALUE|NEGATIVEISVALUE|AUTOCOMPLETE",
		"colorscheme": [
			"green",
			"red"],
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"symbols": [
			"circle"],
		"values": [
			"EDIFICI_AGIBILI",
			"EDIFICI_NON__AGIBILI___PARZIALM"],
		"label": [
			"Edifici agibili",
			"Edifici non o solo parzialmente agibili"],
		"units": "",
		"units100": "",
		"scale": "1",
		"sizefield": "TOTALE",
		"fadenegative": "1",
		"title": "EDIFICI_AGIBILI / NON AGIBILI"
		}
	}

	var RT_nonagibili_totale_symbols =  
	{
	"layer": "com2011_s",
	"field": "TOTALE|EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "",
	"style": {
		"type": "CHART|SYMBOL|SEQUENCE|CENTER|RINGS|ZEROISVALUE|NEGATIVEISVALUE|AUTOCOMPLETE",
		"colorscheme": [
			"white",
			"red"],
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"symbols": [
			"circle"],
		"values": [
			"EDIFICI TOTALE",
			"EDIFICI_NON__AGIBILI___PARZIALM"],
		"label": [
			"Edifici totali",
			"Edifici non o solo parzialmente agibili"],
		"units": "",
		"units100": "",
		"scale": "1",
		"sizefield": "TOTALE",
		"fadenegative": "1",
		"title": "EDIFICI NON AGIBILI"
		}
	}

	var RT_percent_nonagibili_pie =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "TOTALE",
	"style": {
		"type": "CHART|PIE|EQUIDISTANT|ZEROISVALUE|NEGATIVEISVALUE|AUTOCOMPLETE|VALUES",
		"colorscheme": [
			"5",
			"#dd0000",
			"#dd0000",
			"dynamic",
			"cold"],
		"textcolor":"black",
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"units": "",
		"units100": "",
		"scale": "0.5",
		"title": "EDIFICI NON AGIBILI %"
		}
	}	
	var RT_percent_nonagibili_pie_size =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "TOTALE",
	"style": {
		"type": "CHART|PIE|SIZE|EQUIDISTANT|ZEROISVALUE|NEGATIVEISVALUE|AUTOCOMPLETE|VALUES",
		"colorscheme": [
			"5",
			"RGB(221,0,0)",
			"RGB(221,0,0)",
			"dynamic",
			"cold"],
		"shadow": "true",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"showdata":"true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"units": "",
		"normalsizevalue": "2383.2287206772794",
		"scale": "0.6468660000000002",
		"labelfield": "COMUNE",
		"sizefield": "TOTALE",
		"textcolor": "black",
		"boxopacity": "0.01",
		"titlefield": "COMUNE",
		"labelupper": "1:500000",
		"title": "EDIFICI NON AGIBILI %"
		}
	};
	var RT_percent_nonagibili_grid_10km =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "TOTALE",
	"style": {
		"type": "CHART|SYMBOLS|GRIDSIZE|DOPACITY|EQUIDISTANT|ZEROISVALUE|NEGATIVEISVALUE|VALUES|AGGREGATE",
		"colorscheme": [
			"5",
			"#dd0000",
			"#dd0000",
			"dynamic",
			"cold"],
		"shadow": "false",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"symbols": [
			"hexagon"],
		"units": "%",
		"scale": "1",
		"dopacitypow": "1",
		"dopacityscale": "1",
		"textcolor": "white",
		"linecolor": "white",
		"gridwidth": "10000",
		"title": "NON AGIBILE - % media"
		}
	}
	var RT_percent_nonagibili_popolazione_grid_10km =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "pop_res_tot",
	"style": {
		"type": "CHART|SYMBOLS|GRIDSIZE|DOPACITY|EQUIDISTANT|ZEROISVALUE|NEGATIVEISVALUE|VALUES|AGGREGATE",
		"colorscheme": [
			"5",
			"#dd0000",
			"#dd0000",
			"dynamic",
			"cold"],
		"shadow": "false",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"symbols": [
			"hexagon"],
		"units": "%",
		"scale": "0.99",
		"dopacitypow": "3",
		"dopacityscale": "1",
		"textcolor": "black",
		"linecolor": "none",
		"gridwidth": "9605.9601",
		"title": "NON AGIBILE - % media"
		}
	}

	var RT_nonagibili_hexbin =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "",
	"style": {
		"type": "CHART|SYMBOLS|GRIDSIZE|DOPACITY|EQUIDISTANT|ZEROISVALUE|NEGATIVEISVALUE|VALUES|AGGREGATE|SUM",
		"colorscheme": [
			"5",
			"#dd0000",
			"#dd0000",
			"dynamic",
			"cold"],
		"shadow": "false",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"showdata": "true",
		"symbols": [
			"hexagon"],
		"units": "",
		"scale": "0.99",
		"dopacitypow": "3",
		"dopacityscale": "1",
		"textcolor": "white",
		"gridwidthpx": "50",
		"title": "EDIFICI NON AGIBILE x 1000",
		"snippet": "Edifici non agibili o parzialmente agibili / 1000 abitanti"
		}
	}
	var RT_nonagibili_x_mille_hexbin =  
	{
	"layer": "com2011_s",
	"field": "EDIFICI_NON__AGIBILI___PARZIALM",
	"field100": "pop_res_tot",
	"style": {
		"type": "CHART|SYMBOLS|GRIDSIZE|DOPACITY|EQUIDISTANT|ZEROISVALUE|NEGATIVEISVALUE|VALUES|AGGREGATE|SUM|PERMILLE",
		"colorscheme": [
			"5",
			"#dd0000",
			"#dd0000",
			"dynamic",
			"cold"],
		"shadow": "false",
		"dbtable": "themeDataObj",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1dnppgKPXcvAkLWTgSqz6NlkgkKXMpfbsZxey1qnvjUM/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "COMUNE",
		"lookupfield": "COMUNE",
		"showdata": "true",
		"symbols": [
			"hexagon"],
		"units": "",
		"scale": "0.99",
		"dopacitypow": "3",
		"dopacityscale": "1",
		"textcolor": "white",
		"gridwidthpx": "50",
		"title": "EDIFICI NON AGIBILE x 1000",
		"snippet": "Edifici non agibili o parzialmente agibili / 1000 abitanti"
		}
	}

	var RT_Container_Numeri_03_03_2017 =  
	{
	"layer": "generic",
	"field": "Numero_container",
	"field100": "",
	"style": {
		"type": "CHART|BUBBLE|EQUIDISTANT|VALUES|ZEROISVALUE|NEGATIVEISVALUE|AGGREGATE|SUM",
		"colorscheme": [
			"1",
			"RGB(210,227,244)",
			"RGB(16,68,130)",
			"3colors",
			"RGB(74,144,225)"],
		"shadow": "true",
		"dbtable": "themeDataObj_container",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1_1RfaRr68lh-PT3LTSfTn_7keV4zTeV8UZFEcnM7cgw/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "Y|X",
		"lookupfield": "Y|X",
		"symbols": [
			"square"],
		"units": "",
		"scale": "1",
		"normalsizevalue":"1000",
		"gridwidthpx": "30",
		"title": "Container per l'accoglienza temporanea",
		"snippet": "Fonte: Sito del Dipartimento della Protezione Civile - Presidenza del Consiglio dei Ministri<br>Licenza: CCBY 4.0<br> data:2017-03-03",
		"description":"posizioni e numeri dei container possono essere aggreagti rispetto al zoom della mappa; andare sul posto per vedere le posizione original"
		}
	};

	var RT_CONTRIBUTI_AUTONOMA_SISTEMAZIONE_SHAPE =  
	{
	"layer": "com2011_s",
	"field": "Totale contributi CAS",
	"field100": "",
	"style": {
		"type": "CHOROPLETHE|ZEROISVALUE|NEGATIVEISVALUE|AGGREGATE|SUM|VALUES|VALUEBACKGROUND",
		"colorscheme": [
			"7",
			"#D2E3F4",
			"#104482",
			"3colors",
			"#4A90E1"],
		"shadow": "true",
		"dbtable": "themeDataObj_CAS_marche",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1KR-wKZmfFvbdv5I4N3pLIpNIAQ9XYRWNyexO57kfZws/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "Comune",
		"lookupfield": "Comune",
		"units": "€",
		"align": "top",
		"normalsizevalue": "1000000",
		"scale": "1",
		"textcolor": "white",
		"boxopacity": "0.5",
		"titlefield": "Comune",
		"boxupper": "1:100000",
		"aggregationfield": "Comune",
		"title": "Contributi autonoma sistemazione",
		"snippet": "Nuclei familiari soggetti a ordinanza di sgombero di prima unità abitativa dichiarata inagibile a seguito degli eventi sismici Agosto Ottobre 2016 (O.C.D.P.C. 388/2016) - pagati al Comune fino all'ultimo rendiconto"
		}
	}
	var RT_CONTRIBUTI_AUTONOMA_SISTEMAZIONE_MESE =  
	{
	"layer": "com2011_s",
	"field": "Mese",
	"field100": "",
	"style": {
		"type": "BOX|LONGTITLE|CHART|BAR|3D|EXACT|SIZE|ZEROISVALUE|NEGATIVEISVALUE|AGGREGATE|SUM|VALUES|VALUEBACKGROUND",
		"colorscheme": [
			"7",
			"#C1DAE7",
			"#D95461",
			"3colors",
			"#FBE9CA"],
		"shadow": "false",
		"align":"top",
		"dbtable": "themeDataObj_CAS_marche",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1KR-wKZmfFvbdv5I4N3pLIpNIAQ9XYRWNyexO57kfZws/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "Comune",
		"lookupfield": "Comune",
		"values": [
			"Agosto",
			"Settembre",
			"Ottobre",
			"Novembre",
			"Dicembre",
			"Gennaio",
			"Fabbraio"],
		"label": [
			"Agosto",
			"Settembre",
			"Ottobre",
			"Novembre",
			"Dicembre",
			"Gennaio",
			"Febbraio"],
		"units": "€",
		"normalsizevalue": "1000000",
		"scale": "1",
		"rangescale": "0.64039734",
		"sizefield": "Totale contributi CAS",
		"boxopacity": "0.5",
		"boxupper": "1:100000",
		"valuesupper": "1:300000",
		"titlefield": "Comune",
		"aggregationfield": "Comune",
		"title": "Contributi autonoma sistemazione",
		"snippet": "Nuclei familiari soggetti a ordinanza di sgombero di prima unità abitativa dichiarata inagibile a seguito degli eventi sismici Agosto Ottobre 2016 (O.C.D.P.C. 388/2016) - pagati al Comune fino all'ultimo rendiconto"
		}
	};

	var RT_CONTRIBUTI_AUTONOMA_SISTEMAZIONE =  
	{
	"layer": "com2011_s",
	"field": "Totale contributi CAS",
	"field100": "",
	"style": {
		"type": "BOX|LONGTITLE|CHART|BUBBLE|SIZE|ZEROISVALUE|NEGATIVEISVALUE|AGGREGATE|SUM|VALUES|VALUEBACKGROUND",
		"colorscheme": [
			"7",
			"#D2E3F4",
			"#104482",
			"3colors",
			"#4A90E1"],
		"shadow": "true",
		"dbtable": "themeDataObj_CAS_marche",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1KR-wKZmfFvbdv5I4N3pLIpNIAQ9XYRWNyexO57kfZws/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "Comune",
		"lookupfield": "Comune",
		"units": "€",
		"normalsizevalue": "1000000",
		"scale": "1",
		"boxopacity": "0.5",
		"titlefield": "Comune",
		"boxupper": "1:100000",
		"aggregationfield": "Comune",
		"title": "Contributi autonoma sistemazione",
		"snippet": "Nuclei familiari soggetti a ordinanza di sgombero di prima unità abitativa dichiarata inagibile a seguito degli eventi sismici Agosto Ottobre 2016 (O.C.D.P.C. 388/2016) - pagati al Comune fino all'ultimo rendiconto"
		}
	}

	var RT_CONTRIBUTI_AUTONOMA_SISTEMAZIONE_PERSONA =  
	{
	"layer": "com2011_s",
	"field": "Totale contributi CAS",
	"field100": "Numero Persone",
	"style": {
		"type": "BOX|LONGTITLE|CHART|BUBBLE|SIZE|ZEROISVALUE|NEGATIVEISVALUE|AGGREGATE|SUM|VALUES|VALUEBACKGROUND|FRACTION",
		"colorscheme": [
			"7",
			"#D2E3F4",
			"#104482",
			"3colors",
			"#4A90E1"],
		"shadow": "true",
		"dbtable": "themeDataObj_CAS_marche",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1KR-wKZmfFvbdv5I4N3pLIpNIAQ9XYRWNyexO57kfZws/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "Comune",
		"lookupfield": "Comune",
		"units": "€",
		"normalsizevalue": "1000",
		"scale": "1",
		"boxopacity": "0.5",
		"titlefield": "Comune",
		"boxupper": "1:100000",
		"aggregationfield": "Comune",
		"title": "Contributi autonoma sistemazione",
		"snippet": "Nuclei familiari soggetti a ordinanza di sgombero di prima unità abitativa dichiarata inagibile a seguito degli eventi sismici Agosto Ottobre 2016 (O.C.D.P.C. 388/2016) - pagati al Comune fino all'ultimo rendiconto"
		}
	}

	var RT_CONTRIBUTI_AUTONOMA_SISTEMAZIONE_NUCLEIFAM =  
	{
	"layer": "com2011_s",
	"field": "Totale contributi CAS",
	"field100": "Numero Nuclei Familiari",
	"style": {
		"type": "BOX|LONGTITLE|CHART|BUBBLE|SIZE|ZEROISVALUE|NEGATIVEISVALUE|AGGREGATE|SUM|VALUES|VALUEBACKGROUND|FRACTION",
		"colorscheme": [
			"7",
			"#D2E3F4",
			"#104482",
			"3colors",
			"#4A90E1"],
		"shadow": "true",
		"dbtable": "themeDataObj_CAS_marche",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1KR-wKZmfFvbdv5I4N3pLIpNIAQ9XYRWNyexO57kfZws/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "Comune",
		"lookupfield": "Comune",
		"units": "€",
		"normalsizevalue": "2000",
		"scale": "1",
		"boxopacity": "0.5",
		"titlefield": "Comune",
		"boxupper": "1:100000",
		"aggregationfield": "Comune",
		"title": "Contributi autonoma sistemazione",
		"snippet": "Nuclei familiari soggetti a ordinanza di sgombero di prima unità abitativa dichiarata inagibile a seguito degli eventi sismici Agosto Ottobre 2016 (O.C.D.P.C. 388/2016) - pagati al Comune fino all'ultimo rendiconto"
		}
	}

	var RT_CONTRIBUTI_AUTONOMA_SISTEMAZIONE_NUMERO_PERSONE =  
	{
	"layer": "com2011_s",
	"field": "Numero Persone",
	"field100": "",
	"style": {
		"type": "BOX|LONGTITLE|CHART|LABELL|SIZE|ZEROISVALUE|NEGATIVEISVALUE|AGGREGATE|VALUES|VALUEBACKGROUND",
		"colorscheme": [
			"7",
			"#D2E3F4",
			"#104482",
			"3colors",
			"#4A90E1"],
		"shadow": "true",
		"dbtable": "themeDataObj_CAS_marche",
		"filter":"WHERE Mese IN (Dicembre,Gennaio,Fabbraio)",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1KR-wKZmfFvbdv5I4N3pLIpNIAQ9XYRWNyexO57kfZws/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "Comune",
		"lookupfield": "Comune",
		"units": "",
		"align":"center",
		"normalsizevalue": "1000",
		"scale": "1",
		"boxopacity": "0.5",
		"borderradius":"1",
		"titlefield": "Comune",
		"boxupper": "1:200000",
		"aggregationfield": "Comune",
		"title": "Contributi autonoma sistemazione",
		"snippet": "Nuclei familiari soggetti a ordinanza di sgombero di prima unità abitativa dichiarata inagibile a seguito degli eventi sismici Agosto Ottobre 2016 (O.C.D.P.C. 388/2016) - pagati al Comune fino all'ultimo rendiconto <br> <br> Numero di persone per mese (media di 3 mesi)"
		}
	}

	var RT_CONTRIBUTI_AUTONOMA_SISTEMAZIONE_NUMERO_NUCLEIFAM =  
	{
	"layer": "com2011_s",
	"field": "Numero Nuclei Familiari",
	"field100": "",
	"style": {
		"type": "BOX|LONGTITLE|CHART|LABELL|SIZE|ZEROISVALUE|NEGATIVEISVALUE|AGGREGATE|VALUES|VALUEBACKGROUND",
		"colorscheme": [
			"7",
			"#D2E3F4",
			"#104482",
			"3colors",
			"#4A90E1"],
		"shadow": "true",
		"dbtable": "themeDataObj_CAS_marche",
		"filter":"WHERE Mese IN (Dicembre,Gennaio,Fabbraio)",
		"dbtableUrl": "https://corsme.herokuapp.com/http://docs.google.com/spreadsheets/d/1KR-wKZmfFvbdv5I4N3pLIpNIAQ9XYRWNyexO57kfZws/export?format=csv",
		"dbtableType": "csv",
		"datacache": "true",
		"itemfield": "Comune",
		"lookupfield": "Comune",
		"units": "",
		"align":"center",
		"normalsizevalue": "1000",
		"scale": "1",
		"boxopacity": "0.5",
		"borderradius":"1",
		"titlefield": "Comune",
		"boxupper": "1:200000",
		"aggregationfield": "Comune",
		"title": "Contributi autonoma sistemazione",
		"snippet": "Nuclei familiari soggetti a ordinanza di sgombero di prima unità abitativa dichiarata inagibile a seguito degli eventi sismici Agosto Ottobre 2016 (O.C.D.P.C. 388/2016) - pagati al Comune fino all'ultimo rendiconto <br> <br> Nuclei familiari per mese (media di 3 mesi)"
		}
	}