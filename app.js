window.onerror=function(m,u,l){window.FBERR=window.FBERR||(m+" @"+l);try{draw()}catch(_){}};
const CSS=`
:root{--pr:#f97316;--pr2:#ea580c;--soft:#ffedd5;--bg:#fff7ed;--card:#fff;--tx:#1f2937;--border:#fde2c8;--text-secondary:#7c6f64;--text-accent:#c2410c;--text-danger:#dc2626;--bg-success:#dcfce7;--surface-1:#ffedd5;--grn:#16a34a}
@media(prefers-color-scheme:dark){:root{--bg:#17120e;--card:#241c15;--tx:#f5ede4;--border:#3b2d20;--text-secondary:#b9a999;--text-accent:#fdba74;--soft:#3b2615;--bg-success:#14351f;--surface-1:#3b2615;color-scheme:dark}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--tx);font-family:system-ui,Tahoma,sans-serif;font-size:16px}
#r{max-width:640px;margin:auto;padding:0 12px 24px}
.hdr{display:flex;justify-content:space-between;align-items:center;gap:8px;background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;margin:0 -12px 12px;padding:14px;border-radius:0 0 22px 22px;box-shadow:0 6px 18px rgba(234,88,12,.25)}
.hdr b{font-size:22px}.hdr button{background:rgba(255,255,255,.22);color:#fff;padding:8px 12px;font-size:14px;box-shadow:none}
.who{display:flex;justify-content:space-between;align-items:center;gap:8px;background:var(--soft);border-radius:14px;padding:8px 12px;margin-bottom:10px;font-size:13px;color:var(--text-accent);font-weight:600}
.card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:12px;margin:10px 0;box-shadow:0 2px 8px rgba(0,0,0,.05)}
.shop{display:flex;align-items:center;gap:12px;cursor:pointer}.shop .ic{width:48px;height:48px;border-radius:14px;background:var(--soft);display:flex;align-items:center;justify-content:center;font-size:26px;flex:none}
.tag{display:inline-block;font-size:12px;padding:2px 10px;border-radius:99px;background:var(--soft);color:var(--text-accent);font-weight:600;margin-top:2px}
.price{background:var(--bg-success);color:var(--grn);font-weight:700;border-radius:10px;padding:2px 10px;white-space:nowrap;height:fit-content}
.sec{font-weight:800;font-size:17px;margin:16px 0 4px}
.note{font-size:13px;color:var(--text-secondary);margin:4px 0}
.err{color:var(--text-danger);margin:4px 0 0;font-size:14px}
button{font:inherit;font-weight:600;cursor:pointer;border:0;border-radius:12px;padding:9px 16px;background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;box-shadow:0 3px 8px rgba(234,88,12,.25)}
button:active{transform:scale(.97)}button:disabled{opacity:.4}
button[data-a=home]{background:var(--soft);color:var(--text-accent);box-shadow:none}
button.sec2{background:var(--soft);color:var(--text-accent);box-shadow:none}
button.red{background:#dc2626}
.who button{background:var(--card);color:var(--text-accent);box-shadow:none;padding:6px 12px}
button[data-m],button[data-p]{width:34px;height:34px;padding:0;border-radius:50%;font-size:18px;background:var(--soft);color:var(--text-accent);box-shadow:none}
button[data-ask]{background:#fee2e2;color:#dc2626;box-shadow:none}
button[data-o]{background:linear-gradient(135deg,#22c55e,#16a34a);box-shadow:0 3px 8px rgba(22,163,74,.3)}
.chip{flex:1;background:var(--card);color:var(--tx);border:2px solid var(--border);box-shadow:none}
.chip.on{background:var(--pr);color:#fff;border-color:var(--pr)}
.mode{display:flex;gap:6px;margin:6px 0}
input,select{font:inherit;color:var(--tx);background:var(--card);border:2px solid var(--border);border-radius:12px;padding:11px 14px;width:100%;margin:5px 0;outline:0}
input:focus,select:focus{border-color:var(--pr)}select option{color:#000}
a.wa{display:block;text-align:center;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;padding:12px;border-radius:12px;text-decoration:none;font-weight:700}
h2{margin:12px 0 4px}
button[data-a=addP],button[data-a=addS],button[data-a=lg],button[data-a=saveE],button[data-a=saveFee],button[data-a=reset],button[data-a=migrate]{width:100%;margin-top:8px;padding:12px}
.th{position:relative;width:76px;height:76px;flex:none;border-radius:10px;overflow:hidden;background:var(--surface-1);cursor:pointer}
.th img{width:100%;height:100%;object-fit:cover;display:block}
.th .more{position:absolute;bottom:3px;left:3px;background:rgba(0,0,0,.65);color:#fff;font-size:11px;padding:1px 6px;border-radius:8px}
.thumbs{display:flex;gap:10px;flex-wrap:wrap;margin:8px 0}
.tn{position:relative;width:64px;height:64px}
.tn img{width:64px;height:64px;object-fit:cover;border-radius:10px;display:block}
.tn button{position:absolute;top:-6px;left:-6px;width:22px;height:22px;padding:0;border-radius:50%;background:#dc2626;font-size:14px;line-height:22px;box-shadow:none}
.ov{position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;padding:16px}
.bd{position:absolute;inset:0;background:rgba(0,0,0,.78)}
.box{position:relative;background:var(--card);border-radius:18px;padding:14px;width:100%;max-width:420px}
.lbimg{width:100%;max-height:60vh;object-fit:contain;border-radius:12px;background:#000;display:block}
.nav{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:10px}
#toast{position:fixed;bottom:calc(24px + env(safe-area-inset-bottom,0px));left:50%;transform:translateX(-50%) translateY(30px);background:#16a34a;color:#fff;padding:12px 18px;border-radius:14px;opacity:0;pointer-events:none;transition:.25s;z-index:99;max-width:90%;text-align:center;font-weight:600;box-shadow:0 6px 18px rgba(0,0,0,.25)}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
`;
(function(){const s=document.createElement('style');s.textContent=CSS;document.head.appendChild(s)})();
const TO=document.createElement('div');TO.id='toast';document.body.appendChild(TO);
/* ====== إعدادات Firebase ====== */
const firebaseConfig={
 apiKey:"AIzaSyA3vIpvneFnlXyqXsKiDtFft-66oW0zAek",
 authDomain:"atfeeh-mol.firebaseapp.com",
 projectId:"atfeeh-mol",
 storageBucket:"atfeeh-mol.firebasestorage.app",
 messagingSenderId:"439076904666",
 appId:"1:439076904666:web:d58fc26b7e3f35c9fa0fe3"
};
/* ================================================================ */
const ADMIN="ana.filo2007@gmail.com",DOM="@atfeeh-mall.app";
let sec,auth,db;
try{firebase.initializeApp(firebaseConfig);sec=firebase.initializeApp(firebaseConfig,'sec');auth=firebase.auth();db=firebase.firestore()}catch(e){window.FBERR='Firebase: '+e.message}
const S={shops:[],prods:[],cart:{},v:'home',cur:null,f:'all',q:'',adm:false,sub:null,done:null,imgs:[],confirm:null,edit:null,lb:null,mode:'delivery',cust:{n:'',p:'',a:''},user:null,dirty:false,lastSig:''};
const R=document.getElementById('r');
const E=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const T=t=>t=='rest'?'مطعم':'سوبر ماركت';
const imgsOf=p=>p.imgs&&p.imgs.length?p.imgs:(p.img?[p.img]:[]);
const toEmail=u=>{u=u.trim().toLowerCase();return u.includes('@')?u:u+DOM};
const validUser=u=>u.includes('@')?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u):/^[a-z0-9!#$%&'*+\/=?^_`{|}~.\-]+$/.test(u);
const shopEmail=s=>s.email||toEmail(s.user||'');
const hasFee=s=>!!s&&typeof s.feeMin=='number'&&typeof s.feeMax=='number';
const feeRange=s=>s.feeMin==s.feeMax?s.feeMin+' جنيهًا':'من '+s.feeMin+' إلى '+s.feeMax+' جنيهًا';
const fbErr=x=>({'auth/email-already-in-use':'هذا البريد مستخدم من قبل','auth/invalid-email':'صيغة البريد الإلكتروني غير صحيحة','auth/weak-password':'كلمة السر ضعيفة (6 أحرف على الأقل)','permission-denied':'ليست لديك صلاحية لتنفيذ هذا الإجراء'}[x&&x.code]||(x&&x.message)||'خطأ غير معروف');
const cnt=()=>Object.values(S.cart).reduce((a,c)=>a+c.n,0);
const V=id=>{const e=document.getElementById(id);return e?e.value.trim():''};
const er=(m,id)=>{const e=document.getElementById(id||'er');if(e)e.textContent=m};
const clr=ids=>ids.forEach(i=>{const e=document.getElementById(i);if(e)e.value=''});
function toast(m){TO.textContent=m;TO.className='show';clearTimeout(window._tt);window._tt=setTimeout(()=>{TO.className=''},2200)}
function shrink(f){return new Promise((res,rej)=>{const fr=new FileReader();fr.onerror=rej;fr.onload=()=>{const im=new Image();im.onerror=rej;im.onload=()=>{const k=Math.min(1,640/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',.72))};im.src=fr.result};fr.readAsDataURL(f)})}
async function getUid(em,pw){
 try{const c=await sec.auth().createUserWithEmailAndPassword(em,pw);await sec.auth().signOut();return c.user.uid}
 catch(x){
  if(x.code=='auth/email-already-in-use'){
   try{const c=await sec.auth().signInWithEmailAndPassword(em,pw);await sec.auth().signOut();return c.user.uid}
   catch(y){throw new Error('هذا البريد مستخدم من قبل بكلمة سر مختلفة. استخدم بريدًا آخر أو كلمة السر السابقة.')}
  }
  throw new Error(fbErr(x));
 }
}
function topbar(){const who=S.sub?`صاحب المتجر: ${E(S.sub.name)}`:S.adm?'الأدمن الرئيسي':'';
 return `<div class="hdr"><b>🛍️ اطفيح مول</b><span><button data-a="adm">الإدارة</button> <button data-a="cart">السلة (${cnt()})</button></span></div>`+(who?`<div class="who"><span>👤 ${who}</span><button data-a="logout">تسجيل خروج</button></div>`:'')}
function th(p,w){const im=imgsOf(p);return `<div class="th" style="width:${w}px;height:${w}px" ${im.length?`data-lb="${p.id}"`:''}>${im[0]?`<img src="${im[0]}">`:''}${im.length>1?`<span class="more">+${im.length-1}</span>`:''}</div>`}
function pc(p){const s=S.shops.find(x=>x.id==p.sid);return `<div class="card" style="display:flex;gap:10px">${th(p,76)}<div style="flex:1;min-width:0"><div style="display:flex;justify-content:space-between;gap:6px"><b>${E(p.name)}</b><span class="price">${E(p.price)} ج</span></div>${p.specs?`<div class="note">${E(p.specs)}</div>`:''}<div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px"><span class="note">${E(s&&s.name)}</span><button data-add="${p.id}">أضف للسلة</button></div></div></div>`}
function editCard(s){const em=shopEmail(s),fake=em.endsWith(DOM);
 return `<div class="card"><p class="sec" style="margin-top:0">تعديل بيانات المتجر</p>
<input id="en" placeholder="اسم المتجر" value="${E(s.name)}">
<select id="et"><option value="rest" ${s.type=='rest'?'selected':''}>مطعم</option><option value="market" ${s.type!='rest'?'selected':''}>سوبر ماركت</option></select>
<input id="eph" placeholder="رقم الواتساب" inputmode="tel" value="${E(s.phone)}">
<button data-a="saveE">حفظ التعديلات</button>
<p class="sec">كلمة السر</p><p class="note">البريد الحالي: <span style="direction:ltr;display:inline-block">${E(em)}</span></p>
${fake?'<p class="note">هذا بريد افتراضي لا يستقبل الرسائل، لذلك لتغيير كلمة السر استخدم خيار تغيير بيانات الدخول أدناه.</p>':'<button class="sec2" data-a="reset">إرسال رابط تغيير كلمة السر إلى بريد صاحب المتجر</button>'}
<p class="sec">تغيير البريد الإلكتروني أو كلمة السر</p>
<p class="note">يُنشأ حساب جديد ببيانات الدخول الجديدة، ويُنقل المتجر بمنتجاته إليه، ويتوقف الدخول بالبيانات القديمة. يجب أن يكون البريد الجديد مختلفًا عن الحالي.</p>
<input id="ne" placeholder="البريد الإلكتروني الجديد أو اسم المستخدم" style="direction:ltr;text-align:right"><input id="np" placeholder="كلمة السر الجديدة (6 أحرف على الأقل)">
<button class="sec2" data-a="migrate">تغيير بيانات الدخول</button>
<p id="er" class="err"></p>
<button class="sec2" data-a="cancelE" style="width:100%;margin-top:8px">إغلاق</button></div>`}
function draw(){
 const keep={};R.querySelectorAll('input,select,textarea').forEach(e=>{if(e.id&&e.type!=='file')keep[e.id]=e.value});
 const sig=[S.v,S.cur,S.edit,S.sub&&S.sub.id,S.adm,S.user&&1].join('|');const restore=sig===S.lastSig;S.lastSig=sig;
 let h=topbar();
 if(window.FBERR)h+='<div class="card err" style="direction:ltr;font-size:13px">'+E(window.FBERR)+'</div>';
 if(S.v=='home'){const q=S.q.trim().toLowerCase();
  const fs=S.shops.filter(s=>(S.f=='all'||s.type==S.f)&&(!q||s.name.toLowerCase().includes(q)));
  const ps=q?S.prods.filter(p=>p.name.toLowerCase().includes(q)):[];
  h+=`<input id="q" placeholder="ابحث باسم المتجر أو المنتج" value="${E(S.q)}"><div class="mode">${[['all','الكل'],['rest','🍽️ مطاعم'],['market','🛒 ماركت']].map(x=>`<button data-f="${x[0]}" class="chip ${S.f==x[0]?'on':''}">${x[1]}</button>`).join('')}</div>`;
  if(ps.length)h+=`<p class="sec">منتجات</p>`+ps.map(pc).join('');
  h+=`<p class="sec">المتاجر</p>`+(fs.map(s=>`<div data-s="${s.id}" class="card shop"><div class="ic">${s.type=='rest'?'🍽️':'🛒'}</div><div style="flex:1"><b>${E(s.name)}</b><div><span class="tag">${T(s.type)}</span></div></div><span style="font-size:22px;color:var(--pr)">‹</span></div>`).join('')||`<p class="note">لا توجد متاجر بعد.</p>`)}
 else if(S.v=='shop'){const s=S.shops.find(x=>x.id==S.cur)||{};h+=`<button data-a="home">رجوع</button><h2>${E(s.name)}</h2><div class="note">${T(s.type)}</div>`+(S.prods.filter(p=>p.sid==s.id).map(pc).join('')||'<p>لا توجد منتجات</p>')}
 else if(S.v=='cart'){h+=`<button data-a="home">رجوع</button><h2>السلة</h2>`;
  const g={};Object.keys(S.cart).forEach(i=>(g[S.cart[i].sid]=g[S.cart[i].sid]||[]).push(i));
  const dl=S.mode=='delivery';
  if(!Object.keys(g).length&&!S.done)h+='<p>السلة فارغة</p>';
  if(Object.keys(g).length)h+=`<div class="card"><p class="sec" style="margin-top:0">طريقة الاستلام</p><div class="mode"><button data-mode="delivery" class="chip ${dl?'on':''}">🚚 توصيل</button><button data-mode="pickup" class="chip ${!dl?'on':''}">🏪 استلام من الفرع</button></div><p class="note">${dl?'عند اختيار التوصيل تُضاف رسوم توصيل إلى إجمالي الطلب، ويحدّد كل متجر نطاق هذه الرسوم.':'يمكنك استلام طلبك من فرع المتجر دون أي رسوم إضافية.'}</p><p class="sec">بيانات العميل</p><input id="cn" placeholder="الاسم" value="${E(S.cust.n)}"><input id="cp" placeholder="رقم الهاتف" inputmode="tel" value="${E(S.cust.p)}">${dl?`<input id="ca" placeholder="العنوان بالتفصيل" value="${E(S.cust.a)}">`:''}<p id="er" class="err"></p></div>`;
  Object.keys(g).forEach(sid=>{const s=S.shops.find(x=>x.id==sid)||{};const t=g[sid].reduce((a,i)=>a+S.cart[i].n*S.cart[i].price,0);
   h+=`<div class="card"><b>${E(s.name)}</b>${g[sid].map(i=>`<div style="display:flex;justify-content:space-between;align-items:center;margin:6px 0"><span>${E(S.cart[i].name)}</span><span><button data-m="${i}">-</button> ${S.cart[i].n} <button data-p="${i}">+</button></span></div>`).join('')}<div style="display:flex;justify-content:space-between;align-items:center"><b>إجمالي المنتجات: ${t} ج</b><button data-o="${sid}">تأكيد الطلب ✅</button></div>${dl?(hasFee(s)?`<div class="note">رسوم التوصيل: ${feeRange(s)}، وتُضاف إلى إجمالي الطلب.</div><div class="note">الإجمالي التقريبي شاملًا التوصيل: ${t+s.feeMin}${s.feeMax!=s.feeMin?' – '+(t+s.feeMax):''} ج</div>`:'<div class="note">ستُضاف رسوم التوصيل إلى إجمالي الطلب، ويحدّد المتجر قيمتها.</div>'):''}</div>`});
  if(S.done)h+=`<div style="background:var(--bg-success);border-radius:12px;padding:10px;margin:8px 0"><p style="margin:0 0 6px">الطلب جاهز. اضغط على الزر ليُفتح واتساب والرسالة مكتوبة:</p><a class="wa" href="${S.done}" target="_blank">فتح واتساب وإرسال الطلب</a></div>`}
 else{h+=`<button data-a="home">رجوع</button><h2>الإدارة</h2>`;
  if(S.sub){const s=S.sub;
   h+=`<div class="card"><p class="sec" style="margin-top:0">رسوم التوصيل</p><p class="note">حدّد الحد الأدنى والحد الأقصى لرسوم التوصيل، وسيظهران للعميل عند اختيار التوصيل.</p><div style="display:flex;gap:8px"><input id="fmin" placeholder="الحد الأدنى (ج)" inputmode="decimal" value="${typeof s.feeMin=='number'?s.feeMin:''}"><input id="fmax" placeholder="الحد الأقصى (ج)" inputmode="decimal" value="${typeof s.feeMax=='number'?s.feeMax:''}"></div><button data-a="saveFee">حفظ رسوم التوصيل</button><p id="erf" class="err"></p></div>`;
   h+=`<div class="card"><p class="sec" style="margin-top:0">${E(s.name)} - إضافة منتج</p><input id="pn" placeholder="اسم المنتج"><input id="pp" placeholder="السعر" inputmode="decimal"><input id="ps" placeholder="المواصفات"><div class="thumbs">${S.imgs.map((u,i)=>`<div class="tn"><img src="${u}"><button data-rmi="${i}">×</button></div>`).join('')}</div><button class="sec2" data-a="pick" style="width:100%" ${S.imgs.length>=5?'disabled':''}>${S.imgs.length?'إضافة صورة أخرى':'اختيار صور المنتج'} (${S.imgs.length}/5)</button><input id="pi" type="file" accept="image/*" multiple style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none"><button data-a="addP">إضافة المنتج</button><p id="er" class="err"></p></div>`;
   h+=`<p class="sec">منتجاتي</p>`+(S.prods.filter(p=>p.sid==s.id).map(p=>`<div class="card" style="display:flex;gap:10px;align-items:center">${th(p,48)}<span style="flex:1">${E(p.name)} - ${E(p.price)} ج</span><button data-ask="p${p.id}">حذف</button></div>`).join('')||'<p class="note">لا توجد منتجات بعد.</p>')}
  else if(S.adm){h+=`<p class="sec">إضافة متجر جديد</p><input id="n" placeholder="اسم المطعم أو الماركت"><select id="t"><option value="rest">مطعم</option><option value="market">سوبر ماركت</option></select><input id="ph" placeholder="رقم الواتساب مثل 01012345678" inputmode="tel"><input id="u" placeholder="البريد الإلكتروني أو اسم المستخدم لصاحب المتجر" style="direction:ltr;text-align:right"><input id="pw" placeholder="كلمة سر صاحب المتجر (6 أحرف على الأقل)"><button data-a="addS">إنشاء</button><p id="er" class="err"></p><p class="sec">المتاجر (${S.shops.length})</p>`+(S.shops.map(s=>S.edit==s.id?editCard(s):`<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span style="min-width:0">${E(s.name)}<br><small class="note">${T(s.type)} - ${E(s.phone)}<br><span style="direction:ltr;display:inline-block">${E(shopEmail(s))}</span></small></span><span style="display:flex;gap:6px;flex:none"><button class="sec2" data-edit="${s.id}">تعديل</button><button data-ask="s${s.id}">حذف</button></span></div>`).join('')||'<p class="note">لا توجد متاجر</p>')}
  else h+=`<p class="sec">تسجيل الدخول (أدمن أو صاحب متجر)</p><input id="lu" placeholder="البريد الإلكتروني أو اسم المستخدم" style="direction:ltr;text-align:right"><input id="lp" type="password" placeholder="كلمة السر"><button data-a="lg">دخول</button><p id="er" class="err"></p>`}
 if(S.lb){const p=S.prods.find(x=>x.id==S.lb.id);const im=p?imgsOf(p):[];
  if(im.length){const i=((S.lb.i%im.length)+im.length)%im.length;
   h+=`<div class="ov"><div class="bd" data-a="lbclose"></div><div class="box"><img class="lbimg" src="${im[i]}"><div class="nav"><button data-a="lbprev" ${im.length<2?'disabled':''}>السابق</button><span>${i+1} / ${im.length}</span><button data-a="lbnext" ${im.length<2?'disabled':''}>التالي</button></div><p style="margin:8px 0 0;font-weight:700">${E(p.name)}</p><button class="sec2" data-a="lbclose" style="width:100%;margin-top:8px">إغلاق</button></div></div>`}
  else S.lb=null}
 if(S.confirm){const c=S.confirm;
  h+=`<div class="ov"><div class="bd" data-a="cancel"></div><div class="box"><p style="margin:0 0 6px;font-weight:800;font-size:17px">تأكيد الحذف</p><p style="margin:0 0 12px">${c.k=='s'?`هل أنت متأكد من حذف المتجر «${E(c.name)}»؟ سيتم حذف جميع منتجاته نهائيًا، ولا يمكن التراجع عن ذلك.`:`هل أنت متأكد من حذف المنتج «${E(c.name)}»؟`}</p><div style="display:flex;gap:8px"><button class="sec2" data-a="cancel" style="flex:1">إلغاء</button><button class="red" data-a="confirmdel" style="flex:1">تأكيد الحذف</button></div></div></div>`}
 R.innerHTML=h;
 if(restore)Object.keys(keep).forEach(id=>{const e=document.getElementById(id);if(e&&e.type!=='file')e.value=keep[id]});
 [['cn','n'],['cp','p'],['ca','a']].forEach(([i,k])=>{const e=document.getElementById(i);if(e)e.oninput=()=>{S.cust[k]=e.value}});
 const q=document.getElementById('q');if(q)q.oninput=()=>{S.q=q.value;const p=q.selectionStart;draw();const n=document.getElementById('q');n.focus();n.setSelectionRange(p,p)};
 const pi=document.getElementById('pi');if(pi)pi.onchange=async()=>{const room=5-S.imgs.length;const files=[...pi.files].slice(0,room);if(!files.length){er('الحد الأقصى 5 صور للمنتج الواحد');return}
  for(const f of files){try{S.imgs.push(await shrink(f))}catch(x){er('تعذر قراءة إحدى الصور')}}
  pi.value='';draw()};
}
const typing=()=>{const a=document.activeElement;return !!a&&a!==document.body&&/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)&&R.contains(a)};
const soft=()=>{if(typing())S.dirty=true;else draw()};
document.addEventListener('focusout',()=>setTimeout(()=>{if(S.dirty&&!typing()){S.dirty=false;draw()}},150));
let tx=null;
R.addEventListener('touchstart',e=>{tx=S.lb?e.touches[0].clientX:null},{passive:true});
R.addEventListener('touchend',e=>{if(tx==null||!S.lb)return;const dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>50){S.lb.i+=dx<0?1:-1;draw()}},{passive:true});
R.addEventListener('click',async e=>{const b=e.target.closest('button,[data-s],[data-a],[data-lb]');if(!b||b.disabled)return;const d=b.dataset;
 if(d.s){S.cur=d.s;S.v='shop';return draw()}
 if(d.lb){S.lb={id:d.lb,i:0};return draw()}
 if(d.f){S.f=d.f;return draw()}
 if(d.mode){S.mode=d.mode;return draw()}
 if(d.add){const p=S.prods.find(x=>x.id==d.add);if(!p)return;const c=S.cart[p.id];if(c)c.n++;else S.cart[p.id]={n:1,name:p.name,price:+p.price,sid:p.sid};draw();toast('تمت إضافة «'+p.name+'» إلى السلة بنجاح');return}
 if(d.m){if(--S.cart[d.m].n<=0)delete S.cart[d.m];return draw()}
 if(d.p){S.cart[d.p].n++;return draw()}
 if(d.rmi!==undefined){S.imgs.splice(+d.rmi,1);return draw()}
 if(d.edit){S.edit=d.edit;return draw()}
 if(d.ask){const k=d.ask[0],id=d.ask.slice(1);const o=k=='s'?S.shops.find(x=>x.id==id):S.prods.find(x=>x.id==id);S.confirm={k,id,name:o?o.name:''};return draw()}
 if(d.o){const s=S.shops.find(x=>x.id==d.o);if(!s)return;const l=Object.keys(S.cart).filter(i=>S.cart[i].sid==d.o);const t=l.reduce((a,i)=>a+S.cart[i].n*S.cart[i].price,0);
  const dl=S.mode=='delivery',c=S.cust,cn=c.n.trim(),cp=c.p.trim(),ca=c.a.trim();
  if(!cn||cp.replace(/\D/g,'').length<10||(dl&&!ca))return er(dl?'اكتب الاسم ورقم هاتف صحيحًا والعنوان':'اكتب الاسم ورقم هاتف صحيحًا');
  const msg='طلب جديد من اطفيح مول\n\n'+l.map(i=>'- '+S.cart[i].name+' × '+S.cart[i].n).join('\n')+'\nإجمالي المنتجات: '+t+' جنيهًا'
   +(dl?'\nرسوم التوصيل: '+(hasFee(s)?feeRange(s):'يحدّدها المتجر')+'، وتُضاف إلى إجمالي الطلب.':'')
   +'\n\nطريقة الاستلام: '+(dl?'توصيل':'استلام من الفرع')
   +'\n\nبيانات العميل:\nالاسم: '+cn+'\nالهاتف: '+cp+(dl?'\nالعنوان: '+ca:'');
  let ph=String(s.phone).replace(/\D/g,'');if(ph[0]=='0')ph='20'+ph.slice(1);
  l.forEach(i=>delete S.cart[i]);S.done='https://wa.me/'+ph+'?text='+encodeURIComponent(msg);return draw()}
 const a=d.a;
 if(a=='pick'){const i=document.getElementById('pi');if(i)i.click();return}
 if(a=='home'){S.v='home';S.done=null}else if(a=='cart'){S.v='cart'}else if(a=='adm'){S.v='adm'}
 else if(a=='lbclose'){S.lb=null}
 else if(a=='lbprev'){S.lb.i--}
 else if(a=='lbnext'){S.lb.i++}
 else if(a=='cancel'){S.confirm=null}
 else if(a=='cancelE'){S.edit=null}
 else if(a=='confirmdel'){const c=S.confirm;S.confirm=null;draw();
  try{if(c.k=='s'){const q=await db.collection('products').where('sid','==',c.id).get();const bt=db.batch();q.forEach(x=>bt.delete(x.ref));bt.delete(db.collection('shops').doc(c.id));await bt.commit();toast('تم حذف المتجر بنجاح')}
   else{await db.collection('products').doc(c.id).delete();toast('تم حذف المنتج بنجاح')}}
  catch(x){alert('تعذر الحذف: '+fbErr(x))}
  return}
 else if(a=='logout'){await auth.signOut();S.imgs=[];S.edit=null;S.v='home'}
 else if(a=='lg'){const u=V('lu').toLowerCase(),pw=document.getElementById('lp').value;if(!u||!pw)return er('اكتب بيانات الدخول');
  if(!validUser(u))return er('بيانات الدخول غير صحيحة');
  try{await auth.signInWithEmailAndPassword(toEmail(u),pw)}catch(x){return er('بيانات الدخول غير صحيحة')}return}
 else if(a=='addS'){const n=V('n'),ph=V('ph'),u=V('u').toLowerCase(),pw=document.getElementById('pw').value;
  if(!n||!ph||!u||!pw)return er('املأ كل الخانات');
  if(!validUser(u))return er('البريد الإلكتروني أو اسم المستخدم غير صالح');
  if(pw.length<6)return er('كلمة السر 6 أحرف أو أرقام على الأقل');
  const em=toEmail(u);if(S.shops.some(x=>shopEmail(x)==em))return er('هذا البريد أو اسم المستخدم مستخدم لمتجر آخر');
  let uid;try{uid=await getUid(em,pw)}catch(x){return er(x.message)}
  if(S.shops.some(x=>x.id==uid))return er('هذا المتجر موجود بالفعل');
  try{await db.collection('shops').doc(uid).set({name:n,type:V('t'),phone:ph,user:u,email:em})}catch(x){return er('تعذر الحفظ: '+fbErr(x))}
  clr(['n','ph','u','pw']);toast('تم إنشاء حساب المتجر بنجاح')}
 else if(a=='saveE'){const n=V('en'),ph=V('eph');if(!n||!ph)return er('اسم المتجر ورقم الواتساب مطلوبان');
  try{await db.collection('shops').doc(S.edit).update({name:n,type:V('et'),phone:ph})}catch(x){return er('تعذر الحفظ: '+fbErr(x))}
  S.edit=null;toast('تم حفظ التعديلات بنجاح')}
 else if(a=='reset'){const s=S.shops.find(x=>x.id==S.edit);if(!s)return;
  try{await auth.sendPasswordResetEmail(shopEmail(s))}catch(x){return er('تعذر الإرسال: '+fbErr(x))}
  toast('تم إرسال رابط تغيير كلمة السر إلى بريد صاحب المتجر');return}
 else if(a=='migrate'){const s=S.shops.find(x=>x.id==S.edit);if(!s)return;const u=V('ne').toLowerCase(),pw=document.getElementById('np').value;
  if(!u||!pw)return er('اكتب البريد الجديد وكلمة السر الجديدة');
  if(!validUser(u))return er('البريد الإلكتروني أو اسم المستخدم غير صالح');
  if(pw.length<6)return er('كلمة السر 6 أحرف أو أرقام على الأقل');
  const em=toEmail(u);if(em==shopEmail(s))return er('يجب أن يكون البريد الجديد مختلفًا عن الحالي');
  if(S.shops.some(x=>shopEmail(x)==em))return er('هذا البريد مستخدم لمتجر آخر');
  let nid;try{nid=await getUid(em,pw)}catch(x){return er(x.message)}
  if(S.shops.some(x=>x.id==nid))return er('هذا الحساب مرتبط بمتجر آخر');
  try{const data={name:s.name,type:s.type,phone:s.phone,user:u,email:em};if(hasFee(s)){data.feeMin=s.feeMin;data.feeMax=s.feeMax}
   await db.collection('shops').doc(nid).set(data);
   const q=await db.collection('products').where('sid','==',s.id).get();const bt=db.batch();q.forEach(x=>bt.update(x.ref,{sid:nid}));bt.delete(db.collection('shops').doc(s.id));await bt.commit()}
  catch(x){return er('تعذر النقل: '+fbErr(x))}
  S.edit=null;toast('تم تغيير بيانات الدخول ونقل المتجر بنجاح')}
 else if(a=='saveFee'){const mn=parseFloat(V('fmin')),mx=parseFloat(V('fmax'));
  if(isNaN(mn)||isNaN(mx)||mn<0||mx<mn)return er('أدخل حدًّا أدنى وحدًّا أقصى صحيحين (الأقصى لا يقل عن الأدنى)','erf');
  try{await db.collection('shops').doc(S.sub.id).update({feeMin:mn,feeMax:mx})}catch(x){return er('تعذر الحفظ: '+fbErr(x),'erf')}
  toast('تم حفظ رسوم التوصيل بنجاح')}
 else if(a=='addP'){if(!V('pn')||!V('pp'))return er('الاسم والسعر مطلوبان');if(!S.imgs.length)return er('أضف صورة واحدة على الأقل');if(S.imgs.join('').length>850000)return er('حجم الصور كبير، قلّل عدد الصور');
  try{await db.collection('products').add({sid:S.sub.id,name:V('pn'),price:V('pp'),specs:V('ps'),imgs:S.imgs})}catch(x){return er('تعذر الحفظ: '+fbErr(x))}
  S.imgs=[];clr(['pn','pp','ps']);toast('تمت إضافة المنتج بنجاح')}
 draw()});
function sync(){S.adm=!!(S.user&&S.user.email==ADMIN);S.sub=(S.user&&!S.adm)?(S.shops.find(x=>x.id==S.user.uid)||null):null;soft()}
draw();
try{
auth.onAuthStateChanged(u=>{S.user=u;sync()});
db.collection('shops').onSnapshot(q=>{S.shops=q.docs.map(d=>({id:d.id,...d.data()}));sync()},e=>{window.FBERR='shops: '+e.message;draw()});
db.collection('products').onSnapshot(q=>{S.prods=q.docs.map(d=>({id:d.id,...d.data()}));soft()},e=>{window.FBERR='products: '+e.message;draw()});
}catch(e){window.FBERR=window.FBERR||('Init: '+e.message);draw()}
