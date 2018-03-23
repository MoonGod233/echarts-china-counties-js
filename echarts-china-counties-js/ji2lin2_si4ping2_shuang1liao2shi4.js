(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('双辽市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"220382","properties":{"name":"双辽市","cp":[123.502723,43.518302],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BBD@HDD@DBB@B@B@B@@@BB@@B@@@B@BB@@D@DBFBFBB@B@BBB@@@B@@@B@BBB@B@D@B@B@@@@@B@@BB@@@@@B@@B@@@@@@@B@@BBBB@@BBB@@BB@@@B@B@B@B@FAdEPCD@LANC@@@@F@HALCHAHAHAPCFADAH@BAD@@@HADAFA@@@@@BB@B@BB@BB@@D@@@DBB@@@@ABB@@B@BB@@B@@@DB@@B@@@BB@BB@B@@BBA@@B@@@B@@@B@@@BAB@BA@@@ABA@@B@@ABEDCB@@@BA@@BCBCD@@A@A@@@A@A@EA@@A@@A@A@@@@@@@@@@@AC@AAA@A@@@@@ABAF@@ABCHADCFAB@DA@CF@BAB@B@@F@AFDLAFA@@@@@@@@B@@@B@@@@@@@BB@@A@@B@@AB@@@BA@ABA@C@A@@BABADA@AB@@@B@BAB@BBB@@@B@@@BBB@@@BA@@@@@A@@A@@A@@@A@@B@BA@@B@B@B@BA@@B@BAD@@@FAD@B@B@B@FABA@@B@@AB@@A@@@AA@@A@@BC@@@AB@B@B@B@BBDB@@BB@BB@BB@@D@BBB@B@BA@@B@@AB@@@B@B@BBB@B@B@B@B@BAB@D@D@BBB@B@@@DBDBB@B@B@@@BBB@DAB@@@@@B@@BB@@B@B@B@B@B@B@DBDBB@BAB@@ABABA@CBAB@@@B@B@@DBB@DBBB@@@B@BA@@BABA@AB@@@B@@B@DBB@B@@@@B@@ABA@ABA@@@BB@@@@@BB@@@B@B@BBB@B@B@@@B@B@@@@@B@@@@B@B@@@@B@@@B@@@B@B@B@B@@@@A@@BA@ABA@@B@@@B@@@B@@BA@@BAB@@@@@BB@BBD@BBB@@@BBBD@@@@AB@@@@ABA@AB@@AB@@@B@B@@@D@@BB@@@@B@B@@@B@@@BB@@A@@BA@A@@@A@@B@@@@BBB@BB@BB@@BA@@@@@@BC@@@A@@@AB@@BBBB@B@@@B@@ADA@A@@BA@A@@@@BA@@BBB@@@B@@AB@@AB@@@B@B@B@B@B@@ED@@@BA@@B@B@@AB@@B@@B@BA@A@@BA@@D@@@@AB@@A@@@@B@@@BB@@B@BB@FFB@@B@@@D@@@B@@@@@@@@@@@B@B@B@@@B@BA@C@@@AB@@@@@B@@@B@@@@@BA@AB@@@@@BB@@BBB@B@B@@@@@BA@A@@@@@@A@@AA@@@@A@@@A@@B@@@BB@@BB@@@B@B@@@@@@@@@@B@@A@@@A@ABA@@B@@@@BB@B@@@@@BAA@@A@@@AB@@@B@@@BA@@@A@C@A@@@@BA@@D@@A@@@AB@@@@@@@B@@AB@@A@@@@@@D@@@@AB@BA@@BAB@BA@@B@@A@AB@@B@@B@@B@@B@@@B@@A@@@AA@AA@@AA@A@@AA@AAA@A@A@@BA@ABAB@BA@@BCBADAB@@@@@B@@@@@B@BAB@B@@B@@@@B@@@@@@B@@@BB@@@@@@@@@BB@@@@@@B@@@@@@ABB@A@@B@D@B@F@BBD@B@D@D@BHDB@@B@B@BAD@@B@@@D@B@HBB@AH@@@B@B@B@B@DAJA@@BA@ABAD@@@B@DIB@AA@AA@@CAAAE@DB@@BB@@@@BB@@@@BBA@CBAB@BAB@@ABADABAB@@@B@@ABAB@B@B@@B@@DAD@D@B@DC@C@E@AB@B@BA@A@AB@@AD@B@@@D@@@B@D@BBBAB@B@D@D@B@@B@@B@@B@DD@@DBAB@B@H@B@D@BBB@DABABEBAD@BBF@@@F@BCB@@@BABAD@BC@@B@@@D@@B@@@CDA@CDEAA@C@A@E@AF@@AFAHA@@BAB@@BD@@ADAD@@@@@@BBBB@B@@@@@BAB@@@B@@ADADAFEHGL@@@@AB@D@@@F@B@@@FGB@AEAADC@@@@BE@ABADADABBD@BC@A@ABC@C@@@@@ABAF@B@@AB@BAB@@CHCHCACA@@GAADE@@@AA@@@A@@A@A@@BCHADAB@@@B@@@@A@@B@@@BAB@BAB@@@@AB@@CDCDH@D@A@FDFFB@R@@@BB@@FBB@@@@@FBDB]XQPCB@@CD@@ABABCB@@@BA@@B@BABAB@B@B@BAB@BC@A@AB@BABA@CBABCBCBEBCBGBCBCBGBCBCB@@@@@@A@@BA@@BABABAB@BB@@@@B@B@@@DA@@@@B@B@@@B@@AHG@CL@B@@B@LDFBBB@@@@@@AD@@AFABF@@@BB@@CDDB@@B@@@@BA@ABEFhFB@@@@AB@BBB@@@B@@@B@@@B@@@BB@@B@@@@@B@@@@@@@@@B@B@BAB@B@@@D@B@@@B@F@BA@@@@B@FAF@FAD@FAF@B@D@DADAD@DA@@B@@B@D@B@BDBD@BBBBB@@@B@@DD@DBF@H@B@D@B@BA@AB@B@BA@@BBB@@@B@@AB@B@BBB@@BBAB@B@@@@B@BB@@@D@B@D@@@BA@@B@D@F@B@@BB@@B@@BBB@B@B@BAB@B@B@@@B@@@@B@B@@@@@@D@B@B@@@F@HBF@DBB@B@BB@@B@B@JAB@BAD@F@D@D@D@HAD@HA@@DBLAT@TAP@JAB@BDBBDBDBDBDBD@FBFBDBD@DBD@F@D@BBD@DAD@B@D@D@B@DAJCPCJCFAH@FAF@D@DAL@D@F@D@DBBBDBBDBDB@BBBBBBDBDBD@DBBBB@@B@DBD@D@DBD@DBBABB@@BB@BBD@BBF@D@B@D@B@B@D@D@B@@@BA@ABA@CDE@CBCBAB@BCBAJCBADAAA@@CAAA@A@C@A@@@ABABCFCBADADC@@DCDADCDADCBADA@A@CBC@ABABA@@B@B@D@ACAAAAAA@@@AB@@ADABA@@HCAA@@@AB@@AHEBBBBD@B@BAB@D@BBDBB@B@BABADABAB@BB@@BBD@@@@@B@@@FE@@@@@ABAHGBAHGBCFCAA@ACAAAAAEC@@@A@A@A@ABABACAGCDABADADAB@BA@@D@@@RGREzS\\BBFAVAB@dBH@FBF@H@FAZ@d@\\A@@D@D@F@LBRBlD@@B@J@FBD@D@@@H@FBD@@@@@@CBA@@@A@A@A@A@A@AAA@@B@@AA@B@@@@@BB@@@@B@@@B@@@@@BB@@@@@@@@@AB@B@@@@@@@@AA@@@@@@@@C@@@A@@@@AA@@@@@ACA@@@@@A@@@A@A@@@@@A@@@A@@@A@@@A@@@ABA@ABA@A@ABA@A@CBA@A@A@A@ABC@A@ABA@ABA@ABA@C@ABA@ABA@CBABA@ABCBA@ABA@@BA@ABABC@A@CBA@A@ABCBABABCBABABABABCDC@ABAB@@ABA@@DCBC@ADA@A@@B@@A@@@@B@@@@AB@@@BA@A@ADC@AB@@AB@@@@@@A@@@@@A@A@@@C@@BA@A@@BADABA@@@A@@@@BABAFA@ABAB@B@@ABA@@B@@@@@@@@AA@@@@A@@@@@@@AA@@@@A@@B@@@@AB@@@@@@@@@@@@AAA@@@@@A@@A@@A@@B@B@BBBA@@B@@ABCBA@ABA@CBA@@@@@A@A@AAA@@@A@AA@@AAC@AAC@AAA@@AA@AAA@A@@@AAA@@@BA@CB@@CDA@@@@@@B@@EBEDCBGCFGDCBA@@BC@@@@@@@@@@A@@@BC@CA@@@@A@@@A@@@A@@@A@@B@B@@@@@@@@C@@@A@@@A@@BABA@@BAB@A@A@@A@A@A@A@@@@B@@@@@B@BAB@@@@@@ABA@@AA@@@A@@@A@A@@@A@AA@@A@AA@C@A@C@CAC@@@A@A@C@A@AA@@@C@@@@@A@@E@A@A@@@@A@C@@A@A@@A@@@CBA@@@@C@ABA@A@A@@@@B@B@@@@C@@@A@A@@@@@@A@A@A@A@@@@@@A@CA@@A@A@@@@@BCBA@@A@A@@@@@@@@AB@B@B@D@B@BA@@BAB@DA@A@@@@@AAAAAAA@AAA@@FCDABA@@A@A@@A@AAAAC@AAA@AA@C@A@@@@@AA@@@@BC@@@@D@FBHBD@@@@A@C@ABBJBD@FBB@@@@@@@BA@CBA@A@@BC@@BA@CBA@A@ABC@ABABC@@@ABB@@B@@@@@BA@@BAB@BAB@@AB@@@BABA@AB@@@@AB@@CBC@@@A@A@@@A@@@A@@@A@@@@AA@@A@AA@A@@A@@@@A@@BA@@BA@@B@@A@A@@@AA@@A@@AA@CAAA@@AAA@A@@AA@@@@@ABC@@HC@@B@@BB@@BB@@@@BDABAFCDADAFCDAFAFCICCAEEGAI@A@C@A@A@A@@AAA@CAAC@A@CBEAAA@@@CAAEA@ACACAAAA@@A@@@A@A@@@AAA@CCC@@AAAC@CACCICA@AC@AAAA@@@@AA@@EAICGBGBGB@@A@A@AAI@GCAACC@G@A@A@@AE@@CAC@GBC@E@A@AA@A@C@C@@ECCCAABC@CAAEA@@@@GCKACAGAEAC@ACCGCAAAC@A@@@G@EAE@@@A@EAAAAC@ADC@A@C@ACA@@@AA@@A@@AA@@@@A@@AA@@AAAA@M@@@AB@@@B@B@BA@A@@@@@A@@@A@@A@@A@@A@A@@@AA@@@@BA@A@@B@@@@@@A@@@@@A@A@A@A@@@C@@@@@AA@@@@AAA@A@AA@@A@@@@@@A@A@@B@@AA@@@@@@A@@A@@@AB@@A@@@A@@@@@A@@@A@@A@@A@@@@A@@@@@@BA@@@@@A@@@@@@@@A@@AA@AB@@A@@@@@@@@B@@@@@BB@@@@B@@@@@@A@@@@@A@@@@@@@A@@@@A@@@@@@AA@@@A@A@@@@@A@@@@@@@AB@@A@@@@@@A@@@@A@@A@@@A@@BA@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@@@A@@@@@@@@@@@A@@A@@A@@@A@@AA@@@A@@A@@A@@B@@@@@@A@@@@@@@@A@@A@@@@@@@@A@@@@@@@@@@A@@@@@@@AA@@ABEBC@GA@@C@A@@@A@AA@@AA@CACCE@GCC@A@AAAACCA@C@EBC@A@AB@@C@CBA@E@AAA@E@EACCC@GBKF@@A@CBCAGCCAEBE@AAA@@@A@AACAA@IGACCCCCCC@ADKBECEACAC@CC@K@E@@@@A@@@AAA@A@AACAAIA@ABE@CAAGA@ABEBEAAECA@@A@ABAHAB@BAA@@A@@EC@@AA@A@@AA@@A@A@A@ABA@@ACAAAAA@AA@AACAA@A@CAC@A@@AAA@ABAB@BADADA@@BA@AAC@CAAA@@A@AB@@A@A@@@AA@EAA@@AACAA@AB@FCBAB@@AA@@@A@@@A@A@ABAAA@@AA@@AB@BA@AD@D@@@B@@AAAAAC@AAC@AAAA@ACACCCCAAA@A@A@CBA@A@@AA@@ABA@@BABAD@B@B@B@@A@@@AA@A@A@A@CBABA@A@@@C@CAA@ECAC@@AAA@@@ABA@@@AAA@@@AA@@@AB@BA@A@A@@@AA@@@CAAA@AA@BA@@BAB@BA@@@A@@A@CAA@A@A@A@@@A@@A@@BCDC@C@@@A@@A@AAA@AAAAAA@A@A@@BA@@DA@@B@D@B@BADC@A@@AA@@C@E@C@C@@@AAAA@@@A@CB@@AB@BAB@BBB@B@@@BA@@@@@A@@@AAAAA@A@A@@C@I@GAM@M@I@EAK@M@OAM@I@K@CAA@@@A@@@G@A@@@I@K@I@GBEDIDC@EDGBCBCD@@CBCFCDA@ADABCDEFABCDEFABAB@@@@ABABGHADA@ADGFGFABACEEEEEEEEKEA@A@@@A@CD@@A@AB@BCBADA@ABAD@BA@ABAD@@AB@@ADCB@B@@@BA@@B@@@BA@@@AB@@@@ABAB@@AB@@AB@B@@CLA@@BAB@@AD@@ADABAB@@AB@BA@@@ABABABA@@B@@O@@@A@AACAC@A@A@A@@@A@@@@@@BA@@@AB@BA@@@AB@@A@@AEoUAFI\\@@e`ADIL@PAHIPONODEJ{CcTCBNV@@BB@@@BBB@@BB@BBD@BBFBBBF@D@@EDABEDCBCDEBABEDCBCDA@@BA@@@@BC^"],"encodeOffsets":[[126264,44596]]}}],"UTF8Encoding":true});}));