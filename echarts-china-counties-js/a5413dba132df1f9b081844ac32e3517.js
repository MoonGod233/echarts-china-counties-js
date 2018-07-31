(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('神农架林区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"429021","properties":{"name":"神农架林区","cp":[110.675743,31.744915],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@@AGCKKMQOKIECAEAC@GAOEOEI@AAAAA@E@A@A@GHGFGBAB@B@B@F@@@@@B@BAB@D@@ABA@GBC@CB@B@B@B@@BFBBBD@@BBDBBDAD@@@DADCDCDABABADCD@BADBBBDBF@BAB@BA@EDCDCF@DAF@B@DBBBFDFBF@D@B@@AFAD@@A@ABA@MDEBE@EDA@EHCDAF@B@BBD@DCDCB@AC@EEA@CAABA@CDC@ABA@CAEACAE@C@EBEBA@AAGAE@C@C@A@C@GBG@C@CB@BABABADAD@BA@ABCBA@ADEDEDADCDAB@@@BBBBB@@@B@B@BABABABE@CBG@GBIDIFEDCBABADAB@DAHAFABADCD@BABCBABABCBEDC@E@E@IAC@G@A@CAGCGCGAC@C@A@CBC@ADADAD@@ABAD@@@B@B@BBDJHFDDBF@FBDD@BBHBDBBJDLFBBDDBBBBBBFBHDDBFDDFDBFBFBHBF@D@F@DAFAFADADABBJDBDHDFBHFDD@DJHXLLBHJGPANLFJBNHB@LHHFHNBBDBNHTJHDDB@BFDDB@@DBD@T@ZAN@FBD@D@B@F@DADADAFC@ADKBABADCFEFG@AD@JAD@DALGJGBABAD@BBBBDF@F@J@FBBBBBBDBLDD@@B@BABBB@BAB@@BD@@@@@B@BAB@@@BA@@B@@A@@B@B@@ABA@CB@B@@@B@BA@ADA@AB@@GDA@C@A@A@CFA@CBE@@BABBHFJFFDFFBDBFBJDJDDDDDBDBN@JAFADEFCDIFCDA@CBC@C@@BFLFHBFBF@FBBFR@@BD@@BDBFDJBNAH@LFHHHHFJDLDLBLDJFHHFFJFHAJBJ@D@H@D@LCD@B@H@NBLBH@F@JAH@B@B@DBLDLDFBFDBBDB@B@@@DAFAB@B@DANBN@H@DB@@BFBDBD@D@JAHAD@BBFBFBDBBBDDBFDF@DBBBBFBF@F@DBB@B@DBPABAB@BABCBAAA@A@A@@@APAHAFCBABAB@B@B@HFFDBBHBBBB@HAB@BBB@@BBH@DAH@F@@@BDBLFPFBBB@@B@BABIFABADBDLHJDXFHBDADAF@B@B@@AB@@CBC@AAA@ACECE@@BADCB@B@DBF@HBD@BB@@BB@BBBBJB@@BB@HAF@@@P@H@FAFAHAH@D@D@HBB@B@FCBAD@D@JFFBD@D@B@@AJEBAB@D@B@BBB@LHDBF@B@FC@AD@BAD@@BJDB@DBB@DANGDAF@D@D@D@BBBBBB@BBFBJ@DBBFDFB@@PGNEPCP@FGJCFALAB@@@FADAZ@J@TCB@BABABADEBEBCBAB@DAB@BB@BBBDDDADAFABCBEBC@E@CBABCPKFGNQDEFCBCHGJEP@NBL@HAJGNOHI@ADC@ANOJIJKDG@CBADCBC@A@A@@BAAABA@AAA@A@A@@@A@@@AAAC@@@@AAA@@BC@A@AB@@@BA@@B@B@@CB@@@B@@@@A@@@A@A@@@AAA@@@ABABC@C@A@CBC@ADC@ABABA@ABABA@AB@@ABCBEBABC@A@A@@BC@@BADADABADAJADA@C@CBCBEDAB@F@NBJBB@DBD@F@DBBBDDD@BBB@BBFAB@BABADCBAB@@AH@D@@@BAJIB@DAFAD@FCD@BABEDEBA@AAA@@A@AAA@CAC@C@E@AEAAACCE@ACECECGCEOSCEGGCK@A@CBIFIBABO@C@C@A@A@@CCCACACAG@E@CACAECECGAAAEAAAAC@A@A@AEK@CAG@CA@CCAAEA@@I@C@G@EAEC@ECGCCAAGCAAOECCIGGECCCAG@CBCFCLCFADKJIFAD@J@P@FADCBABA@AA@@ECA@AAAAC@A@CAA@@BAFCBABCBA@EHGH@@CDI@C@ICGCIEIGCAA@C@GBC@GEECG@KBCACEGCEC@@ACAC@CBCBG@A@CAECGCCGGCAQ[ACEG@GAA@@AAC@I@C@EBEFCFCBCBA@CCEAEAG@G@I@KBE@E@C@CAGACAC@E@C@E@C@GFCBKBCBC@C@AAAAAA@A@GBCBG@ICEGGCC@E@CBGAEACCCCAACCC@CAIACCGKM@A@A@A@E@C@AAACCCCGEAC@C@GDG@G@ICEEGEGICAEAA@A@EDGHI@@DCDGBC@CCGACBC@CACCCIEEACAGAC@EAE@C@CACACE@@C@A@C@ABABABADABA@GBA@ABCB@BAD@BBF@@@BAD@BABADCB@@GB@@A@ADCDCF@@@BBBBB@@@@@DB@@BBB@F@@CF@B@@ABA@@BA@A@ABA@@@ADADABCBCBAB@BEAECAAAIBE@A@A@E@AA@CCAA@CACAGAG@CCCCAIGECEACAC@EBC@QAGB@JADCBEBCBCD@D@FBDBD@F@HAB@@CBKDKDEBCBGDGDGFCDEDG@IAC@A@CBEBEDADCDCHABCBABCBA@CCEBCBEBEBAA@CACEACBEBGFCF@BC@M@MBMAEIACA@@ACCA@@ACASQMMMOQQ@@AAKKQEA@MCQIA@CC"],"encodeOffsets":[[112891,32085]]}}],"UTF8Encoding":true});}));