/* ========== 常量与话术库 ========== */
const LS_KEY = "bzr_platform_v1";

/* ========== 可爱图标集（F 大圆角卡通风，主题绿配色） ========== */
const ICONS = {
  attendance:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="12" cy="12" r="6" fill="#FFFFFF"/><path d="M12 8.5 V12 L14.5 13.5" fill="none" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg>',
  note:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  todo:'<svg viewBox="0 0 24 24" class="ic"><rect x="5" y="4" width="14" height="14" rx="3" fill="#E4D58C" stroke="#C9B86A" stroke-width="1.5"/><path d="M8 9 H16 M8 12 H16 M8 15 H13" stroke="#8A7B3A" stroke-width="1.5" stroke-linecap="round"/><circle cx="15.5" cy="6.5" r="1.8" fill="#935855"/></svg>',
  warn:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#EAACA9" stroke="#8E3B34" stroke-width="1.6"/><path d="M12 7 V13" stroke="#8E3B34" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="16" r="1.4" fill="#8E3B34"/></svg>',
  talk:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M7 9 H17 V14 H10 L7.5 16.5 V14 H7 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><circle cx="10" cy="11.3" r="0.9" fill="#8A9E68"/><circle cx="13" cy="11.3" r="0.9" fill="#8A9E68"/><circle cx="16" cy="11.3" r="0.9" fill="#8A9E68"/></svg>',
  violation:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#EAACA9" stroke="#8E3B34" stroke-width="1.6"/><path d="M12 7 L18 16 H6 Z" fill="#FFFFFF" stroke="#8E3B34" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 10 V13.5" stroke="#8E3B34" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="15" r="1.1" fill="#8E3B34"/></svg>',
  good:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#E4D58C" stroke="#C9B86A" stroke-width="1.6"/><path d="M12 7 L13.6 10.6 L17.5 11 L14.6 13.4 L15.4 17.2 L12 15.1 L8.6 17.2 L9.4 13.4 L6.5 11 L10.4 10.6 Z" fill="#FFFFFF" stroke="#C9B86A" stroke-width="1.2" stroke-linejoin="round"/></svg>',
  leave:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><rect x="6.5" y="8" width="11" height="9" rx="2" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M8 6 V8.5 M16 6 V8.5" stroke="#8A9E68" stroke-width="1.8" stroke-linecap="round"/><path d="M9.5 12 H14.5" stroke="#8A9E68" stroke-width="1.6" stroke-linecap="round"/></svg>',
  score:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 7 H15 V10 Q15 13 12 13 Q9 13 9 10 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9 8 H6.5 Q6.5 11 9 11 M15 8 H17.5 Q17.5 11 15 11" fill="none" stroke="#8A9E68" stroke-width="1.4"/><path d="M12 13 V16 H10 V17 H14 V16 H12 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  home:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M7 12 L12 8 L17 12 V16 H7 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><rect x="10.5" y="12.5" width="3" height="3.5" fill="#8A9E68"/></svg>',
  bed:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M6 14 H18 V17 H6 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 10 H9 V13 H6 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9 11 H18" stroke="#8A9E68" stroke-width="1.4" stroke-linecap="round"/></svg>',
  record:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><rect x="7" y="7" width="10" height="11" rx="2" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><rect x="9.5" y="5.5" width="5" height="3" rx="1.2" fill="#8A9E68"/><path d="M9.5 11 H14.5 M9.5 14 H13" stroke="#8A9E68" stroke-width="1.4" stroke-linecap="round"/></svg>',
  done:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#BACFA8" stroke="#4E7C5E" stroke-width="1.6"/><path d="M8 12 L11 15 L16 9" fill="none" stroke="#4E7C5E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  close:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg>',
  back:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M14 9 L10 12 L14 15" fill="none" stroke="#8A9E68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  gear:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="12" cy="12" r="3.6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><g stroke="#8A9E68" stroke-width="1.6" stroke-linecap="round"><path d="M12 4.5 V7 M12 17 V19.5 M4.5 12 H7 M17 12 H19.5 M6.8 6.8 L8.6 8.6 M15.4 15.4 L17.2 17.2 M17.2 6.8 L15.4 8.6 M8.6 15.4 L6.8 17.2"/></g></svg>',
  search:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="10.5" cy="10.5" r="4.5" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M14 14 L18 18" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg>',
  person:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="12" cy="10" r="3" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M7 17 Q12 13.5 17 17" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.5" stroke-linecap="round"/></svg>',
  book:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 7 C9.5 6 7 6.5 7 6.5 V16 C7 16 9.5 15.5 12 16.5 C14.5 15.5 17 16 17 16 V6.5 C17 6.5 14.5 6 12 7 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 7 V16.5" stroke="#8A9E68" stroke-width="1.2"/></svg>',
  template:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 6 H13 L16 9 V18 H8 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M13 6 V9 H16" fill="none" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M10 11 H14 M10 14 H14" stroke="#8A9E68" stroke-width="1.3" stroke-linecap="round"/></svg>',
  add:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg>',
  lock:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><rect x="8" y="11" width="8" height="6" rx="1.6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9.5 11 V9.5 Q9.5 7.5 12 7.5 Q14.5 7.5 14.5 9.5 V11" fill="none" stroke="#8A9E68" stroke-width="1.5"/><circle cx="12" cy="14" r="1.1" fill="#8A9E68"/></svg>',
  cal:'<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><rect x="6.5" y="8" width="11" height="9" rx="2" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M8 6 V8.5 M16 6 V8.5" stroke="#8A9E68" stroke-width="1.8" stroke-linecap="round"/></svg>'
};

const STUDENT_TAGS = ["留守","单亲","性格内向","性格外向","脾气急躁","家庭困难","学习上进","学习下滑","行为散漫","班干部","特异体质","心理关注","重点关注"];
const CONTACT_CHANNELS = ["电话","微信","面谈","短信","其他"];
const RELATIONS = ["爸爸","妈妈","爷爷","奶奶","外公","外婆","姑姑","叔叔","舅舅","阿姨","哥哥","姐姐","其他"];
/* 解析"爸爸：张三 123456789，妈妈：李四 987654321" → [{rel,name,phone}] */
function parseContacts(cell){
  const out=[];
  const segs=String(cell||"").split(/[,，;；、\n]/).map(s=>s.trim()).filter(Boolean);
  segs.forEach(seg=>{
    const phoneMatch=seg.match(/(1[3-9]\d{9}|\d{7,8})/);
    if(!phoneMatch) return;
    const phone=phoneMatch[1];
    let rel="", name="";
    const relHit=RELATIONS.find(r=>seg.includes(r));
    if(relHit){
      rel=relHit;
      let nm=(seg.split(relHit)[1]||"").replace(/[^一-龥]/g,"").slice(-4);
      if(!nm) nm=seg.split(relHit)[0].replace(/[^一-龥]/g,"").slice(-4);
      name=nm;
    }else{
      const m=seg.match(/^([^0-9:：]+)[:：]?/);
      if(m) name=m[1].replace(/[^一-龥]/g,"").slice(-4);
    }
    out.push({rel:rel, name:name, phone:phone});
  });
  return out;
}
/* 名字相似度（用于导入时识别疑似重复） */
function nameSim(a,b){
  if(!a||!b) return 0;
  let same=0;
  for(const ch of a){ if(b.includes(ch)) same++; }
  return same/Math.max(a.length,b.length);
}
function contactsLine(s){
  if(s.contacts&&s.contacts.length){
    return s.contacts.map(c=>c.phone?(c.rel||c.name)+"："+c.phone:(c.rel||c.name)).join("　");
  }
  if(s.parentName||s.parentPhone) return "家长："+(s.parentName||"")+(s.parentPhone?"　电话："+s.parentPhone:"");
  return "";
}
const SUBJECTS = ["语文","数学","英语","物理","化学","道德与法治","生物","历史","地理","体育"];
/* 科目别名：导入识别兼容旧叫法，统一存标准名 */
const SUB_ALIAS = {"道法":"道德与法治","政治":"道德与法治","思想品德":"道德与法治","品德":"道德与法治"};
function stdSubject(name){
  const n=String(name||"").trim();
  if(SUB_ALIAS[n]) return SUB_ALIAS[n];
  if(SUBJECTS.includes(n)) return n;
  return n;
}
/* 展示/导出统一科目顺序（按年级自动增减：初一无物化、初二无化学；导入科目乱序会按此重排） */
const SUBJECT_ORDER = ["语文","数学","英语","物理","化学","历史","道德与法治","生物","地理","体育"];
function orderedSubjects(list){
  const arr=list.map(stdSubject);
  arr.sort((a,b)=>{
    const ia=SUBJECT_ORDER.indexOf(a), ib=SUBJECT_ORDER.indexOf(b);
    if(ia>=0&&ib>=0) return ia-ib;
    if(ia>=0) return -1;
    if(ib>=0) return 1;
    return String(a).localeCompare(String(b),"zh");
  });
  return arr;
}
/* 排名列识别：班排类/校排类（叫法统一，显示只出"班排/校排"） */
const CLASS_RANK_RE=/班排|班序|班名|班级排名|班级名次/;
const GRADE_RANK_RE=/校排|年排|校名|校名次|年级排名|年级名次|年名次|学校排名|全级排名|级排/;
/* 分数统一保留两位小数 */
function roundScore(v){ const n=parseFloat(v); if(isNaN(n)) return null; return parseFloat(n.toFixed(2)); }
function fmtScore(v){ if(v==null||v==="") return ""; const n=parseFloat(v); return String(Math.round(n*100)/100); }
/* 各科满分（按学校实际：语数英120，其余100，体育58），可改 */
const SUBJECT_FULL = {语文:120,数学:120,英语:120,物理:100,化学:100,生物:100,道法:100,道德与法治:100,历史:100,地理:100,体育:58};
function fullScoreOf(sub){ return SUBJECT_FULL[stdSubject(sub)]||100; }
function passLineOf(sub){ return Math.round(fullScoreOf(sub)*0.6); }
const EXAMS = ["单元测","月考","期中考试","期末考试","模拟考"];
const TALK_REASONS = ["成绩波动","行为问题","情绪异常","家庭原因","同学矛盾","学习动力不足","其他"];
const VIOLATION_TYPES = ["打架斗殴","旷课逃课","课堂玩手机","迟到早退","辱骂同学","考试作弊","顶撞老师","损坏公物","吸烟","其他"];
const LEAVE_TYPES = ["病假","事假"];

const RECORD_TYPES = [
  {key:"talk", name:"谈话记录", color:"#6F8A4C"},
  {key:"violation", name:"违纪记录", color:"#C25A52"},
  {key:"good", name:"好事记录", color:"#4E7C5E"},
  {key:"contact", name:"家校联系", color:"#8b5cf6"},
  {key:"leave", name:"请假记录", color:"#C99A3E"},
  {key:"score", name:"成绩记录", color:"#8A9E68"}
];

/* 速记默认词库：命中即归类；可在“管理词库”里自行增删，只存本地 */
const DEFAULT_KEYWORDS = {
  good: ["帮助","打扫","拾金不昧","主动","辅导","补习","让座","助人","捡到","归还","见义勇为","关心同学","值日","好人好事","义务","热心","表扬","获奖","志愿者","安慰","陪诊","捐"],
  violation: ["抽烟","吸烟","打架","斗殴","旷课","逃课","迟到","早退","玩手机","顶撞","作弊","辱骂","骂人","损坏公物","违纪","违规","喝酒","赌博","夜不归宿","翻墙","带手机","不交作业","顶嘴","谈恋爱","偷","撒谎","打架斗殴"],
  todo: ["拿东西","家长打电话","拿吃的","拿衣服","家长来接","拿药","叫","处理","写假条"]
};

/* 违规类型话术库：{{name}}学生名 {{date}}日期 {{desc}}事件描述 {{tags}}标签描述 {{recent}}近期动态 {{trend}}成绩趋势 {{grade}}班级 {{plan}}初步处理 */
const RULES = {
"打架斗殴":{
 analysis:"{{name}}{{gender}}，档案标注：{{tags}}。{{recent}}。{{trend}}。学生动手打架，往往不是单一原因，乡镇学校常见三种：一是情绪上头控制不住，二是觉得受了委屈没人撑腰，三是从家里带出来的习惯。处理前务必先搞清楚起因，别一上来就骂。",
 talk:[
  "单独约谈，先让他把经过完整讲一遍，你不打断、不评判，只点头追问\"然后呢\"。先听完，他的抵触就消掉一半。",
  "接着问三个问题：你当时为什么动手？动手把事情解决了吗？如果重来一次你会怎么做？让他自己说出\"动手没用\"，比你说十遍都管用。",
  "然后讲清后果：伤了人要赔医药费，记过处分要进档案，影响评优和毕业。最后跟他定一个改进目标（比如\"这学期不再动手\"），写在纸上让他签字，你留档，下次他冲动时拿出来提醒。"],
 direction:"责任教育+情绪管理。给他一个责任位（如体育课小组长），教他情绪上头时先深呼吸10秒或先离开现场，有进步就在班上公开表扬一次。",
 report:"X主任，{{date}}我班{{name}}与同学发生冲突（起因：{{desc}}）。我已第一时间到场分开双方，均无大碍、情绪已稳定。我的处理：分别谈话了解起因、双方当面道歉、按班规记违纪并通知家长。如需上报学校或约谈双方家长，请您指示。",
 parent:"{{name}}家长您好，我是班主任X老师。今天{{name}}和同学发生了点冲突，两边我都安抚好了，孩子没受伤，您先别急。孩子闹矛盾很正常，关键是怎么教。晚上您方便的话跟孩子聊聊，先听他说，别一上来就打骂。学校这边我按班规处理并跟进，咱们两边配合，把这件事变成一次教育，您看行吗？"},
"旷课逃课":{
 analysis:"{{name}}{{gender}}，档案标注：{{tags}}。{{recent}}。{{trend}}。学生旷课，先别急着定性成\"坏孩子\"。乡镇中学旷课常见原因：家里有事没人管、跟同学约去玩、受了欺负不敢来、或者觉得学不会没意思。第一步永远是搞清楚他\"为什么不来\"，而不是\"你怎么敢不来\"。",
 talk:[
  "私下找他聊，别在班里公开批评。开场白用关心的话：\"这几天没见你，我还挺担心你的，跟老师说说怎么了？\"先关心，再谈事。",
  "分清原因：如果是家里的事，问他有什么难处，能帮的（联系家长、申请资助）你记下来跟进；如果是厌学，问他哪一科最头疼，帮他定一个小目标（比如数学先考及格）。",
  "明确告诉他旷课的后果：课时不够影响毕业证，学校会按学籍管理规定处理。然后让他写一份情况说明和承诺，你留档。"],
 direction:"查明原因、分类处理：家庭问题→家访、必要时报学校申请帮扶；厌学→降目标、结对帮扶、找一科先突破；被欺负→调查处理并保护他。连续旷课满3次必须上报年级组。",
 report:"X主任，{{grade}}{{name}}近期有旷课情况（{{desc}}）。我已谈话了解原因，初步判断是（家庭原因/厌学/其他），目前措施：{{plan}}。若情况没有好转，我会按流程上报并联系家长到校面谈。",
 parent:"{{name}}家长您好，我是班主任X老师。跟您说一下，{{name}}这几天有没来上课的情况。我找孩子聊了，原因大概是……（您按实际情况说）。孩子这年纪正是关键时候，缺课一两次还能补，拖久了就难跟上了。咱们约一下：孩子每天到校情况我及时跟您说，您早上帮忙督促一下，一起盯紧这段时间，行吗？"},
"课堂玩手机":{
 analysis:"{{name}}{{gender}}，档案标注：{{tags}}。{{recent}}。{{trend}}。课堂玩手机，表面是纪律问题，根子往往是\"课堂上没事干、听不懂、得不到关注\"。先别急着没收手机断网，先问问他为什么课上要看手机。",
 talk:[
  "课后单独聊，别在课堂上当场发火。先问：\"是课上听不太懂，还是有什么事需要看手机？\"先弄清楚是听不懂、无聊，还是有实际困难。",
  "如果是听不懂：给他安排一个\"帮扶对子\"（同桌或科代表），或者你课间抽5分钟单独讲一次，让他尝到\"听懂了\"的甜头。如果是家里有事：记下来，帮他协调。",
  "约定规则：上课手机放讲台或书包，达成一周就还给他自行保管，违反就再保管一周。规则要让他自己说一遍，确认听懂了。"],
 direction:"疏导为主、规矩为辅。上课多给他回答简单问题的机会，让他有存在感；每周五提醒他\"这周守住了没有\"，守住就口头表扬。",
 report:"X主任，{{name}}多次课堂使用手机（{{desc}}），我已约谈并约定管理规则（上课交手机、一周后视表现返还）。如反复违反，我会按校规处理并请家长配合。",
 parent:"{{name}}家长您好，我是班主任X老师。跟您反映个情况：{{name}}最近上课有几次玩手机，我已经跟他约定好了上课交手机。也想麻烦您在家把手机管一管，比如晚上几点收手机、写完作业再玩，咱们两边一起帮他养成习惯，孩子能学进去才是最重要的。"},
"考试作弊":{
 analysis:"{{name}}{{gender}}，档案标注：{{tags}}。{{recent}}。{{trend}}。作弊的孩子，多半不是\"品德坏\"，而是太怕考砸了没法交代（怕家长骂、怕丢面子、怕被比较）。处理时既要让他认识错误，也要保住他的脸面，别一棒子打死。",
 talk:[
  "私下谈，严肃但别羞辱。开门见山：\"这次考试的事我知道了，老师想先听你自己说。\"让他自己承认，比什么都好。",
  "问他为什么这么做，认真听答案（怕家长骂？怕垫底丢脸？）。然后告诉他：\"老师在意的是你骗了自己，分数可以慢慢补，诚信丢了才难找回来。\"",
  "处理：本次成绩按零分计或按校规处理，但他补考/重做的机会你给他。最后约定：\"下次考砸了，来老师办公室说一声，我们一起想办法，但不能再走歪路。\"跟家长沟通时也要替他留面子。"],
 direction:"诚信教育+减负。跟家长单独沟通，别在班里公布；建议家长降低对分数的苛求；安排他做一次\"诚信\"主题的班级分享（用他自己的话，会很有说服力）。",
 report:"X主任，{{date}}{{grade}}{{name}}在考试中存在违纪行为（{{desc}}）。我已按流程处理（成绩作废/按校规记违纪），并已单独谈话教育。建议约家长面谈一次，共同做好诚信教育。",
 parent:"{{name}}家长您好，我是班主任X老师。今天跟您说件事，希望您先别发火：这次考试，{{name}}有作弊的情况，我已经教育过了，孩子也知道错了。说句实在话，孩子这样做，多半是怕考不好没法跟您交代。您看这样行不行：咱们以后多鼓励他尽力就行，考砸了咱们一起想办法，别打骂。学校这边我按规矩处理，但我会给他补过的机会。咱们一起帮他把心结解开。"},
"辱骂同学":{
 analysis:"{{name}}{{gender}}，档案标注：{{tags}}。{{recent}}。{{trend}}。骂人的孩子，嘴巴凶不代表内心强，很多时候是学来的（家里有人这么说话）或者是想用\"凶\"来掩盖自卑。要治的是行为，更要治的可能是他心里的不痛快。",
 talk:[
  "先让骂人的和被骂的分开谈。对被骂的：肯定他受委屈了，安抚好；对骂人的：先问\"你骂他之前，发生了什么？\"让他讲完整过程，很多冲突起因都是一件小事。",
  "引导换位思考：\"要是别人当着全班这么骂你，你什么感受？\"让他说出感受，再问他\"除了骂，还有没有别的办法表达不满？\"教他一句替代话（如\"你这样做我不高兴\"）。",
  "要求他当面道歉（可以私下道歉+写一句道歉话），并约定：再犯一次，就按班规在班会上检讨。"],
 direction:"文明礼仪教育+给出口。让他参与一次\"如何表达情绪\"的班会策划；给被骂的学生安排同伴支持；观察两周，若还反复，通知双方家长。",
 report:"X主任，{{name}}与同学发生言语冲突（{{desc}}），我已分别谈话、双方和解并道歉。如再次发生，我会按班规处理并约谈双方家长。",
 parent:"{{name}}家长您好，我是班主任X老师。想跟您说件事：{{name}}今天和同学闹矛盾，说了些不好听的话，两边我已经调解好了。孩子说话冲，很多时候是跟着大人学的，所以也想提醒您留意一下，家里有人说话比较冲的话，孩子容易模仿。咱们一起教他好好说话，好吗？"},
"顶撞老师":{
 analysis:"{{name}}{{gender}}，档案标注：{{tags}}。{{recent}}。{{trend}}。学生顶撞老师，八成是觉得\"被当众下了面子\"。处理的关键：不在课堂上跟他对峙，把战场转移到课后一对一的场合。",
 talk:[
  "课堂上一句\"这个问题我们课后再单独说\"，给他台阶，也给课堂止损。千万别在班里跟他吵起来，赢了道理输了班级。",
  "课后找他，先复盘不指责：\"今天课上你反应那么大，老师想知道是发生了什么？\"让他把火气说完，你再说话。",
  "然后明确底线：\"你可以对老师有意见，但用顶撞的方式解决不了问题，下次有意见，单独来找我谈。\"最后问他：\"这件事你想怎么收场？\"让他自己提出补救（道歉或写说明），你接受就好。"],
 direction:"关系修复。事后找机会在公开场合给他一个正向关注（回答对问题表扬他），修复关系比处罚更重要；同时记录在案，观察后续态度。",
 report:"X主任，{{name}}在课堂上与老师发生言语冲突（{{desc}}），课后我已与他单独谈话，学生已认识错误并道歉，双方已和解。我会持续关注他的情绪状态。",
 parent:"{{name}}家长您好，我是班主任X老师。今天{{name}}在课堂上跟老师顶了几句嘴，我课下已经跟他谈过了，他也知道错了。孩子进入青春期，有时好面子、容易冲动，这很正常，我们正确引导就行。也麻烦您在家跟孩子聊聊：尊重老师、有话好好说。咱们一起帮他度过这个阶段。"},
"吸烟":{
 analysis:"{{name}}{{gender}}，档案标注：{{tags}}。{{recent}}。{{trend}}。中学生吸烟，多数是好奇、跟风、装成熟，一旦成瘾就麻烦。发现后要快速处理，但要保护他的隐私，别让全班都知道，否则容易破罐子破摔。",
 talk:[
  "私下谈，态度要稳：\"老师已经知道了，抽烟这事，我们谈一次。\"先别问\"跟谁学的\"，先问\"抽多久了、一周几根\"，评估成瘾程度。",
  "讲清楚：未成年人吸烟违反《未成年人保护法》，学校也会按校规处理；更重要的是伤身体，这个年纪肺还在长。同时问他为什么抽（好奇？朋友带？压力大？）。",
  "约定戒断：如果只是好奇，让他写承诺书并交烟；如果已成习惯，告知家长共同监督，必要时求助校医或专业戒瘾帮助。给他一个台阶：\"老师相信你能戒掉，我会帮你保密，只看你行动。\""],
 direction:"保密处理+家校联动。不公开批评；通知家长（态度要一致）；观察他的交往圈子，必要时与德育处联合干预；两周后复查。",
 report:"X主任，{{date}}发现{{name}}在校吸烟（{{desc}}）。我已约谈，学生承认并愿意改正，已通知家长。按校规给予相应处理，后续我会持续观察并与德育处保持沟通。",
 parent:"{{name}}家长您好，我是班主任X老师。跟您说件事，希望您冷静处理：我发现{{name}}有抽烟的情况，已经跟他谈过了，他答应改正。这个年纪抽烟，多数是好奇或者朋友带的，您回家先别打骂，好好聊聊，问问他是怎么开始的。也麻烦您留意一下他平时和谁玩、有没有零花钱买烟。咱们两边一起，把这个习惯掐在苗头上。"},
"其他":{
 analysis:"{{name}}{{gender}}，档案标注：{{tags}}。{{recent}}。{{trend}}。这类行为（{{desc}}）先不急着定性，重点是把前因后果摸清楚，再决定处理方向。",
 talk:[
  "一对一谈话，开场：\"老师叫你来，是想了解一下情况，你把事情经过说给我听。\"先听完整，再表态。",
  "问清三点：当时发生了什么？他当时怎么想的？现在怎么看这件事？根据他的回答判断是认知问题、情绪问题还是习惯问题。",
  "按判断处理：认知问题→讲清对错和后果；情绪问题→教他表达和释放的办法；习惯问题→约定改正目标和时限。无论哪种，都让他说一遍\"下次遇到我会怎么做\"。"],
 direction:"先了解再定性。记录在案，观察一周，视情况决定是否上报或通知家长；小问题在班内消化，大问题及时联动年级组。",
 report:"X主任，{{grade}}{{name}}发生{{desc}}，我已约谈了解情况，初步判断属于（认知/情绪/习惯）问题，处理措施：{{plan}}。后续进展我会及时向您汇报。",
 parent:"{{name}}家长您好，我是班主任X老师。今天找您，是跟您说一下{{name}}最近的一件事（简单说情况）。我已经跟孩子谈过了，孩子态度还是好的。想请您在家多留意一下，配合我这边一起引导。有什么情况我会随时跟您联系。"}
};

/* 通知模板库 */
const NOTICE_TEMPLATES = [
 {t:"防溺水安全提醒", c:"各位家长：近期天气炎热，防溺水是头等大事。请务必教育孩子：不私自下水游泳，不擅自结伴到水库、河塘、鱼塘玩耍，见到有人落水要大声呼救、不盲目施救。孩子外出要做到\"知去向、知同伴、知归时\"。请家长每天叮嘱一次，谢谢配合！"},
 {t:"放假通知", c:"各位家长：根据学校安排，本周X（X月X日）至X月X日放假，X月X日（周X）正常上课。放假期间请督促孩子完成作业，注意交通安全、用电安全，不沉迷手机，不到危险水域玩耍。返校当天请提醒孩子按时到校，仪容仪表符合规范。祝假期平安愉快！"},
 {t:"资料费/代收费说明", c:"各位家长：经家长委员会商议并报学校同意，本学期需代收资料费XX元/人，用于统一购买教辅资料（明细已公示在班级群文件）。请家长核对后在X月X日前通过（微信/现金）交给XX，转账请备注孩子姓名。如有困难，可私下联系我说明情况，学校会统筹安排。谢谢理解！"},
 {t:"家长会通知", c:"各位家长：学校定于X月X日（周X）上午X点召开家长会，地点：XX班教室。本次家长会主要通报期中考试情况、学习习惯养成和安全教育事项，届时请准时参加。如确因外出务工无法参加，请私下跟我说一声，我会把会议要点单独发您。谢谢支持！"},
 {t:"孩子在校情况告知（委婉）", c:"XX家长您好，我是班主任X老师。跟您反映一下孩子近期的在校情况：孩子最近上课有点分心，作业完成情况也不太理想（具体情况请您私聊我，我详细说）。想麻烦您在家多关注一下，是不是最近有什么事影响了他。孩子基础是有的，我们趁早一起抓一抓，还来得及。您看您什么时候方便，我们电话聊两句？"},
 {t:"作业/学习督促", c:"各位家长：请提醒孩子今晚完成：语文第X课练习、数学第X章练习、英语单词听写。作业需家长签字（实在没空签字的，让孩子抄一遍作业登记也可）。咱们班孩子基础差异大，每天坚持完成作业，是跟得上的关键一步。麻烦各位了，谢谢！"}
];

/* ========== 数据层 ========== */
let DB = {students:[], records:[], tickets:[], todos:[], checks:[], materials:[], dorms:[], keywords:null};
function load(){ try{ const d=JSON.parse(localStorage.getItem(LS_KEY)); if(d&&d.students&&d.records){ if(!d.tickets) d.tickets=[]; if(!d.todos) d.todos=[]; if(!d.checks) d.checks=[]; if(!d.materials) d.materials=[]; if(!d.dorms) d.dorms=[]; migrateDB(d); return d; } }catch(e){} return {students:[],records:[],tickets:[],todos:[],checks:[],materials:[],dorms:[],keywords:null}; }
/* 一次性数据迁移：科目"道法"→"道德与法治"；住宿"外宿"→"走读"；初始化速记词库 */
function migrateDB(d){
  let changed=false;
  (d.records||[]).forEach(r=>{
    if(r.type==="score"&&r.detail&&r.detail.subject){
      const ns=stdSubject(r.detail.subject);
      if(ns!==r.detail.subject){ r.detail.subject=ns; changed=true; }
    }
  });
  (d.students||[]).forEach(s=>{ if(s.dorm==="外宿"){ s.dorm="走读"; changed=true; } });
  if(!d.keywords||!Array.isArray(d.keywords.good)||!Array.isArray(d.keywords.violation)){
    d.keywords={good:[...DEFAULT_KEYWORDS.good], violation:[...DEFAULT_KEYWORDS.violation], todo:[...DEFAULT_KEYWORDS.todo]}; changed=true;
  } else if(!Array.isArray(d.keywords.todo)){
    d.keywords.todo=[...DEFAULT_KEYWORDS.todo]; changed=true;
  }
  if(changed) localStorage.setItem(LS_KEY, JSON.stringify(d));
}
function save(){ localStorage.setItem(LS_KEY, JSON.stringify(DB)); scheduleCloudPush(); }
function uid(){ return "id"+Date.now()+Math.floor(Math.random()*9999); }
function todayStr(){ const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function esc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function getStudent(id){ return DB.students.find(s=>s.id===id); }
function getRecords(id){ return DB.records.filter(r=>r.studentId===id).sort((a,b)=>b.date.localeCompare(a.date)); }
function recTypeName(type){ const t=RECORD_TYPES.find(x=>x.key===type); return t?t.name:type; }
function daysBetween(dateStr){ const t=new Date(dateStr+"T00:00:00"); const now=new Date(); now.setHours(0,0,0,0); return Math.round((now-t)/86400000); }
/* 姓氏多音字覆盖表：浏览器 localeCompare 对多音字常按常见读音排，
   导致“曾”(zēng) 被当成“céng”排在 c 组。这里强制按姓氏读音取首字母用于排序。 */
const PINYIN_OVERRIDE={"曾":"zeng","重":"chong","仇":"qiu","朴":"piao","查":"zha","单":"shan","解":"xie","区":"ou","乐":"yue","盛":"sheng","覃":"qin","燕":"yan","任":"ren","华":"hua","种":"chong","翟":"zhai","折":"she","秘":"bi","句":"gou","员":"yun","缪":"miao","宁":"ning","逄":"pang","蒲":"pu","亓":"qi","召":"shao","宿":"su","台":"tai","谭":"tan","谌":"chen","诸":"zhu","卓":"zhuo","訾":"zi","宗":"zong","邹":"zou","冼":"xian","葛":"ge","盖":"ge","哈":"ha","虎":"hu","呼":"hu","拉":"la","令":"ling","娄":"lou","沙":"sha","少":"shao","沈":"shen","石":"shi","帅":"shuai","司":"si","佘":"she","随":"sui","庹":"tuo","宛":"wan","韦":"wei","午":"wu","洗":"xian","相":"xiang","胥":"xu","烟":"yan","要":"yao","叶":"ye","殷":"yin","应":"ying","於":"yu","虞":"yu","员":"yun","昝":"zan","战":"zhan","仉":"zhang","掌":"zhang","甄":"zhen","政":"zheng","治":"zhi","竺":"zhu","颛":"zhuan","禚":"zhuo","宗":"zong","邹":"zou","俎":"zu"};
function sortKey(name){ const c=(name||"").charAt(0); return PINYIN_OVERRIDE[c]||name; }
/* 当日请假学生集合（按请假记录日期判定） */
function todayLeaveSet(){ const t=todayStr(); return new Set(DB.records.filter(r=>r.type==="leave"&&r.date===t&&!(r.detail&&r.detail.returned)).map(r=>r.studentId)); }
/* 考勤状态：长期未到校 > 今日请假 > 正常到校 */
function attendStatus(s){
  if(s&&s.longAbsent) return "长期未到校";
  if(s&&todayLeaveSet().has(s.id)) return "请假";
  return "正常到校";
}
function attendGroup(s){ const st=attendStatus(s); return st==="请假"?0:st==="长期未到校"?1:2; }
/* 首页“学生考勤”模块 */
function attendanceModule(){
  const total=DB.students.length;
  const leave=todayLeaveSet().size;
  const arrived=total-leave;
  return '<div class="mini-card attend-mini">'
    +'<div class="mini-head"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="12" cy="12" r="6" fill="#FFFFFF"/><path d="M12 8.5 V12 L14.5 13.5" fill="none" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg> 考勤</div>'
    +'<div class="attend-row"><span>应到</span><b>'+total+'</b></div>'
    +'<div class="attend-row"><span>实到</span><b>'+arrived+'</b></div>'
    +'<div class="attend-row alert"><span>请假</span><b>'+leave+'</b></div>'
    +'</div>';
}
/* 周报/月报 */
let reportRange="week";
function fmtDate(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function reportStart(range){
  if(range==="week"){ const d=new Date(); const day=(d.getDay()+6)%7; d.setDate(d.getDate()-day); return fmtDate(d); }
  const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-01";
}
function computeReport(range){
  const start=reportStart(range), t=todayStr();
  const recs=DB.records.filter(r=>r.date>=start&&r.date<=t);
  const good=recs.filter(r=>r.type==="good");
  const viol=recs.filter(r=>r.type==="violation");
  const cnt={}; good.forEach(r=>cnt[r.studentId]=(cnt[r.studentId]||0)+1);
  let top=null; Object.keys(cnt).forEach(id=>{ if(!top||cnt[id]>cnt[top]) top=id; });
  const topName=top?((getStudent(top)||{}).name||"某同学"):"";
  return {good:good.length, viol:viol.length, topName:topName, topCount:top?cnt[top]:0};
}
function reportBodyHtml(){
  const cls=DB.className||"本班", r=computeReport(reportRange);
  const theme=reportRange==="week"?(DB.weeklyTheme||""):(DB.monthlyTheme||"");
  const rname=reportRange==="week"?"本周":"本月";
  let h='<div class="report-line"><b>'+rname+esc(cls)+'主题班会主题为：</b>'+(theme?esc(theme):'<span class="muted">（点<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg>填写）</span>')+'</div>';
  if(r.good>0) h+='<div class="report-line">'+rname+esc(cls)+'的小可爱们做好事 <b>'+r.good+'</b> 件<br>其中 '+esc(r.topName)+' 做的好事最多！</div>';
  if(r.viol>0) h+='<div class="report-line">'+rname+esc(cls)+'的小调皮们违纪行为 <b>'+r.viol+'</b> 件<br>知错能改善莫大焉！</div>';
  if(r.good===0&&r.viol===0&&!theme) h+='<div class="report-line muted">'+rname+'还没有记录哦，去记一记吧~</div>';
  return h;
}
function reportSection(){
  return '<div class="section-title"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 7 H15 V10 Q15 13 12 13 Q9 13 9 10 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9 8 H6.5 Q6.5 11 9 11 M15 8 H17.5 Q17.5 11 15 11" fill="none" stroke="#8A9E68" stroke-width="1.4"/><path d="M12 13 V16 H10 V17 H14 V16 H12 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.3" stroke-linejoin="round"/></svg> 周报 / 月报</div>'
    +'<div class="card report-card">'
    +'<div class="report-bar">'
    +'<button class="btn small ghost'+(reportRange==="week"?" on":"")+'" onclick="switchReport(\'week\')">📅 周报</button>'
    +'<button class="btn small ghost'+(reportRange==="month"?" on":"")+'" onclick="switchReport(\'month\')">📆 月报</button>'
    +'<button class="btn small ghost" style="margin-left:auto" onclick="setReportTheme()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg> 设主题</button>'
    +'<button class="btn small ghost" onclick="setClassName()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg> 班名</button>'
    +'</div>'
    +'<div id="reportBody">'+reportBodyHtml()+'</div>'
    +'</div>';
}
function switchReport(range){ reportRange=range; const b=document.getElementById("reportBody"); if(b) b.innerHTML=reportBodyHtml(); else renderHome(); }
function setReportTheme(){ const cur=reportRange==="week"?(DB.weeklyTheme||""):(DB.monthlyTheme||""); const v=window.prompt(reportRange==="week"?"本周班会主题：":"本月班会主题：", cur); if(v!==null){ if(reportRange==="week") DB.weeklyTheme=v.trim(); else DB.monthlyTheme=v.trim(); save(); switchReport(reportRange); } }
function setClassName(){ const v=window.prompt("班级名称（用于周报/月报，如：七(1)班）：", DB.className||""); if(v!==null){ DB.className=v.trim()||"本班"; save(); renderHome(); } }
function recordBadge(r){
  if(r.type==="leave") return r.detail.returned?'<span class="badge green">已销假</span>':'<span class="badge red">未销假</span>';
  if(r.type==="violation") return r.detail.status==="已处理"?'<span class="badge green">已处理</span>':'<span class="badge red">待处理</span>';
  return "";
}
function recordDesc(r){
  if(r.type==="talk") return "原因："+(r.detail.reason||"")+"　内容："+(r.detail.content||"");
  if(r.type==="violation") return (r.detail.desc?("说明："+r.detail.desc):"");
  if(r.type==="good") return "内容："+(r.detail.desc||"");
  if(r.type==="contact") return "方式："+(r.detail.channel||"")+"　内容："+(r.detail.content||"");
  if(r.type==="leave") return "类型："+(r.detail.subtype||"")+"　时长："+(r.detail.days||1)+"天"+(r.detail.why?"　事由："+r.detail.why:"");
  if(r.type==="score") return "考试："+(r.detail.exam||"")+"　科目："+(r.detail.subject||"")+(r.detail.absent?"　【缺考】":"　得分："+(r.detail.score||"-")+"/"+fullScoreOf(r.detail.subject));
  return "";
}

/* 生成"近期动态"和"成绩趋势"摘要 */
function summarizeRecent(student){
  const recs=getRecords(student.id).filter(r=>daysBetween(r.date)<=30&&r.date<=todayStr());
  if(!recs.length) return "近30天没有新增记录";
  const count={}; recs.forEach(r=>{ const k=recTypeName(r.type); count[k]=(count[k]||0)+1; });
  const parts=Object.keys(count).map(k=>count[k]+"次"+k);
  return "近30天有"+recs.length+"条记录（"+parts.join("、")+"）";
}
function scoreTrend(student){
  const recs=getRecords(student.id).filter(r=>r.type==="score");
  if(!recs.length) return "暂无成绩记录，建议尽快录入最近一次考试成绩";
  const byExam={}; recs.forEach(r=>{ const k=r.detail.exam; if(!byExam[k])byExam[k]=[]; byExam[k].push(r.detail); });
  const exams=Object.keys(byExam).sort();
  const last=exams[exams.length-1];
  const diff=[];
  if(exams.length>=2){
    const prev=exams[exams.length-2];
    byExam[last].forEach(cur=>{
      const old=byExam[prev].find(p=>p.subject===cur.subject);
      if(old){ const d=cur.score-old.score; if(d!==0) diff.push(cur.subject+(d>0?"进步":"退步")+Math.abs(d)+"分"); }
    });
  }
  const lastStr=byExam[last].map(x=>x.subject+x.score+"分").join("、");
  let s="最近一次考试（"+last+"）："+lastStr;
  if(diff.length) s+="；与上次相比："+diff.join("，");
  return s;
}
function tagsDesc(student){
  if(!student.tags||!student.tags.length) return "暂未标注特点";
  return student.tags.join("、");
}

/* ========== 通用渲染 ========== */
const main=document.getElementById("main");
const brand=document.getElementById("brand");
const backBtn=document.getElementById("backBtn");
const todayEl=document.getElementById("today");
todayEl.textContent=todayStr();

let currentView="home";
let navStack=[];

function switchView(v){
  currentView=v;
  backBtn.style.display="none";
  brand.textContent="班主任工作台";
  document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.view===v));
  if(v==="home") renderHome();
  else if(v==="students") renderStudents();
  else if(v==="records") renderRecords();
  else if(v==="dorms") renderDorms();
  else if(v==="tickets") renderTickets();
  else if(v==="templates") renderTemplates();
  else if(v==="mine") renderMine();
  window.scrollTo(0,0);
}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));
backBtn.addEventListener("click",()=>{ if(navStack.length){ navStack.pop(); const last=navStack[navStack.length-1]; if(last) renderDetail(last); else switchView("students"); } });

function toast(msg){ const t=document.getElementById("toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove("show"),1800); }

function showModal(html){
  const root=document.getElementById("modal-root");
  root.innerHTML='<div class="plan-modal"><div class="sheet">'+html+'</div></div>';
  root.querySelector(".plan-modal").addEventListener("click",e=>{ if(e.target.classList.contains("plan-modal")) root.innerHTML=""; });
}
function closeModal(){ document.getElementById("modal-root").innerHTML=""; }

/* ========== 一句话速记（首页） ========== */
function quickNoteSection(){
  return '<div class="card quicknote-card qn-compact">'
    +'<div class="qn-compact-title"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg> 速记</div>'
    +'<textarea id="qnText" class="qn-input" placeholder="记一句，如：张三帮同学打扫卫生 / 叫王五去校门口拿东西 / 李四 明天 病假 发烧（自动归入待办或登记请假）"></textarea>'
    +'<div style="display:flex;gap:8px;margin-top:8px">'
    +'<button class="btn" style="flex:1;padding:7px 10px;font-size:13px" onclick="runQuickNote()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="10.5" cy="10.5" r="4.5" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M14 14 L18 18" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg> 识别归类</button>'
    +'<button class="btn ghost" style="flex:1;padding:7px 10px;font-size:13px" onclick="openKeywordManager()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="12" cy="12" r="3.6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><g stroke="#8A9E68" stroke-width="1.6" stroke-linecap="round"><path d="M12 4.5 V7 M12 17 V19.5 M4.5 12 H7 M17 12 H19.5 M6.8 6.8 L8.6 8.6 M15.4 15.4 L17.2 17.2 M17.2 6.8 L15.4 8.6 M8.6 15.4 L6.8 17.2"/></g></svg> 词库</button>'
    +'</div>'
    +'<div class="qn-hint" style="margin-top:6px;font-size:11px">按词库自动判断「好事/违纪/请假/待办」，认学生、提事件，确认即存档案。离线可用。</div>'
    +'</div>';
}
/* 把违纪命中词归一到系统违纪类型 */
function normViol(kw){
  const map={"抽烟":"吸烟","打架":"打架斗殴","打架斗殴":"打架斗殴","旷课":"旷课逃课","逃课":"旷课逃课","玩手机":"课堂玩手机","课堂玩手机":"课堂玩手机","迟到":"迟到早退","早退":"迟到早退","顶撞":"顶撞老师","顶嘴":"顶撞老师","辱骂":"辱骂同学","骂人":"辱骂同学","损坏公物":"损坏公物","吸烟":"吸烟","违纪":"其他","违规":"其他","赌博":"其他","喝酒":"其他","夜不归宿":"其他","翻墙":"其他","带手机":"课堂玩手机","不交作业":"其他","谈恋爱":"其他","偷":"其他","撒谎":"其他","顶撞老师":"顶撞老师","辱骂同学":"辱骂同学"};
  const t=map[kw]||kw;
  return VIOLATION_TYPES.indexOf(t)>=0?t:"其他";
}
/* 核心识别：返回 {students:[...], type, hit, desc, result, recipients:[...]}（支持多人） */
function analyzeQuickNote(text){
  text=(text||"").trim();
  if(!text) return {error:"请输入要速记的内容", students:[]};
  const names=DB.students.map(s=>s.name).filter(Boolean).sort((a,b)=>b.length-a.length);
  const present=names.filter(n=>text.indexOf(n)>=0);
  /* 受事标记：标记词之前的是施事（做好事/违纪的人），之后的是受事（受益/受害方，不记） */
  const markers=["帮助","帮","替","代","给"];
  let splitIdx=-1, usedMarker="";
  for(const m of markers){ const i=text.indexOf(m); if(i>=0){ splitIdx=i; usedMarker=m; break; } }
  let doers=[], recipients=[];
  if(splitIdx>=0){
    doers=present.filter(n=>text.indexOf(n)<splitIdx);
    recipients=present.filter(n=>text.indexOf(n)>=splitIdx+usedMarker.length);
  }else{
    doers=present;
  }
  const doerObjs=doers.map(n=>DB.students.find(s=>s.name===n)).filter(Boolean);
  const kw=DB.keywords||{good:[...DEFAULT_KEYWORDS.good], violation:[...DEFAULT_KEYWORDS.violation], todo:[...DEFAULT_KEYWORDS.todo]};
  let hitGood=null, hitViol=null;
  for(const k of kw.good){ if(text.indexOf(k)>=0){ hitGood=k; break; } }
  for(const k of kw.violation){ if(text.indexOf(k)>=0){ hitViol=k; break; } }
  /* 待办指令识别：含待办关键词 或 动词(叫/让/通知…)+学生+办事动作，且能识别学生、未命中违纪词 */
  let todoHit=false;
  if(!hitViol && doerObjs.length){
    const hitTodoWord=kw.todo.some(w=>text.indexOf(w)>=0);
    const todoVerbs=["叫","让","通知","提醒","安排","派","要"];
    const verbIdx=todoVerbs.map(v=>text.indexOf(v)).filter(i=>i>=0).sort((a,b)=>a-b)[0];
    let verbTodo=false;
    if(verbIdx>=0){
      const tail=text.slice(verbIdx);
      const actionWords=["去","到","给","打","拿","取","领","找","做","交","送","带","回","买","填","签","等","下课后","放学","课间","课后","今天","明天"];
      if(actionWords.some(w=>tail.indexOf(w)>=0)) verbTodo=true;
    }
    if(hitTodoWord || verbTodo) todoHit=true;
  }
  /* 请假意图识别：含请假相关词且认出学生 */
  let leaveHit=false, leaveInfo=null;
  if(doerObjs.length){
    const LEAVE_WORDS=["请假","假条","病假","事假","发烧","发热","感冒","看病","就医","去医务室","家长接","接回","准假","续假","不舒服","生病","身体难受"];
    if(LEAVE_WORDS.some(w=>text.indexOf(w)>=0)) leaveHit=true;
  }
  if(leaveHit){
    let subtype="事假";
    if(/病|发烧|发热|感冒|看病|就医|医务室|不舒服|生病|难受|头晕|肚子疼|咳嗽/.test(text)) subtype="病假";
    let days=1;
    const dm=text.match(/(\d+(?:\.\d+)?)\s*天/);
    if(dm){ days=Math.max(1,Math.round(parseFloat(dm[1]))); }
    else {
      const cnMap={半:0.5,一:1,壹:1,二:2,两:2,贰:2,三:3,叁:3,四:4,肆:4,五:5,伍:5,六:6,陆:6,七:7,柒:7,八:8,捌:8,九:9,玖:9,十:10,拾:10};
      const cm=text.match(/(半|[零〇一二两三四五六七八九十壹贰叁肆伍陆柒捌玖拾]+)\s*天/);
      if(cm&&cnMap[cm[1]]!==undefined) days=Math.max(0.5, cnMap[cm[1]]);
    }
    let date=todayStr();
    if(/明[日天]/.test(text)){ const d=new Date(); d.setDate(d.getDate()+1); date=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
    else { const m=text.match(/(20\d{2}[-\/]\d{1,2}[-\/]\d{1,2})|(\d{1,2}[-\/]\d{1,2})/); if(m){ let ds=m[0].replace(/\//g,"-"); if(ds.indexOf("-")===ds.lastIndexOf("-")){ const p=ds.split("-"); ds=new Date().getFullYear()+"-"+String(p[0]).padStart(2,"0")+"-"+String(p[1]).padStart(2,"0"); } date=ds; } }
    let why="";
    if(subtype==="病假"){ const bw=text.match(/(发烧|发热|感冒|生病|不舒服|难受|头晕|肚子疼|咳嗽|身体)/); why=bw?("身体不适（"+bw[1]+"）"):"身体不适"; }
    else if(/家|回|接/.test(text)) why="家中有事";
    leaveInfo={subtype:subtype, days:days, why:why, date:date};
  }
  let type=null, hit=null;
  if(hitViol && !hitGood){ type="violation"; hit=hitViol; }
  else if(hitGood && !hitViol){ type="good"; hit=hitGood; }
  else if(hitGood && hitViol){ if(text.indexOf(hitViol)<text.indexOf(hitGood)){ type="violation"; hit=hitViol; } else { type="good"; hit=hitGood; } }
  else if(leaveHit){ type="leave"; }
  else if(todoHit){ type="todo"; }
  let result="";
  const rm=text.match(/(处罚|处理|处分|结果|措施|决定|责令|要求|罚)[是为是：:：]?([^。；;，,]+)/);
  if(rm) result=rm[2].trim();
  let desc=text;
  doerObjs.forEach(s=> desc=desc.split(s.name).join(""));
  if(rm) desc=desc.split(rm[0]).join("");
  desc=desc.replace(/[和与他跟同、,，]+/g,"").replace(/^[\s，,。；;：:]+/,"").replace(/[\s，,。；;：:]+$/,"").trim();
  return {students:doerObjs, type:type, hit:hit, desc:desc, result:result, recipients:recipients, raw:text, leave:leaveInfo};
}
function runQuickNote(){
  const ta=document.getElementById("qnText");
  if(!ta){ return; }
  const a=analyzeQuickNote(ta.value);
  if(a.error && !a.type){
    showModal(qnConfirmHtml(a));
    toast(a.error);
    return;
  }
  showModal(qnConfirmHtml(a));
}
let qnDoersState=[];
function renderQnDoers(){
  return qnDoersState.map(id=>{ const s=getStudent(id); if(!s) return ""; return '<span class="doer-chip" onclick="removeQnDoer(\''+id+'\')">'+esc(s.name)+' <span style="opacity:.55"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></span></span>'; }).join("") || '<span class="muted">（还没选学生，点下方添加）</span>';
}
function addQnDoer(){ const sel=document.getElementById("qnAddDoer"); if(!sel) return; const id=sel.value; if(id&&!qnDoersState.includes(id)){ qnDoersState.push(id); const box=document.getElementById("qnDoers"); if(box) box.innerHTML=renderQnDoers(); sel.value=""; } }
function removeQnDoer(id){ qnDoersState=qnDoersState.filter(x=>x!==id); const box=document.getElementById("qnDoers"); if(box) box.innerHTML=renderQnDoers(); }
function qnConfirmHtml(a){
  window._qnRaw=a.raw||"";
  qnDoersState=(a.students||[]).map(s=>s.id);
  const typeSel='<select id="qnType" onchange="qnTypeToggle()">'
    +'<option value="good"'+(a.type==="good"?" selected":"")+'>好事记录</option>'
    +'<option value="violation"'+(a.type==="violation"?" selected":"")+'>违纪记录</option>'
    +'<option value="leave"'+(a.type==="leave"?" selected":"")+'>请假登记</option>'
    +'<option value="todo"'+(a.type==="todo"?" selected":"")+'>待办事项</option>'
    +'</select>';
  const isV=a.type==="violation";
  const isT=a.type==="todo";
  const vBlock=isV
    ? '<div id="qnVBlock">'
      +'<div class="form-row"><label>违纪类型</label><select id="qnSub">'+VIOLATION_TYPES.map(x=>'<option'+(normViol(a.hit||"")===x?" selected":"")+'>'+x+'</option>').join("")+'</select></div>'
      +'<div class="form-row"><label>严重程度</label><select id="qnLevel"><option selected>一般</option><option>严重</option></select></div>'
      +'<div class="form-row"><label>处理结果（选填，多人时共用）</label><input id="qnResult" value="'+esc(a.result||"")+'" placeholder="如：停宿一周、写检讨、通报批评"></div>'
    +'</div>'
    : '<div id="qnVBlock" style="display:none"></div>';
  const tBlock=isT
    ? '<div id="qnTBlock"><div class="qn-hint" style="margin:2px 0 8px"><svg viewBox="0 0 24 24" class="ic"><rect x="5" y="4" width="14" height="14" rx="3" fill="#E4D58C" stroke="#C9B86A" stroke-width="1.5"/><path d="M8 9 H16 M8 12 H16 M8 15 H13" stroke="#8A7B3A" stroke-width="1.5" stroke-linecap="round"/><circle cx="15.5" cy="6.5" r="1.8" fill="#935855"/></svg> 将把下面内容作为<b>待办事项</b>加入首页待办列表（不生成档案记录）。每个学生会各加一条。</div></div>'
    : '<div id="qnTBlock" style="display:none"></div>';
  const isL=a.type==="leave";
  const lBlock=isL
    ? '<div id="qnLBlock"><div class="qn-hint" style="margin:2px 0 8px"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg> 将登记为 <b>请假记录</b>（写入个人档案出勤），并自动在待办事项中加入「该生 请假」提醒。</div>'
      +'<div class="form-row"><label>请假类型</label><select id="qnLSub">'+LEAVE_TYPES.map(x=>'<option'+(a.leave&&a.leave.subtype===x?" selected":"")+'>'+x+'</option>').join("")+'</select></div>'
      +'<div class="form-row"><label>请假时长（天）</label><input id="qnLDays" type="number" min="1" value="'+((a.leave&&a.leave.days)||1)+'"></div>'
      +'<div class="form-row"><label>请假事由</label><textarea id="qnLWhy" placeholder="如：感冒发烧，家长代请">'+esc((a.leave&&a.leave.why)||"")+'</textarea></div></div>'
    : '<div id="qnLBlock" style="display:none"></div>';
  const addOpts=sortedStudents().filter(s=>!qnDoersState.includes(s.id)).map(s=>'<option value="'+s.id+'">'+esc(s.name)+'</option>').join("");
  return '<div class="sheet-head"><h3>确认速记</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>记录类型</label>'+typeSel+'</div>'
    +'<div class="form-row"><label>涉及学生（点击名字可去掉，下方可添加；多人会各记一条）</label>'
    +'<div id="qnDoers" class="doer-box">'+renderQnDoers()+'</div>'
    +'<div style="display:flex;gap:8px;margin-top:6px"><select id="qnAddDoer" style="flex:1;padding:7px 10px;border:1px solid #E2E8D8;border-radius:10px;font-size:13px;background:#fff;font-family:inherit;color:#2E3A33"><option value="">+ 添加学生…</option>'+addOpts+'</select><button class="btn ghost" onclick="addQnDoer()">添加</button></div>'
    +'</div>'
    +'<div class="form-row"><label>内容摘要</label><textarea id="qnDesc" style="min-height:70px">'+esc(a.desc||"")+'</textarea></div>'
    + vBlock
    + tBlock
    + lBlock
    +'<div class="form-row"><label>请假/记录日期</label><input id="qnDate" type="date" value="'+((a.type==="leave"&&a.leave)?a.leave.date:todayStr())+'"></div>'
    +'<button class="btn" onclick="confirmQuickNote()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#BACFA8" stroke="#4E7C5E" stroke-width="1.6"/><path d="M8 12 L11 15 L16 9" fill="none" stroke="#4E7C5E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> 确认存入档案</button>'
    +'<div class="qn-hint" style="margin-top:8px">识别结果仅供参照，可自由修改后再保存。</div>';
}
function qnTypeToggle(){
  const v=document.getElementById("qnVBlock");
  if(v) v.style.display=document.getElementById("qnType").value==="violation"?"block":"none";
  const t=document.getElementById("qnTBlock");
  if(t) t.style.display=document.getElementById("qnType").value==="todo"?"block":"none";
  const l=document.getElementById("qnLBlock");
  if(l) l.style.display=document.getElementById("qnType").value==="leave"?"block":"none";
}
function confirmQuickNote(){
  if(!qnDoersState.length){ toast("请至少选择一名学生"); return; }
  const type=document.getElementById("qnType").value;
  const desc=(document.getElementById("qnDesc").value||"").trim();
  const date=document.getElementById("qnDate").value||todayStr();
  const resultEl=document.getElementById("qnResult");
  const result=resultEl?resultEl.value.trim():"";
  let saved=0;
  if(type==="todo"){
    /* 待办事项：仅加入首页待办列表，不生成档案记录 */
    const raw=(window._qnRaw||"").trim();
    qnDoersState.forEach(sid=>{
      const stu=getStudent(sid); if(!stu) return;
      const text=(qnDoersState.length>1?stu.name+"：":"")+ (raw||desc||"（待办）");
      DB.todos.push({id:uid(), text:text, done:false, createdAt:todayStr(), studentId:sid});
      saved++;
    });
    save(); closeModal();
    toast("已加入待办事项 "+saved+" 条 📌");
    renderHome();
    return;
  }
  if(type==="leave"){
    /* 请假登记：写入学生档案出勤，并自动在待办加一条“该生 请假”提醒 */
    const sub=document.getElementById("qnLSub").value;
    const days=parseFloat(document.getElementById("qnLDays").value)||1;
    const why=(document.getElementById("qnLWhy").value||"").trim();
    const leaveDate=document.getElementById("qnDate").value||todayStr();
    qnDoersState.forEach(sid=>{
      const stu=getStudent(sid); if(!stu) return;
      const rec={id:uid(), studentId:sid, type:"leave", date:leaveDate, detail:{subtype:sub, days:days, why:why, returned:false}};
      rec.detail.todoId=uid();
      DB.todos.push({id:rec.detail.todoId, text:stu.name+" 请假（"+sub+"·"+days+"天）— 待回校销假", done:false, createdAt:todayStr(), type:"leave", studentId:sid});
      DB.records.push(rec); saved++;
    });
    save(); closeModal();
    toast("已登记请假 "+saved+" 人，并在待办加入提醒");
    renderHome();
    return;
  }
  qnDoersState.forEach(sid=>{
    const stu=getStudent(sid); if(!stu) return;
    let d=desc; if(result&&type==="violation") d+=(d?"；":"")+"处理结果："+result;
    const rec={id:uid(), studentId:sid, type:type, date:date, detail:{}};
    if(type==="violation"){
      const sub=document.getElementById("qnSub").value;
      const level=document.getElementById("qnLevel").value;
      rec.detail={subtype:sub, level:level, desc:d, status:"待处理", files:[]};
      rec.detail.todoId=uid();
      DB.todos.push({id:rec.detail.todoId, text:"处理违纪："+stu.name+"·"+sub, done:false, createdAt:todayStr()});
    }else{
      rec.detail={content:d, files:[]};
    }
    DB.records.push(rec); saved++;
  });
  save(); closeModal();
  toast((type==="good"?"好事":"违纪")+"已为 "+saved+" 人记下");
  renderHome();
}
/* 管理词库 */
function openKeywordManager(){
  const kw=DB.keywords||{good:[...DEFAULT_KEYWORDS.good], violation:[...DEFAULT_KEYWORDS.violation], todo:[...DEFAULT_KEYWORDS.todo]};
  showModal('<div class="sheet-head"><h3>管理速记词库</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="qn-hint">每行一个词。命中「好事词」记为好事，命中「违纪词」记为违纪，命中「待办词」归入待办事项。改完点保存立即生效。</div>'
    +'<div class="form-row"><label><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#BACFA8" stroke="#4E7C5E" stroke-width="1.6"/><path d="M8 12 L11 15 L16 9" fill="none" stroke="#4E7C5E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> 好事关键词</label><textarea id="kwGood" style="min-height:96px">'+esc(kw.good.join("\n"))+'</textarea></div>'
    +'<div class="form-row"><label><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#EAACA9" stroke="#8E3B34" stroke-width="1.6"/><path d="M12 7 V13" stroke="#8E3B34" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="16" r="1.4" fill="#8E3B34"/></svg> 违纪关键词</label><textarea id="kwViol" style="min-height:96px">'+esc(kw.violation.join("\n"))+'</textarea></div>'
    +'<div class="form-row"><label><svg viewBox="0 0 24 24" class="ic"><rect x="5" y="4" width="14" height="14" rx="3" fill="#E4D58C" stroke="#C9B86A" stroke-width="1.5"/><path d="M8 9 H16 M8 12 H16 M8 15 H13" stroke="#8A7B3A" stroke-width="1.5" stroke-linecap="round"/><circle cx="15.5" cy="6.5" r="1.8" fill="#935855"/></svg> 待办关键词（含这些词且认出学生，自动归入待办）</label><textarea id="kwTodo" style="min-height:80px">'+esc(kw.todo.join("\n"))+'</textarea></div>'
    +'<div style="display:flex;gap:8px;margin-top:6px">'
    +'<button class="btn" style="flex:1" onclick="saveKeywords()">保存词库</button>'
    +'<button class="btn ghost" style="flex:1" onclick="resetKeywords()">恢复默认</button>'
    +'</div>');
}
function saveKeywords(){
  const g=(document.getElementById("kwGood").value||"").split("\n").map(x=>x.trim()).filter(Boolean);
  const v=(document.getElementById("kwViol").value||"").split("\n").map(x=>x.trim()).filter(Boolean);
  const t=(document.getElementById("kwTodo").value||"").split("\n").map(x=>x.trim()).filter(Boolean);
  DB.keywords={good:g, violation:v, todo:t};
  save(); closeModal(); toast("词库已更新");
}
function resetKeywords(){
  DB.keywords={good:[...DEFAULT_KEYWORDS.good], violation:[...DEFAULT_KEYWORDS.violation], todo:[...DEFAULT_KEYWORDS.todo]};
  save(); closeModal(); toast("已恢复默认词库");
}

/* ========== 首页 ========== */
function renderHome(){
  let html='<div class="home-split">'
    +'<div class="home-col home-left">'+quickNoteSection()+attendanceModule()+'</div>'
    +'<div class="home-col home-right" id="homeRight">'+todoSection()+'</div>'
    +'</div>'
    +warnSection()
    +bedcheckSection()
    +reportSection()
    +'<div class="copyright-note">'+COPYRIGHT_NOTE+'</div>';
  main.innerHTML=html;
  /* 待办右列高度对齐左列；已处理展开过长时内部滚动，避免超出左侧总长 */
  const left=main.querySelector(".home-left");
  const right=document.getElementById("homeRight");
  if(left&&right){ right.style.maxHeight=left.offsetHeight+"px"; right.style.overflowY="auto"; }
}
function recItem(r){
  const st=getStudent(r.studentId);
  const name=st?esc(st.name):"未知学生";
  const sub=r.type==="score"?esc((r.detail.exam||"")+"·"+(r.detail.subject||"")):recTypeName(r.type);
  return '<div class="rec"><div class="rec-dot dot-'+r.type+'"></div><div class="rec-main">'
    +'<div class="rec-top"><span class="rec-type">'+name+' · '+esc(sub)+'</span><span class="rec-date">'+esc(r.date)+'</span></div>'
    +'<div class="rec-desc">'+esc(recordDesc(r).substring(0,60))+'</div>'
    +'<div class="rec-badges">'+recordBadge(r)+'</div>'
    +filesHtml(r.detail.files)
    +'</div></div>';
}

/* ========== 学生管理 ========== */
let studentQuery="", studentSort="pinyin";
/* 排序：pinyin=按姓名拼音首字母，stuNo=按学号，attend=按考勤状态 */
function sortStudents(list, mode){
  const arr=list.slice();
  if(mode==="stuNo"){
    arr.sort((a,b)=>{
      const na=parseInt(a.stuNo,10), nb=parseInt(b.stuNo,10);
      if(!isNaN(na)&&!isNaN(nb)&&na!==nb) return na-nb;
      if(!isNaN(na)&&isNaN(nb)) return -1;
      if(isNaN(na)&&!isNaN(nb)) return 1;
      return sortKey(a.name).localeCompare(sortKey(b.name),"zh-Hans-CN");
    });
  }else if(mode==="attend"){
    arr.sort((a,b)=>{
      const ga=attendGroup(a), gb=attendGroup(b);
      if(ga!==gb) return ga-gb;
      return sortKey(a.name).localeCompare(sortKey(b.name),"zh-Hans-CN");
    });
  }else{
    arr.sort((a,b)=>sortKey(a.name).localeCompare(sortKey(b.name),"zh-Hans-CN"));
  }
  return arr;
}
/* 学生下拉：按姓名拼音排序（修复记录中选择学生乱序） */
function sortedStudents(){
  return DB.students.slice().sort((a,b)=>sortKey(a.name).localeCompare(sortKey(b.name),"zh-Hans-CN"));
}
function studentOptionsHtml(preStu){
  return sortedStudents().map(s=>'<option value="'+s.id+'"'+(s.id===preStu?" selected":"")+'>'+esc(s.name)+'</option>').join("");
}
function renderStudents(){
  const kw=studentQuery.trim();
  const filtered=DB.students.filter(s=>!kw||s.name.includes(kw));
  const list=sortStudents(filtered, studentSort);
  let html='<div class="search-wrap"><input id="stuSearch" placeholder="搜学生名字…" value="'+esc(studentQuery)+'"></div>';
  html+='<div style="display:flex;gap:8px">'
    +'<button class="btn" style="flex:1" onclick="addStudentForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg> 添加学生</button>'
    +'<button class="btn ghost" style="flex:1" onclick="importStudentsForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 6 H13 L16 9 V18 H8 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M13 6 V9 H16" fill="none" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M10 11 H14 M10 14 H14" stroke="#8A9E68" stroke-width="1.3" stroke-linecap="round"/></svg> 批量导入</button>'
    +'<button class="btn ghost" style="flex:1" onclick="exportStudentsForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 6 H13 L16 9 V18 H8 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M13 6 V9 H16" fill="none" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M10 11 H14 M10 14 H14" stroke="#8A9E68" stroke-width="1.3" stroke-linecap="round"/></svg> 导出名单</button>'
    +'</div>';
  html+='<div style="display:flex;gap:8px;margin-top:8px;align-items:center">'
    +'<span style="font-size:12px;color:#7A7E6E">排序：</span>'
    +'<select id="stuSort" style="flex:1;padding:7px 10px;border:1px solid #E2E8D8;border-radius:10px;font-size:13px;background:#fff;font-family:inherit;color:#2E3A33" onchange="studentSort=this.value;renderStudents()">'
    +'<option value="pinyin"'+(studentSort==="pinyin"?" selected":"")+'>按姓名拼音</option>'
    +'<option value="stuNo"'+(studentSort==="stuNo"?" selected":"")+'>按学号</option>'
    +'<option value="attend"'+(studentSort==="attend"?" selected":"")+'>按考勤（请假/长期未到/正常）</option>'
    +'</select></div>';
  html+='<div class="section-title">全班学生（'+DB.students.length+'人）</div>';
  if(!list.length){ html+='<div class="card"><div class="empty">'+(DB.students.length?'没有找到匹配的学生':'还没有学生，点"添加学生"或"批量导入(Excel)"建立花名册')+'</div></div>'; }
  else{
    html+=list.map(s=>{
      const recs=getRecords(s.id);
      const last=recs[0];
      const meta=last?(recTypeName(last.type)+" · "+last.date):"暂无记录";
      const dormTag=s.dorm?('<span class="tag tag-dorm">'+esc(s.dorm)+'</span>'):"";
      const ast=attendStatus(s);
      const astTag='<span class="tag '+(ast==="请假"?"tag-leave":ast==="长期未到校"?"tag-long":"tag-ok")+'">'+esc(ast)+'</span>';
      return '<div class="student-item" onclick="openStudent(\''+s.id+'\')">'
        +'<div class="avatar">'+esc(s.name.charAt(0))+'</div>'
        +'<div class="st-info"><div class="st-name">'+esc(s.name)+' '+(s.gender?('<span style="font-size:12px;color:#7A7E6E">'+esc(s.gender)+'</span>'):"")+(s.stuNo?'<span class="stu-no">'+esc(s.stuNo)+'</span>':"")+'</div>'
        +'<div class="st-meta">'+esc(meta)+'</div>'
        +'<div>'+dormTag+astTag+(s.tags||[]).slice(0,3).map(t=>'<span class="tag">'+esc(t)+'</span>').join("")+'</div>'
        +'</div></div>';
    }).join("");
  }
  main.innerHTML=html;
  const inp=document.getElementById("stuSearch");
  if(inp) inp.addEventListener("input",e=>{ studentQuery=e.target.value; renderStudents(); });
}
function addStudentForm(){ editStudentForm(null); }
function editStudentForm(stuId){
  const s=stuId?getStudent(stuId):null;
  window._editStuId=stuId||null;
  const selected=(v,opt)=>(v===opt?" selected":"");
  const contactRows=(s&&s.contacts&&s.contacts.length)?s.contacts.map(c=>contactRowHtml(c)).join(""):contactRowHtml();
  const tagHtml=STUDENT_TAGS.map(t=>'<span class="tag pick'+(s&&s.tags&&s.tags.includes(t)?" on":"")+'" data-t="'+t+'" onclick="pickTag(this)">'+t+'</span>').join("");
  showModal('<div class="sheet-head"><h3>'+(stuId?"编辑学生信息":"添加学生")+'</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>姓名（必填）</label><input id="sName" value="'+esc(s?s.name:"")+'" placeholder="例如：张三"></div>'
    +'<div class="form-row"><label>学号（选填，用于按学号排序）</label><input id="sStuNo" value="'+esc(s?s.stuNo||"":"")+'" placeholder="如：01 或 2026080101"></div>'
    +'<div class="form-row"><label>班级（选填）</label><input id="sClass" value="'+esc(s?s.klass||"":"")+'" placeholder="如：八年级3班"></div>'
    +'<div class="form-row"><label>性别</label><select id="sGender"><option value="">选性别</option><option'+selected(s?s.gender:"","男")+'>男</option><option'+selected(s?s.gender:"","女")+'>女</option></select></div>'
    +'<div class="form-row"><label>住宿情况</label><select id="sDorm"><option value="">未填</option><option'+selected(s?s.dorm:"","内宿")+'>内宿</option><option'+selected(s?s.dorm:"","走读")+'>走读</option><option'+selected(s?s.dorm:"","临时走读")+'>临时走读</option></select></div>'
    +'<div class="form-row"><label style="display:flex;align-items:center;gap:6px"><input id="sLongAbsent" type="checkbox" style="width:18px;height:18px"'+(s&&s.longAbsent?" checked":"")+'> 长期未到校（勾选后考勤显示【长期未到校】）</label></div>'
    +'<div class="form-row"><label>宿舍号（内宿生填，如 301）</label><input id="sDormRoom" value="'+esc(s?s.dormRoom||"":"")+'" placeholder="如：301"></div>'
    +'<div class="form-row"><label>身份证号（选填）</label><input id="sIdCard" value="'+esc(s?s.idCard||"":"")+'" placeholder="18位身份证号"></div>'
    +'<div class="form-row"><label>联系人（关系+姓名+电话，可加多条）</label><div id="contactBox">'+contactRows+'</div><button class="link-btn" onclick="addContactRow()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg> 添加联系人</button></div>'
    +'<div class="form-row"><label>常住地址（选填）</label><input id="sAddr" value="'+esc(s?s.address||"":"")+'" placeholder="乡镇村组/街道门牌"></div>'
    +'<div class="form-row"><label>户籍地（选填）</label><input id="sHukou" value="'+esc(s?s.hukou||"":"")+'" placeholder="如：xx县xx镇xx村"></div>'
    +'<div class="form-row"><label>特点标签（可多选，帮助生成方案）</label><div id="tagBox">'+tagHtml+'</div></div>'
    +'<div class="form-row"><label>注意事项/备注（家庭情况、特殊情况等）</label><textarea id="sNote" placeholder="例如：父母在东莞打工，跟奶奶住；有哮喘病史">'+esc(s?s.note||"":"")+'</textarea></div>'
    +'<button class="btn" onclick="saveStudent()">保存</button>'
    +'<p style="font-size:11px;color:#9AA092;margin-top:8px">身份证等个人信息只存你自己的云存储，注意保密，别把链接和账号给别人。</p>');
}
function contactRowHtml(c){
  c=c||{rel:"",name:"",phone:""};
  return '<div class="contact-row"><select>'+RELATIONS.map(r=>'<option'+(r===c.rel?" selected":"")+'>'+r+'</option>').join("")+'</select>'
    +'<input class="c-name" placeholder="姓名" value="'+esc(c.name)+'"><input class="c-phone" placeholder="电话" value="'+esc(c.phone)+'">'
    +'<span class="del-contact" onclick="delContact(this)"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></span></div>';
}
function addContactRow(){ const box=document.getElementById("contactBox"); if(box) box.insertAdjacentHTML("beforeend", contactRowHtml()); }
function delContact(el){ const row=el.closest(".contact-row"); const box=document.getElementById("contactBox"); if(box&&box.children.length>1) row.remove(); else toast("至少保留一个联系人"); }
function pickTag(el){ el.classList.toggle("on"); }
function collectContacts(){
  const out=[];
  document.querySelectorAll("#contactBox .contact-row").forEach(row=>{
    const rel=row.querySelector("select").value;
    const name=row.querySelector(".c-name").value.trim();
    const phone=row.querySelector(".c-phone").value.trim();
    if(name||phone) out.push({rel:rel, name:name, phone:phone});
  });
  return out;
}
function saveStudent(){
  const name=document.getElementById("sName").value.trim();
  if(!name){ toast("请填写姓名"); return; }
  const tags=[...document.querySelectorAll("#tagBox .pick.on")].map(x=>x.dataset.t);
  const obj={
    name:name,
    stuNo:document.getElementById("sStuNo").value.trim(),
    klass:document.getElementById("sClass").value.trim(),
    gender:document.getElementById("sGender").value,
    dorm:document.getElementById("sDorm").value,
    dormRoom:document.getElementById("sDormRoom").value.trim(),
    longAbsent:document.getElementById("sLongAbsent").checked,
    idCard:document.getElementById("sIdCard").value.trim(),
    contacts:collectContacts(),
    address:document.getElementById("sAddr").value.trim(),
    hukou:document.getElementById("sHukou").value.trim(),
    tags:tags, note:document.getElementById("sNote").value.trim()
  };
  if(window._editStuId){
    const s=getStudent(window._editStuId);
    if(s){ Object.assign(s,obj); save(); closeModal(); toast("已更新 "+name); renderDetail(window._editStuId); window._editStuId=null; return; }
  }
  DB.students.push(Object.assign({id:uid(), createdAt:todayStr()}, obj));
  save(); closeModal(); toast("已添加 "+name); renderStudents();
}
function delStudent(stuId){
  const s=getStudent(stuId);
  if(!s) return;
  const recCount=getRecords(stuId).length;
  if(confirm("确定删除学生「"+s.name+"」吗？\n该生的 "+recCount+" 条记录也会一并删除，无法恢复！")){
    if(confirm("最后确认：真的要删除「"+s.name+"」吗？")){
      DB.students=DB.students.filter(x=>x.id!==stuId);
      DB.records=DB.records.filter(x=>x.studentId!==stuId);
      save(); toast("已删除 "+s.name);
      navStack=[];
      switchView("students");
    }
  }
}
let importPreview=null;
function importStudentsForm(){
  showModal('<div class="sheet-head"><h3>批量导入学生（Excel）</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>选择学生名单 Excel（.xlsx/.xls）</label><input type="file" id="isFile" class="file-input" accept=".xlsx,.xls"></div>'
    +'<div class="form-row"><div class="upload-note">表格第一行是表头，需包含"姓名"列；其他可含：性别、班级、住宿（内宿/外宿）、身份证号、家庭住址、备注。<br>电话列有三种写法都支持：①一列"联系电话"写"爸爸：张三 123456789，妈妈：李四 987654321"；②多列"爸爸电话""妈妈电话"（列名含关系词自动识别）；③两者混合。<br>★ 导入时若某生的信息与平台已有记录<b>不同</b>（如住址、电话变更），会逐条列出旧值→新值，让你选"用新值"还是"保留旧值"，不会悄悄覆盖；新增的联系人（如妈妈）自动补充。<br>同名/相似名字会先让你确认"合并还是新建"，不产生重复档案。</div></div>'
    +'<button class="btn" onclick="parseStudentsFile()">解析并预览</button>'
    +'<div id="isResult" style="margin-top:10px"></div>'
    +'<p style="font-size:11px;color:#9AA092;margin-top:8px">身份证等个人信息只存你自己的云存储，注意保密。文件在浏览器本地解析，不会上传给我。</p>');
}
const FIELD_LABEL={gender:"性别",klass:"班级",stuNo:"学号",dorm:"住宿",dormRoom:"宿舍号",idCard:"身份证号",address:"家庭住址",note:"注意事项"};
/* 表头列名 → 联系人关系词 */
const REL_ALIAS={"爸爸":"爸爸","父亲":"爸爸","老爸":"爸爸","爸":"爸爸","妈妈":"妈妈","母亲":"妈妈","老妈":"妈妈","妈":"妈妈","爷爷":"爷爷","奶奶":"奶奶","外公":"外公","外婆":"外婆","姥姥":"外婆","姥爷":"外公","姑姑":"姑姑","叔叔":"叔叔","舅舅":"舅舅","阿姨":"阿姨","哥哥":"哥哥","姐姐":"姐姐","弟弟":"弟弟","妹妹":"妹妹","家长":"家长","监护人":"家长"};
function relOfHeader(h){ for(const k in REL_ALIAS){ if(h.includes(k)) return REL_ALIAS[k]; } return ""; }
/* 单元格（可能含多个联系人）+ 列关系词 → 联系人数组 */
function cellContacts(row, phoneCols, cell){
  const out=[];
  phoneCols.forEach(pc=>{
    const v=cell(pc.idx);
    if(!v) return;
    const parsed=parseContacts(v);
    if(parsed.length){
      parsed.forEach(c=>{ out.push({rel:c.rel||pc.rel, name:c.name, phone:c.phone}); });
    }else if(/^[\d\s-]+$/.test(v)){
      out.push({rel:pc.rel, name:"", phone:v.replace(/\s/g,"")});
    }
  });
  return out;
}
/* 对比某生已有信息 vs 新数据：conflicts=冲突项(旧≠新，需用户选)，adds=新增项(直接补) */
let changeSeq=0;
function detectChanges(stu, data){
  const conflicts=[], adds=[];
  ["gender","klass","stuNo","dorm","dormRoom","idCard","address","note"].forEach(k=>{
    const nv=(data[k]||"").trim();
    if(!nv) return;
    const ov=(stu[k]||"").trim();
    if(ov && nv!==ov) conflicts.push({id:++changeSeq, stu:stu, field:k, label:FIELD_LABEL[k]||k, old:ov, next:nv, useNew:true});
  });
  (data.contacts||[]).forEach(nc=>{
    if(!nc.phone) return;
    const oldC=(stu.contacts||[]).find(c=>c.rel===nc.rel);
    if(oldC){
      if(oldC.phone!==nc.phone) conflicts.push({id:++changeSeq, stu:stu, field:"phone:"+nc.rel, label:"联系人·"+nc.rel, old:oldC.phone, next:nc.phone, useNew:true});
    }else{
      adds.push({rel:nc.rel, name:nc.name, phone:nc.phone});
    }
  });
  return {conflicts:conflicts, adds:adds};
}
async function parseStudentsFile(){
  const file=document.getElementById("isFile").files[0];
  if(!file){ toast("请先选择 Excel 文件"); return; }
  try{ await ensureXLSX(); }catch(e){ toast("Excel 组件加载失败，请刷新页面后重试"); return; }
  const reader=new FileReader();
  reader.onload=(e)=>{
    try{
      const wb=XLSX.read(new Uint8Array(e.target.result), {type:"array"});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws, {header:1, defval:""});
      if(!rows.length){ toast("表格是空的"); return; }
      const head=rows[0].map(h=>String(h).trim());
      const findIdx=(re)=>head.findIndex(h=>re.test(h));
      const nameIdx=findIdx(/姓名|名字|学生/);
      if(nameIdx<0){ toast("没找到\"姓名\"列，请确认第一行表头里有姓名列"); return; }
      /* 识别所有电话相关列（多列：爸爸电话/妈妈电话/联系电话…） */
      const phoneCols=[];
      head.forEach((h,i)=>{ if(/电话|手机|联系方式|号码/.test(h)) phoneCols.push({idx:i, rel:relOfHeader(h), header:h}); });
      const hasPhone=phoneCols.length>0;
      const cols={
        gender:findIdx(/性别/),
        klass:findIdx(/班级|班别/),
        stuNo:findIdx(/学号/),
        dorm:findIdx(/住宿|内宿|外宿|走读|临时走读/),
        dormRoom:findIdx(/宿舍/),
        idCard:findIdx(/身份证|证件号|证件号码/),
        addr:findIdx(/住址|地址|家庭地址/),
        note:findIdx(/备注|注意|特殊|情况/)
      };
      if(cols.dormRoom===cols.dorm) cols.dormRoom=-1;
      changeSeq=0;
      const news=[], updates=[], dups=[], changes=[];
      for(let r=1;r<rows.length;r++){
        const rawName=String(rows[r][nameIdx]||"").trim().replace(/\s+/g,"");
        if(!rawName) continue;
        const cell=(i)=>i>=0?String(rows[r][i]||"").trim():"";
        /* 住宿列可能含"内宿 301"或"内宿301"，拆出住宿类型和宿舍号 */
        let dorm=cell(cols.dorm), dormRoom=cell(cols.dormRoom);
        if(/内宿|外宿|走读|临时走读/.test(dorm)){
          const dm=dorm.match(/(内宿|外宿|走读|临时走读)/);
          const rm=dorm.match(/\d{2,3}/);
          dorm=dm?dm[1]:dorm;
          if(rm&&!dormRoom) dormRoom=rm[0];
        }else{
          dorm="";
        }
        if(dormRoom&&!/\d/.test(dormRoom)) dormRoom="";
        const data={
          gender:cell(cols.gender), klass:cell(cols.klass),
          stuNo:cell(cols.stuNo),
          dorm:dorm, dormRoom:dormRoom,
          idCard:cell(cols.idCard),
          contacts:hasPhone?cellContacts(rows[r], phoneCols, cell):[],
          address:cell(cols.addr), note:cell(cols.note)
        };
        const exist=DB.students.find(s=>s.name===rawName);
        if(exist){
          const ch=detectChanges(exist, data);
          updates.push({name:rawName, data:data, target:exist, changes:ch.conflicts, adds:ch.adds});
          changes.push.apply(changes, ch.conflicts);
        }else{
          const cands=DB.students.filter(s=>nameSim(s.name,rawName)>=0.5);
          if(cands.length){
            const target=cands[0];
            const ch=detectChanges(target, data);
            dups.push({name:rawName, data:data, cands:cands, target:target, merge:true, changes:ch.conflicts, adds:ch.adds});
            changes.push.apply(changes, ch.conflicts);
          }
          else{ news.push({name:rawName, data:data}); }
        }
      }
      importPreview={news:news, updates:updates, dups:dups, hasPhone:hasPhone, changes:changes};
      renderImportPreview();
    }catch(err){ toast("解析失败："+err.message); }
  };
  reader.readAsArrayBuffer(file);
}
function renderImportPreview(){
  const p=importPreview;
  if(!p) return;
  const updCount=p.updates.length+p.dups.filter(d=>d.merge).length;
  const changeCount=p.changes.length;
  let html='<div class="card" style="margin-top:10px;background:#F4F6EF">';
  html+='<div class="section-title" style="margin-top:0">导入预览</div>';
  html+='<div class="pv-group pv-up"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#BACFA8" stroke="#4E7C5E" stroke-width="1.6"/><path d="M8 12 L11 15 L16 9" fill="none" stroke="#4E7C5E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> 将更新 '+updCount+' 人'+(changeCount?'（其中 <b>'+changeCount+' 处信息变更</b>需你确认，见下方）：':'：')+'</div>';
  html+='<div class="pv-group pv-new">🆕 将新建 '+p.news.length+' 人'+(p.news.length?'：'+esc(p.news.slice(0,8).map(x=>x.name).join("、"))+(p.news.length>8?" 等"+p.news.length+"人":""):'')+'</div>';
  /* 变更明细（更新的 + 疑似重复合并的） */
  const updList=p.updates.concat(p.dups.filter(d=>d.merge).map(d=>({name:d.name,target:d.target,changes:d.changes,adds:d.adds})));
  updList.forEach(u=>{
    if((u.changes||[]).length===0&&(u.adds||[]).length===0) return;
    html+='<div class="pv-group pv-up" style="margin-top:6px"><b>'+esc(u.name)+'</b>'
      +(u.changes.length?'：'+u.changes.length+'处变更':'')+(u.adds.length?'　<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg>'+u.adds.length+'项新增':'');
    (u.changes||[]).forEach(ch=>{
      html+='<div class="ch-row">'
        +'<span class="ch-label">'+esc(ch.label)+'</span>'
        +'<span class="ch-old">'+esc(ch.old||"(空)")+'</span><span class="ch-arrow">→</span><span class="ch-new">'+esc(ch.next)+'</span>'
        +'<button class="btn small '+(ch.useNew?"":"ghost")+'" onclick="toggleChange('+ch.id+')">'+(ch.useNew?"✓ 用新值":"保留旧值")+'</button>'
        +'</div>';
    });
    (u.adds||[]).forEach(a=>{
      html+='<div class="ch-add"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg> 新增联系人：'+esc((a.rel||a.name||"其他")+" "+(a.name||""))+'　'+esc(a.phone)+'（确认导入后自动补充）</div>';
    });
    html+='</div>';
  });
  if(p.dups.length){
    html+='<div class="pv-group pv-dup"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#EAACA9" stroke="#8E3B34" stroke-width="1.6"/><path d="M12 7 V13" stroke="#8E3B34" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="16" r="1.4" fill="#8E3B34"/></svg> 疑似重复 '+p.dups.length+' 人（名字相似，请确认）<br>';
    p.dups.forEach((d,i)=>{
      const candNames=d.cands.map(c=>c.name).join("、");
      html+='<div class="dup-row"><span>「'+esc(d.name)+'」→ 已有「'+esc(candNames)+'」</span>'
        +'<button class="btn small ghost" onclick="toggleDup('+i+')">'+(d.merge?"合并(推荐)":"改为新建")+'</button></div>';
    });
    html+='</div>';
  }
  html+='<button class="btn" style="margin-top:10px" onclick="confirmImport()">确认导入（'+p.news.length+'新建 / '+updCount+'更新'+(changeCount?' / '+changeCount+'处变更待定':'')+'）</button>';
  html+='</div>';
  document.getElementById("isResult").innerHTML=html;
}
function toggleChange(id){
  const p=importPreview;
  if(!p) return;
  const ch=p.changes.find(x=>x.id===id);
  if(ch){ ch.useNew=!ch.useNew; }
  renderImportPreview();
}
function toggleDup(i){ importPreview.dups[i].merge=!importPreview.dups[i].merge; renderImportPreview(); }
function confirmImport(){
  const p=importPreview;
  if(!p) return;
  let added=0, updated=0, applied=0;
  const applyData=(stu,data)=>{
    ["gender","klass","stuNo","dorm","dormRoom","idCard","address","note"].forEach(k=>{
      const nv=(data[k]||"").trim();
      if(!nv) return;
      const ch=p.changes.find(c=>c.stu===stu&&c.field===k);
      if(ch){
        if(ch.useNew){ stu[k]=nv; applied++; }
      }else if(!(stu[k]||"").trim()){
        /* 无冲突（旧值为空）：直接补全 */
        stu[k]=nv;
      }
      /* 旧值非空且无冲突 = 新旧相同，跳过 */
    });
    /* 联系人：按关系合并，不整体覆盖 */
    (data.contacts||[]).forEach(nc=>{
      if(!nc.phone) return;
      const oldC=(stu.contacts||[]).find(c=>c.rel===nc.rel);
      if(!oldC){
        if(!stu.contacts) stu.contacts=[];
        stu.contacts.push({rel:nc.rel, name:nc.name, phone:nc.phone});
        applied++;
      }else{
        const ch=p.changes.find(c=>c.stu===stu&&c.field==="phone:"+nc.rel);
        if(ch){
          if(ch.useNew){ oldC.phone=nc.phone; if(nc.name) oldC.name=nc.name; applied++; }
        }else if(oldC.phone===nc.phone){
          /* 同号，跳过 */
        }
      }
    });
  };
  p.updates.forEach(u=>{ applyData(u.target,u.data); updated++; });
  p.dups.forEach(d=>{
    if(d.merge&&d.target){ applyData(d.target,d.data); updated++; }
    else{
      const s=d.data;
      DB.students.push({id:uid(), name:d.name, gender:s.gender, klass:s.klass, stuNo:s.stuNo, dorm:s.dorm, dormRoom:s.dormRoom, idCard:s.idCard, contacts:s.contacts, address:s.address, tags:[], note:s.note, createdAt:todayStr()});
      added++;
    }
  });
  p.news.forEach(n=>{
    DB.students.push({id:uid(), name:n.name, gender:n.data.gender, klass:n.data.klass, stuNo:n.data.stuNo, dorm:n.data.dorm, dormRoom:n.data.dormRoom, idCard:n.data.idCard, contacts:n.data.contacts, address:n.data.address, tags:[], note:n.data.note, createdAt:todayStr()});
    added++;
  });
  /* 导入后：自动创建/补全宿舍（内宿+有宿舍号的学生） */
  syncDormsFromStudents();
  save();
  document.getElementById("isResult").innerHTML='<div class="eval-box">导入完成：新建 <b>'+added+'</b> 人，更新 <b>'+updated+'</b> 人'+(applied?'，其中采纳变更 <b>'+applied+'</b> 处':'')+'。去"学生"页查看。</div>';
  toast("导入完成");
  importPreview=null;
}

/* ========== 宿舍管理（内宿生） ========== */
/* 宿舍：{id, gender:'男'|'女', room:'301', note:''}；成员=内宿生且 dormRoom===room 且性别匹配 */
function syncDormsFromStudents(){
  DB.students.forEach(s=>{
    if(s.dorm==="内宿"&&s.dormRoom){
      const room=String(s.dormRoom).trim();
      if(!room) return;
      const exist=DB.dorms.find(d=>d.gender===s.gender&&d.room===room);
      if(!exist) DB.dorms.push({id:uid(), gender:s.gender||"男", room:room, note:""});
    }
  });
}
function dormMembers(d){
  return DB.students.filter(s=>s.dorm==="内宿"&&String(s.dormRoom||"")===d.room&&(s.gender||"男")===d.gender);
}
function unassignedBoarders(){
  return DB.students.filter(s=>s.dorm==="内宿"&&!s.dormRoom);
}
function renderDorms(){
  syncDormsFromStudents();
  let html='<div style="display:flex;gap:8px;margin-bottom:10px">'
    +'<button class="btn" style="flex:1" onclick="addDormForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg> 添加宿舍</button>'
    +'<button class="btn ghost" style="flex:1" onclick="assignToDormForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M6 14 H18 V17 H6 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 10 H9 V13 H6 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9 11 H18" stroke="#8A9E68" stroke-width="1.4" stroke-linecap="round"/></svg> 分配学生到宿舍</button>'
    +'</div>';
  html+='<div class="section-title">男生宿舍（'+DB.dorms.filter(d=>d.gender==="男").length+'间）</div>';
  html+=dormListHtml("男");
  html+='<div class="section-title">女生宿舍（'+DB.dorms.filter(d=>d.gender==="女").length+'间）</div>';
  html+=dormListHtml("女");
  const unassigned=unassignedBoarders();
  html+='<div class="section-title">未分配宿舍的内宿生（'+unassigned.length+'人）</div>';
  if(!unassigned.length){ html+='<div class="card"><div class="empty">所有内宿生都已分配宿舍</div></div>'; }
  else{
    html+='<div class="card">'+unassigned.map(s=>{
      return '<div class="stu-line"><span>'+esc(s.name)+'</span>'
        +'<button class="btn small ghost" onclick="assignToDormForm(\''+s.id+'\')">分配</button></div>';
    }).join("")+'</div>';
  }
  if(!DB.dorms.length){
    html+='<div class="card"><div class="empty">还没有宿舍。点"<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg> 添加宿舍"按"性别+宿舍号"建宿舍；<br>或者直接导入含"住宿/宿舍号"列的学生名单，平台会自动按"内宿+宿舍号"创建宿舍并归入。</div></div>';
  }
  main.innerHTML=html;
}
function dormListHtml(gender){
  const list=DB.dorms.filter(d=>d.gender===gender);
  if(!list.length){ return '<div class="card"><div class="empty">暂无'+gender+'生宿舍</div></div>'; }
  return list.map(d=>{
    const members=dormMembers(d);
    return '<div class="dorm-card">'
      +'<div class="dorm-head"><span class="dorm-room">'+esc(d.room)+' 宿舍</span>'
      +(d.note?'<span class="dorm-note">'+esc(d.note)+'</span>':"")
      +'<span class="dorm-count">'+members.length+'人</span>'
      +'<span style="flex:1"></span>'
      +'<button class="link-btn" onclick="editDormNote(\''+d.id+'\')">备注</button>'
      +'<button class="link-btn" onclick="assignMemberForm(\''+d.id+'\')"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg>加人</button>'
      +'<button class="link-btn" style="color:#8E3B34" onclick="delDorm(\''+d.id+'\')">删</button>'
      +'</div>'
      +'<div class="dorm-members">'
      +(members.length?members.map(s=>{
        const onLeave=todayLeaveSet().has(s.id);
        return '<div class="dorm-member'+(onLeave?' on-leave':'')+'">'
          +'<div class="dm-name">'+esc(s.name)+'</div>'
          +(s.roomNote?'<div class="dm-note">'+esc(s.roomNote)+'</div>':"")
          +(onLeave?'<div class="dm-leave-tag">今日请假</div>':"")
          +'<div class="dm-actions">'
          +'<button class="link-btn" onclick="editMemberNote(\''+s.id+'\',\''+d.room+'\')"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg></button>'
          +'</div>'
          +'</div>';
      }).join(""):'<div class="dorm-empty">暂无学生，点"<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg>加人"或"分配学生到宿舍"</div>')
      +'</div></div>';
  }).join("");
}
function addDormForm(){
  showModal('<div class="sheet-head"><h3>添加宿舍</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>性别</label><select id="dGender"><option>男</option><option>女</option></select></div>'
    +'<div class="form-row"><label>宿舍号</label><input id="dRoom" placeholder="如：301"></div>'
    +'<div class="form-row"><label>备注（选填）</label><input id="dNote" placeholder="如：靠楼梯、6人间"></div>'
    +'<button class="btn" onclick="saveDorm()">保存</button>');
}
function saveDorm(){
  const room=document.getElementById("dRoom").value.trim();
  if(!room){ toast("请填写宿舍号"); return; }
  const gender=document.getElementById("dGender").value;
  if(DB.dorms.some(d=>d.gender===gender&&d.room===room)){ toast("该性别下已有 "+room+" 宿舍"); return; }
  DB.dorms.push({id:uid(), gender:gender, room:room, note:document.getElementById("dNote").value.trim()});
  save(); closeModal(); toast("已添加 "+gender+"生 "+room+" 宿舍"); renderDorms();
}
function delDorm(did){
  const d=DB.dorms.find(x=>x.id===did);
  if(!d) return;
  const members=dormMembers(d);
  if(confirm("删除"+d.gender+"生 "+d.room+" 宿舍？"+(members.length?"\\n宿舍内 "+members.length+" 名学生的宿舍号会清空，需重新分配。":"")+"\\n（宿舍删除后学生仍保留，只是不再归属该宿舍）")){
    members.forEach(s=>{ s.dormRoom=""; });
    DB.dorms=DB.dorms.filter(x=>x.id!==did);
    save(); toast("已删除宿舍"); renderDorms();
  }
}
function editDormNote(did){
  const d=DB.dorms.find(x=>x.id===did);
  if(!d) return;
  const v=prompt("编辑 "+d.gender+"生 "+d.room+" 宿舍的备注：", d.note||"");
  if(v===null) return;
  d.note=v.trim();
  save(); toast("备注已更新"); renderDorms();
}
function editMemberNote(sid, room){
  const s=getStudent(sid);
  if(!s) return;
  const v=prompt("「"+s.name+"」在 "+room+" 宿舍的备注（如床号、上铺）：", s.roomNote||"");
  if(v===null) return;
  s.roomNote=v.trim();
  save(); toast("备注已更新"); renderDorms();
}
function removeFromDorm(sid){
  const s=getStudent(sid);
  if(!s) return;
  s.dormRoom=""; s.roomNote="";
  save(); toast("已移出宿舍"); renderDorms();
}
/* 给某宿舍加人：列出未分配的同性别内宿生 */
function assignMemberForm(did){
  const d=DB.dorms.find(x=>x.id===did);
  if(!d) return;
  const cands=unassignedBoarders().filter(s=>(s.gender||"男")===d.gender);
  showModal('<div class="sheet-head"><h3>加入 '+d.gender+'生 '+d.room+' 宿舍</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +(cands.length?'<div class="form-row"><label>选择学生（未分配宿舍的'+d.gender+'生）</label>'
      +cands.map(s=>'<div class="stu-line"><span>'+esc(s.name)+'</span><button class="btn small" onclick="assignStudentToDorm(\''+s.id+'\',\''+d.id+'\')">加入</button></div>').join("")
      +'</div>':'<div class="empty">没有可分配的学生（未分配宿舍的'+d.gender+'生）</div>'));
}
/* 分配学生到宿舍（先选学生，再选宿舍） */
function assignToDormForm(stuId){
  const cands=stuId?[getStudent(stuId)].filter(Boolean):unassignedBoarders();
  if(!cands.length){ toast("没有需要分配的内宿生"); return; }
  const s=cands[0];
  const gender=s.gender||"男";
  const dorms=DB.dorms.filter(d=>d.gender===gender);
  showModal('<div class="sheet-head"><h3>分配宿舍：'+esc(s.name)+'（'+gender+'）</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +(dorms.length?'<div class="form-row"><label>选择宿舍</label>'
      +dorms.map(d=>'<div class="stu-line"><span>'+esc(d.room)+' 宿舍'+(d.note?'（'+esc(d.note)+'）':'')+'</span><button class="btn small" onclick="assignStudentToDorm(\''+s.id+'\',\''+d.id+'\')">分配</button></div>').join("")
      +'</div><p style="font-size:11px;color:#9AA092;margin-top:8px">没有合适的？先关掉，去"宿舍"页点"<svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg>添加宿舍"创建后再来分配。</p>'
      :'<div class="empty">还没有'+gender+'生宿舍，先去添加：宿舍页 → <svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg>添加宿舍</div>'));
}
function assignStudentToDorm(sid, did){
  const s=getStudent(sid), d=DB.dorms.find(x=>x.id===did);
  if(!s||!d) return;
  s.dorm=d.gender==="男"?"内宿":"内宿";
  s.dormRoom=d.room;
  save(); closeModal(); toast("已将 "+s.name+" 分到 "+d.room+" 宿舍"); renderDorms();
}
/* 首页：今日请假的内宿生提醒 */
function leaveDormAlert(){
  const today=todayStr();
  const leaves=DB.records.filter(r=>r.type==="leave"&&r.date===today);
  if(!leaves.length) return "";
  const names=leaves.map(r=>getStudent(r.studentId)).filter(s=>s&&s.dorm==="内宿").map(s=>s.name).filter(Boolean);
  if(!names.length) return "";
  return '<div class="card" style="border:1px solid #f0d9a8;background:#fef9ef">'
    +'<div class="card-title-row"><h3 style="color:#92400e"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M7 12 L12 8 L17 12 V16 H7 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><rect x="10.5" y="12.5" width="3" height="3.5" fill="#8A9E68"/></svg> 今日请假内宿生（'+names.length+'人）</h3></div>'
    +'<div style="font-size:13px;line-height:1.9;color:#7c4a03">'+esc(names.join("、"))+'</div>'
    +'<div style="font-size:11px;color:#a16207;margin-top:4px">提醒：晚自习查寝时注意核对这些同学是否已离校回家，避免误报未归寝。</div>'
    +'</div>';
}

/* ========== 学生详情（成长档案） ========== */
let curStudentId="";
function openStudent(id){
  curStudentId=id;
  navStack.push(id);
  renderDetail(id);
}
function renderDetail(id){
  const s=getStudent(id);
  if(!s){ switchView("students"); return; }
  backBtn.style.display="block";
  brand.textContent=s.name;
  const recs=getRecords(id);
  const cl=contactsCopyHtml(s);
  const violations=recs.filter(r=>r.type==="violation").length;
  const leaveCount=recs.filter(r=>r.type==="leave").length;
  /* 个人信息双栏布局（有值才显示，无值跳过不留空位） */
  const metaTags=[];
  if(s.klass) metaTags.push(esc(s.klass));
  if(s.gender) metaTags.push(esc(s.gender));
  if(s.stuNo) metaTags.push('学号 '+esc(s.stuNo));
  if(s.dorm) metaTags.push(esc(s.dorm)+(s.dormRoom?' '+esc(s.dormRoom):''));
  const metaHtml=metaTags.length?'<div class="st-meta-chips">'+metaTags.map(t=>'<span class="chip">'+t+'</span>').join('')+'</div>':'';
  const infoItem=(lab,val)=>'<div class="info-item"><div class="info-lab">'+lab+'</div><div class="info-val">'+val+'</div></div>';
  const leftItems=[];
  if(s.idCard) leftItems.push(infoItem('身份证', '<span class="copyable" data-copy="'+esc(s.idCard)+'">'+esc(s.idCard)+'</span>'));
  if(s.address) leftItems.push(infoItem('常住地址', esc(s.address)));
  if(s.hukou) leftItems.push(infoItem('户籍地', esc(s.hukou)));
  const rightItems=[];
  if(cl) rightItems.push(infoItem('联系人', cl));
  if(s.note) rightItems.push(infoItem('备注', '<span class="note-txt">'+esc(s.note)+'</span>'));
  const infoCols=(leftItems.length||rightItems.length)?'<div class="info-cols">'+(leftItems.length?'<div class="info-col">'+leftItems.join('')+'</div>':'')+(rightItems.length?'<div class="info-col">'+rightItems.join('')+'</div>':'')+'</div>':'';
  let html='<div class="detail-head">'
    +'<div class="avatar">'+esc(s.name.charAt(0))+'</div>'
    +'<div class="st-name">'+esc(s.name)+(s.klass?'　<span style="font-size:13px;color:#7A7E6E">'+esc(s.klass)+'</span>':"")+(s.gender?'　<span style="font-size:13px;color:#7A7E6E">'+esc(s.gender)+'</span>':"")+'</div>'
    + metaHtml
    + infoCols
    +'<div class="detail-tags">'+(s.tags||[]).map(t=>'<span class="tag">'+esc(t)+'</span>').join("")+'</div>'
    +'<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;justify-content:center">'
    +'<button class="btn small ghost" onclick="editStudentForm(\''+id+'\')"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg> 编辑信息</button>'
    +'<button class="btn small ghost" onclick="exportStudentDoc(\''+id+'\')">📄 导出Word档案</button>'
    +'<button class="btn small ghost" onclick="openPlanModal(\''+id+'\')">🤖 生成方案</button>'
    +'<button class="btn small ghost" style="color:#8E3B34;border-color:#E7B7B2" onclick="delStudent(\''+id+'\')">🗑 删除学生</button>'
    +'</div>'
    +'</div>';
  const scores=recs.filter(r=>r.type==="score");
  /* 成绩按单次考试去重计数 */
  const byExam={}; scores.forEach(r=>{ const k=r.detail.exam; if(!byExam[k])byExam[k]=[]; byExam[k].push(r); });
  const examCount=Object.keys(byExam).length;
  const goodCount=recs.filter(r=>r.type==="good").length;
  const leaveDays=recs.filter(r=>r.type==="leave").reduce((a,r)=>a+(parseFloat(r.detail.days)||1),0);
  html+='<div class="stat-grid">'
    +'<div class="stat"><span class="num">'+examCount+'</span><span class="lab">学生成绩</span></div>'
    +'<div class="stat"><span class="num">'+goodCount+'</span><span class="lab">好事记录</span></div>'
    +'<div class="stat"><span class="num">'+violations+'</span><span class="lab">违纪次数</span></div>'
    +'<div class="stat"><span class="num">'+leaveDays+'</span><span class="lab">请假天数</span></div>'
    +'</div>';
  /* 学生成绩（折叠，点击展开，位于快捷记录上方） */
  html+='<details class="rec-fold"><summary class="fold-title"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 7 H15 V10 Q15 13 12 13 Q9 13 9 10 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9 8 H6.5 Q6.5 11 9 11 M15 8 H17.5 Q17.5 11 15 11" fill="none" stroke="#8A9E68" stroke-width="1.4"/><path d="M12 13 V16 H10 V17 H14 V16 H12 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.3" stroke-linejoin="round"/></svg> 学生成绩（'+examCount+'次考试，点击展开）</summary>';
  html+='<div class="card-title-row" style="margin:6px 0"><div></div><div><button class="link-btn" onclick="importExcelForm(\''+id+'\')">导入Excel</button><button class="link-btn" onclick="openCompare(\''+id+'\')">对比分析</button></div></div>';
  if(!scores.length){ html+='<div class="empty">还没有成绩记录，可以点右上角"导入Excel"一键导入</div>'; }
  else{
    const examKeys=Object.keys(byExam).sort((a,b)=>{
      const da=byExam[a].map(r=>r.detail.examDate||r.detail.date||"").sort().slice(-1)[0]||"";
      const db=byExam[b].map(r=>r.detail.examDate||r.detail.date||"").sort().slice(-1)[0]||"";
      return db.localeCompare(da);
    });
    examKeys.forEach(ex=>{
      const list=byExam[ex];
      const d0=list[0].detail;
      const ranks=[];
      if(d0.classRank!==undefined&&d0.classRank!==null) ranks.push('班排'+fmtScore(d0.classRank));
      if(d0.gradeRank!==undefined&&d0.gradeRank!==null) ranks.push('校排'+fmtScore(d0.gradeRank));
      const dateStr=list.map(r=>r.detail.examDate||r.detail.date||"").filter(Boolean).sort().slice(-1)[0]||"";
      html+='<div class="section-title" style="margin:10px 0 6px">'+esc(ex)+(dateStr?'<span style="font-size:11px;color:#9AA092;font-weight:400">　'+esc(dateStr)+'</span>':"")+(ranks.length?'<span style="font-size:11px;color:#ACC18B;font-weight:400;margin-left:6px">'+ranks.join("　")+'</span>':"")+'</div>';
      const detailMap={}; list.forEach(r=>{ detailMap[r.detail.subject]=r.detail; });
      orderedSubjects(Object.keys(detailMap)).forEach(sub=>{
        const d=detailMap[sub];
        const full=fullScoreOf(sub);
        const w=Math.max(3,Math.min(100,Math.round((d.score||0)/full*100)));
        html+='<div class="score-row"><span class="score-exam">'+esc(sub)+'</span><div class="score-bar-wrap"><div class="score-bar" style="width:'+w+'%"></div></div><span class="score-num">'+(d.absent?"缺考":fmtScore(d.score))+'</span></div>';
      });
    });
  }
  html+='</details>';
  html+='<div class="card"><div class="card-title-row"><h3>快捷记录</h3></div><div class="quick-grid">'
    +'<button class="quick" onclick="quickAdd(\'talk\',\''+id+'\')"><span class="q-ico"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M7 9 H17 V14 H10 L7.5 16.5 V14 H7 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><circle cx="10" cy="11.3" r="0.9" fill="#8A9E68"/><circle cx="13" cy="11.3" r="0.9" fill="#8A9E68"/><circle cx="16" cy="11.3" r="0.9" fill="#8A9E68"/></svg></span><span class="q-lab">记谈话</span></button>'
    +'<button class="quick" onclick="quickAdd(\'violation\',\''+id+'\')"><span class="q-ico"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#EAACA9" stroke="#8E3B34" stroke-width="1.6"/><path d="M12 7 V13" stroke="#8E3B34" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="16" r="1.4" fill="#8E3B34"/></svg></span><span class="q-lab">记违纪</span></button>'
    +'<button class="quick" onclick="quickAdd(\'good\',\''+id+'\')"><span class="q-ico"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#E4D58C" stroke="#C9B86A" stroke-width="1.6"/><path d="M12 7 L13.6 10.6 L17.5 11 L14.6 13.4 L15.4 17.2 L12 15.1 L8.6 17.2 L9.4 13.4 L6.5 11 L10.4 10.6 Z" fill="#FFFFFF" stroke="#C9B86A" stroke-width="1.2" stroke-linejoin="round"/></svg></span><span class="q-lab">记好事</span></button>'
    +'<button class="quick" onclick="quickAdd(\'leave\',\''+id+'\')"><span class="q-ico"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg></span><span class="q-lab">记请假</span></button>'
    +'</div></div>';
  const schoolRecs=recs.filter(r=>r.type==="good"||r.type==="violation");
  const contactRecs=recs.filter(r=>r.type==="contact");
  const talkRecs=recs.filter(r=>r.type==="talk");
  const leaveRecs=recs.filter(r=>r.type==="leave");
  /* 版块顺序：快捷记录 → 出勤 → 在校记录 → 沟通 → 家校联系 */
  /* 出勤（请假） */
  html+='<details class="rec-fold"><summary class="fold-title"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 16 L15 9 L17 11 L10 18 L7.5 18.5 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/></svg> 出勤（请假） '+leaveRecs.length+'条</summary><div class="record-list">';
  if(!leaveRecs.length){ html+='<div class="empty">暂无请假记录，点上方"记请假"添加</div>'; }
  else{ html+=leaveRecs.map(recHtml).join(""); }
  html+='</div></details>';
  /* 在校记录（折叠） */
  html+='<details class="rec-fold"><summary class="fold-title"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="12" cy="12" r="6" fill="#FFFFFF"/><path d="M12 8.5 V12 L14.5 13.5" fill="none" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg> 在校记录（好事 / 违纪）'+schoolRecs.length+'条</summary><div class="record-list">';
  if(!schoolRecs.length){ html+='<div class="empty">暂无在校记录，点上面"记好事/记违纪"记录</div>'; }
  else{ html+=schoolRecs.map(recHtml).join(""); }
  html+='</div></details>';
  /* 沟通（谈话） */
  html+='<details class="rec-fold"><summary class="fold-title"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M7 9 H17 V14 H10 L7.5 16.5 V14 H7 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><circle cx="10" cy="11.3" r="0.9" fill="#8A9E68"/><circle cx="13" cy="11.3" r="0.9" fill="#8A9E68"/><circle cx="16" cy="11.3" r="0.9" fill="#8A9E68"/></svg> 沟通（谈话） '+talkRecs.length+'条</summary><div class="record-list">';
  if(!talkRecs.length){ html+='<div class="empty">暂无谈话记录，点上方"记谈话"添加</div>'; }
  else{ html+=talkRecs.map(recHtml).join(""); }
  html+='</div></details>';
  /* 家校联系（折叠） */
  html+='<details class="rec-fold"><summary class="fold-title"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M7 12 L12 8 L17 12 V16 H7 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><rect x="10.5" y="12.5" width="3" height="3.5" fill="#8A9E68"/></svg> 家校联系 '+contactRecs.length+'条</summary><div class="record-list">';
  if(!contactRecs.length){ html+='<div class="empty">暂无家校联系记录</div>'; }
  else{ html+=contactRecs.map(recHtml).join(""); }
  html+='</div></details>';
  main.innerHTML=html; bindPhoneCopy();
}
/* 新版：一行摘要（状态·类型·程度·日期）+ 下方描述与操作；用于在校记录/家校联系/沟通出勤 */
function recHtml(r){
  const badge=recordBadge(r);
  /* 违纪记录自动标记：该生在此违纪日期之后是否有谈话 / 家校联系记录 */
  let hasTalk=false, hasContact=false;
  if(r.type==="violation"){
    hasTalk=DB.records.some(x=>x.type==="talk"&&x.studentId===r.studentId&&x.date>=r.date);
    hasContact=DB.records.some(x=>x.type==="contact"&&x.studentId===r.studentId&&x.date>=r.date);
  }
  /* 一行核心：违纪显示为【状态】违纪记录【类型】【程度】【已谈话】【已家校联系】+ 日期 */
  let line='<span class="rec2-dot dot-'+r.type+'"></span>';
  if(r.type==="violation"){
    const done=r.detail.status==="已处理";
    line+='<span class="rec2-tag '+(done?"tag-done":"tag-wait")+'">'+(done?"已处理":"待处理")+'</span>';
    line+='<span class="rec2-type">违纪记录</span>';
    line+='<span class="rec2-tag">'+esc(r.detail.subtype||"")+'</span>';
    line+='<span class="rec2-tag">'+esc(r.detail.level||"一般")+'</span>';
    if(hasTalk) line+='<span class="rec2-tag tag-talk">【已谈话】</span>';
    if(hasContact) line+='<span class="rec2-tag tag-contact">【已家校联系】</span>';
  }else{
    if(badge) line+=badge+' ';
    line+='<span class="rec2-type">'+recTypeName(r.type)+'</span>';
  }
  line+='<span class="rec2-date">'+esc(r.date)+'</span>';
  let action='';
  if(r.type==="leave"&&!r.detail.returned) action='<button class="btn small ghost" onclick="markReturn(\''+r.id+'\')">销假</button>';
  if(r.type==="violation"&&r.detail.status!=="已处理") action='<button class="btn small ghost" onclick="markDone(\''+r.id+'\')">标记已处理</button>';
  let extra='';
  if(r.type==="violation"){
    extra+='<button class="btn small ghost" onclick="feedbackForm(\''+r.id+'\')">写处理反馈</button>';
    if(r.detail.subtype!=='其他') extra+='<button class="btn small ghost" style="margin-left:6px" onclick="genPlanFromRec(\''+r.id+'\')">生成方案</button>';
  }
  return '<div class="rec2">'
    +'<div class="rec2-line">'+line+'</div>'
    +'<div class="rec2-desc">'+esc(recordDesc(r))+'</div>'
    +filesHtml(r.detail.files)
    +feedbackHtml(r)
    +(extra?'<div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">'+extra+(action?'<button class="btn small ghost" style="margin-left:6px" onclick="'+ (r.type==="leave"?'markReturn':'markDone') +'(\''+r.id+'\')">'+(r.type==="leave"?"销假":"标记已处理")+'</button>':'')+'</div>':(action?'<div style="margin-top:6px">'+action+'</div>':""))
    +'</div>';
}
function markReturn(rid){ const r=DB.records.find(x=>x.id===rid); if(r){ r.detail.returned=true; save(); toast("已销假"); renderDetail(curStudentId); } }
function markDone(rid){ const r=DB.records.find(x=>x.id===rid); if(r){ r.detail.status="已处理"; if(r.detail.todoId){ const t=DB.todos.find(x=>x.id===r.detail.todoId); if(t) t.done=true; } save(); toast("已标记处理"); renderDetail(curStudentId); } }
function genPlanFromRec(rid){ const r=DB.records.find(x=>x.id===rid); if(r) openPlanModal(r.studentId, r.detail.subtype); }

/* ========== 记录功能 ========== */
let recordType="talk";
function quickAdd(type,stuId){
  recordType=type;
  const defaultStu=stuId||"";
  showModal(recordFormHtml(defaultStu));
}
function recordFormHtml(preStu){
  const stuOptions=studentOptionsHtml(preStu);
  const stuSel='<select id="rStu">'+(DB.students.length?'<option value="">选择学生…</option>'+stuOptions:'<option value="">（请先添加学生）</option>')+'</select>';
  let mid="";
  if(recordType==="talk"){
    mid='<div class="form-row"><label>谈话原因</label><select id="rSub">'+TALK_REASONS.map(x=>'<option>'+x+'</option>').join("")+'</select></div>'
      +'<div class="form-row"><label>谈话内容摘要</label><textarea id="rDesc" placeholder="聊了什么、学生的态度和反应"></textarea></div>'
      +'<div class="form-row"><label>下一步跟进</label><input id="rExtra" placeholder="例如：下周抽查他的作业情况"></div>'
      +'<div class="form-row"><label>附加图片（谈话记录/照片，选填）</label><input type="file" id="rFiles" class="file-input" multiple accept="image/*"><div class="upload-note">自动存云端，Word导出时也会带上</div></div>';
  }else if(recordType==="violation"){
    mid='<div class="form-row"><label>违纪类型</label><select id="rSub">'+VIOLATION_TYPES.map(x=>'<option>'+x+'</option>').join("")+'</select></div>'
      +'<div class="form-row"><label>严重程度</label><select id="rLevel"><option>一般</option><option>严重</option></select></div>'
      +'<div class="form-row"><label>事情经过（尽量写清楚，生成方案用）</label><textarea id="rDesc" placeholder="例如：课间和同桌推搡，起因是争抢篮球"></textarea></div>'
      +'<div class="form-row"><label>附加材料（检讨书照片等，选填）</label><input type="file" id="rFiles" class="file-input" multiple accept="image/*"><div class="upload-note">如检讨书拍照上传，自动存云端</div></div>';
  }else if(recordType==="good"){
    mid='<div class="form-row"><label>做了什么好事</label><textarea id="rDesc" style="min-height:80px" placeholder="例如：主动帮助同学补习功课；拾金不昧…"></textarea></div>'
      +'<div class="form-row"><label>附加图片（选填）</label><input type="file" id="rFiles" class="file-input" multiple accept="image/*"><div class="upload-note">如奖状、照片等</div></div>';
  }else if(recordType==="contact"){
    mid='<div class="form-row"><label>沟通方式</label><select id="rSub">'+CONTACT_CHANNELS.map(x=>'<option>'+x+'</option>').join("")+'</select></div>'
      +'<div class="form-row"><label>沟通内容摘要</label><textarea id="rDesc" style="min-height:80px" placeholder="和哪位家长聊了什么、家长的态度、约定的事项"></textarea></div>'
      +'<div class="form-row"><label>附加图片（选填）</label><input type="file" id="rFiles" class="file-input" multiple accept="image/*"><div class="upload-note">如截图、签字单等</div></div>';
  }else if(recordType==="leave"){
    mid='<div class="form-row"><label>请假类型</label><select id="rSub">'+LEAVE_TYPES.map(x=>'<option>'+x+'</option>').join("")+'</select></div>'
      +'<div class="form-row"><label>请假时长（天）</label><input id="rDays" type="number" min="1" value="1"></div>'
      +'<div class="form-row"><label>请假事由</label><textarea id="rDesc" placeholder="例如：感冒发烧，家长代请"></textarea></div>';
  }else{
    mid='<div class="form-row"><label>考试名称（可自定义）</label><input id="rSub" list="examList2" placeholder="如：第一次月考"><datalist id="examList2">'+EXAMS.map(x=>'<option value="'+x+'">')+'</datalist></div>'
      +'<div class="form-row"><label>科目</label><select id="rSub2" onchange="updateScoreMax()">'+SUBJECTS.map(x=>'<option>'+x+'</option>').join("")+'</select><div class="hint" id="rFullHint">'+esc(SUBJECTS[0])+'满分'+fullScoreOf(SUBJECTS[0])+'分，及格'+passLineOf(SUBJECTS[0])+'分</div></div>'
      +'<div class="form-row"><label>分数</label><input id="rScore" type="number" min="0" max="'+fullScoreOf(SUBJECTS[0])+'" placeholder="0-'+fullScoreOf(SUBJECTS[0])+'"></div>'
      +'<div class="form-row"><label style="display:flex;align-items:center;gap:6px"><input id="rAbsent" type="checkbox" style="width:18px;height:18px" onchange="toggleAbsent(this)"> 该科缺考（不填分数）</label></div>'
      +'<div class="form-row"><label>日期</label><input id="rDate" type="date" value="'+todayStr()+'"></div>';
  }
  const dateRow = recordType==="score" ? "" : '<div class="form-row"><label>记录时间（默认今天，可改填补记的过去日期）</label><input id="rDate" type="date" value="'+todayStr()+'"></div>';
  return '<div class="sheet-head"><h3>'+recTypeName(recordType)+'</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>学生</label>'+stuSel+'</div>'+mid+dateRow
    +'<button class="btn" onclick="saveRecord()">保存记录</button>';
}
function updateScoreMax(){
  const sel=document.getElementById("rSub2");
  if(!sel) return;
  const full=fullScoreOf(sel.value);
  const score=document.getElementById("rScore");
  if(score){ score.max=full; score.placeholder="0-"+full; }
  const hint=document.getElementById("rFullHint");
  if(hint) hint.textContent=sel.value+"满分"+full+"分，及格"+passLineOf(sel.value)+"分";
}
function toggleAbsent(cb){
  const score=document.getElementById("rScore");
  if(score){ score.disabled=cb.checked; if(cb.checked) score.value=""; }
}
function saveRecord(){
  const sid=document.getElementById("rStu").value;
  if(!sid){ toast("请先选择学生"); return; }
  const di=document.getElementById("rDate");
  const recDate=(di&&di.value)?di.value:todayStr();
  const rec={id:uid(), studentId:sid, type:recordType, date:recDate, detail:{}};
  if(recordType==="talk"){
    rec.detail={reason:document.getElementById("rSub").value, content:document.getElementById("rDesc").value.trim(), follow:document.getElementById("rExtra").value.trim(), files:[]};
  }else if(recordType==="violation"){
    rec.detail={subtype:document.getElementById("rSub").value, level:document.getElementById("rLevel").value, desc:document.getElementById("rDesc").value.trim(), status:"待处理", files:[]};
  }else if(recordType==="good"){
    rec.detail={desc:document.getElementById("rDesc").value.trim(), files:[]};
    rec.detail={channel:document.getElementById("rSub").value, content:document.getElementById("rDesc").value.trim(), files:[]};
  }else if(recordType==="leave"){
    rec.detail={subtype:document.getElementById("rSub").value, days:parseInt(document.getElementById("rDays").value)||1, why:document.getElementById("rDesc").value.trim(), returned:false};
  }else{
    const absent=document.getElementById("rAbsent")&&document.getElementById("rAbsent").checked;
    rec.detail={exam:document.getElementById("rSub").value, subject:document.getElementById("rSub2").value, score:absent?0:parseInt(document.getElementById("rScore").value)||0, absent:absent, date:document.getElementById("rDate").value};
  }
  const files=document.getElementById("rFiles")?[...document.getElementById("rFiles").files]:[];
  const finish=()=>{
    if(rec.type==="violation"){
      const stu=getStudent(sid);
      rec.detail.todoId=uid();
      DB.todos.push({id:rec.detail.todoId, text:"处理违纪："+(stu?stu.name:"")+"·"+(rec.detail.subtype||""), done:false, createdAt:todayStr()});
    }
    DB.records.push(rec);
    save(); closeModal(); toast("记录已保存");
    if(navStack.length){ renderDetail(curStudentId); } else { renderHome(); }
  };
  if(files.length&&rec.detail.files){
    let pending=files.length, errs=0;
    files.forEach(f=>{
      uploadToCos(f, "records", (url,err)=>{
        if(err){ errs++; }else{ rec.detail.files.push({name:f.name, url:url}); }
        pending--;
        if(pending===0){
          if(errs===files.length){ toast("附件上传失败，请检查云端配置"); return; }
          finish();
        }
      });
    });
  }else{ finish(); }
}

/* ========== 记录总览 ========== */
let recShowPast=false;
function renderRecords(){
  const all=[...DB.records].sort((a,b)=>b.date.localeCompare(a.date));
  const order=["good","violation","leave","talk","contact"];
  const types=order.map(k=>RECORD_TYPES.find(t=>t.key===k)).filter(Boolean);
  const ico={talk:ICONS.talk,violation:ICONS.violation,leave:ICONS.leave,good:ICONS.good,contact:ICONS.contact};
  let html='<div class="section-title">新增记录</div><div class="quick-grid">'
    +types.map(t=>'<button class="quick" onclick="quickAdd(\''+t.key+'\')"><span class="q-ico">'+(ico[t.key]||ICONS.record)+'</span><span class="q-lab">'+t.name+'</span></button>').join("")
    +'</div>';
  html+='<div style="display:flex;gap:8px;margin-top:10px">'
    +'<button class="btn ghost" style="flex:1" onclick="importExcelForm(\'\')"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 7 H15 V10 Q15 13 12 13 Q9 13 9 10 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9 8 H6.5 Q6.5 11 9 11 M15 8 H17.5 Q17.5 11 15 11" fill="none" stroke="#8A9E68" stroke-width="1.4"/><path d="M12 13 V16 H10 V17 H14 V16 H12 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.3" stroke-linejoin="round"/></svg> 批量导入成绩</button>'
    +'<button class="btn ghost" style="flex:1" onclick="classExamForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 7 H15 V10 Q15 13 12 13 Q9 13 9 10 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9 8 H6.5 Q6.5 11 9 11 M15 8 H17.5 Q17.5 11 15 11" fill="none" stroke="#8A9E68" stroke-width="1.4"/><path d="M12 13 V16 H10 V17 H14 V16 H12 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.3" stroke-linejoin="round"/></svg> 成绩分析</button>'
    +'</div>';
  const today=todayStr();
  const todayRecs=all.filter(r=>r.date===today && r.type!=="score");
  const pastRecs=all.filter(r=>r.date!==today && r.type!=="score");
  html+='<div class="section-title">今日记录（'+todayRecs.length+'）</div>';
  if(!todayRecs.length){ html+='<div class="card"><div class="empty">风平浪静的一天~</div></div>'; }
  else{
    html+='<div class="card record-list">'+todayRecs.map(recItem).join("")+'</div>';
    if(pastRecs.length){
      html+='<button class="btn ghost" style="margin-top:8px;width:100%" onclick="togglePastRecords()">'+(recShowPast?'▾ 收起往日记录':'▸ 往日记录（'+pastRecs.length+'条）')+'</button>';
      if(recShowPast) html+='<div class="card record-list" style="margin-top:8px">'+pastRecs.map(recItem).join("")+'</div>';
    }
  }
  main.innerHTML=html;
}
function togglePastRecords(){ recShowPast=!recShowPast; renderRecords(); }

/* ========== 方案生成 ========== */
function openPlanModal(stuId, preSubtype){
  const s=getStudent(stuId);
  if(!s){ toast("请先选择学生"); return; }
  showModal('<div class="sheet-head"><h3>生成教育方案 · '+esc(s.name)+'</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>事件类型</label><select id="planType">'+VIOLATION_TYPES.map(x=>'<option'+(x===preSubtype?" selected":"")+'>'+x+'</option>').join("")+'</select></div>'
    +'<div class="form-row"><label>事情经过（可写可不写，写了话术更具体）</label><textarea id="planDesc" placeholder="例如：课间因争抢篮球和同学推搡"></textarea></div>'
    +'<button class="btn" onclick="doGenerate()">生成方案</button>'
    +'<div id="planResult" style="margin-top:12px"></div>');
}
function doGenerate(){
  const subtype=document.getElementById("planType").value;
  const desc=document.getElementById("planDesc").value.trim()||subtype;
  const s=getStudent(curStudentId);
  if(!s){ toast("学生数据异常"); return; }
  const rule=RULES[subtype]||RULES["其他"];
  const map={
    name:s.name,
    gender:s.gender==="男"?"同学":(s.gender==="女"?"同学":""),
    tags:tagsDesc(s),
    recent:summarizeRecent(s),
    trend:scoreTrend(s),
    date:todayStr(),
    grade:"",
    desc:desc,
    plan:"已单独谈话教育、按班规记违纪、通知家长"
  };
  const fill=tpl=>tpl.replace(/\{\{(\w+)\}\}/g,(m,k)=>map[k]||"");
  const plan=rule.talk.map((t,i)=>(i+1)+". "+fill(t)).join("\n");
  let html='';
  html+='<div class="plan-block"><h4>① 学生情况分析</h4><p>'+esc(fill(rule.analysis))+'</p></div>';
  html+='<div class="plan-block"><h4>② 谈心方案（三步走）<button class="copy-btn" onclick="copyText(this)">复制</button></h4><p style="white-space:pre-line">'+esc(plan)+'</p></div>';
  html+='<div class="plan-block"><h4>③ 教育方向 <button class="copy-btn" onclick="copyText(this)">复制</button></h4><p>'+esc(fill(rule.direction))+'</p></div>';
  html+='<div class="plan-block"><h4>④ 上报领导话术 <button class="copy-btn" onclick="copyText(this)">复制</button></h4><p style="white-space:pre-line">'+esc(fill(rule.report))+'</p></div>';
  html+='<div class="plan-block"><h4>⑤ 告知家长话术 <button class="copy-btn" onclick="copyText(this)">复制</button></h4><p style="white-space:pre-line">'+esc(fill(rule.parent))+'</p></div>';
  html+='<p style="font-size:11px;color:#9AA092;text-align:center">提示：复制后请按实际情况改一改（名字、班级、具体细节）再使用</p>';
  document.getElementById("planResult").innerHTML=html;
}
function copyText(btn){
  const block=btn.closest(".plan-block");
  const text=block.querySelector("p").innerText;
  const done=()=>toast("已复制，去粘贴吧");
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(text).then(done,()=>fallbackCopy(text,done)); }
  else fallbackCopy(text,done);
}
function fallbackCopy(text,done){
  const ta=document.createElement("textarea");
  ta.value=text; document.body.appendChild(ta); ta.select();
  try{ document.execCommand("copy"); done(); }catch(e){ toast("复制失败，请长按手动复制"); }
  document.body.removeChild(ta);
}

/* 学生个人信息里的家长电话：渲染为可长按复制，不显示“复制”字样 */
function contactsCopyHtml(s){
  if(Array.isArray(s.contacts)&&s.contacts.length){
    return s.contacts.map(c=>{
      const rel=c.rel||c.name||"家长";
      const nm=(c.name&&c.rel&&c.rel!==c.name)?("("+c.name+")"):"";
      const phone=c.phone||"";
      const phoneSpan=phone?'<span class="copyable" data-copy="'+esc(phone)+'">'+esc(phone)+'</span>':esc(phone);
      return '<span class="c-item">'+esc(rel)+nm+'：'+phoneSpan+'</span>';
    }).join("　");
  }
  if(s.parentName||s.parentPhone){
    const phone=s.parentPhone||"";
    const phoneSpan=phone?'<span class="copyable" data-copy="'+esc(phone)+'">'+esc(phone)+'</span>':"";
    return '家长：'+esc(s.parentName||"")+(phone?'　电话：'+phoneSpan:"");
  }
  return "";
}
/* 长按（触摸/鼠标按住 500ms 或右键）复制电话号码 */
function bindPhoneCopy(){
  document.querySelectorAll(".copyable").forEach(el=>{
    const txt=el.getAttribute("data-copy")||"";
    let timer=null;
    const start=()=>{ timer=setTimeout(()=>{ timer=null; copyPhone(txt); }, 500); };
    const cancel=()=>{ if(timer){ clearTimeout(timer); timer=null; } };
    el.addEventListener("touchstart", start, {passive:true});
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchmove", cancel);
    el.addEventListener("mousedown", start);
    el.addEventListener("mouseup", cancel);
    el.addEventListener("mouseleave", cancel);
    el.addEventListener("contextmenu", e=>{ e.preventDefault(); copyPhone(txt); });
  });
}
let _lastCopyTs=0;
function copyPhone(txt){
  txt=String(txt||"").trim();
  if(!txt){ toast("没有可复制的号码"); return; }
  const now=Date.now();
  if(now-_lastCopyTs<800) return;
  _lastCopyTs=now;
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(txt).then(()=>toast("已复制："+txt)).catch(()=>fallbackCopy(txt,()=>toast("已复制："+txt)));
  } else fallbackCopy(txt,()=>toast("已复制："+txt));
}

/* ========== 通知模板库 ========== */
function renderTemplates(){
  let html='<div class="section-title">通知模板（复制后改名字和时间就能发）</div>';
  html+=NOTICE_TEMPLATES.map((t,i)=>'<div class="tpl-item"><h4>'+esc(t.t)+'<button class="copy-btn" onclick="copyTpl('+i+')">复制</button></h4><pre>'+esc(t.c)+'</pre></div>').join("");
  html+='<div class="card help-box">提示：发家长群的通知，尽量用短句、大白话，一条只讲一件事。需要我根据具体场景帮你写新模板，直接跟我说。</div>';
  main.innerHTML=html;
}
function copyTpl(i){
  const done=()=>toast("已复制模板");
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(NOTICE_TEMPLATES[i].c).then(done,()=>fallbackCopy(NOTICE_TEMPLATES[i].c,done)); }
  else fallbackCopy(NOTICE_TEMPLATES[i].c,done);
}

/* ========== 我的（备份/恢复） ========== */
function renderMine(){
  main.innerHTML=
    '<div id="cloudSectionBox"></div>'
    +'<div class="section-title">数据共享（电脑 ↔ 手机）</div>'
    +'<div class="mine-row" onclick="genSyncCode()"><span class="m-ico">🔗</span><div><div class="m-name">生成同步码</div><div class="m-sub">在本设备生成，复制后发到微信文件传输助手</div></div></div>'
    +'<div class="mine-row" onclick="importSyncForm()"><span class="m-ico"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 6 H13 L16 9 V18 H8 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M13 6 V9 H16" fill="none" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M10 11 H14 M10 14 H14" stroke="#8A9E68" stroke-width="1.3" stroke-linecap="round"/></svg></span><div><div class="m-name">粘贴同步码导入</div><div class="m-sub">在另一台设备粘贴同步码，数据就过来了</div></div></div>'
    +'<div class="section-title">数据备份与恢复</div>'
    +'<div class="mine-row" onclick="exportData()"><span class="m-ico">⬇</span><div><div class="m-name">备份数据</div><div class="m-sub">把全部数据下载成文件，存到手机/微信里</div></div></div>'
    +'<div class="mine-row" onclick="document.getElementById(\'importFile\').click()"><span class="m-ico">⬆</span><div><div class="m-name">恢复数据</div><div class="m-sub">从备份文件导入（会覆盖当前数据）</div></div></div>'
    +'<input type="file" id="importFile" accept=".json" style="display:none" onchange="importData(this)">'
    +'<div class="section-title">访问控制</div>'
    +'<div class="mine-row" onclick="changePassForm()"><span class="m-ico">🔐</span><div><div class="m-name">修改访问密码</div><div class="m-sub">进入本工具的前置密码，初始 0727，可随时改</div></div></div>'
    +'<div class="section-title">使用说明</div>'
    +'<div class="card help-box">'
    +'<b>1. 数据存哪里？多设备怎么同步？</b><br>数据默认存在本机浏览器里。配置了"云端同步"后：<br>· 每次保存记录会自动上传云端；<br>· 换手机时，在手机上打开本页"配置云端"→点"从文本导入"（电脑端先点"复制配置"发微信给自己）→再点"从云端下载"，数据就全部过来了。<b>这条才是电脑↔手机的正路，不用同步码。</b><br>· 同步码（生成→微信→粘贴导入）只是完全没网时的备用法，数据大、微信传不动，平时别用它。<br>'
    +'<b>2. 怎么记最快？</b><br>首页点快捷按钮 → 选学生 → 填内容 → 保存，全程不到1分钟。<br>'
    +'<b>3. 生成方案怎么用？</b><br>学生详情页点"生成教育方案"，选事件类型，就会自动组合出谈心方案、上报话术、家长话术，复制后改改名字和细节就能用。<br>'
    +'<b>4. 记了违纪怎么销？</b><br>在记录里点"处理"，请假回来点"销假"。<br>'
    +'<b>5. 安全提醒</b><br>不要录入身份证号等敏感信息（系统设计上也没这个字段）。手机建议设置锁屏密码。同步码相当于一段加密文本，别发给无关的人。'
    +'</div>'
    +'<div class="section-title">危险操作</div>'
    +'<div class="mine-row" onclick="clearAll()"><span class="m-ico">🗑</span><div><div class="m-name" style="color:#8E3B34">清空全部数据</div><div class="m-sub">删除所有学生和记录，不可恢复，慎用</div></div></div>';
  renderCloudSection();
}
function genSyncCode(){
  const code=btoa(unescape(encodeURIComponent(JSON.stringify(DB))));
  showModal('<div class="sheet-head"><h3>同步码（含全部数据）</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>复制下面这段，发到微信"文件传输助手"，再到另一台设备粘贴导入</label>'
    +'<textarea id="syncOut" style="min-height:140px;font-size:11px;word-break:break-all" readonly onclick="this.select()">'+code+'</textarea></div>'
    +'<button class="btn" onclick="copySyncOut()">复制同步码</button>'
    +'<p style="font-size:11px;color:#9AA092;margin-top:8px">同步码是加密文本，别人看不到里面的名字和内容。长度正常，直接整段复制即可。</p>');
}
function copySyncOut(){
  const ta=document.getElementById("syncOut");
  const done=()=>toast("已复制，去另一台设备粘贴导入吧");
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(ta.value).then(done,()=>fallbackCopy(ta.value,done)); }
  else fallbackCopy(ta.value,done);
}
function importSyncForm(){
  showModal('<div class="sheet-head"><h3>粘贴同步码导入</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>把另一台设备生成的同步码粘贴到这里</label>'
    +'<textarea id="syncIn" style="min-height:140px;font-size:11px;word-break:break-all" placeholder="粘贴同步码…"></textarea></div>'
    +'<button class="btn" onclick="doImportSync()">导入（覆盖当前数据）</button>'
    +'<p style="font-size:11px;color:#9AA092;margin-top:8px">导入会用同步码的数据覆盖本设备当前数据，重要数据建议先备份。</p>');
}
function doImportSync(){
  const v=document.getElementById("syncIn").value.trim();
  if(!v){ toast("请先粘贴同步码"); return; }
  try{
    const d=JSON.parse(decodeURIComponent(escape(atob(v))));
    if(!d.students||!d.records) throw new Error("bad");
    if(confirm("导入会覆盖当前所有数据，确定继续吗？")){
      DB=d; save(); closeModal(); toast("导入成功，数据已同步"); switchView("home");
    }
  }catch(e){ toast("同步码不对，请检查是否复制完整"); }
}
function exportData(){
  const blob=new Blob([JSON.stringify(DB)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="班主任工作台备份_"+todayStr()+".json";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  toast("备份文件已生成");
}
function importData(inp){
  const f=inp.files[0];
  if(!f) return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const d=JSON.parse(reader.result);
      if(!d.students||!d.records) throw new Error("bad");
      if(confirm("导入会覆盖当前所有数据，确定继续吗？")){
        DB=d; save(); toast("数据已恢复"); switchView("home");
      }
    }catch(e){ toast("文件格式不对，请选择备份文件"); }
    inp.value="";
  };
  reader.readAsText(f);
}
function clearAll(){
  if(confirm("真的要清空所有学生和记录吗？此操作无法撤销！")){
    if(confirm("最后确认：确定清空？")){ DB={students:[],records:[]}; save(); toast("已清空"); switchView("home"); }
  }
}

/* ========== 云端同步（腾讯云对象存储 COS） ========== */
const CLOUD_CONF_KEY="bzr_cloud_conf";
let cloudConf=null, cosClient=null;
function loadCloudConf(){ try{ cloudConf=JSON.parse(localStorage.getItem(CLOUD_CONF_KEY)); }catch(e){ cloudConf=null; } return cloudConf; }
function saveCloudConf(c){ cloudConf=c; localStorage.setItem(CLOUD_CONF_KEY, JSON.stringify(c)); }
function cloudInit(){
  if(!cloudConf||!cloudConf.bucket||!cloudConf.region) return false;
  if(!window.COS){ toast("云端组件没加载出来，请检查网络后重试"); return false; }
  try{
    if(!cosClient){ cosClient=new COS({ SecretId: cloudConf.secretId, SecretKey: cloudConf.secretKey }); }
    return true;
  }catch(e){ return false; }
}

function showCloudConf(){
  const c=loadCloudConf()||{};
  showModal('<div class="sheet-head"><h3>配置云端（COS）</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>存储桶名称（Bucket）</label><input id="ccBucket" value="'+esc(c.bucket||"")+'" placeholder="如 banzhuren-data-1472889621"></div>'
    +'<div class="form-row"><label>地域（Region）</label><input id="ccRegion" value="'+esc(c.region||"")+'" placeholder="如 ap-guangzhou（广州）"></div>'
    +'<div class="form-row"><label>SecretId</label><input id="ccSid" value="'+esc(c.secretId||"")+'" placeholder="AKID 开头的那串"></div>'
    +'<div class="form-row"><label>SecretKey</label><div style="display:flex;gap:6px"><input id="ccSkey" type="password" value="'+esc(c.secretKey||"")+'" placeholder="32位随机字符"><button class="btn small ghost" type="button" onclick="toggleReveal(\'ccSkey\')">显示</button></div></div>'
    +'<button class="btn" onclick="saveCloudConf2()">保存并连接</button>'
    +'<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">'
    +'<button class="btn small ghost" type="button" onclick="copyCloudConf()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="12" cy="12" r="6" fill="#FFFFFF"/><path d="M12 8.5 V12 L14.5 13.5" fill="none" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg> 复制配置（发微信）</button>'
    +'<button class="btn small ghost" type="button" onclick="pasteCloudConf()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M8 6 H13 L16 9 V18 H8 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M13 6 V9 H16" fill="none" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M10 11 H14 M10 14 H14" stroke="#8A9E68" stroke-width="1.3" stroke-linecap="round"/></svg> 从文本导入</button>'
    +'</div>'
    +'<p style="font-size:11px;color:#7A7E6E;margin-top:8px">存储桶和密钥都在腾讯云控制台。密钥是数据保险柜的钥匙，别发给别人。换手机时：本机点"复制配置"发微信给自己，手机上打开本页点"从文本导入"即可，不用手敲密钥。</p>');
}
function toggleReveal(id){
  const el=document.getElementById(id);
  if(!el) return;
  el.type = el.type==="password" ? "text" : "password";
}
function copyCloudConf(){
  const c=loadCloudConf()||{};
  if(!c.bucket||!c.secretId||!c.secretKey){ toast("请先在本机填好并保存云端配置"); return; }
  const txt="班主云端配置\nBucket: "+c.bucket+"\nRegion: "+c.region+"\nSecretId: "+c.secretId+"\nSecretKey: "+c.secretKey;
  fallbackCopy(txt, ()=>toast("已复制，去微信发给自己，手机上点\"从文本导入\""));
}
function pasteCloudConf(){
  showModal('<div class="sheet-head"><h3>从文本导入云端配置</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>把电脑端"复制配置"得到的文本粘贴到这里</label>'
    +'<textarea id="ccPaste" style="min-height:120px;font-size:11px;word-break:break-all" placeholder="粘贴班主云端配置文本…"></textarea></div>'
    +'<button class="btn" onclick="doImportCloudConf()">解析并保存</button>'
    +'<p style="font-size:11px;color:#7A7E6E;margin-top:8px">导入后会用这段文本里的配置覆盖本机云端设置。</p>');
}
function doImportCloudConf(){
  const v=document.getElementById("ccPaste").value;
  const g=(k)=>{ const m=v.match(new RegExp(k+"\\:\\s*([^\\n]+)")); return m?m[1].trim():""; };
  const bucket=g("Bucket"), region=g("Region"), secretId=g("SecretId"), secretKey=g("SecretKey");
  if(!bucket||!secretId||!secretKey){ toast("没找到完整配置，请检查是否复制完整"); return; }
  saveCloudConf({bucket:bucket, region:region||"ap-guangzhou", secretId:secretId, secretKey:secretKey});
  if(!cloudInit()){ toast("配置有误，请检查"); return; }
  closeModal(); toast("配置已保存，点\"从云端下载\"即可"); renderMine();
}
function saveCloudConf2(){
  const bucket=document.getElementById("ccBucket").value.trim();
  const region=document.getElementById("ccRegion").value.trim();
  const secretId=document.getElementById("ccSid").value.trim();
  const secretKey=document.getElementById("ccSkey").value.trim();
  if(!bucket||!region){ toast("请填写存储桶名称和地域"); return; }
  if(!secretId||!secretKey){ toast("请填写 SecretId 和 SecretKey"); return; }
  saveCloudConf({bucket:bucket, region:region, secretId:secretId, secretKey:secretKey});
  if(!cloudInit()){ toast("配置有误，请检查"); return; }
  closeModal(); toast("配置已保存"); renderMine();
}

let cloudPushTimer=null;
function scheduleCloudPush(){ if(cloudPushTimer) clearTimeout(cloudPushTimer); cloudPushTimer=setTimeout(()=>cloudPush(false),2500); }
function cloudPush(force){
  if(!cloudConf||!cloudConf.bucket) return;
  if(!cloudInit()){ if(force) toast("请先配置云端"); return; }
  const dataStr=JSON.stringify(DB);
  cosClient.putObject({ Bucket: cloudConf.bucket, Region: cloudConf.region, Key: "data.json", Body: dataStr }, (err)=>{
    if(err){
      console.log("cloudPush error", err);
      if(force) toast("上传失败："+(err.message||"网络问题，请检查密钥和跨域设置"));
    }else{
      setCloudStatus("✓ 已同步");
    }
  });
}
function cosBodyToText(body, cb){
  if(typeof body==="string"){ cb(body); return; }
  if(body instanceof Blob){
    const r=new FileReader();
    r.onload=()=>cb(r.result);
    r.readAsText(body);
  }else if(body&&body.toString){ cb(body.toString("utf-8")); }
  else cb(null);
}
function cloudPull(){
  if(!cloudInit()){ toast("请先配置云端"); return; }
  cosClient.getObject({ Bucket: cloudConf.bucket, Region: cloudConf.region, Key: "data.json" }, (err, data)=>{
    if(err){
      if(err.code==="NoSuchKey"){ toast("云端还没有数据（先在本机保存一次，再点同步到云端）"); return; }
      toast("下载失败："+(err.message||"网络问题")); return;
    }
    cosBodyToText(data.Body, (text)=>{
      if(!text){ toast("云端数据读取失败"); return; }
      try{
        const remote=JSON.parse(text);
        if(!remote||!remote.students||!remote.records) throw new Error("bad");
        const localCount=DB.students.length+DB.records.length;
        const remoteCount=remote.students.length+remote.records.length;
        if(confirm("本机现有 "+localCount+" 条数据，云端有 "+remoteCount+" 条。\n\n用云端覆盖本机，确定吗？（建议先点\"同步到云端\"把本机最新的传上去）")){
          DB=remote; save(); toast("已从云端下载"); switchView("home");
        }
      }catch(e){ toast("云端数据格式不对，无法导入"); }
    });
  });
}
function setCloudStatus(msg){ const el=document.getElementById("cloudStatus"); if(el) el.textContent=msg; }

function cloudSection(){
  const conf=loadCloudConf();
  if(!conf||!conf.bucket){
    return '<div class="section-title">云端同步（多设备共享）</div>'
      +'<div class="card"><div class="empty">还没配置云端<br><button class="btn" style="margin-top:10px" onclick="showCloudConf()">配置云端</button></div></div>';
  }
  return '<div class="section-title">云端同步（多设备共享）</div>'
    +'<div class="card">'
    +'<div class="rec-top"><span class="rec-type">云端：'+esc(conf.bucket)+'</span><span id="cloudStatus" style="font-size:12px;color:#4E7C5E"></span></div>'
    +'<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">'
    +'<button class="btn small ghost" onclick="cloudPush(true)">同步到云端</button>'
    +'<button class="btn small ghost" onclick="cloudPull()">从云端下载</button>'
    +'<button class="btn small ghost" onclick="showCloudConf()">修改配置</button>'
    +'</div>'
    +'<p style="font-size:11px;color:#7A7E6E;margin-top:8px">每次保存记录会自动上传云端；多台设备填同样的配置即可共享数据。换手机前先点一次"同步到云端"。</p>'
    +'</div>';
}

function renderCloudSection(){
  const box=document.getElementById("cloudSectionBox");
  if(box) box.innerHTML=cloudSection();
}

/* ========== 题库版块 ========== */
let ticketQuery="", ticketGrade="", ticketTopic="";
const GRADES=["七年级","八年级","九年级","高一","高二","高三"];
function renderTicketsHtml(){
  const kw=ticketQuery.trim();
  const list=DB.tickets.filter(t=>{
    if(ticketGrade&&t.grade!==ticketGrade) return false;
    if(ticketTopic&&!(t.topic||"").includes(ticketTopic)) return false;
    if(!kw) return true;
    return (t.question||"").includes(kw)||(t.topic||"").includes(kw)||(t.grade||"").includes(kw)||(t.answer||"").includes(kw);
  });
  let html='<button class="btn" onclick="addTicketForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg> 收录新题目</button>';
  html+='<div class="section-title">筛选</div><div class="filter-row">'
    +'<select id="tGrade" onchange="ticketGrade=this.value;renderTickets()"><option value="">全部年级</option>'+GRADES.map(g=>'<option'+(g===ticketGrade?" selected":"")+'>'+g+'</option>').join("")+'</select>'
    +'<select id="tTopicSel" onchange="ticketTopic=this.value;renderTickets()"><option value="">全部知识点</option>'+ticketTopicOptions()+'</select></div>';
  html+='<div class="search-wrap"><input placeholder="搜题干/知识点关键词…" value="'+esc(ticketQuery)+'" oninput="ticketQuery=this.value;renderTickets()"></div>';
  html+='<div class="section-title">题目库（'+list.length+' 题）</div>';
  if(!list.length){ html+='<div class="card"><div class="empty">还没有收录题目，点上面"收录新题目"开始</div></div>'; }
  else{
    html+=list.map(t=>{
      const topicTags=(t.topic||"").split(/[,，]/).filter(Boolean).map(x=>'<span class="tag amber">'+esc(x)+'</span>').join("");
      return '<div class="ticket-item">'
        +'<div class="ticket-meta"><span class="tag">'+esc(t.grade||"")+'</span>'+topicTags+'<span class="tag gray">'+esc(t.createdAt||"")+'</span></div>'
        +'<h4>'+esc(t.question)+'</h4>'
        +(t.img?'<img class="ticket-img" src="'+esc(t.img)+'" onclick="window.open(\''+esc(t.img)+'\')">':"")
        +(t.answer?'<div class="ticket-ans"><b>答案：</b>'+esc(t.answer)+'</div>':"")
        +'<div class="ticket-ops">'
        +'<button class="btn small ghost" onclick="copyTicket(this)" data-q="'+esc(t.question)+'">复制题干</button>'
        +'<button class="btn small ghost" onclick="delTicket(\''+t.id+'\')">删除</button>'
        +'</div></div>';
    }).join("");
  }
  return html;
}
function ticketTopicOptions(){
  const set={};
  DB.tickets.forEach(t=>(t.topic||"").split(/[,，]/).filter(Boolean).forEach(x=>set[x]=1));
  return Object.keys(set).map(x=>'<option'+(x===ticketTopic?" selected":"")+'>'+esc(x)+'</option>').join("");
}
function addTicketForm(){
  showModal('<div class="sheet-head"><h3>收录新题目</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>年级</label><select id="tkGrade">'+GRADES.map(g=>'<option>'+g+'</option>').join("")+'</select></div>'
    +'<div class="form-row"><label>知识点（多个用逗号隔开）</label><input id="tkTopic" placeholder="如：一次函数，图像性质"></div>'
    +'<div class="form-row"><label>题目截图（选填）</label><input type="file" id="tkImg" class="file-input" accept="image/*" onchange="previewTicketImg(this)">'
    +'<div class="upload-note">上传截图后点"识别截图文字"自动提取题干；原图会保留在题目里</div>'
    +'<img id="tkImgPrev" class="up-img" style="display:none">'
    +'<div id="ocrStatus" style="font-size:12px;color:#ACC18B;margin-top:4px"></div>'
    +'<button class="btn small ghost" style="margin-top:6px" onclick="ocrTicketImg()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><circle cx="10.5" cy="10.5" r="4.5" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M14 14 L18 18" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg> 识别截图文字</button></div>'
    +'<div class="form-row"><label>题干（识别后可修改补充）</label><textarea id="tkQ" style="min-height:100px" placeholder="题目内容（可手动输入，或用截图自动识别）"></textarea></div>'
    +'<div class="form-row"><label>答案/解析（选填）</label><textarea id="tkA" placeholder="答案或解析，可留空"></textarea></div>'
    +'<button class="btn" onclick="saveTicket()">保存题目</button>');
}
function previewTicketImg(input){
  const f=input.files[0];
  if(!f) return;
  const img=document.getElementById("tkImgPrev");
  img.src=URL.createObjectURL(f); img.style.display="block";
}
/* OCR 库按需懒加载：只有点"识别文字"时才去下载，不拖累每次打开的速度 */
let _tesseractPromise=null;
let _xlsxPromise=null;
function ensureXLSX(){
  if(typeof XLSX!=='undefined') return Promise.resolve();
  if(_xlsxPromise) return _xlsxPromise;
  _xlsxPromise=new Promise((resolve,reject)=>{
    const s=document.createElement("script");
    s.src="xlsx.js";
    s.onload=()=>resolve();
    s.onerror=()=>{ _xlsxPromise=null; reject(new Error("Excel组件下载失败")); };
    document.body.appendChild(s);
  });
  return _xlsxPromise;
}
function ensureTesseract(){
  if(window.Tesseract) return Promise.resolve();
  if(_tesseractPromise) return _tesseractPromise;
  _tesseractPromise=new Promise((resolve,reject)=>{
    const s=document.createElement("script");
    s.src="ocr/tesseract.min.js";
    s.onload=()=>resolve();
    s.onerror=()=>{ _tesseractPromise=null; reject(new Error("OCR组件下载失败")); };
    document.body.appendChild(s);
  });
  return _tesseractPromise;
}
async function ocrTicketImg(){
  const input=document.getElementById("tkImg");
  const file=input.files[0];
  if(!file){ toast("请先选择截图"); return; }
  const st=document.getElementById("ocrStatus");
  st.textContent="正在加载识别组件（首次需几秒）…";
  try{
    await ensureTesseract();
  }catch(e){
    st.textContent="识别组件下载失败，请检查网络后重试，或手动填写";
    return;
  }
  if(!window.Tesseract){ st.textContent="识别组件未就绪，请重试或手动填写"; return; }
  st.textContent="正在识别文字，请稍等（首次约10秒）…";
  try{
    const worker=await Tesseract.createWorker("chi_sim", 1, {
      workerPath:"ocr/worker.min.js",
      langPath:"ocr",
      corePath:"ocr/tesseract-core.wasm.js"
    });
    const { data }=await worker.recognize(file);
    await worker.terminate();
    const text=(data.text||"").replace(/\n{3,}/g,"\n\n").trim();
    if(!text){ st.textContent="没识别出文字，可能图片不清晰，可手动填写"; return; }
    document.getElementById("tkQ").value=text;
    st.textContent="识别完成，已填入题干（可修改）";
    toast("识别完成");
  }catch(e){
    st.textContent="识别失败，请手动填写："+(e.message||"未知错误");
    console.log("OCR error", e);
  }
}
function saveTicket(){
  const grade=document.getElementById("tkGrade").value;
  const topic=document.getElementById("tkTopic").value.trim();
  const question=document.getElementById("tkQ").value.trim();
  if(!question){ toast("题干不能为空"); return; }
  const answer=document.getElementById("tkA").value.trim();
  const imgInput=document.getElementById("tkImg");
  const finalize=(imgUrl)=>{
    DB.tickets.push({id:uid(), grade:grade, topic:topic, question:question, answer:answer, img:imgUrl||"", createdAt:todayStr()});
    save(); closeModal(); toast("题目已收录"); renderTickets();
  };
  if(imgInput.files&&imgInput.files[0]){
    uploadToCos(imgInput.files[0], "tickets", (url,err)=>{
      if(err){ toast("图片上传失败："+err+"，题目已先保存（无图）"); finalize(""); return; }
      finalize(url);
    });
  }else{ finalize(""); }
}
function delTicket(id){
  if(confirm("确定删除这道题吗？")){
    DB.tickets=DB.tickets.filter(t=>t.id!==id);
    save(); toast("已删除"); renderTickets();
  }
}
function copyTicket(btn){
  const q=btn.getAttribute("data-q");
  const done=()=>toast("题干已复制");
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(q).then(done,()=>fallbackCopy(q,done)); }
  else fallbackCopy(q,done);
}

/* ========== 附件上传（存 COS） ========== */
function uploadToCos(file, dir, cb){
  if(!cloudInit()){ toast("请先在\"我的 → 配置云端\"配置云存储"); return; }
  const ext=(file.name.split(".").pop()||"bin").toLowerCase();
  const key="files/"+dir+"/"+Date.now()+"-"+Math.floor(Math.random()*9999)+"."+ext;
  cosClient.putObject({ Bucket: cloudConf.bucket, Region: cloudConf.region, Key: key, Body: file }, (err)=>{
    if(err){ cb(null, err.message||"上传失败"); return; }
    const url="https://"+cloudConf.bucket+".cos."+cloudConf.region+".myqcloud.com/"+key;
    cb(url);
  });
}

/* ========== 成绩 Excel 导入 ========== */
function importExcelForm(studentId){
  const modeHint=studentId?'表格里只需这一名学生的姓名和成绩，会自动匹配到该生档案':'表格里是全班名单，会自动按姓名匹配全班学生的档案';
  showModal('<div class="sheet-head"><h3>导入成绩（Excel）</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>考试名称（可自定义）</label><input id="ieExam" list="examList" placeholder="如：第一次月考、2026期中考试…"><datalist id="examList">'+EXAMS.map(x=>'<option value="'+x+'">')+'</datalist></div>'
    +'<div class="form-row"><label>考试时间（选填，成绩按时间倒序排列）</label><input id="ieDate" type="date" value="'+todayStr()+'"></div>'
    +'<div class="form-row"><label>选择教务系统导出的 Excel（.xlsx/.xls）</label><input type="file" id="ieFile" class="file-input" accept=".xlsx,.xls"></div>'
    +'<div class="form-row"><div class="upload-note">'+modeHint+'。表格第一行是表头，要有"姓名"列；各科成绩列名要含科目名（如 数学、语文）；排名列"班排/班序/校排/年排"等会自动识别。<br>★ 解析后先预览（科目自动按"语数英物化历道生地体"重排、排名列叫法会与你确认），确认后才写入，不会直接改数据。</div></div>'
    +'<button class="btn" onclick="parseExcelFile(\''+studentId+'\')">解析并预览</button>'
    +'<div id="ieResult" style="margin-top:10px"></div>');
}
let scoreImport=null;
let CLASS_RANK_LAST="";
function loadRankColName(){ try{ CLASS_RANK_LAST=localStorage.getItem("bzr_rank_col")||""; }catch(e){ CLASS_RANK_LAST=""; } }
function saveRankColName(name){ try{ localStorage.setItem("bzr_rank_col", name||""); }catch(e){} }
async function parseExcelFile(studentId){
  const file=document.getElementById("ieFile").files[0];
  if(!file){ toast("请先选择 Excel 文件"); return; }
  try{ await ensureXLSX(); }catch(e){ toast("Excel 组件加载失败，请刷新页面后重试"); return; }
  const exam=document.getElementById("ieExam").value.trim();
  if(!exam){ toast("请填写考试名称"); return; }
  const examDate=document.getElementById("ieDate").value||todayStr();
  const reader=new FileReader();
  reader.onload=(e)=>{
    try{
      const wb=XLSX.read(new Uint8Array(e.target.result), {type:"array"});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws, {header:1, defval:""});
      if(!rows.length){ toast("表格是空的"); return; }
      const head=rows[0].map(h=>String(h).trim());
      const nameIdx=head.findIndex(h=>/姓名|名字|学生/.test(h));
      if(nameIdx<0){ toast("没找到\"姓名\"列，请确认第一行表头里有姓名列"); return; }
      /* 识别科目列、排名列、总分列 */
      const subCols=[], classRankIdx=-1, gradeRankIdx=-1;
      const classRankCols=[], gradeRankCols=[];
      head.forEach((h,i)=>{
        if(i===nameIdx||!h) return;
        if(CLASS_RANK_RE.test(h)){ classRankCols.push({idx:i, name:h}); return; }
        if(GRADE_RANK_RE.test(h)){ gradeRankCols.push({idx:i, name:h}); return; }
        if(/总分|总成绩|总评/.test(h)) return;
        if(/^\d+$/.test(h)) return;
        if(SUBJECTS.includes(stdSubject(h))) subCols.push({idx:i, name:stdSubject(h)});
      });
      if(!subCols.length){ toast("没找到科目列（列名需含科目名，如 数学、语文）"); return; }
      const classRankCol=classRankCols[0]||null, gradeRankCol=gradeRankCols[0]||null;
      /* 解析每行 */
      const items=[];
      const stuId=studentId||null;
      const targets1=stuId?getStudent(stuId):null;
      for(let r=1;r<rows.length;r++){
        const name=String(rows[r][nameIdx]||"").trim().replace(/\s+/g,"");
        if(!name) continue;
        const stu=stuId?(targets1&&targets1.name===name?targets1:null):DB.students.find(s=>s.name===name);
        if(!stu) continue;
        const scores={};
        let hasScore=false;
        subCols.forEach(sc=>{
          const v=roundScore(rows[r][sc.idx]);
          if(v!==null){ scores[sc.name]=v; hasScore=true; }
        });
        if(!hasScore) continue;
        const classRank=classRankCol?roundScore(rows[r][classRankCol.idx]):null;
        const gradeRank=gradeRankCol?roundScore(rows[r][gradeRankCol.idx]):null;
        items.push({name:name, stu:stu, scores:scores, classRank:classRank, gradeRank:gradeRank});
      }
      scoreImport={exam:exam, examDate:examDate, items:items, subCols:subCols, classRankCol:classRankCol, gradeRankCol:gradeRankCol, studentId:studentId};
      renderScoreImportPreview();
    }catch(err){ toast("解析失败："+err.message); }
  };
  reader.readAsArrayBuffer(file);
}
function renderScoreImportPreview(){
  const p=scoreImport;
  if(!p) return;
  loadRankColName();
  const subs=orderedSubjects(p.subCols.map(s=>s.name));
  let html='<div class="card" style="margin-top:10px;background:#F4F6EF">'
    +'<div class="section-title" style="margin-top:0">导入预览</div>'
    +'<div class="pv-group pv-up"><b>考试：</b>'+esc(p.exam)+'　<b>时间：</b>'+esc(p.examDate)+'</div>'
    +'<div class="pv-group pv-new"><b>匹配学生：</b>'+p.items.length+' 人</div>'
    +'<div class="pv-group pv-up"><b>科目列（'+subs.length+'科，已按"语数英物化历道生地体"顺序）：</b>'+subs.map(esc).join("、")+'</div>';
  if(p.classRankCol){
    const flag=p.classRankCol.name===CLASS_RANK_LAST?'（与上次导入叫法一致）':'（本次叫法与之前可能不同）';
    html+='<div class="pv-group pv-dup"><b>班级排名列：</b>检测到「'+esc(p.classRankCol.name)+'」→ 将按「<b>班排</b>」保存。'+flag+'<br><span style="font-size:11px">（不同考试排名列叫法不同没关系，平台统一按"班排/校排"记录，展示、导出只显示"班排"）</span></div>';
  }
  if(p.gradeRankCol){
    html+='<div class="pv-group pv-dup"><b>年级排名列：</b>检测到「'+esc(p.gradeRankCol.name)+'」→ 将按「<b>校排</b>」保存。</div>';
  }
  html+='<button class="btn" style="margin-top:10px" onclick="confirmScoreImport()">确认导入（'+p.items.length+'名学生 / '+subs.length+'科）</button>';
  html+='</div>';
  document.getElementById("ieResult").innerHTML=html;
}
function confirmScoreImport(){
  const p=scoreImport;
  if(!p) return;
  let added=0, updated=0;
  p.items.forEach(it=>{
    Object.keys(it.scores).forEach(sub=>{
      const score=roundScore(it.scores[sub]);
      const exist=DB.records.find(r=>r.type==="score"&&r.studentId===it.stu.id&&r.detail.exam===p.exam&&r.detail.subject===sub);
      if(exist){
        exist.detail.score=score;
        exist.detail.examDate=p.examDate;
        exist.detail.imported=true;
        if(it.classRank!==null) exist.detail.classRank=it.classRank;
        if(it.gradeRank!==null) exist.detail.gradeRank=it.gradeRank;
        updated++;
      }else{
        const detail={exam:p.exam, subject:sub, score:score, date:p.examDate, examDate:p.examDate, imported:true};
        if(it.classRank!==null) detail.classRank=it.classRank;
        if(it.gradeRank!==null) detail.gradeRank=it.gradeRank;
        DB.records.push({id:uid(), studentId:it.stu.id, type:"score", date:p.examDate, detail:detail});
        added++;
      }
    });
  });
  save();
  if(p.classRankCol) saveRankColName(p.classRankCol.name);
  document.getElementById("ieResult").innerHTML='<div class="eval-box">导入完成：新增 <b>'+added+'</b> 条成绩，更新 <b>'+updated+'</b> 条（同考试同科目自动覆盖，不重复）。<br>班级排名统一按"班排"、年级排名按"校排"记录。</div>';
  toast("成绩导入完成");
  scoreImport=null;
}

/* ========== 成绩对比分析 ========== */
function examListOf(studentId){
  const set={};
  getRecords(studentId).filter(r=>r.type==="score").forEach(r=>set[r.detail.exam]=1);
  return Object.keys(set);
}
function openCompare(studentId){
  const exams=examListOf(studentId);
  if(exams.length<2){ toast("至少要有两次考试的成绩才能对比"); return; }
  showModal('<div class="sheet-head"><h3>成绩对比分析</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>考试A（较早那次）</label><select id="cmpA">'+exams.map(x=>'<option>'+esc(x)+'</option>').join("")+'</select></div>'
    +'<div class="form-row"><label>考试B（较晚那次）</label><select id="cmpB">'+[...exams].reverse().map(x=>'<option>'+esc(x)+'</option>').join("")+'</select></div>'
    +'<button class="btn" onclick="renderCompare(\''+studentId+'\')">开始对比</button>'
    +'<div id="cmpResult" style="margin-top:12px"></div>');
}
function renderCompare(studentId){
  const a=document.getElementById("cmpA").value;
  const b=document.getElementById("cmpB").value;
  if(a===b){ toast("两次考试要选不同的"); return; }
  const recs=getRecords(studentId).filter(r=>r.type==="score");
  const subs=orderedSubjects([...new Set(recs.map(r=>r.detail.subject))]);
  const rows=subs.map(sub=>{
    const sa=recs.find(r=>r.detail.exam===a&&r.detail.subject===sub);
    const sb=recs.find(r=>r.detail.exam===b&&r.detail.subject===sub);
    if(!sa||!sb) return null;
    return {sub:sub, a:sa.detail.score, b:sb.detail.score, d:sb.detail.score-sa.detail.score};
  }).filter(Boolean);
  let html='<div class="card" style="margin-top:0"><h3>'+esc(a)+' → '+esc(b)+'</h3>';
  if(!rows.length){ html+='<div class="empty">这两次考试没有相同科目的成绩可比</div>'; }
  else{
    rows.forEach(row=>{
      const cls=row.d>0?"up":(row.d<0?"down":"flat");
      const delta=(row.d>0?"+":"")+row.d;
      html+='<div class="cmp-row"><span class="cmp-sub">'+esc(row.sub)+'</span>'
        +'<div class="cmp-bars"><div class="cmp-bar" style="height:'+Math.min(100,row.a)+'%;background:#D8EAB0"></div><div class="cmp-bar" style="height:'+Math.min(100,row.b)+'%;background:#ACC18B"></div></div>'
        +'<span class="cmp-delta '+cls+'">'+esc(row.a)+'→'+esc(row.b)+'（'+delta+'）</span></div>';
    });
    html+='<div style="font-size:11px;color:#9AA092;margin-top:4px">浅蓝='+esc(a)+'　深蓝='+esc(b)+'　绿色=进步　红色=退步</div>';
    html+='<button class="btn" style="margin-top:10px" onclick="evalByExam(\''+studentId+'\',\''+esc(a).replace(/'/g,"\\'")+'\',\''+esc(b).replace(/'/g,"\\'")+'\')">生成总结评价</button>';
    html+='<div id="evalOut"></div>';
  }
  html+='</div>';
  document.getElementById("cmpResult").innerHTML=html;
}
function evalByExam(studentId, examA, examB){
  const stu=getStudent(studentId);
  if(!stu){ toast("学生数据异常"); return; }
  const recs=getRecords(studentId).filter(r=>r.type==="score");
  const subs=orderedSubjects([...new Set(recs.map(r=>r.detail.subject))]);
  const diffs=subs.map(sub=>{
    const a=recs.find(r=>r.detail.exam===examA&&r.detail.subject===sub);
    const b=recs.find(r=>r.detail.exam===examB&&r.detail.subject===sub);
    return a&&b?{sub:sub,d:b.detail.score-a.detail.score}:null;
  }).filter(Boolean);
  const ups=diffs.filter(d=>d.d>0), downs=diffs.filter(d=>d.d<0), flats=diffs.filter(d=>d.d===0);
  const sDateA=recs.filter(r=>r.detail.exam===examA).map(r=>r.date).sort()[0]||"";
  const sDateB=recs.filter(r=>r.detail.exam===examB).map(r=>r.date).sort().slice(-1)[0]||"";
  const between=getRecords(studentId).filter(r=>r.type!=="score"&&(!sDateA||r.date>=sDateA)&&(!sDateB||r.date<=sDateB));
  const betweenStr=between.length?between.map(r=>recTypeName(r.type)+"("+r.date+(r.type==="violation"?"·"+r.detail.subtype:"")+")").join("、"):"无记录";
  const tags=stu.tags&&stu.tags.length?stu.tags.join("、"):"未标注";
  let t="【"+stu.name+" 成绩分析："+examA+" vs "+examB+"】\n";
  t+="\n一、成绩变化：\n";
  if(ups.length) t+="进步科目："+ups.map(u=>u.sub+"（+"+u.d+"分）").join("、")+"。\n";
  if(downs.length) t+="退步科目："+downs.map(d=>d.sub+"（"+d.d+"分）").join("、")+"。\n";
  if(flats.length) t+="持平科目："+flats.map(f=>f.sub).join("、")+"。\n";
  t+="\n二、过程回顾（两场考试之间的记录）："+betweenStr+"。\n";
  t+="\n三、综合判断：\n";
  if(!downs.length) t+="本次考试全面进步或持平，说明这段时间的学习状态是积极的，需保持并巩固。";
  else if(ups.length>=downs.length) t+="总体稳中有升，但"+downs.map(d=>d.sub).join("、")+"出现波动，说明存在知识漏洞或状态起伏，需针对性补强。";
  else t+="本次整体下滑，尤其在"+downs.map(d=>d.sub).join("、")+"，需要高度重视：先找原因（听课、作业、家庭、情绪），再对症下药。";
  t+="\n\n四、改进建议（建议与"+stu.name+"当面沟通后执行）：\n";
  t+="1. 退步科目：每天额外10分钟专项练习，每周找科任老师问一次错题；\n";
  t+="2. 进步科目：在班上点名表扬一次，帮他巩固信心；\n";
  t+="3. 结合他的特点（"+tags+"）：若为留守/单亲，多给情绪关注，避免只谈成绩；\n";
  t+="4. 两周后复查一次成绩或作业情况，看看改进是否见效。";
  const box=document.getElementById("evalOut");
  if(box) box.innerHTML='<div class="eval-box">'+esc(t)+'</div><button class="btn ghost" style="margin-top:8px" onclick="copyEval(this)" data-t="'+esc(t).replace(/"/g,"&quot;")+'">复制评价</button>';
}
function copyEval(btn){
  const t=btn.getAttribute("data-t");
  const done=()=>toast("评价已复制");
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(t).then(done,()=>fallbackCopy(t,done)); }
  else fallbackCopy(t,done);
}

/* ========== 违纪处理反馈 ========== */
function feedbackForm(recordId){
  const r=DB.records.find(x=>x.id===recordId);
  if(!r) return;
  const isViol=r.type==="violation";
  showModal('<div class="sheet-head"><h3>记录我的处理反馈</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>我采取的做法（文字描述）</label><textarea id="fbText" style="min-height:80px" placeholder="例如：周一课间单独谈话40分钟，他承认是受同学怂恿，已约定周五前主动道歉…"></textarea></div>'
    +(isViol?'<div class="form-row"><label>同时记录为（与违纪联动，会自动在该生档案生成对应记录）</label><div class="chk-group"><label class="chk"><input type="checkbox" id="fbTalk"> 谈话</label><label class="chk"><input type="checkbox" id="fbContact"> 家校联系</label></div></div>':'')
    +'<div class="form-row"><label>附加材料（图片/录音，可多选）</label><input type="file" id="fbFiles" class="file-input" multiple accept="image/*,audio/*"><div class="upload-note">支持图片和 mp3/m4a 录音，自动存到云存储</div></div>'
    +'<button class="btn" onclick="saveFeedback(\''+recordId+'\')">保存反馈</button>');
}
function saveFeedback(recordId){
  const r=DB.records.find(x=>x.id===recordId);
  if(!r){ toast("记录不存在"); return; }
  const text=document.getElementById("fbText").value.trim();
  const files=[...document.getElementById("fbFiles").files];
  if(!text&&!files.length){ toast("写点内容或选个文件吧"); return; }
  const fb={time:todayStr(), text:text, files:[]};
  const finish=()=>{
    if(!r.detail.feedback) r.detail.feedback=[];
    r.detail.feedback.push(fb);
    if(r.detail.status!=="已处理"&&r.type==="violation") r.detail.status="已处理";
    let linked=[];
    if(r.type==="violation"){
      const wt=document.getElementById("fbTalk"), wc=document.getElementById("fbContact");
      if(wt&&wt.checked){ ensureLinkedRecord(r,"talk",text); linked.push("谈话"); }
      if(wc&&wc.checked){ ensureLinkedRecord(r,"contact",text); linked.push("家校联系"); }
    }
    save(); closeModal();
    toast(linked.length?("反馈已记录，并联动生成"+linked.join("、")+"记录"):"反馈已记录");
    if(navStack.length){ renderDetail(curStudentId); } else { renderRecords(); }
  };
  if(!files.length){ finish(); return; }
  let pending=files.length, errs=0;
  files.forEach(f=>{
    uploadToCos(f, "feedback", (url,err)=>{
      if(err){ errs++; }
      else{ fb.files.push({name:f.name, url:url}); }
      pending--;
      if(pending===0){
        if(errs===files.length){ toast("附件上传失败，请检查云端配置"); return; }
        finish();
      }
    });
  });
}
function ensureLinkedRecord(srcRec, kind, fbText){
  if(!srcRec) return;
  const exists=DB.records.some(x=>x.type===kind&&x.studentId===srcRec.studentId&&x.detail&&x.detail.fromViolation===srcRec.id);
  if(exists) return;
  const base="（由违纪记录《"+(srcRec.detail.subtype||"违纪")+"》处理反馈联动生成）";
  const rec={id:uid(), studentId:srcRec.studentId, type:kind, date:todayStr(), detail:{}};
  if(kind==="talk"){
    rec.detail={reason:"违纪处理谈话", content:(fbText?fbText+"\n":"")+base, follow:"", files:[], fromViolation:srcRec.id};
  }else{
    rec.detail={channel:"违纪处理家校联系", content:(fbText?fbText+"\n":"")+base, files:[], fromViolation:srcRec.id};
  }
  DB.records.push(rec);
}
function filesHtml(files){
  if(!files||!files.length) return "";
  return '<div class="fb-files">'+files.map(x=>{
    const n=(x.name||"").toLowerCase();
    if(/\.(png|jpe?g|gif|webp)$/.test(n)) return '<img class="fb-img" src="'+esc(x.url)+'" onclick="openImagePreview(\''+esc(x.url)+'\',\''+esc(x.name||"图片")+'\')">';
    if(/\.(mp3|m4a|wav|aac|ogg)$/.test(n)) return '<div class="fb-audio"><audio controls preload="none" src="'+esc(x.url)+'"></audio><button class="btn small ghost" onclick="downloadFile(\''+esc(x.url)+'\',\''+esc(x.name||"录音")+'\')">下载录音</button></div>';
    return '<a class="link-btn" href="'+esc(x.url)+'" target="_blank" onclick="event.stopPropagation()">'+esc(x.name)+'</a>';
  }).join("")+'</div>';
}
function openImagePreview(url,name){
  showModal('<div class="img-prev"><img src="'+esc(url)+'" style="max-width:92%;max-height:70vh;border-radius:8px;display:block">'
    +'<div class="prev-actions"><button class="btn small ghost" onclick="downloadFile(\''+esc(url)+'\',\''+esc(name)+'\')">下载图片</button><button class="btn small" onclick="closeModal()">关闭</button></div></div>');
}
function downloadFile(url,name){
  const a=document.createElement("a"); a.href=url; if(name) a.download=name;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}
function feedbackHtml(r){
  const fb=r.detail.feedback;
  if(!fb||!fb.length) return "";
  return '<div class="fb-list">'+fb.map(f=>{
    return '<div class="fb-item"><div class="fb-time">处理反馈 · '+esc(f.time)+'</div>'+(f.text?'<div>'+esc(f.text)+'</div>':"")+filesHtml(f.files)+'</div>';
  }).join("")+'</div>';
}

/* ========== 待办事项 ========== */
let todoShowDone=false;
let todoDonePage=1;
function todoSection(){
  return '<div class="card" style="padding:10px 14px"><details open><summary class="fold-title"><svg viewBox="0 0 24 24" class="ic"><rect x="5" y="4" width="14" height="14" rx="3" fill="#E4D58C" stroke="#C9B86A" stroke-width="1.5"/><path d="M8 9 H16 M8 12 H16 M8 15 H13" stroke="#8A7B3A" stroke-width="1.5" stroke-linecap="round"/><circle cx="15.5" cy="6.5" r="1.8" fill="#935855"/></svg> 待办事项 <span style="font-size:11px;color:#7A7E6E;font-weight:normal">（勾选=完成划线，不自动删）</span></summary>'
    +'<div style="display:flex;gap:6px;margin:8px 0"><input id="todoInput" placeholder="添加待办，如：周五前交安全教育平台" style="flex:1;padding:9px 12px;border:1px solid #E2E8D8;border-radius:10px;font-size:13px;outline:none;font-family:inherit" onkeydown="if(event.key===\'Enter\')addTodo()"><button class="btn small" onclick="addTodo()">添加</button></div>'
    +todoListHtml()+'</details></div>';
}
function todoListHtml(){
  const list=[...DB.todos].sort((a,b)=>(a.done?1:0)-(b.done?1:0));
  if(!list.length) return '<div class="empty" style="padding:12px 0">暂无待办，上面添加一条</div>';
  const pending=list.filter(t=>!t.done);
  const done=[...list.filter(t=>t.done)].sort((a,b)=>(b.doneAt||0)-(a.doneAt||0));
  let html='<div class="todo-list">'+pending.map(t=>
    '<div class="todo-item"><label style="display:flex;align-items:center;gap:8px;flex:1;cursor:pointer"><input type="checkbox" '+(t.done?"checked":"")+' onchange="toggleTodo(\''+t.id+'\')"><span>'+esc(t.text)+'</span></label><span class="del-contact" onclick="delTodo(\''+t.id+'\')"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></span></div>'
  ).join("")+'</div>';
  if(done.length){
    const PER=20;
    const total=Math.max(1, Math.ceil(done.length/PER));
    if(todoDonePage>total) todoDonePage=total;
    const slice=done.slice((todoDonePage-1)*PER, todoDonePage*PER);
    html+='<details class="todo-done"'+(todoShowDone?" open":"")+'><summary class="todo-done-sum" onclick="todoShowDone=!todoShowDone;renderHome()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#BACFA8" stroke="#4E7C5E" stroke-width="1.6"/><path d="M8 12 L11 15 L16 9" fill="none" stroke="#4E7C5E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg> 已处理 '+done.length+' 条（点击'+(todoShowDone?"收起":"展开")+'）</summary>'
      +'<div class="todo-list" style="margin-top:6px">'+slice.map(t=>
        '<div class="todo-item done"><label style="display:flex;align-items:center;gap:8px;flex:1;cursor:pointer"><input type="checkbox" '+(t.done?"checked":"")+' onchange="toggleTodo(\''+t.id+'\')"><span>'+esc(t.text)+'</span></label><span class="del-contact" onclick="delTodo(\''+t.id+'\')"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></span></div>'
      ).join("")+'</div>';
    if(done.length>PER){
      html+='<div class="todo-pager">'
        +'<button class="btn small ghost" '+(todoDonePage<=1?"disabled":"")+' onclick="todoDonePage=Math.max(1,todoDonePage-1);renderHome()">‹ 上一页</button>'
        +'<span class="todo-pager-info">第 '+todoDonePage+' / '+total+' 页（共 '+done.length+' 条）</span>'
        +'<button class="btn small ghost" '+(todoDonePage>=total?"disabled":"")+' onclick="todoDonePage=Math.min('+total+',todoDonePage+1);renderHome()">下一页 ›</button>'
        +'</div>';
    }
    html+='</details>';
  }
  return html;
}
function addTodo(){
  const inp=document.getElementById("todoInput");
  if(!inp) return;
  const text=inp.value.trim();
  if(!text){ toast("先写点内容"); return; }
  DB.todos.push({id:uid(), text:text, done:false, createdAt:todayStr()});
  save(); renderHome();
}
function toggleTodo(id){ const t=DB.todos.find(x=>x.id===id); if(t){ t.done=!t.done; if(t.done){ t.doneAt=Date.now(); todoDonePage=1; } save(); renderHome(); } }
function delTodo(id){ if(confirm("删除这条待办？")){ DB.todos=DB.todos.filter(x=>x.id!==id); save(); renderHome(); } }

/* ========== Word 档案导出 ========== */
/* ========== 学生个人档案导出（模块选择 → 预览 → 下载） ========== */
let _expSel=["info","score","comm","school","contact"];
function exportStudentDoc(stuId){
  const s=getStudent(stuId);
  if(!s){ toast("学生数据异常"); return; }
  const mods=[
    {key:"info", label:"个人信息模块"},
    {key:"score", label:"学习成绩模块"},
    {key:"comm", label:"沟通模块（谈话 / 请假）"},
    {key:"school", label:"在校记录模块（好事 / 违纪）"},
    {key:"contact", label:"家校联系模块"}
  ];
  showModal('<div class="sheet-head"><h3>导出学生个人档案</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>选择要导出的模块（可多选，默认全选）</label><div id="expMods" class="chk-group">'+mods.map(m=>'<label class="chk"><input type="checkbox" value="'+m.key+'" '+(_expSel.includes(m.key)?"checked":"")+'> '+m.label+'</label>').join("")+'</div></div>'
    +'<button class="btn" onclick="exportStudentPreview(\''+stuId+'\')">预览所选内容</button>');
}
function exportStudentPreview(stuId){
  const s=getStudent(stuId);
  if(!s) return;
  const sel=[...document.querySelectorAll("#expMods input:checked")].map(c=>c.value);
  if(!sel.length){ toast("请至少选择一个模块"); return; }
  _expSel=sel;
  const recs=getRecords(stuId);
  const inner=buildStudentDocInner(s, recs, sel, (url)=> url?'<br><img src="'+esc(url)+'" style="max-width:320px;height:auto">':"");
  showModal('<div class="sheet-head"><h3>档案预览 · '+esc(s.name)+'</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="doc-preview">'+inner+'</div>'
    +'<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">'
    +'<button class="btn" onclick="exportStudentDownload(\''+stuId+'\')">下载 Word 档案</button>'
    +'<button class="btn small ghost" onclick="exportStudentDoc(\''+stuId+'\')">重新选择模块</button>'
    +'</div>');
}
async function exportStudentDownload(stuId){
  const s=getStudent(stuId);
  if(!s) return;
  toast("正在生成 Word 档案，请稍候…");
  const recs=getRecords(stuId);
  const needImg=_expSel.includes("school")||_expSel.includes("comm")||_expSel.includes("contact");
  const imgUrls=[];
  if(needImg){
    recs.forEach(r=>{
      (r.detail.files||[]).forEach(f=>{ if(isImgName(f.name)) imgUrls.push(f.url); });
      (r.detail.feedback||[]).forEach(fb=>{ (fb.files||[]).forEach(f=>{ if(isImgName(f.name)) imgUrls.push(f.url); }); });
    });
  }
  const cache={};
  await Promise.all([...new Set(imgUrls)].map(async url=>{
    try{ const res=await fetch(url); const blob=await res.blob(); cache[url]=await new Promise(res2=>{ const rd=new FileReader(); rd.onload=()=>res2(rd.result); rd.readAsDataURL(blob); }); }
    catch(e){ cache[url]=""; }
  }));
  const inner=buildStudentDocInner(s, recs, _expSel, (url)=>{ const b=cache[url]; return b?'<br><img src="'+b+'" style="max-width:320px;height:auto">':(url?'<br><a href="'+esc(url)+'">[查看原图]</a>':""); });
  const h='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"><title>'+esc(s.name)+'-成长档案</title></head><body>'
    +'<h1 style="text-align:center">学生成长档案</h1><hr>'+inner+'</body></html>';
  const blob=new Blob(['\ufeff'+h],{type:"application/msword;charset=utf-8"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=s.name+"-成长档案.doc";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  toast("已导出 Word 档案，用 WPS 或 Word 打开即可");
}
function isImgName(name){ return /\.(png|jpe?g|gif|webp)$/i.test(name||""); }
function buildStudentDocInner(s, recs, sel, imgHtml){
  let idx=0; const num=()=>++idx;
  let h="";
  const row=(k,v)=>'<tr><td style="border:1px solid #999;padding:6px 10px;width:110px;background:#f5f5f5"><b>'+k+'</b></td><td style="border:1px solid #999;padding:6px 10px">'+v+'</td></tr>';
  if(sel.includes("info")){
    h+='<h2>'+num()+'、基本信息</h2><table style="border-collapse:collapse;width:100%;font-size:14px">';
    h+=row("姓名", esc(s.name||""));
    h+=row("学号", esc(s.stuNo||""));
    h+=row("班级", esc(s.klass||""));
    h+=row("性别", esc(s.gender||""));
    h+=row("住宿情况", esc((s.dorm||"")+(s.dormRoom?" "+s.dormRoom+"宿舍":"")));
    h+=row("身份证号", esc(s.idCard||""));
    h+=row("家庭住址", esc(s.address||""));
    h+=row("联系方式", esc(contactsLine(s)||""));
    h+=row("注意事项", esc(s.note||""));
    h+='</table>';
  }
  if(sel.includes("score")){
    h+='<h2>'+num()+'、考试成绩</h2>';
    const scores=recs.filter(r=>r.type==="score");
    if(!scores.length){ h+='<p>暂无成绩记录</p>'; }
    else{
      const byExam={}; scores.forEach(r=>{ const k=r.detail.exam; if(!byExam[k])byExam[k]=[]; byExam[k].push(r.detail); });
      Object.keys(byExam).sort().reverse().forEach(ex=>{
        h+='<p><b>'+esc(ex)+'：</b>'+byExam[ex].map(d=>esc(d.subject)+" "+esc(d.score)+"分").join("，")+'</p>';
      });
    }
  }
  if(sel.includes("school")){
    h+='<h2>'+num()+'、在校记录（好事 / 违纪）</h2>';
    const school=recs.filter(r=>r.type==="good"||r.type==="violation");
    if(!school.length){ h+='<p>暂无记录</p>'; }
    else{
      school.forEach(r=>{
        h+='<p><b>['+recTypeName(r.type)+'] '+esc(r.date)+'</b><br>'+esc(recordDesc(r)).replace(/\n/g,"<br>")+'</p>';
        (r.detail.files||[]).forEach(f=>{ if(isImgName(f.name)) h+=imgHtml(f.url); });
        (r.detail.feedback||[]).forEach(fb=>{
          h+='<p style="color:#555">处理反馈('+esc(fb.time)+')：'+(fb.text?esc(fb.text):"")+'</p>';
          (fb.files||[]).forEach(f=>{ if(isImgName(f.name)) h+=imgHtml(f.url); });
        });
      });
    }
  }
  if(sel.includes("comm")){
    h+='<h2>'+num()+'、沟通与出勤（谈话 / 请假）</h2>';
    const other=recs.filter(r=>r.type==="talk"||r.type==="leave");
    if(!other.length){ h+='<p>暂无记录</p>'; }
    else{
      other.forEach(r=>{
        h+='<p><b>['+recTypeName(r.type)+'] '+esc(r.date)+'</b><br>'+esc(recordDesc(r)).replace(/\n/g,"<br>")+'</p>';
        (r.detail.files||[]).forEach(f=>{ if(isImgName(f.name)) h+=imgHtml(f.url); });
      });
    }
  }
  if(sel.includes("contact")){
    h+='<h2>'+num()+'、家校联系</h2>';
    const contact=recs.filter(r=>r.type==="contact");
    if(!contact.length){ h+='<p>暂无记录</p>'; }
    else{
      contact.forEach(r=>{
        h+='<p><b>['+recTypeName(r.type)+'] '+esc(r.date)+'</b><br>'+esc(recordDesc(r)).replace(/\n/g,"<br>")+'</p>';
        (r.detail.files||[]).forEach(f=>{ if(isImgName(f.name)) h+=imgHtml(f.url); });
      });
    }
  }
  return h;
}

/* ========== 批量导出学生信息 ========== */
const EXPORT_FIELDS=[
  {key:"name",label:"姓名"},{key:"stuNo",label:"学号"},{key:"klass",label:"班级"},{key:"gender",label:"性别"},{key:"dorm",label:"住宿"},{key:"dormRoom",label:"宿舍号"},{key:"idCard",label:"身份证号"},{key:"contacts",label:"家长联系方式"},{key:"address",label:"家庭住址"},{key:"note",label:"备注/注意事项"},{key:"createdAt",label:"建档日期"}
];
let _expRows=[], _expLabels=[];
function exportStudentsForm(){
  showModal('<div class="sheet-head"><h3>批量导出学生名单（Excel）</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>勾选要导出的字段（'+DB.students.length+'名学生）</label><div>'
    +EXPORT_FIELDS.map(f=>'<label style="display:flex;align-items:center;gap:6px;padding:5px 0;font-size:14px"><input type="checkbox" class="ef-check" value="'+f.key+'" checked> '+f.label+'</label>').join("")
    +'</div></div>'
    +'<button class="btn" onclick="previewStudentsExport()">预览</button>');
}
async function previewStudentsExport(){
  const keys=[...document.querySelectorAll(".ef-check:checked")].map(x=>x.value);
  if(!keys.length){ toast("至少勾选一个字段"); return; }
  const labelOf=(k)=>EXPORT_FIELDS.find(f=>f.key===k).label;
  _expLabels=keys.map(labelOf);
  _expRows=DB.students.map(s=>{
    const row={};
    keys.forEach(k=>{ row[labelOf(k)]=(k==="contacts")?contactsLine(s):(s[k]||""); });
    return row;
  });
  const CAP=50;
  const shown=_expRows.slice(0,CAP);
  const tbl='<div class="exp-preview-wrap"><table class="exp-preview"><thead><tr>'+_expLabels.map(l=>'<th>'+esc(l)+'</th>').join("")+'</tr></thead><tbody>'
    +shown.map(r=>'<tr>'+_expLabels.map(l=>'<td>'+esc(r[l])+'</td>').join("")+'</tr>').join("")
    +'</tbody></table></div>';
  const note=_expRows.length>CAP?'<div class="upload-note">预览仅显示前 '+CAP+' 条，点"下载Excel"导出全部 '+_expRows.length+' 人。</div>':'';
  showModal('<div class="sheet-head"><h3>导出预览（'+_expRows.length+'人 · '+_expLabels.length+'列）</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +tbl+note
    +'<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">'
    +'<button class="btn" onclick="doExportStudents()">下载Excel</button>'
    +'<button class="btn small ghost" onclick="exportStudentsForm()">重新选择字段</button>'
    +'</div>');
}
async function doExportStudents(){
  try{ await ensureXLSX(); }catch(e){ toast("Excel 组件加载失败，请刷新页面后重试"); return; }
  if(!_expRows.length){ toast("请先预览并选择字段"); return; }
  const ws=XLSX.utils.json_to_sheet(_expRows);
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,"学生名单");
  XLSX.writeFile(wb,"学生名单_"+todayStr()+".xlsx");
  closeModal(); toast("已导出Excel，共"+_expRows.length+"人");
}

/* ========== 查寝/归寝管理 ========== */
function latestCheck(){ return [...DB.checks].sort((a,b)=>b.date.localeCompare(a.date))[0]; }
function bedcheckForm(){
  const today=todayStr();
  showModal('<div class="sheet-head"><h3>查寝登记</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>查寝日期</label><input id="bcDate" type="date" value="'+today+'"></div>'
    +'<div class="form-row"><label>未归寝学生（填姓名，多个用逗号隔开）</label><input id="bcAbsent" placeholder="如：张三，李四"><div class="upload-note">留空=全员到齐。只登记"未归寝"的，其余默认已到。</div></div>'
    +'<div class="form-row"><label>备注（选填）</label><input id="bcNote" placeholder="如：张三点名时在宿舍被窝里但被子是空的，已联系宿舍长"></div>'
    +'<button class="btn" onclick="saveBedcheck()">保存查寝记录</button>'
    +'<div id="bcResult" style="margin-top:10px"></div>');
}
function saveBedcheck(){
  const date=document.getElementById("bcDate").value||todayStr();
  const namesStr=document.getElementById("bcAbsent").value;
  const note=document.getElementById("bcNote").value.trim();
  const names=namesStr.split(/[,，、\s]+/).map(s=>s.trim()).filter(Boolean);
  const absents=[], notFound=[], ambiguous=[];
  names.forEach(n=>{
    const cands=DB.students.filter(s=>s.name===n);
    if(cands.length===1) absents.push({sid:cands[0].id, name:cands[0].name, returned:false});
    else if(cands.length>1) ambiguous.push({name:n, cands:cands});
    else notFound.push(n);
  });
  if(ambiguous.length){
    window._bcPending={date:date, note:note, absents:absents, ambiguous:ambiguous, notFound:notFound};
    showModal('<div class="sheet-head"><h3>发现重名学生，请确认</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
      +ambiguous.map((a,i)=>'<div class="form-row"><label>「'+esc(a.name)+'」是哪一个？（'+a.cands.length+'人同名）</label>'
        +'<select id="bcAmbi'+i+'">'+a.cands.map(c=>'<option value="'+c.id+'">'+esc(c.name+'（'+c.dorm+(c.idCard?'，尾号'+c.idCard.slice(-4):"")+'）')+'</option>').join("")+'</select></div>').join("")
      +'<button class="btn" onclick="confirmBedcheck()">确认保存</button>'
      +'<p style="font-size:11px;color:#7A7E6E;margin-top:8px">同名时用"住宿情况/身份证尾号"区分，选对那个学生。</p>');
    return;
  }
  doSaveBedcheck(date, note, absents, notFound);
}
function confirmBedcheck(){
  const p=window._bcPending;
  if(!p) return;
  p.ambiguous.forEach((a,i)=>{
    const sel=document.getElementById("bcAmbi"+i);
    if(sel){ const stu=DB.students.find(s=>s.id===sel.value); if(stu) p.absents.push({sid:stu.id, name:stu.name, returned:false}); }
  });
  doSaveBedcheck(p.date, p.note, p.absents, p.notFound);
}
function doSaveBedcheck(date, note, absents, notFound){
  DB.checks=DB.checks.filter(c=>c.date!==date);
  DB.checks.push({id:uid(), date:date, absents:absents, note:note, createdAt:todayStr()});
  save();
  closeModal();
  toast("查寝记录已保存");
  renderHome();
}
function markStudentReturned(sid){
  const c=latestCheck();
  if(!c) return;
  const a=(c.absents||[]).find(x=>x.sid===sid);
  if(a){ a.returned=true; save(); toast("已确认返校"); renderHome(); }
}
function bedcheckSection(){
  const c=latestCheck();
  if(!c) return "";
  const pending=(c.absents||[]).filter(a=>!a.returned);
  let html='<div class="card" style="padding:10px 14px"><details'+(pending.length?" open":"")+'><summary class="fold-title"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M6 14 H18 V17 H6 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 10 H9 V13 H6 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9 11 H18" stroke="#8A9E68" stroke-width="1.4" stroke-linecap="round"/></svg> 最近查寝（'+esc(c.date)+'）<span style="font-size:11px;color:#7A7E6E;font-weight:normal">'+(pending.length?' · '+pending.length+'人未确认返校':"")+'</span></summary>';
  if(!c.absents||!c.absents.length){ html+='<div class="empty" style="padding:10px 0">全员到齐</div>'; }
  else{
    html+='<div class="record-list">'+(c.absents||[]).map(a=>{
      return '<div class="rec"><div class="rec-dot dot-leave"></div><div class="rec-main">'
        +'<div class="rec-top"><span class="rec-type">'+esc(a.name)+' 未归寝</span><span class="rec-date">'+esc(c.date)+'</span></div>'
        +'<div class="rec-badges">'+(a.returned?'<span class="badge green">已返校</span>':'<span class="badge red">未确认返校</span>')+'</div></div>'
        +(a.returned?"":'<div style="display:flex;align-items:center"><button class="btn small ghost" onclick="markStudentReturned(\''+a.sid+'\')">确认返校</button></div>')
        +'</div>';
    }).join("")+'</div>';
  }
  if(c.note) html+='<div style="font-size:12px;color:#7A7E6E;margin-top:6px">备注：'+esc(c.note)+'</div>';
  html+='<button class="btn small ghost" style="margin-top:8px" onclick="bedcheckForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg> 今日查寝登记</button></details></div>';
  return html;
}

/* ========== 班级成绩整体分析 ========== */
function allExamList(){
  const set={};
  DB.records.filter(r=>r.type==="score").forEach(r=>set[r.detail.exam]=1);
  return Object.keys(set);
}
function classExamForm(){
  const exams=allExamList();
  if(!exams.length){ toast("还没有成绩数据，先导入一次考试成绩"); return; }
  showModal('<div class="sheet-head"><h3>班级成绩分析</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>选择考试</label><select id="ceExam">'+exams.map(x=>'<option>'+esc(x)+'</option>').join("")+'</select></div>'
    +'<div class="form-row"><label>单科分析（可选）｜不选＝全班整体（班主任视角）；选某一科＝科任视角，如只看「数学」</label><select id="ceSubject"><option value="">（整体）</option>'+SUBJECTS.map(x=>'<option>'+x+'</option>').join("")+'</select></div>'
    +'<button class="btn" onclick="renderClassExam()">开始分析</button>'
    +'<div id="ceResult" style="margin-top:12px"></div>');
}
function renderClassExam(){
  const exam=document.getElementById("ceExam").value;
  const subject=(document.getElementById("ceSubject")?document.getElementById("ceSubject").value:"")||"";
  const recs=DB.records.filter(r=>r.type==="score"&&r.detail.exam===exam);
  if(!recs.length){ toast("该考试没有成绩数据"); return; }
  if(subject){ renderSubjectExam(exam, subject, recs); return; }
  const bySub={};
  const stuTotal={}, stuFull={}, stuAbsent={}, stuRank={};
  recs.forEach(r=>{
    if(!bySub[r.detail.subject]) bySub[r.detail.subject]=[];
    if(!r.detail.absent){
      bySub[r.detail.subject].push(r.detail.score);
      stuTotal[r.studentId]=(stuTotal[r.studentId]||0)+r.detail.score;
      stuFull[r.studentId]=(stuFull[r.studentId]||0)+fullScoreOf(r.detail.subject);
    }else{
      stuAbsent[r.studentId]=(stuAbsent[r.studentId]||0)+1;
    }
    if(r.detail.classRank!==undefined&&r.detail.classRank!==null) stuRank[r.studentId]={c:r.detail.classRank, g:r.detail.gradeRank};
  });
  // 科目统计（按各科满分算及格），按统一顺序
  const subRows=orderedSubjects(Object.keys(bySub)).map(sub=>{
    const arr=bySub[sub];
    const full=fullScoreOf(sub);
    const avg=arr.reduce((a,b)=>a+b,0)/arr.length;
    const pass=arr.filter(s=>s>=passLineOf(sub)).length;
    return {sub:sub, avg:avg, passRate:pass/arr.length*100, count:arr.length, full:full};
  });
  // 排名：按总分；缺考标注
  const totalRank=Object.keys(stuTotal).map(sid=>({sid:sid, total:stuTotal[sid], full:stuFull[sid], absent:stuAbsent[sid]||0, rank:stuRank[sid]})).sort((a,b)=>b.total-a.total);
  const bands={ "不及格":0, "及格档":0, "良好档":0, "优秀档":0 };
  totalRank.forEach(t=>{
    const pct=t.full?t.total/t.full*100:0;
    if(pct<60) bands["不及格"]++; else if(pct<80) bands["及格档"]++; else if(pct<90) bands["良好档"]++; else bands["优秀档"]++;
  });
  let html='<div class="card" style="margin-top:0"><h3>'+esc(exam)+' 班级分析（'+totalRank.length+'人参加）</h3>';
  html+='<div class="section-title" style="margin:6px 0">各科平均分与及格率（按科目满分，顺序：语数英物化历道生地体）</div>';
  subRows.forEach(r=>{
    html+='<div class="cmp-row"><span class="cmp-sub">'+esc(r.sub)+'</span>'
      +'<div class="cmp-bars"><div class="cmp-bar" style="height:'+Math.min(100,Math.round(r.avg/r.full*100))+'%;background:#ACC18B"></div></div>'
      +'<span class="cmp-delta flat" style="width:110px">均分'+r.avg.toFixed(1)+'/'+r.full+'　及格'+r.passRate.toFixed(0)+'%</span></div>';
  });
  html+='<div class="section-title" style="margin:10px 0 6px">水平分布（按百分制折算，人数）</div>';
  html+='<div style="display:flex;gap:6px;align-items:flex-end;height:118px">';
  Object.keys(bands).forEach(b=>{
    const h=Math.max(4, bands[b]/Math.max(1,totalRank.length)*90);
    html+='<div style="flex:1;text-align:center"><div style="height:'+h+'px;background:#C99A3E;border-radius:4px 4px 0 0"></div><div style="font-size:11px;color:#5F6354;line-height:1.3">'+b+'<br>'+bands[b]+'人</div></div>';
  });
  html+='</div>';
  /* 成绩明细表：班排/校排/姓名/总分/各科（统一顺序） */
  html+='<div class="section-title" style="margin:10px 0 6px">成绩明细（'+totalRank.length+'人，按总分排序）</div>';
  html+='<div class="tbl-wrap"><table class="score-tbl"><thead><tr>'
    +'<th>班排</th><th>校排</th><th>姓名</th><th>总分</th>'+subRows.map(r=>'<th>'+esc(r.sub)+'</th>').join("")+'</tr></thead><tbody>';
  const subByName={}; subRows.forEach(r=>subByName[r.sub]=1);
  totalRank.forEach((t,i)=>{
    const stu=getStudent(t.sid);
    const subScores={};
    recs.filter(r=>r.studentId===t.sid).forEach(r=>{ subScores[r.detail.subject]=r.detail; });
    html+='<tr>'
      +'<td>'+((t.rank&&t.rank.c)?fmtScore(t.rank.c):"")+'</td>'
      +'<td>'+((t.rank&&t.rank.g)?fmtScore(t.rank.g):"")+'</td>'
      +'<td style="text-align:left">'+esc(stu?stu.name:"?")+(t.absent?'<span class="badge red" style="margin-left:3px">缺'+t.absent+'</span>':"")+'</td>'
      +'<td><b>'+fmtScore(t.total)+'</b></td>'
      +subRows.map(r=>{
        const d=subScores[r.sub];
        return '<td>'+(d?(d.absent?"缺考":fmtScore(d.score)):"")+'</td>';
      }).join("")
      +'</tr>';
  });
  html+='</tbody></table></div>';
  const absentStus=Object.keys(stuAbsent).filter(sid=>stuAbsent[sid]>=3);
  if(absentStus.length){
    html+='<div class="section-title" style="margin:10px 0 6px">缺考较多学生（≥3科，排名会偏低，请注意）</div>';
    html+='<div style="font-size:13px;color:#8E3B34">'+esc(absentStus.map(sid=>{const st=getStudent(sid);return st?st.name+"("+stuAbsent[sid]+"科)":"";}).join("、"))+'</div>';
  }
  html+='<div style="display:flex;gap:8px;margin-top:10px">'
    +'<button class="btn ghost" style="flex:1" onclick="exportClassExam(\''+esc(exam).replace(/'/g,"\\'")+'\')">导出Excel</button>'
    +'<button class="btn ghost" style="flex:1;color:#8E3B34;border-color:#E7B7B2" onclick="delExam(\''+esc(exam).replace(/'/g,"\\'")+'\')">🗑 删除本场考试</button>'
    +'</div></div>';
  document.getElementById("ceResult").innerHTML=html;
}
/* 单科分析（科任视角，如数学） */
function renderSubjectExam(exam, subj, recs){
  const rows=recs.filter(r=>r.detail.subject===subj).map(r=>({stu:getStudent(r.studentId), r:r}));
  const scored=rows.filter(x=>!x.r.detail.absent);
  const arr=scored.map(x=>x.r.detail.score);
  const full=fullScoreOf(subj);
  const avg=arr.length?arr.reduce((a,b)=>a+b,0)/arr.length:0;
  const pass=arr.filter(s=>s>=passLineOf(subj)).length;
  const max=arr.length?Math.max.apply(null,arr):0, min=arr.length?Math.min.apply(null,arr):0;
  const bands={"优秀档":0,"良好档":0,"及格档":0,"不及格":0};
  arr.forEach(s=>{ const pct=s/full*100; if(pct<60)bands["不及格"]++; else if(pct<80)bands["及格档"]++; else if(pct<90)bands["良好档"]++; else bands["优秀档"]++; });
  const ranked=rows.slice().sort((a,b)=>{
    if(a.r.detail.absent!==b.r.detail.absent) return a.r.detail.absent?1:-1;
    return b.r.detail.score-a.r.detail.score;
  });
  let html='<div class="card" style="margin-top:0"><h3>'+esc(exam)+' · '+esc(subj)+' 单科分析（科任视角，'+scored.length+'人参考）</h3>';
  html+='<div class="cmp-summary">平均分 <b>'+avg.toFixed(1)+'</b> / '+full+'　及格率 <b>'+(arr.length?Math.round(pass/arr.length*100):0)+'%</b>　最高 <b>'+fmtScore(max)+'</b>　最低 <b>'+fmtScore(min)+'</b></div>';
  html+='<div class="section-title" style="margin:10px 0 6px">水平分布（人数）</div>';
  html+='<div style="display:flex;gap:6px;align-items:flex-end;height:110px">';
  Object.keys(bands).forEach(b=>{ const h=Math.max(4, bands[b]/Math.max(1,arr.length)*88); html+='<div style="flex:1;text-align:center"><div style="height:'+h+'px;background:#C99A3E;border-radius:4px 4px 0 0"></div><div style="font-size:11px;color:#5F6354;line-height:1.3">'+b+'<br>'+bands[b]+'人</div></div>'; });
  html+='</div>';
  html+='<div class="section-title" style="margin:10px 0 6px">分数明细（按分数排序）</div>';
  html+='<div class="tbl-wrap"><table class="score-tbl"><thead><tr><th>班排</th><th>校排</th><th>姓名</th><th>'+esc(subj)+'</th></tr></thead><tbody>';
  ranked.forEach(x=>{
    const cr=x.r.detail.classRank?fmtScore(x.r.detail.classRank):"", gr=x.r.detail.gradeRank?fmtScore(x.r.detail.gradeRank):"";
    html+='<tr><td>'+cr+'</td><td>'+gr+'</td><td style="text-align:left">'+esc(x.stu?x.stu.name:"?")+'</td><td>'+(x.r.detail.absent?'<span class="badge red">缺考</span>':('<b>'+fmtScore(x.r.detail.score)+'</b>'))+'</td></tr>';
  });
  html+='</tbody></table></div>';
  if(ranked.some(x=>x.r.detail.absent)) html+='<div style="font-size:11px;color:#a16207;margin-top:6px">注：标记"缺考"的学生未参加本科考试，不计入平均分/及格率。</div>';
  html+='<div style="display:flex;gap:8px;margin-top:10px"><button class="btn ghost" style="flex:1" onclick="exportSubjectExam(\''+esc(exam).replace(/'/g,"\\'")+'\',\''+esc(subj).replace(/'/g,"\\'")+'\')">导出Excel</button></div></div>';
  document.getElementById("ceResult").innerHTML=html;
}
async function exportSubjectExam(exam, subj){
  try{ await ensureXLSX(); }catch(e){ toast("Excel 组件加载失败，请刷新页面后重试"); return; }
  const recs=DB.records.filter(r=>r.type==="score"&&r.detail.exam===exam&&r.detail.subject===subj);
  const rows=recs.map(r=>{ const st=getStudent(r.studentId); return {"姓名":st?st.name:"", "分数":r.detail.absent?"缺考":fmtScore(r.detail.score), "班排":r.detail.classRank?fmtScore(r.detail.classRank):"", "校排":r.detail.gradeRank?fmtScore(r.detail.gradeRank):""}; });
  rows.sort((a,b)=>{ if(a["分数"]==="缺考") return 1; if(b["分数"]==="缺考") return -1; return parseFloat(b["分数"])-parseFloat(a["分数"]); });
  rows.forEach((r,i)=>{ r["名次"]=i+1; });
  const ws=XLSX.utils.json_to_sheet(rows);
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,exam+"_"+subj);
  XLSX.writeFile(wb,"成绩_"+exam+"_"+subj+"_"+todayStr()+".xlsx");
  toast("已导出"+subj+"单科成绩Excel");
}
/* 删除某一次考试的全部成绩记录 */
function delExam(exam){
  const count=DB.records.filter(r=>r.type==="score"&&r.detail.exam===exam).length;
  if(!count){ toast("该考试没有成绩数据"); return; }
  if(confirm("确定删除「"+exam+"」的全部成绩吗？\\n将删除 "+count+" 条成绩记录（该考试所有学生的所有科目），无法恢复！")){
    if(confirm("最后确认：真的要删除「"+exam+"」这整场考试的成绩吗？")){
      DB.records=DB.records.filter(r=>!(r.type==="score"&&r.detail.exam===exam));
      save(); closeModal(); toast("已删除「"+exam+"」成绩"); renderHome();
    }
  }
}
async function exportClassExam(exam){
  try{ await ensureXLSX(); }catch(e){ toast("Excel 组件加载失败，请刷新页面后重试"); return; }
  const recs=DB.records.filter(r=>r.type==="score"&&r.detail.exam===exam);
  const stuTotal={}, stuCnt={}, stuRank={};
  const subSet={};
  recs.forEach(r=>{
    if(!r.detail.absent){ stuTotal[r.studentId]=(stuTotal[r.studentId]||0)+r.detail.score; }
    stuCnt[r.studentId]=(stuCnt[r.studentId]||0)+1;
    subSet[r.detail.subject]=1;
    if(r.detail.classRank!==undefined&&r.detail.classRank!==null) stuRank[r.studentId]={c:r.detail.classRank, g:r.detail.gradeRank};
  });
  const subs=orderedSubjects(Object.keys(subSet));
  const rows=Object.keys(stuCnt).map(sid=>{
    const stu=getStudent(sid);
    const rank=stuRank[sid]||{};
    const row={"班排":rank.c?fmtScore(rank.c):"", "校排":rank.g?fmtScore(rank.g):"", "姓名":stu?stu.name:"", "总分":stuTotal[sid]?fmtScore(stuTotal[sid]):""};
    subs.forEach(sub=>{
      const r=recs.find(x=>x.studentId===sid&&x.detail.subject===sub);
      row[sub]=r?(r.detail.absent?"缺考":fmtScore(r.detail.score)):"";
    });
    return row;
  }).sort((a,b)=>parseFloat(b["总分"])-parseFloat(a["总分"]));
  rows.forEach((r,i)=>{ r["名次"]=i+1; });
  const ws=XLSX.utils.json_to_sheet(rows);
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,exam);
  XLSX.writeFile(wb,"班级成绩_"+exam+"_"+todayStr()+".xlsx");
  toast("已导出班级成绩Excel（列顺序：班排/校排/姓名/总分/各科）");
}

/* ========== 主题班会素材库 ========== */
const MATERIAL_CATS=["爱国教育","安全教育","法治教育","心理健康","励志成长","学习指导","其他"];
let materialTab="tickets";
function renderTickets(){
  let html='<div style="display:flex;gap:8px;margin-bottom:10px">'
    +'<button class="btn'+(materialTab==="tickets"?"":" ghost")+'" style="flex:1" onclick="materialTab=\'tickets\';renderTickets()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 7 C9.5 6 7 6.5 7 6.5 V16 C7 16 9.5 15.5 12 16.5 C14.5 15.5 17 16 17 16 V6.5 C17 6.5 14.5 6 12 7 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 7 V16.5" stroke="#8A9E68" stroke-width="1.2"/></svg> 题目库</button>'
    +'<button class="btn'+(materialTab==="materials"?"":" ghost")+'" style="flex:1" onclick="materialTab=\'materials\';renderTickets()">🎓 班会素材</button>'
    +'</div>';
  if(materialTab==="materials"){ main.innerHTML=html+renderMaterialsHtml(); return; }
  html+=renderTicketsHtml();
  main.innerHTML=html;
}
function renderMaterialsHtml(){
  const kw=materialQuery.trim();
  const list=DB.materials.filter(m=>{
    if(materialCat&&m.category!==materialCat) return false;
    if(!kw) return true;
    return (m.title||"").includes(kw)||(m.content||"").includes(kw);
  });
  let html='<button class="btn" onclick="addMaterialForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M12 8 V16 M8 12 H16" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/></svg> 收录班会素材</button>';
  html+='<div class="section-title">筛选</div><div class="filter-row">'
    +'<select onchange="materialCat=this.value;renderTickets()"><option value="">全部分类</option>'+MATERIAL_CATS.map(c=>'<option'+(c===materialCat?" selected":"")+'>'+c+'</option>').join("")+'</select></div>';
  html+='<div class="search-wrap"><input placeholder="搜标题/内容关键词…" value="'+esc(materialQuery)+'" oninput="materialQuery=this.value;renderTickets()"></div>';
  html+='<div class="section-title">班会素材（'+list.length+'条）</div>';
  if(!list.length){ html+='<div class="card"><div class="empty">还没有素材，点"收录班会素材"添加</div></div>'; }
  else{
    html+=list.map(m=>'<div class="ticket-item">'
      +'<div class="ticket-meta"><span class="tag amber">'+esc(m.category||"")+'</span><span class="tag gray">'+esc(m.createdAt||"")+'</span></div>'
      +'<h4>'+esc(m.title)+'</h4>'
      +'<div class="ticket-ans">'+esc(m.content)+'</div>'
      +'<div class="ticket-ops"><button class="btn small ghost" onclick="copyTicket(this)" data-q="'+esc(m.title+"\n\n"+m.content)+'">复制</button>'
      +'<button class="btn small ghost" onclick="delMaterial(\''+m.id+'\')">删除</button></div></div>').join("");
  }
  return html;
}
let materialQuery="", materialCat="";
function addMaterialForm(){
  showModal('<div class="sheet-head"><h3>收录班会素材</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="form-row"><label>分类</label><select id="mtCat">'+MATERIAL_CATS.map(c=>'<option>'+c+'</option>').join("")+'</select></div>'
    +'<div class="form-row"><label>标题</label><input id="mtTitle" placeholder="如：防溺水主题班会（含视频链接）"></div>'
    +'<div class="form-row"><label>内容/方案</label><textarea id="mtContent" style="min-height:120px" placeholder="班会流程、要点、资源链接等"></textarea></div>'
    +'<button class="btn" onclick="saveMaterial()">保存素材</button>');
}
function saveMaterial(){
  const title=document.getElementById("mtTitle").value.trim();
  const content=document.getElementById("mtContent").value.trim();
  if(!title){ toast("标题不能为空"); return; }
  DB.materials.push({id:uid(), category:document.getElementById("mtCat").value, title:title, content:content, createdAt:todayStr()});
  save(); closeModal(); toast("素材已收录"); renderTickets();
}
function delMaterial(id){
  if(confirm("删除这条素材？")){ DB.materials=DB.materials.filter(m=>m.id!==id); save(); toast("已删除"); renderTickets(); }
}

/* ========== 首页红线预警区 ========== */
/* 汇总各类预警数据；items 为 {name,id} */
/* 首页预警：待销假行展开状态（按走读 / 内宿两类分别记忆） */
let warnExpanded={leaveZoudu:false, leaveNeisu:false};
function collectWarnings(){
  const out={violation:[], leaveZoudu:[], leaveNeisu:[]};
  /* 1. 违纪待处理 */
  DB.records.filter(r=>r.type==="violation"&&r.detail&&r.detail.status==="待处理").forEach(r=>{
    const s=getStudent(r.studentId); if(s) out.violation.push({name:s.name,id:s.id});
  });
  /* 2. 待销假：按住宿类型分走读 / 内宿；带上请假记录 id 与摘要，便于首页直接销假 */
  DB.records.filter(r=>r.type==="leave"&&r.detail&&!r.detail.returned).forEach(r=>{
    const s=getStudent(r.studentId); if(!s) return;
    const item={name:s.name, id:s.id, rid:r.id, info:(r.detail.subtype||"请假")+" · "+(r.date||"")+(r.detail.why?(" · "+r.detail.why):"")};
    if(s.dorm==="内宿") out.leaveNeisu.push(item);
    else out.leaveZoudu.push(item); /* 走读 / 临时走读 / 未填 归走读类 */
  });
  return out;
}
function warnRow(icon, title, items, danger, tip, expandKey){
  const color=danger?"#8E3B34":"#4E7C5E";
  const bg=danger?"#fdf2f2":"#f3faf4";
  const border=danger?"#E7B7B2":"#d6ecd9";
  const firstId=items.length?items[0].id:"";
  const names=items.map(i=>i.name);
  const expandable=!!expandKey;
  const expanded=expandKey?!!warnExpanded[expandKey]:false;
  const body=names.length
    ? '<span style="color:'+color+';font-weight:600">'+esc(names.slice(0,12).join("、"))+(names.length>12?" 等"+names.length+"人":"")+'</span>'
    : '<span style="color:'+color+'">已全部处理 <svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#BACFA8" stroke="#4E7C5E" stroke-width="1.6"/><path d="M8 12 L11 15 L16 9" fill="none" stroke="#4E7C5E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  let headerClick='';
  if(expandable && names.length) headerClick=' onclick="toggleWarn(\''+expandKey+'\')" style="cursor:pointer"';
  else if(!expandable && names.length) headerClick=' onclick="renderDetail(\''+firstId+'\')" style="cursor:pointer"';
  const hint=names.length
    ? (expandable?('点击'+(expanded?'收起':'去销假')+(expanded?' ▾':' ›')):'点击去处理 ›')
    : '';
  let html='<div style="background:'+bg+';border:1px solid '+border+';border-radius:10px;padding:9px 12px;margin-bottom:8px">'
    +'<div'+headerClick+' style="font-size:13px;line-height:1.9">'+icon+' '+title+'：'+body
    + (hint?' <span style="font-size:11px;color:'+(expandable?'#C98A2B':'#ACC18B')+'">'+hint+'</span>':'')
    +'</div>';
  if(tip) html+='<div style="font-size:11px;color:#7A7E6E;margin-top:2px;line-height:1.5">'+tip+'</div>';
  /* 展开后，在行下方直接列出对应同学及销假按钮 */
  if(expandable && names.length && expanded){
    html+='<div style="margin-top:8px;border-top:1px dashed '+border+';padding-top:8px;display:flex;flex-direction:column;gap:6px">';
    items.forEach(it=>{
      html+='<div style="display:flex;align-items:center;gap:8px;background:#fff;border:1px solid '+border+';border-radius:8px;padding:6px 8px">'
        +'<div style="flex:1;min-width:0">'
        +'<div style="font-size:13px;font-weight:600;color:#2E3A33">'+esc(it.name)+'</div>'
        + (it.info?'<div style="font-size:11px;color:#7A7E6E;margin-top:1px">'+esc(it.info)+'</div>':'')
        +'</div>'
        +'<button class="btn small ghost" style="flex:none" onclick="markReturnHome(\''+it.rid+'\')">销假</button>'
        +'</div>';
    });
    html+='</div>';
  }
  html+='</div>';
  return html;
}
/* 展开 / 收起待销假行 */
function toggleWarn(key){ warnExpanded[key]=!warnExpanded[key]; renderHome(); }
/* 首页直接销假：与个人档案出勤里的销假操作同一条请假记录，天然同步 */
function markReturnHome(rid){
  const r=DB.records.find(x=>x.id===rid); if(!r) return;
  r.detail.returned=true; save();
  const s=getStudent(r.studentId);
  toast("已销假："+(s?s.name:"该生"));
  renderHome();
}
function warnSection(){
  const w=collectWarnings();
  const hasWarn=w.violation.length||w.leaveZoudu.length||w.leaveNeisu.length;
  let html='<div class="card" style="'+(hasWarn?"border:1px solid #E7B7B2;background:#fdf8f8":"border:1px solid #d6ecd9;background:#f3faf4")+'">'
    +'<div class="card-title-row"><h3 style="color:'+(hasWarn?"#8E3B34":"#4E7C5E")+'"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#EAACA9" stroke="#8E3B34" stroke-width="1.6"/><path d="M12 7 V13" stroke="#8E3B34" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="16" r="1.4" fill="#8E3B34"/></svg> 今日预警</h3><button class="link-btn" onclick="bedcheckForm()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#ACC18B" stroke="#8A9E68" stroke-width="1.6"/><path d="M6 14 H18 V17 H6 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 10 H9 V13 H6 Z" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.4"/><path d="M9 11 H18" stroke="#8A9E68" stroke-width="1.4" stroke-linecap="round"/></svg> 查寝登记</button></div>';
  html+=warnRow("🔴", "违纪待处理", w.violation, true, "点了去对应学生档案处理违纪");
  html+=warnRow("🟠", "走读待销假", w.leaveZoudu, true, "走读 / 临时走读学生请假未回校销假，点击去销假", "leaveZoudu");
  html+=warnRow("🟠", "内宿待销假", w.leaveNeisu, true, "内宿学生请假未回宿舍销假，点击去销假", "leaveNeisu");
  html+='</div>';
  return html;
}

/* ========== 访问密码门（路线2：前端遮挡，防闲人/搬运） ========== */
const ACCESS_PASS_KEY="bzr_access_pass";
const DEFAULT_PASS="0727";
const COPYRIGHT_NOTE=ICONS.warn+' 内部工具 · 仅本人使用 · 严禁搬运、商用 · 违者必究';
let appUnlocked=false;
function getAccessPass(){ try{ const p=localStorage.getItem(ACCESS_PASS_KEY); return p?p:DEFAULT_PASS; }catch(e){ return DEFAULT_PASS; } }
function setAccessPass(p){ try{ localStorage.setItem(ACCESS_PASS_KEY,p); }catch(e){} }
function showPassGate(){
  const root=document.getElementById("modal-root");
  root.innerHTML='<div class="pass-gate">'
    +'<div class="pass-card">'
    +'<div class="pass-logo">🔐 班主任工作台</div>'
    +'<div class="pass-tip">请输入访问密码进入</div>'
    +'<input id="passInput" class="pass-input" type="password" placeholder="访问密码" onkeydown="if(event.key===\'Enter\')tryPass()">'
    +'<button class="btn pass-btn" onclick="tryPass()">进入</button>'
    +'<div id="passErr" class="pass-err"></div>'
    +'<div class="pass-copy">'+COPYRIGHT_NOTE+'</div>'
    +'</div></div>';
  setTimeout(()=>{ const i=document.getElementById("passInput"); if(i) i.focus(); },50);
}
function tryPass(){
  const v=(document.getElementById("passInput").value||"").trim();
  if(v===getAccessPass()){
    appUnlocked=true;
    document.getElementById("modal-root").innerHTML="";
    switchView("home");
  }else{
    const e=document.getElementById("passErr");
    if(e) e.textContent="密码错误，请重新输入";
    const i=document.getElementById("passInput"); if(i){ i.value=""; i.focus(); }
  }
}
function changePassForm(){
  showModal('<div class="sheet-head"><h3>修改访问密码</h3><button class="close-btn" onclick="closeModal()"><svg viewBox="0 0 24 24" class="ic"><rect x="3" y="3" width="18" height="18" rx="6" fill="#FFFFFF" stroke="#8A9E68" stroke-width="1.6"/><path d="M9 9 L15 15 M15 9 L9 15" stroke="#8A9E68" stroke-width="2" stroke-linecap="round"/></svg></button></div>'
    +'<div class="qn-hint">密码只存在你本机浏览器，用于挡住闲人和防搬运。改完下次打开要用新密码。初始密码 0727。</div>'
    +'<div class="form-row"><label>当前密码</label><input id="oldPass" type="password" placeholder="输入当前密码"></div>'
    +'<div class="form-row"><label>新密码</label><input id="newPass" type="password" placeholder="设置新密码（建议4~20位）"></div>'
    +'<div class="form-row"><label>确认新密码</label><input id="newPass2" type="password" placeholder="再输一次新密码"></div>'
    +'<button class="btn" onclick="doChangePass()">保存新密码</button>');
}
function doChangePass(){
  const oldP=(document.getElementById("oldPass").value||"").trim();
  const n1=(document.getElementById("newPass").value||"").trim();
  const n2=(document.getElementById("newPass2").value||"").trim();
  if(oldP!==getAccessPass()){ toast("当前密码不对"); return; }
  if(n1.length<4){ toast("新密码至少4位"); return; }
  if(n1!==n2){ toast("两次输入不一致"); return; }
  setAccessPass(n1); closeModal(); toast("访问密码已更新，下次用新密码进入");
}

/* ========== 初始化 ========== */
DB=load();
loadCloudConf();
showPassGate();
