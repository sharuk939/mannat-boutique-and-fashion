
const DEFAULT_LANG="hi";   // en = English, gu = Gujarati, hi = Hinglish
const WHATSAPP="917043434475";
const T={
en:{n0:"Home",n1:"Collection",n2:"How to order",n3:"Visit us",h1:"Your style, your choice",hp:"A trusted boutique in Kapad Bazar, Ahmedabad. Browse our latest designs and order directly on WhatsApp.",b1:"Order on WhatsApp",b2:"View collection",
ct:"Our Collection",cs:"Pick a design you love, then tap the button to ask about it on WhatsApp.",all:"All",fab:"Fabric",ask:"Ask on WhatsApp",
note:"Many more designs are available in the shop. Send us a photo of what you like and we will tell you the price and availability.",
at:"About Mannat",ap1:"Mannat is a little corner of Kapad Bazar where fashion feels personal. Every piece here is picked with care, so you find something you love at a price that feels right.",ap2:"Nothing makes us happier than a customer who came in for one outfit and left smiling with a few more favourites. Visit us, or message us on WhatsApp. We are always happy to help you find your perfect look.",
ot:"How to order",s1t:"Pick your design",s1d:"Browse the collection and choose the piece you like.",s2t:"Send us the photo",s2d:"Take a screenshot of the product and send it to us on WhatsApp, or just tap the \"Ask on WhatsApp\" button.",
s3t:"We confirm",s3d:"We will tell you the price and whether the piece is available.",s4t:"Payment and delivery",s4d:"Advance payment and delivery are discussed with you on WhatsApp. We send by courier service (like Shiprocket) and delivery charges are extra.",
s5t:"Or visit the shop",s5d:"Come to Kapad Bazar, see and feel the fabric yourself, and buy in person.",
vt:"Visit us",al:"Address",addr:"Gud Gali, Kapad Bazar, Dhalgarwad Entry, Old City, Ahmedabad, Gujarat 380001",map:"Open map",ht:"Opening hours",hv:"Open every day of the week, 9:30 AM to 9:30 PM.",cc:"Call and chat",call:"Call us",join:"Join our WhatsApp group",
g:"Hello Mannat Boutique, I would like to know about your collection.",p:n=>`Hello Mannat Boutique, I like "${n}". Please tell me the price and availability.`},
gu:{n0:"હોમ",n1:"કલેક્શન",n2:"ઓર્ડર કેવી રીતે કરવો",n3:"દુકાને આવો",h1:"તમારી પસંદ, તમારો અંદાજ",hp:"અમદાવાદના કાપડ બજારનું વિશ્વાસુ બુટિક. અમારી નવી ડિઝાઇન જુઓ અને સીધા WhatsApp પર ઓર્ડર કરો.",b1:"WhatsApp પર ઓર્ડર કરો",b2:"કલેક્શન જુઓ",
ct:"અમારું કલેક્શન",cs:"જે ડિઝાઇન ગમે તે પસંદ કરો અને WhatsApp પર પૂછવા બટન દબાવો.",all:"બધું",fab:"ફેબ્રિક",ask:"WhatsApp પર પૂછો",
note:"દુકાનમાં બીજી ઘણી ડિઝાઇન ઉપલબ્ધ છે. તમને ગમતી વસ્તુનો ફોટો મોકલો, અમે ભાવ અને ઉપલબ્ધતા જણાવીશું.",
at:"મન્નત વિશે",ap1:"મન્નત કાપડ બજારનો એ નાનકડો ખૂણો છે જ્યાં ફેશન પોતાની લાગે છે. અહીં દરેક પીસ કાળજીથી પસંદ કરીને રાખવામાં આવે છે, જેથી તમને જે ગમે તે યોગ્ય ભાવે મળી રહે.",ap2:"કોઈ એક આઉટફિટ લેવા આવે અને હસતા મોઢે બીજી પણ ગમતી વસ્તુઓ લઈને જાય, ત્યારે અમને સૌથી વધુ આનંદ થાય છે. દુકાને પધારો, અથવા WhatsApp પર મેસેજ કરો. તમારો પરફેક્ટ લુક શોધવામાં અમે હંમેશાં ખુશીથી મદદ કરીશું.",
ot:"ઓર્ડર કેવી રીતે કરવો",s1t:"ડિઝાઇન પસંદ કરો",s1d:"કલેક્શનમાંથી તમને ગમતો પીસ પસંદ કરો.",s2t:"ફોટો મોકલો",s2d:"પ્રોડક્ટનો સ્ક્રીનશોટ લઈને WhatsApp પર મોકલો, અથવા \"WhatsApp પર પૂછો\" બટન દબાવો.",
s3t:"અમે જણાવીશું",s3d:"અમે ભાવ અને પીસ ઉપલબ્ધ છે કે નહીં તે જણાવીશું.",s4t:"પેમેન્ટ અને ડિલિવરી",s4d:"એડવાન્સ પેમેન્ટ અને ડિલિવરીની વાત WhatsApp પર કરીશું. અમે કુરિયર સર્વિસ (જેમ કે Shiprocket) દ્વારા મોકલીએ છીએ અને ડિલિવરી ચાર્જ અલગથી લાગશે.",
s5t:"અથવા દુકાને આવો",s5d:"કાપડ બજારમાં આવો, કાપડ જાતે જુઓ અને રૂબરૂ ખરીદો.",
vt:"દુકાને આવો",al:"સરનામું",addr:"ગુડ ગલી, કાપડ બજાર, ઢાળગરવાડ એન્ટ્રી, જૂનું શહેર, અમદાવાદ, ગુજરાત 380001",map:"નકશો ખોલો",ht:"દુકાનનો સમય",hv:"અઠવાડિયાના બધા દિવસ સવારે 9:30 થી રાત્રે 9:30 સુધી ખુલ્લું.",cc:"કૉલ અને ચેટ",call:"કૉલ કરો",join:"અમારા WhatsApp ગ્રુપમાં જોડાઓ",
g:"નમસ્તે મન્નત બુટિક, મારે તમારા કલેક્શન વિશે જાણવું છે.",p:n=>`નમસ્તે મન્નત બુટિક, મને "${n}" ગમ્યું છે. કૃપા કરીને ભાવ અને ઉપલબ્ધતા જણાવશો.`},
hi:{n0:"Home",n1:"Collection",n2:"Order kaise karein",n3:"Dukaan par aayein",h1:"Aapki pasand, aapka andaaz",hp:"Kapad Bazar, Ahmedabad ka bharosemand boutique. Naye designs dekhiye aur seedha WhatsApp par order kijiye.",b1:"WhatsApp par order",b2:"Collection dekhein",
ct:"Hamara Collection",cs:"Jo design pasand aaye, button dabayein aur WhatsApp par poochhein.",all:"Sab",fab:"Fabric",ask:"WhatsApp par poochhein",
note:"Dukaan mein aur bhi bahut saare designs hain. Pasand ki photo bhejein, hum price aur availability bata denge.",
at:"Mannat ke baare mein",ap1:"Mannat, Kapad Bazar ka woh chhota sa kona hai jahan fashion apna sa lagta hai. Yahan har piece pasand karke rakha jata hai, taaki aapko woh mile jo dil ko bhaye, aur woh bhi sahi daam par.",ap2:"Humein sabse zyada khushi tab hoti hai jab koi ek outfit lene aaye aur muskurate hue kuch aur pasandida cheezein lekar jaye. Dukaan par aaiye, ya WhatsApp par message kijiye. Aapka perfect look dhoondhne mein hum hamesha khushi se madad karenge.",
ot:"Order kaise karein",s1t:"Design pasand karein",s1d:"Collection mein se apna pasandida piece chunein.",s2t:"Photo bhejein",s2d:"Product ka screenshot lekar WhatsApp par bhej dein, ya seedha \"WhatsApp par poochhein\" button dabayein.",
s3t:"Hum confirm karenge",s3d:"Hum aapko price aur availability bata denge.",s4t:"Payment aur delivery",s4d:"Advance payment aur delivery ki baat WhatsApp par hogi. Hum courier service (jaise Shiprocket) se bhejte hain aur delivery charge alag se lagega.",
s5t:"Ya dukaan par aayein",s5d:"Kapad Bazar aakar kapda khud dekhein aur seedha kharidein.",
vt:"Dukaan par aayein",al:"Pata",addr:"Gud Gali, Kapad Bazar, Dhalgarwad Entry, Old City, Ahmedabad, Gujarat 380001",map:"Map kholein",ht:"Dukaan ka samay",hv:"Hafte ke saare din, subah 9:30 se raat 9:30 baje tak dukaan khuli rehti hai.",cc:"Call aur chat",call:"Call karein",join:"WhatsApp group join karein",
g:"Namaste Mannat Boutique, mujhe aapke collection ke baare mein jaankari chahiye.",p:n=>`Namaste Mannat Boutique, mujhe "${n}" pasand aaya hai. Price aur availability bataiye.`}};
const LANGS={en:"en",gu:"gu",hi:"hi-Latn"};
const ORDER=["cordset","shirt","onepiece","top","ladies","jeans"];
const IDX={en:0,gu:1,hi:2};
let lang=DEFAULT_LANG;
try{const s=localStorage.getItem("mannat-lang");if(T[s])lang=s}catch(e){}
const wa=t=>`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
const $=id=>document.getElementById(id);
function paint(){
  const t=T[lang];
  document.documentElement.lang=LANGS[lang];
  document.querySelectorAll("[data-t]").forEach(e=>e.textContent=t[e.dataset.t]);
  document.querySelectorAll("[data-wa]").forEach(e=>e.href=wa(t.g));
  document.querySelectorAll("#lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===lang));
  if($("mapLink"))$("mapLink").href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Mannat Boutique and Fashion Gud Gali Kapad Bazar Ahmedabad 380001");
  if($("strip"))$("strip").textContent=ORDER.map(k=>CATS[k][IDX[lang]]).join("  |  ");
  if($("year"))$("year").textContent=new Date().getFullYear();
  if(window.pagePaint)window.pagePaint(t);
}
document.querySelectorAll("#lang button").forEach(b=>b.onclick=()=>{
  lang=b.dataset.l;try{localStorage.setItem("mannat-lang",lang)}catch(e){}paint();
});
