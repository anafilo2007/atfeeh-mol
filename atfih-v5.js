const LOGO='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAwFBMVEXV19Ok1Ms4UGXt0LLglGD///+Zo63ltZD///9lp5sOL1T////ofUJabYEAgF5RYG4+oYx/wrjegj3+/v4Fi20EkXEAAAATNVT3fTT5gTcIKEj////S5+UFfGKMxLrN1dn+/v6t1tBSpZTmhkpEm4hytqlUZ3g4mIPc8/Ho6uu3xsr159SZprBqeYmHvbSptLvpm2v////+/v4IJDt3h5QtRVkpi3aLmaTsyKoCGzYvknwiOlJFWm2xvMPnpHIDe13n8j8wAAAAQHRSTlP//////1D//zT//4D//////////v//AP////8H/////9H/////////////////////d6r/////////////////+sXW4wAACgdJREFUeNrNW4l6ojoUjkvtMp25C1AxghQUFap2cd/f/61u9gRwgVjrzXwzo614/pzlPycnCXhJjmYT//Pw+fVqfOt4/fp8aPLvVwfIiG/efbdwCeKumYGQAIB//etK0hmGX00i5iAABK35eVXxBMJnM6EEoMq/u7p4AuFORQCk+pufxg8NrIQ0APSjL+PHxpdEALj8h1fjB8frA0cA+Px/VD5CwHUAbiNfIgDE/3/S/tIPSCwQAC+/fkTk21tlcf8m3v56YQBQ/F9bdAQW97uPdtu2qxKAcYcRAGyAKzrAGxXdsMlo2NWEGyAjIAAvn9cTXWWiG2SgF7sEISHhAKG4ivz79rMimghvoD/3iQ8h4eBqCvjAslX5BEDFSKkAaFJA32+Fj0Gnh0YneAxLfj/zkQ9bymc+YNuLNBkAjRBw/DAwTddMDCsIfSfp+kQHdO4NMn3bbr8lv+oOASjKQf7jighEg4m2+OtZ4CesUCU64AGAwbSjFBshJyxkASecuapwRQP0R6vQURE0bDsB4CNDyOChmPg/JhGUkc9RIDWoEHYCAI2HXforH0CBGGjNpJg0BIv/Av8NZTByANQfU1GI4wDkdgG/ZyqaTxhB/Sn+hbvyhXyGgAXDIpOSQF4XCF0iVMglr8VIuoK1fyTPLNoi/qj8diWTlUFO6/f2fIIHNKC8Jx9xAyFfBAF5mY5CNPIB8JNyqDCrF4RkBD1F//gTVH7lX4WDKBXrAmhJM1MduLOgpdKO47WCGde/SfVfkTTYIBp4bmei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';
window.onerror=function(m,u,l){if(/^Script error/i.test(String(m)))return;window.FBERR=window.FBERR||(m+" @"+l);try{draw()}catch(_){}};
const CSS=`
:root{--pr:#374151;--pr2:#1f2937;--soft:#e5e7eb;--bg:#f3f4f6;--card:#fff;--tx:#111827;--border:#e5e7eb;--text-secondary:#6b7280;--text-accent:#374151;--text-danger:#dc2626;--bg-success:#e5e7eb;--surface-1:#e5e7eb;--grn:#15803d;--btn:linear-gradient(135deg,#4b5563,#1f2937)}
@media(prefers-color-scheme:dark){:root{--bg:#0f1115;--card:#1a1d23;--tx:#f3f4f6;--border:#2a2f38;--text-secondary:#9ca3af;--text-accent:#d1d5db;--soft:#2a2f38;--bg-success:#2a2f38;--surface-1:#2a2f38;--grn:#4ade80;--pr:#9ca3af;--btn:linear-gradient(135deg,#6b7280,#4b5563);color-scheme:dark}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--tx);font-family:system-ui,Tahoma,sans-serif;font-size:16px}
#r{max-width:640px;margin:auto;padding:0 12px 24px}
.hdr{display:flex;justify-content:space-between;align-items:center;gap:8px;background:linear-gradient(135deg,#6b7280,#1f2937);color:#fff;margin:0 -12px 12px;padding:14px;border-radius:0 0 22px 22px;box-shadow:0 6px 18px rgba(0,0,0,.2)}
.brand{display:flex;align-items:center;gap:10px;min-width:0}
.hdr{position:relative}.hdr::after{content:"";position:absolute;left:22px;right:22px;bottom:0;height:3px;border-radius:3px;background:linear-gradient(90deg,#038c6e,#fc7d36)}
.w1{font-weight:800}.w2{font-weight:300}
.brand b{font-size:21px;letter-spacing:.3px;white-space:nowrap;direction:ltr}
.lg{width:40px;height:40px;border-radius:12px;background:#fff;display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none;box-shadow:0 2px 8px rgba(0,0,0,.3)}
.lg img{max-width:100%;max-height:100%;object-fit:contain;display:block}
.hdr button{background:rgba(255,255,255,.2);color:#fff;padding:8px 12px;font-size:14px;box-shadow:none}
.who{display:flex;justify-content:space-between;align-items:center;gap:8px;background:var(--soft);border-radius:14px;padding:8px 12px;margin-bottom:10px;font-size:13px;color:var(--text-accent);font-weight:600}
.card{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:12px;margin:10px 0;box-shadow:0 2px 8px rgba(0,0,0,.05)}
.row{display:flex;justify-content:space-between;align-items:center;gap:8px}
.shop{display:flex;align-items:center;gap:12px;cursor:pointer}.shop .ic{width:48px;height:48px;border-radius:14px;background:var(--soft);display:flex;align-items:center;justify-content:center;font-size:26px;flex:none}
.tag{display:inline-block;font-size:12px;padding:2px 10px;border-radius:99px;background:var(--soft);color:var(--text-accent);font-weight:600;margin-top:2px}
.price{background:var(--bg-success);color:var(--tx);font-weight:700;border-radius:10px;padding:2px 10px;white-space:nowrap;height:fit-content}
.sec{font-weight:800;font-size:17px;margin:16px 0 4px}
.note{font-size:13px;color:var(--text-secondary);margin:4px 0;display:block}
.err{color:var(--text-danger);margin:4px 0 0;font-size:14px}
button{font:inherit;font-weight:600;cursor:pointer;border:0;border-radius:12px;padding:9px 16px;background:var(--btn);color:#fff;box-shadow:0 3px 8px rgba(0,0,0,.18)}
button:active{transform:scale(.97)}button:disabled{opacity:.4}
button[data-a=home]{background:var(--soft);color:var(--text-accent);box-shadow:none}
button.sec2{background:var(--soft);color:var(--text-accent);box-shadow:none}
button.red{background:#dc2626}
.who button{background:var(--card);color:var(--text-accent);box-shadow:none;padding:6px 12px}
button[data-m],button[data-p]{width:34px;height:34px;padding:0;border-radius:50%;font-size:18px;background:var(--soft);color:var(--text-accent);box-shadow:none}
button[data-ask]{background:#fee2e2;color:#dc2626;box-shadow:none}
.chip{flex:1;background:var(--card);color:var(--tx);border:2px solid var(--border);box-shadow:none;padding:9px 4px;font-size:14px}
.chip.on{background:var(--btn);color:#fff;border-color:transparent}
.mode{display:flex;gap:6px;margin:6px 0}
input,select{font:inherit;color:var(--tx);background:var(--card);border:2px solid var(--border);border-radius:12px;padding:11px 14px;width:100%;margin:5px 0;outline:0}
input:focus,select:focus{border-color:var(--pr)}select option{color:#000}
a.wa{display:block;text-align:center;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;padding:12px;border-radius:12px;text-decoration:none;font-weight:700}
h2{margin:12px 0 4px}
button[data-a=addP],button[data-a=addS],button[data-a=lg],button[data-a=saveE],button[data-a=saveFee],button[data-a=reset],button[data-a=migrate],button[data-a=addC],button[data-o]{width:100%;margin-top:8px;padding:12px}
.th{position:relative;width:76px;height:76px;flex:none;border-radius:10px;overflow:hidden;background:var(--surface-1);cursor:pointer}
.th img{width:100%;height:100%;object-fit:cover;display:block}
.th .more{position:absolute;bottom:3px;left:3px;background:rgba(0,0,0,.65);color:#fff;font-size:11px;padding:1px 6px;border-radius:8px}
.thumbs{display:flex;gap:10px;flex-wrap:wrap;margin:8px 0}
.tn{position:relative;width:64px;height:64px}
.tn img{width:64px;height:64px;object-fit:cover;border-radius:10px;display:block}
.tn button{position:absolute;top:-6px;left:-6px;width:22px;height:22px;padding:0;border-radius:50%;background:#dc2626;font-size:14px;line-height:22px;box-shadow:none}
.ov{position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;padding:16px}
.bd{position:absolute;inset:0;background:rgba(0,0,0,.78)}
.box{position:relative;background:var(--card);border-radius:18px;padding:14px;width:100%;max-width:420px;max-height:92vh;overflow:auto}
.ic{overflow:hidden}.ic img{width:100%;height:100%;object-fit:cover;display:block}
.pv{white-space:pre-wrap;margin:0;line-height:1.7}
.lbimg{width:100%;max-height:60vh;object-fit:contain;border-radius:12px;background:#000;display:block}
.nav{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:10px}
#toast{position:fixed;bottom:calc(24px + env(safe-area-inset-bottom,0px));left:50%;transform:translateX(-50%) translateY(30px);background:#111827;color:#fff;padding:12px 18px;border-radius:14px;opacity:0;pointer-events:none;transition:.25s;z-index:99;max-width:90%;text-align:center;font-weight:600;box-shadow:0 6px 18px rgba(0,0,0,.35)}
#toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
`;
(function(){const s=document.createElement('style');s.textContent=CSS;document.head.appendChild(s)})();
document.title='Atfih Express';
{const l=document.createElement('link');l.rel='icon';l.href=LOGO;document.head.appendChild(l)}
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
const S={shops:[],prods:[],cart:{},v:'home',cur:null,f:'all',q:'',adm:false,sub:null,done:null,imgs:[],confirm:null,edit:null,lb:null,mode:'delivery',cust:{n:'',p:'',a:''},user:null,dirty:false,lastSig:'',coupons:{},cps:[],kind:'pack',avNew:null,avEdit:undefined};
const R=document.getElementById('r');
const E=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const T=t=>({rest:'مطعم',market:'سوبر ماركت',pharmacy:'صيدلية'}[t]||'متجر');
const TI=t=>({rest:'🍽️',market:'🛒',pharmacy:'💊'}[t]||'🏬');
const TYPEOPTS=sel=>[['rest','مطعم'],['market','سوبر ماركت'],['pharmacy','صيدلية']].map(x=>`<option value="${x[0]}" ${sel==x[0]?'selected':''}>${x[1]}</option>`).join('');
const AV=s=>`<div class="ic">${s&&s.avatar?`<img src="${s.avatar}" alt="">`:TI(s&&s.type)}</div>`;
const avPick=(mode,cur)=>{const a=mode=='add';return `<div class="row" style="margin:6px 0;gap:8px;justify-content:flex-start"><div style="width:48px;height:48px;border-radius:14px;background:var(--soft);display:flex;align-items:center;justify-content:center;overflow:hidden;flex:none">${cur?`<img src="${cur}" style="width:100%;height:100%;object-fit:cover">`:'🏬'}</div><button type="button" class="sec2" data-a="${a?'pickAv':'pickAvE'}" style="flex:1">${cur?'تغيير صورة البروفايل':'صورة بروفايل المتجر (اختياري)'}</button>${cur?`<button type="button" class="sec2" data-a="${a?'rmAv':'rmAvE'}">إزالة</button>`:''}<input id="${a?'pav':'eav'}" type="file" accept="image/*" style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none"></div>`};
const pad=n=>String(n).padStart(2,'0');
const todayStr=()=>{const d=new Date();return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())};
const genCode=()=>{const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';let r='';for(let i=0;i<8;i++)r+=c[Math.floor(Math.random()*c.length)];return r};
const subtotal=sid=>Object.values(S.cart).filter(x=>x.sid==sid).reduce((a,c)=>a+c.n*c.price,0);
function couponCheck(c,t){if(c.exp&&todayStr()>c.exp)return{ok:false,msg:'انتهت صلاحية كود الخصم'};if(c.min&&t<c.min)return{ok:false,msg:'يتطلب هذا الكود حدًّا أدنى للشراء قدره '+c.min+' جنيهًا'};return{ok:true}}
const calcDisc=(c,t)=>c.type=='pct'?Math.round(t*c.value)/100:Math.min(c.value,t);
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
function shrink(f,mx,q){mx=mx||640;q=q||.72;return new Promise((res,rej)=>{const fr=new FileReader();fr.onerror=rej;fr.onload=()=>{const im=new Image();im.onerror=rej;im.onload=()=>{const k=Math.min(1,mx/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',q))};im.src=fr.result};fr.readAsDataURL(f)})}
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
 return `<div class="hdr"><div class="brand"><span class="lg"><img src="${LOGO}" alt="" onerror="this.parentNode.style.display='none'"></span><b><span class="w1">Atfih</span> <span class="w2">Express</span></b></div><span><button data-a="adm">الإدارة</button> <button data-a="cart">السلة (${cnt()})</button></span></div>`+(who?`<div class="who"><span>👤 ${who}</span><button data-a="logout">تسجيل خروج</button></div>`:'')}
function th(p,w){const im=imgsOf(p);return `<div class="th" style="width:${w}px;height:${w}px" ${im.length?`data-lb="${p.id}"`:''}>${im[0]?`<img src="${im[0]}">`:''}${im.length>1?`<span class="more">+${im.length-1}</span>`:''}</div>`}
function pc(p){const s=S.shops.find(x=>x.id==p.sid);const box=p.kind=='box';
 const price=box?`<span class="price">علبة: ${E(p.price)} ج</span>`:`<span class="price">${E(p.price)} ج</span>`;
 const sub=box?`<div class="note">الشريط: ${E(p.stripPrice)} ج · ${E(p.strips)} شرائط في العلبة</div>`:'';
 const btns=box?`<span style="display:flex;gap:6px"><button data-add="${p.id}" data-u="b">+ علبة</button><button class="sec2" data-add="${p.id}" data-u="s">+ شريط</button></span>`:`<button data-add="${p.id}">أضف للسلة</button>`;
 return `<div class="card" data-lb="${p.id}" style="display:flex;gap:10px;cursor:pointer">${th(p,76)}<div style="flex:1;min-width:0"><div class="row" style="align-items:flex-start"><b>${E(p.name)}</b>${price}</div>${sub}<div class="row" style="margin-top:6px"><span class="note">${E(s&&s.name)}</span>${btns}</div></div></div>`}
function editCard(s){const em=shopEmail(s),fake=em.endsWith(DOM);
 return `<div class="card"><p class="sec" style="margin-top:0">تعديل بيانات المتجر</p>
<input id="en" placeholder="اسم المتجر" value="${E(s.name)}">
<select id="et">${TYPEOPTS(s.type)}</select>${avPick('edit',S.avEdit===undefined?(s.avatar||''):S.avEdit)}
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
  h+=`<input id="q" placeholder="ابحث باسم المتجر أو المنتج" value="${E(S.q)}"><div class="mode">${[['all','الكل'],['rest','🍽️ مطاعم'],['market','🛒 ماركت'],['pharmacy','💊 صيدليات']].map(x=>`<button data-f="${x[0]}" class="chip ${S.f==x[0]?'on':''}">${x[1]}</button>`).join('')}</div>`;
  if(ps.length)h+=`<p class="sec">منتجات</p>`+ps.map(pc).join('');
  h+=`<p class="sec">المتاجر</p>`+(fs.map(s=>`<div data-s="${s.id}" class="card shop">${AV(s)}<div style="flex:1"><b>${E(s.name)}</b><div><span class="tag">${T(s.type)}</span></div></div><span style="font-size:22px;color:var(--pr)">‹</span></div>`).join('')||`<p class="note">لا توجد متاجر بعد.</p>`)}
 else if(S.v=='shop'){const s=S.shops.find(x=>x.id==S.cur)||{};h+=`<button data-a="home">رجوع</button><div class="shop" style="cursor:default;margin:12px 0">${AV(s)}<div><h2 style="margin:0">${E(s.name)}</h2><span class="tag">${T(s.type)}</span></div></div>`+(S.prods.filter(p=>p.sid==s.id).map(pc).join('')||'<p>لا توجد منتجات</p>')}
 else if(S.v=='cart'){h+=`<button data-a="home">رجوع</button><h2>السلة</h2>`;
  const g={};Object.keys(S.cart).forEach(i=>(g[S.cart[i].sid]=g[S.cart[i].sid]||[]).push(i));
  const dl=S.mode=='delivery';
  if(!Object.keys(g).length&&!S.done)h+='<p>السلة فارغة</p>';
  if(Object.keys(g).length)h+=`<div class="card"><p class="sec" style="margin-top:0">طريقة الاستلام</p><div class="mode"><button data-mode="delivery" class="chip ${dl?'on':''}">🚚 توصيل</button><button data-mode="pickup" class="chip ${!dl?'on':''}">🏪 استلام من الفرع</button></div><p class="note">${dl?'عند اختيار التوصيل تُضاف رسوم توصيل إلى إجمالي الطلب، ويحدّد كل متجر نطاق هذه الرسوم.':'يمكنك استلام طلبك من فرع المتجر دون أي رسوم إضافية.'}</p><p class="sec">بيانات العميل</p><input id="cn" placeholder="الاسم" value="${E(S.cust.n)}"><input id="cp" placeholder="رقم الهاتف" inputmode="tel" value="${E(S.cust.p)}">${dl?`<input id="ca" placeholder="العنوان بالتفصيل" value="${E(S.cust.a)}">`:''}<p id="er" class="err"></p></div>`;
  Object.keys(g).forEach(sid=>{const s=S.shops.find(x=>x.id==sid)||{};const t=g[sid].reduce((a,i)=>a+S.cart[i].n*S.cart[i].price,0);
   const cp=S.coupons[sid];let disc=0,cmsg='';if(cp){const ck=couponCheck(cp,t);if(ck.ok)disc=calcDisc(cp,t);else cmsg=ck.msg}
   const net=t-disc;
   h+=`<div class="card"><b>${E(s.name)}</b>${g[sid].map(i=>`<div class="row" style="margin:6px 0"><span>${E(S.cart[i].name)}</span><span><button data-m="${i}">-</button> ${S.cart[i].n} <button data-p="${i}">+</button></span></div>`).join('')}<div class="row"><b>إجمالي المنتجات: ${t} ج</b></div>${cp?`<div class="row" style="margin-top:6px"><span class="tag">كود الخصم: ${E(cp.code)}</span><span>${disc?`<b style="color:var(--grn)">- ${disc} ج</b> `:''}<button class="sec2" data-cr="${sid}">إزالة</button></span></div>${cmsg?`<p class="err">${cmsg}</p>`:''}`:`<div class="row" style="margin-top:6px"><input id="cc_${sid}" placeholder="كود الخصم" style="margin:0;direction:ltr;text-align:right"><button class="sec2" data-ca="${sid}" style="flex:none">تطبيق</button></div><p id="ce_${sid}" class="err"></p>`}${disc?`<div class="row"><b>الإجمالي بعد الخصم: ${net} ج</b></div>`:''}${dl?(hasFee(s)?`<div class="note">رسوم التوصيل: ${feeRange(s)}، وتُضاف إلى إجمالي الطلب.</div><div class="note">الإجمالي التقريبي شاملًا التوصيل: ${net+s.feeMin}${s.feeMax!=s.feeMin?' – '+(net+s.feeMax):''} ج</div>`:'<div class="note">ستُضاف رسوم التوصيل إلى إجمالي الطلب، ويحدّد المتجر قيمتها.</div>'):''}<button data-o="${sid}">تأكيد الطلب ✅</button></div>`});
  if(S.done)h+=`<div style="background:var(--bg-success);border-radius:12px;padding:10px;margin:8px 0"><p style="margin:0 0 6px">الطلب جاهز. اضغط على الزر ليُفتح واتساب والرسالة مكتوبة:</p><a class="wa" href="${S.done}" target="_blank">فتح واتساب وإرسال الطلب</a></div>`}
 else{h+=`<button data-a="home">رجوع</button><h2>الإدارة</h2>`;
  if(S.sub){const s=S.sub;
   h+=`<div class="card"><p class="sec" style="margin-top:0">رسوم التوصيل</p><p class="note">حدّد الحد الأدنى والحد الأقصى لرسوم التوصيل، وسيظهران للعميل عند اختيار التوصيل.</p><div style="display:flex;gap:8px"><input id="fmin" placeholder="الحد الأدنى (ج)" inputmode="decimal" value="${typeof s.feeMin=='number'?s.feeMin:''}"><input id="fmax" placeholder="الحد الأقصى (ج)" inputmode="decimal" value="${typeof s.feeMax=='number'?s.feeMax:''}"></div><button data-a="saveFee">حفظ رسوم التوصيل</button><p id="erf" class="err"></p></div>`;
   h+=`<div class="card"><p class="sec" style="margin-top:0">أكواد الخصم</p><div class="row"><input id="kc" placeholder="الكود (اتركه فارغًا للتوليد التلقائي)" style="margin:5px 0;direction:ltr;text-align:right"><button class="sec2" data-a="gen" style="flex:none">توليد</button></div><select id="kt"><option value="pct">خصم بنسبة مئوية %</option><option value="fix">خصم بمبلغ ثابت (جنيه)</option></select><input id="kv" placeholder="قيمة الخصم" inputmode="decimal"><input id="km" placeholder="الحد الأدنى للشراء (اتركه فارغًا إن كان مفتوحًا)" inputmode="decimal"><span class="note">تاريخ انتهاء الكود (اتركه فارغًا إن كان مفتوحًا)</span><input id="ke" type="date"><button data-a="addC">إنشاء كود الخصم</button><p id="erk" class="err"></p></div>`;
   h+=S.cps.map(c=>`<div class="card"><div class="row"><b style="direction:ltr">${E(c.code)}</b><span>${c.exp&&todayStr()>c.exp?'<span class="tag">منتهي</span> ':''}<button data-ask="c${c.id}">حذف</button></span></div><div class="note">${c.type=='pct'?'خصم '+c.value+'%':'خصم '+c.value+' جنيهًا'} · ${c.min?'حد أدنى للشراء '+c.min+' جنيهًا':'بدون حد أدنى'} · ${c.exp?'ينتهي في '+c.exp:'بدون تاريخ انتهاء'}</div></div>`).join('');
   const ph=s.type=='pharmacy',bx=ph&&S.kind=='box';
   h+=`<div class="card"><p class="sec" style="margin-top:0">${E(s.name)} - إضافة منتج</p>${ph?`<div class="mode"><button data-kind="pack" class="chip ${!bx?'on':''}">📦 عبوة</button><button data-kind="box" class="chip ${bx?'on':''}">🗃️ علب</button></div>`:''}<input id="pn" placeholder="${bx?'اسم العلبة':ph?'اسم العبوة':'اسم المنتج'}">${bx?`<input id="bs" placeholder="عدد الشرائط في العلبة" inputmode="numeric"><input id="sp" placeholder="سعر الشريط (ج)" inputmode="decimal">`:''}<input id="pp" placeholder="${bx?'سعر العلبة (ج)':ph?'سعر العبوة (ج)':'السعر (ج)'}" inputmode="decimal"><input id="ps" placeholder="المواصفات"><div class="thumbs">${S.imgs.map((u,i)=>`<div class="tn"><img src="${u}"><button data-rmi="${i}">×</button></div>`).join('')}</div><button class="sec2" data-a="pick" style="width:100%" ${S.imgs.length>=5?'disabled':''}>${S.imgs.length?'إضافة صورة أخرى':'اختيار صور المنتج'} (${S.imgs.length}/5)</button><input id="pi" type="file" accept="image/*" multiple style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none"><button data-a="addP">إضافة المنتج</button><p id="er" class="err"></p></div>`;
   h+=`<p class="sec">منتجاتي</p>`+(S.prods.filter(p=>p.sid==s.id).map(p=>`<div class="card" style="display:flex;gap:10px;align-items:center">${th(p,48)}<span style="flex:1">${E(p.name)} - ${p.kind=='box'?'علبة '+E(p.price)+' ج / شريط '+E(p.stripPrice)+' ج':E(p.price)+' ج'}</span><button data-ask="p${p.id}">حذف</button></div>`).join('')||'<p class="note">لا توجد منتجات بعد.</p>')}
  else if(S.adm){h+=`<p class="sec">إضافة متجر جديد</p><input id="n" placeholder="اسم المطعم أو الماركت"><select id="t">${TYPEOPTS('rest')}</select>${avPick('add',S.avNew)}<input id="ph" placeholder="رقم الواتساب مثل 01012345678" inputmode="tel"><input id="u" placeholder="البريد الإلكتروني أو اسم المستخدم لصاحب المتجر" style="direction:ltr;text-align:right"><input id="pw" placeholder="كلمة سر صاحب المتجر (6 أحرف على الأقل)"><button data-a="addS">إنشاء</button><p id="er" class="err"></p><p class="sec">المتاجر (${S.shops.length})</p>`+(S.shops.map(s=>S.edit==s.id?editCard(s):`<div class="card" style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span style="min-width:0">${E(s.name)}<br><small class="note">${T(s.type)} - ${E(s.phone)}<br><span style="direction:ltr;display:inline-block">${E(shopEmail(s))}</span></small></span><span style="display:flex;gap:6px;flex:none"><button class="sec2" data-edit="${s.id}">تعديل</button><button data-ask="s${s.id}">حذف</button></span></div>`).join('')||'<p class="note">لا توجد متاجر</p>')}
  else h+=`<p class="sec">تسجيل الدخول (أدمن أو صاحب متجر)</p><input id="lu" placeholder="البريد الإلكتروني أو اسم المستخدم" style="direction:ltr;text-align:right"><input id="lp" type="password" placeholder="كلمة السر"><button data-a="lg">دخول</button><p id="er" class="err"></p>`}
 if(S.lb){const p=S.prods.find(x=>x.id==S.lb.id);
  if(p){const im=imgsOf(p),n=im.length,i=n?((S.lb.i%n)+n)%n:0,bxp=p.kind=='box';
   h+=`<div class="ov"><div class="bd" data-a="lbclose"></div><div class="box">${n?`<img class="lbimg" src="${im[i]}"><div class="nav"><button data-a="lbprev" ${n<2?'disabled':''}>السابق</button><span>${i+1} / ${n}</span><button data-a="lbnext" ${n<2?'disabled':''}>التالي</button></div>`:''}<p style="margin:12px 0 4px;font-weight:800;font-size:17px">${E(p.name)}</p><div class="row"><span class="price">${bxp?'علبة: ':''}${E(p.price)} ج</span>${bxp?`<span class="note">الشريط: ${E(p.stripPrice)} ج · ${E(p.strips)} شرائط</span>`:''}</div><p class="sec" style="margin:14px 0 4px;font-size:15px">المواصفات</p><p class="pv">${p.specs?E(p.specs):'لا توجد مواصفات لهذا المنتج.'}</p><button class="sec2" data-a="lbclose" style="width:100%;margin-top:12px">إغلاق</button></div></div>`}
  else S.lb=null}
 if(S.confirm){const c=S.confirm;
  h+=`<div class="ov"><div class="bd" data-a="cancel"></div><div class="box"><p style="margin:0 0 6px;font-weight:800;font-size:17px">تأكيد الحذف</p><p style="margin:0 0 12px">${c.k=='s'?`هل أنت متأكد من حذف المتجر «${E(c.name)}»؟ سيتم حذف جميع منتجاته نهائيًا، ولا يمكن التراجع عن ذلك.`:c.k=='c'?`هل أنت متأكد من حذف كود الخصم «${E(c.name)}»؟`:`هل أنت متأكد من حذف المنتج «${E(c.name)}»؟`}</p><div style="display:flex;gap:8px"><button class="sec2" data-a="cancel" style="flex:1">إلغاء</button><button class="red" data-a="confirmdel" style="flex:1">تأكيد الحذف</button></div></div></div>`}
 R.innerHTML=h;
 if(restore)Object.keys(keep).forEach(id=>{const e=document.getElementById(id);if(e&&e.type!=='file')e.value=keep[id]});
 [['cn','n'],['cp','p'],['ca','a']].forEach(([i,k])=>{const e=document.getElementById(i);if(e)e.oninput=()=>{S.cust[k]=e.value}});
 const q=document.getElementById('q');if(q)q.oninput=()=>{S.q=q.value;const p=q.selectionStart;draw();const n=document.getElementById('q');n.focus();n.setSelectionRange(p,p)};
 const pav=document.getElementById('pav');if(pav)pav.onchange=async()=>{const f=pav.files&&pav.files[0];if(!f)return;try{S.avNew=await shrink(f,192,.8)}catch(x){er('تعذر قراءة الصورة')}pav.value='';draw()};
 const eav=document.getElementById('eav');if(eav)eav.onchange=async()=>{const f=eav.files&&eav.files[0];if(!f)return;try{S.avEdit=await shrink(f,192,.8)}catch(x){er('تعذر قراءة الصورة')}eav.value='';draw()};
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
 if(d.kind){S.kind=d.kind;return draw()}
 if(d.add){const p=S.prods.find(x=>x.id==d.add);if(!p)return;const u=d.u||'p';const key=u=='p'?p.id:p.id+'|'+u;const nm=u=='b'?p.name+' (علبة)':u=='s'?p.name+' (شريط)':p.name;const pr=u=='s'?+p.stripPrice:+p.price;
  const c=S.cart[key];if(c)c.n++;else S.cart[key]={n:1,name:nm,price:pr,sid:p.sid};draw();toast('تمت إضافة «'+nm+'» إلى السلة بنجاح');return}
 if(d.m){if(--S.cart[d.m].n<=0)delete S.cart[d.m];return draw()}
 if(d.p){S.cart[d.p].n++;return draw()}
 if(d.rmi!==undefined){S.imgs.splice(+d.rmi,1);return draw()}
 if(d.edit){S.edit=d.edit;S.avEdit=undefined;return draw()}
 if(d.ask){const k=d.ask[0],id=d.ask.slice(1);const o=k=='s'?S.shops.find(x=>x.id==id):k=='c'?S.cps.find(x=>x.id==id):S.prods.find(x=>x.id==id);S.confirm={k,id,name:o?(o.name||o.code):''};return draw()}
 if(d.cr){delete S.coupons[d.cr];return draw()}
 if(d.ca){const sid=d.ca,code=V('cc_'+sid).toUpperCase().replace(/\s/g,'');if(!code)return er('اكتب كود الخصم','ce_'+sid);
  try{const dc=await db.collection('coupons').doc(sid+'_'+code).get();
   if(!dc.exists)return er('كود الخصم غير صحيح','ce_'+sid);
   const cd=dc.data(),ck=couponCheck(cd,subtotal(sid));if(!ck.ok)return er(ck.msg,'ce_'+sid);
   S.coupons[sid]={code:cd.code,type:cd.type,value:cd.value,min:cd.min,exp:cd.exp};draw();toast('تم تطبيق كود الخصم بنجاح')}
  catch(x){er('تعذر التحقق من الكود: '+fbErr(x),'ce_'+sid)}
  return}
 if(d.o){const s=S.shops.find(x=>x.id==d.o);if(!s)return;const l=Object.keys(S.cart).filter(i=>S.cart[i].sid==d.o);const t=l.reduce((a,i)=>a+S.cart[i].n*S.cart[i].price,0);
  const dl=S.mode=='delivery',c=S.cust,cn=c.n.trim(),cp=c.p.trim(),ca=c.a.trim();
  if(!cn||cp.replace(/\D/g,'').length<10||(dl&&!ca))return er(dl?'اكتب الاسم ورقم هاتف صحيحًا والعنوان':'اكتب الاسم ورقم هاتف صحيحًا');
  const cc=S.coupons[d.o];let disc=0;if(cc&&couponCheck(cc,t).ok)disc=calcDisc(cc,t);
  const msg='طلب جديد من Atfih Express\n\n'+l.map(i=>'- '+S.cart[i].name+' × '+S.cart[i].n).join('\n')+'\nإجمالي المنتجات: '+t+' جنيهًا'
   +(disc?'\nكود الخصم: '+cc.code+' (خصم '+disc+' جنيهًا)\nالإجمالي بعد الخصم: '+(t-disc)+' جنيهًا':'')
   +(dl?'\nرسوم التوصيل: '+(hasFee(s)?feeRange(s):'يحدّدها المتجر')+'، وتُضاف إلى إجمالي الطلب.':'')
   +'\n\nطريقة الاستلام: '+(dl?'توصيل':'استلام من الفرع')
   +'\n\nبيانات العميل:\nالاسم: '+cn+'\nالهاتف: '+cp+(dl?'\nالعنوان: '+ca:'');
  let ph=String(s.phone).replace(/\D/g,'');if(ph[0]=='0')ph='20'+ph.slice(1);
  l.forEach(i=>delete S.cart[i]);delete S.coupons[d.o];S.done='https://wa.me/'+ph+'?text='+encodeURIComponent(msg);return draw()}
 const a=d.a;
 if(a=='pick'){const i=document.getElementById('pi');if(i)i.click();return}
 if(a=='home'){S.v='home';S.done=null}else if(a=='cart'){S.v='cart'}else if(a=='adm'){S.v='adm'}
 else if(a=='lbclose'){S.lb=null}
 else if(a=='lbprev'){S.lb.i--}
 else if(a=='lbnext'){S.lb.i++}
 else if(a=='cancel'){S.confirm=null}
 else if(a=='cancelE'){S.edit=null;S.avEdit=undefined}
 else if(a=='pickAv'){const i=document.getElementById('pav');if(i)i.click();return}
 else if(a=='pickAvE'){const i=document.getElementById('eav');if(i)i.click();return}
 else if(a=='rmAv'){S.avNew=null}
 else if(a=='rmAvE'){S.avEdit=''}
 else if(a=='gen'){const e=document.getElementById('kc');if(e)e.value=genCode();return}
 else if(a=='addC'){let code=V('kc').toUpperCase().replace(/\s/g,'');if(!code)code=genCode();
  if(!/^[A-Z0-9_\-]{3,20}$/.test(code))return er('الكود يتكوّن من أحرف إنجليزية وأرقام (من 3 إلى 20 خانة)','erk');
  if(S.cps.some(x=>x.code==code))return er('هذا الكود موجود بالفعل','erk');
  const type=V('kt'),val=parseFloat(V('kv'));if(isNaN(val)||val<=0)return er('أدخل قيمة خصم صحيحة','erk');
  if(type=='pct'&&val>100)return er('النسبة المئوية لا تتجاوز 100','erk');
  const mn=V('km')===''?null:parseFloat(V('km'));if(mn!==null&&(isNaN(mn)||mn<0))return er('الحد الأدنى للشراء غير صحيح','erk');
  const ex=V('ke')||null;
  try{await db.collection('coupons').doc(S.sub.id+'_'+code).set({sid:S.sub.id,code,type,value:val,min:mn,exp:ex,created:Date.now()})}catch(x){return er('تعذر الحفظ: '+fbErr(x),'erk')}
  clr(['kc','kv','km','ke']);toast('تم إنشاء كود الخصم: '+code)}
 else if(a=='confirmdel'){const c=S.confirm;S.confirm=null;draw();
  try{if(c.k=='s'){const q=await db.collection('products').where('sid','==',c.id).get();const bt=db.batch();q.forEach(x=>bt.delete(x.ref));bt.delete(db.collection('shops').doc(c.id));await bt.commit();toast('تم حذف المتجر بنجاح')}
   else if(c.k=='c'){await db.collection('coupons').doc(c.id).delete();toast('تم حذف كود الخصم بنجاح')}
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
  try{await db.collection('shops').doc(uid).set({name:n,type:V('t'),phone:ph,user:u,email:em,...(S.avNew?{avatar:S.avNew}:{})})}catch(x){return er('تعذر الحفظ: '+fbErr(x))}
  S.avNew=null;clr(['n','ph','u','pw']);toast('تم إنشاء حساب المتجر بنجاح')}
 else if(a=='saveE'){const n=V('en'),ph=V('eph');if(!n||!ph)return er('اسم المتجر ورقم الواتساب مطلوبان');
  try{await db.collection('shops').doc(S.edit).update({name:n,type:V('et'),phone:ph,...(S.avEdit!==undefined?{avatar:S.avEdit}:{})})}catch(x){return er('تعذر الحفظ: '+fbErr(x))}
  S.edit=null;S.avEdit=undefined;toast('تم حفظ التعديلات بنجاح')}
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
  try{const data={name:s.name,type:s.type,phone:s.phone,user:u,email:em};if(hasFee(s)){data.feeMin=s.feeMin;data.feeMax=s.feeMax}if(s.avatar)data.avatar=s.avatar;
   await db.collection('shops').doc(nid).set(data);
   const q=await db.collection('products').where('sid','==',s.id).get();const bt=db.batch();q.forEach(x=>bt.update(x.ref,{sid:nid}));bt.delete(db.collection('shops').doc(s.id));await bt.commit()}
  catch(x){return er('تعذر النقل: '+fbErr(x))}
  S.edit=null;toast('تم تغيير بيانات الدخول ونقل المتجر بنجاح')}
 else if(a=='saveFee'){const mn=parseFloat(V('fmin')),mx=parseFloat(V('fmax'));
  if(isNaN(mn)||isNaN(mx)||mn<0||mx<mn)return er('أدخل حدًّا أدنى وحدًّا أقصى صحيحين (الأقصى لا يقل عن الأدنى)','erf');
  try{await db.collection('shops').doc(S.sub.id).update({feeMin:mn,feeMax:mx})}catch(x){return er('تعذر الحفظ: '+fbErr(x),'erf')}
  toast('تم حفظ رسوم التوصيل بنجاح')}
 else if(a=='addP'){const ph=S.sub.type=='pharmacy',bx=ph&&S.kind=='box',nm=V('pn'),pr=parseFloat(V('pp'));
  if(!nm||isNaN(pr)||pr<=0)return er(bx?'اسم العلبة وسعرها مطلوبان':ph?'اسم العبوة وسعرها مطلوبان':'اسم المنتج وسعره مطلوبان');
  let extra={kind:'pack'};
  if(bx){const st=parseInt(V('bs'),10),sp=parseFloat(V('sp'));if(isNaN(st)||st<1)return er('أدخل عدد الشرائط في العلبة (رقمًا صحيحًا)');if(isNaN(sp)||sp<=0)return er('أدخل سعر الشريط');extra={kind:'box',strips:st,stripPrice:sp}}
  if(!S.imgs.length)return er('أضف صورة واحدة على الأقل');if(S.imgs.join('').length>850000)return er('حجم الصور كبير، قلّل عدد الصور');
  try{await db.collection('products').add({sid:S.sub.id,name:nm,price:pr,specs:V('ps'),imgs:S.imgs,...extra})}catch(x){return er('تعذر الحفظ: '+fbErr(x))}
  S.imgs=[];clr(['pn','pp','ps','bs','sp']);toast('تمت إضافة المنتج بنجاح')}
 draw()});
let cpUnsub=null,cpFor=null;
function watchCoupons(){const uid=S.sub?S.sub.id:null;if(uid===cpFor)return;cpFor=uid;if(cpUnsub){cpUnsub();cpUnsub=null}S.cps=[];
 if(uid){try{cpUnsub=db.collection('coupons').where('sid','==',uid).onSnapshot(q=>{S.cps=q.docs.map(d=>({id:d.id,...d.data()}));soft()},e=>{window.FBERR='coupons: '+e.message;draw()})}catch(e){}}}
function sync(){S.adm=!!(S.user&&S.user.email==ADMIN);S.sub=(S.user&&!S.adm)?(S.shops.find(x=>x.id==S.user.uid)||null):null;watchCoupons();soft()}
draw();
try{
auth.onAuthStateChanged(u=>{S.user=u;sync()});
db.collection('shops').onSnapshot(q=>{S.shops=q.docs.map(d=>({id:d.id,...d.data()}));sync()},e=>{window.FBERR='shops: '+e.message;draw()});
db.collection('products').onSnapshot(q=>{S.prods=q.docs.map(d=>({id:d.id,...d.data()}));soft()},e=>{window.FBERR='products: '+e.message;draw()});
}catch(e){window.FBERR=window.FBERR||('Init: '+e.message);draw()}
