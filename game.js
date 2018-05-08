var flag_url = "https://raw.githubusercontent.com/lipis/flag-icon-css/master/flags/4x3/";
countries = [
    ""
]
codes = {
    "ad.svg": "Andorra",
    "ae.svg": "United Arab Emirates",
    "af.svg": "Afghanistan",
    "ag.svg": "Antigua and Barbuda",
    "ai.svg": "Anguilla",
    "al.svg": "Albania",
    "am.svg": "Armenia",
    "ao.svg": "Angola",
    "aq.svg": "Antarctica",
    "ar.svg": "Argentina",
    "as.svg": "American Samoa",
    "at.svg": "Austria",
    "au.svg": "Australia",
    "aw.svg": "Aruba",
    "ax.svg": "Åland Islands",
    "az.svg": "Azerbaijan",
    "ba.svg": "Bosnia and Herzegovina",
    "bb.svg": "Barbados",
    "bd.svg": "Bangladesh",
    "be.svg": "Belgium",
    "bf.svg": "Burkina Faso",
    "bg.svg": "Bulgaria",
    "bh.svg": "Bahrain",
    "bi.svg": "Burundi",
    "bj.svg": "Benin",
    "bl.svg": "Saint-Barthélemy",
    "bm.svg": "Bermuda",
    "bn.svg": "Brunei Darussalam",
    "bo.svg": "Bolivia",
    "br.svg": "Brazil",
    "bs.svg": "Bahamas",
    "bt.svg": "Bhutan",
    "bv.svg": "Bouvet Island",
    "bw.svg": "Botswana",
    "by.svg": "Belarus",
    "bz.svg": "Belize",
    "ca.svg": "Canada",
    "cc.svg": "Cocos Islands",
    "cd.svg": "D.R. Congo",
    "cf.svg": "Central African Republic",
    "cg.svg": "R. Congo",
    "ch.svg": "Switzerland",
    "ci.svg": "Côte d'Ivoire",
    "ck.svg": "Cook Islands",
    "cl.svg": "Chile",
    "cm.svg": "Cameroon",
    "cn.svg": "China",
    "co.svg": "Colombia",
    "cr.svg": "Costa Rica",
    "cu.svg": "Cuba",
    "cv.svg": "Cape Verde",
    "cw.svg": "Curaçao",
    "cx.svg": "Christams Island",
    "cy.svg": "Cyprus",
    "cz.svg": "Czechia",
    "de.svg": "Germany",
    "dj.svg": "Djibouti",
    "dk.svg": "Denmark",
    "dm.svg": "Dominica",
    "do.svg": "Dominican Republic",
    "dz.svg": "ALgeria",
    "ec.svg": "Ecuador",
    "ee.svg": "Astonia",
    "eg.svg": "Egypt",
    "eh.svg": "Western Sahara",
    "er.svg": "Eritrea",
    "es-ct.svg": "Catalonia",
    "es.svg": "Spain",
    "et.svg": "Ethiopia",
    "eu.svg": "European Union",
    "fi.svg": "Finland",
    "fj.svg": "Fiji",
    "fk.svg": "Falkland Islands",
    "fm.svg": "Micronesia",
    "fo.svg": "Faroe Islands",
    "fr.svg": "France",
    "ga.svg": "Gabon",
    "gb-eng.svg": "England",
    "gb-nir.svg": "Northern Island",
    "gb-sct.svg": "Scotland",
    "gb.svg": "Great Britain",
    "gb-wls.svg": "Wales",
    "gd.svg": "Grenada",
    "ge.svg": "Georgia",
    "gg.svg": "Guernsey",
    "gh.svg": "Ghana",
    "gi.svg": "Gibraltar",
    "gl.svg": "Greenland",
    "gm.svg": "Gambia",
    "gn.svg": "Guinea",
    "gq.svg": "Equatorial Guinea",
    "gr.svg": "Greece",
    "gs.svg": "South Georgia",
    "gt.svg": "Guatemala",
    "gu.svg": "Guam",
    "gw.svg": "Guinea-Bissau",
    "gy.svg": "Guyana",
    "hk.svg": "Hong Kong",
    "hm.svg": "Heard and McDonald Islands",
    "hn.svg": "Honduras",
    "hr.svg": "Croatia",
    "ht.svg": "Haiti",
    "hu.svg": "Hungary",
    "id.svg": "Indonesia",
    "ie.svg": "Ireland",
    "il.svg": "Israel",
    "im.svg": "Isle of Man",
    "in.svg": "India",
    "io.svg": "British Indian Ocean Territory",
    "iq.svg": "Iraq",
    "ir.svg": "Iran",
    "is.svg": "Iceland",
    "it.svg": "Italy",
    "je.svg": "hersey",
    "jm.svg": "Jamaica",
    "jo.svg": "Jordan",
    "jp.svg": "Japan",
    "ke.svg": "Kenya",
    "kg.svg": "Kyrgyzstan",
    "kh.svg": "Cambodia",
    "ki.svg": "Kiribati",
    "km.svg": "Comoros",
    "kn.svg": "Saint Kitts and Nevis",
    "kp.svg": "North Korea",
    "kr.svg": "South Korea",
    "kw.svg": "Kuwait",
    "ky.svg": "Cayman Islands",
    "kz.svg": "Kazakhstan",
    "la.svg": "Laos",
    "lb.svg": "Lebanon",
    "lc.svg": "Saint Lucia",
    "li.svg": "Liechtenstein",
    "lk.svg": "Sri Lanka",
    "lr.svg": "Liberia",
    "ls.svg": "Lesotho",
    "lt.svg": "Lithuania",
    "lu.svg": "Luxembourg",
    "lv.svg": "Latvia",
    "ly.svg": "Libya",
    "ma.svg": "Morocco",
    "mc.svg": "Monaco",
    "md.svg": "Moldova",
    "me.svg": "Montenegro",
    "mg.svg": "Madagascar",
    "mh.svg": "Marshall Islands",
    "mk.svg": "Macedonia",
    "ml.svg": "Mali",
    "mm.svg": "Myanmar/Burma",
    "mn.svg": "Mongolia",
    "mo.svg": "Macao",
    "mp.svg": "Northern Mariana Islands",
    "mq.svg": "Martinique",
    "mr.svg": "Mauritania",
    "ms.svg": "Montserrat",
    "mt.svg": "Malta",
    "mu.svg": "Mauritius",
    "mv.svg": "Maldives",
    "mw.svg": "Malawi",
    "mx.svg": "Mexico",
    "my.svg": "Malaysia",
    "mz.svg": "Mozambique",
    "na.svg": "Namibia",
    "ne.svg": "Niger",
    "nf.svg": "Norfolk Island",
    "ng.svg": "Nigeria",
    "ni.svg": "Nicaragua",
    "nl.svg": "Netherlands",
    "no.svg": "Norway",
    "np.svg": "Nepal",
    "nr.svg": "Nauru",
    "nu.svg": "Niue",
    "nz.svg": "New Zealand",
    "om.svg": "Oman",
    "pa.svg": "Panama",
    "pe.svg": "Peru",
    "pf.svg": "French Polynesia",
    "pg.svg": "Papua New Guinea",
    "ph.svg": "Philippines",
    "pk.svg": "Pakistan",
    "pl.svg": "Poland",
    "pm.svg": "Saint Pierre and Miquelon",
    "pn.svg": "Pitcairn",
    "pr.svg": "Puerto Rico",
    "ps.svg": "Palestine",
    "pt.svg": "Portugal",
    "pw.svg": "Palau",
    "py.svg": "Paraguay",
    "qa.svg": "Qatar",
    "ro.svg": "Romania",
    "rs.svg": "Serbia",
    "ru.svg": "Russia",
    "rw.svg": "Rwanda",
    "sa.svg": "Saudia Arabia",
    "sb.svg": "Solomon Islands",
    "sc.svg": "Seychelles",
    "sd.svg": "Sudan",
    "se.svg": "Sweden",
    "sg.svg": "Singapore",
    "sh.svg": "Saint Helena",
    "si.svg": "Slovenia",
    "sk.svg": "Slovakia",
    "sl.svg": "Sierra Leone",
    "sm.svg": "San Marino",
    "sn.svg": "Senegal",
    "so.svg": "Somalia",
    "sr.svg": "Suriname",
    "ss.svg": "South Sudan",
    "st.svg": "Sao Tome and Principe",
    "sv.svg": "El Salvador",
    "sx.svg": "Sint Maarten",
    "sy.svg": "Syria",
    "sz.svg": "Swaziland",
    "tc.svg": "Turks and Caicos Islands",
    "td.svg": "Chad",
    "tg.svg": "Togo",
    "th.svg": "Thailand",
    "tj.svg": "Tajikistan",
    "tk.svg": "Tokelau",
    "tl.svg": "Timor-Leste",
    "tm.svg": "Turkmenistan",
    "tn.svg": "Tunisia",
    "to.svg": "Tonga",
    "tr.svg": "Turkey",
    "tt.svg": "Trinidad and Tobago",
    "tv.svg": "Tuvalu",
    "tw.svg": "Taiwan",
    "tz.svg": "Tanzania",
    "ua.svg": "Ukraine",
    "ug.svg": "Uganda",
    "un.svg": "United Nations",
    "us.svg": "United States of America",
    "uy.svg": "Uruguay",
    "uz.svg": "Uzbekistan",
    "va.svg": "Vatican City",
    "vc.svg": "Saint Vincent and grenadines",
    "ve.svg": "Venezuala",
    "vg.svg": "British Virgin Island",
    "vi.svg": "US Virgin Islands",
    "vn.svg": "Vietnam",
    "vu.svg": "Vanuatu",
    "wf.svg": "Wallis and Futuna Islands",
    "ws.svg": "Samoa",
    "ye.svg": "Yemen",
    "za.svg": "South Africa",
    "zm.svg": "Zambia",
    "zw.svg": "Zimbabwe"
};

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function init(){
    question();
}
function question(){
    var right_answer = getRandom(countries.keys(), 1);
    var wrong_answers = getRandom(countries.keys(), 3);

    // fix for monaco indonesia dupe
    while (wrong_answers.contains("mc") && wrong_answers.contains("id")) {
        wrong_answers = getRandom(countries.keys(), 3);
    }

    // fix for monaco indonesia dupe
    while(wrong_answers.contains(right_answer) ||
    (right_answer === "mc" && wrong_answers.contains("id")) ||
    (wrong_answers.contains("mc") && right_answer === "id")) {
        right_answer = getRandom(countries.keys(), 1);
    }

    // set flag image
    $('#flag').href=flag_url + right_answer;
    var order = shuffle([1, 2, 3, 4]);

    $('#option-'+order[0]).innerText = countries[right_answer];
    $('#option-'+order[1]).innerText = countries[wrong_answers[0]];
    $('#option-'+order[2]).innerText = countries[wrong_answers[1]];
    $('#option-'+order[3]).innerText = countries[wrong_answers[2]];

}
