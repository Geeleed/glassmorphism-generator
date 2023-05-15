const body = document.querySelector('body');

const header = document.createElement('div');header.id=`header`;
const main = document.createElement('div');main.id=`main`;

const left = document.createElement('div');left.id=`left`;
const right = document.createElement('div');right.id=`right`;

const css = document.createElement('label');css.id=`css`;
const glass = document.createElement('div');glass.id=`glass`;

const surf = document.createElement('div');surf.id=`surf`;
const sl = document.createElement('label');sl.id=`sl`;
const st = document.createElement('label');st.id=`st`;
const sb = document.createElement('label');sb.id=`sb`;
const sh = document.createElement('label');sh.id=`sh`;
const sw = document.createElement('label');sw.id=`sw`;
const sc = document.createElement('input');sc.id=`sc`;
const rt = document.createElement('input');rt.id=`rt`;
const rb = document.createElement('input');rb.id=`rb`;
const rh = document.createElement('input');rh.id=`rh`;
const rw = document.createElement('input');rw.id=`rw`;
const hh = document.createElement('div');hh.id=`hh`
const ww = document.createElement('div');ww.id=`ww`
const hhww = document.createElement('div');hhww.id=`hhww`;

const edge = document.createElement('div');edge.id=`edge`;
const el = document.createElement('label');el.id=`el`;
const et = document.createElement('label');et.id=`et`;
const eth = document.createElement('label');eth.id=`eth`;
const er = document.createElement('label');er.id=`er`;
const ec = document.createElement('input');ec.id=`ec`;
const ret = document.createElement('input');ret.id=`ret`;
const reth = document.createElement('input');reth.id=`reth`;
const rer = document.createElement('input');rer.id=`rer`;

const shadow = document.createElement('div');shadow.id=`shadow`;
const shc = document.createElement('input');shc.id=`shc`;
const c = document.createElement('input');c.id=`c`;
const ci = document.createElement('div');ci.id=`ci`;
const rsht = document.createElement('input');rsht.id=`rsht`;
const rshs = document.createElement('input');rshs.id=`rshs`;
const rshb = document.createElement('input');rshb.id=`rshb`;
const rshx = document.createElement('input');rshx.id=`rshx`;
const rshy = document.createElement('input');rshy.id=`rshy`;
const shl = document.createElement('label');shl.id=`shl`;
const isl = document.createElement('label');isl.id=`isl`;
const sht = document.createElement('label');sht.id=`sht`;
const shs = document.createElement('label');shs.id=`shs`;
const shb = document.createElement('label');shb.id=`shb`;
const shx = document.createElement('label');shx.id=`shx`;
const shy = document.createElement('label');shy.id=`shy`;
const xx = document.createElement('div');xx.id=`xx`;
const yy = document.createElement('div');yy.id=`yy`;
const xxyy = document.createElement('div');xxyy.id=`xxyy`;

c.type = 'checkbox'

sc.type = 'color'
ec.type = 'color'
shc.type = 'color'

rt.type = 'range'
rb.type = 'range'
rh.type = 'range'
rw.type = 'range'
reth.type = 'range'
ret.type = 'range'
rer.type = 'range'
rsht.type = 'range'
rshs.type = 'range'
rshb.type = 'range'
rshx.type = 'range'
rshy.type = 'range'

glass.append(css)
hh.append(sh,rh);ww.append(sw,rw);hhww.append(hh,ww)
surf.append(sl,sc,st,rt,sb,rb,hhww)
edge.append(el,ec,et,ret,eth,reth,er,rer)
ci.append(shc,c,isl)
xx.append(shx,rshx);yy.append(shy,rshy);xxyy.append(xx,yy)
shadow.append(shl,ci,sht,rsht,shs,rshs,shb,rshb,xxyy)
left.append(glass)
right.append(surf,edge,shadow)
main.append(left,right)
body.append(header,main)

header.innerText = `Glass Maker`
sl.innerText = `Surface`
st.innerText = `Transparency`
sb.innerText = `Blur`
sh.innerText = `Height`
sw.innerText = `Width`

el.innerText = `Edge`
et.innerText = `Transparency`
eth.innerText = `Thick`
er.innerText = `Radius`

isl.innerText = `Inset`
shl.innerText = `Shadow`
sht.innerText = `Transparency`
shs.innerText = `Size`
shb.innerText = `Blur`
shx.innerText = 'X offset'
shy.innerText = `Y offset`

sc.value = `#000000`;
rt.min = `0`; rt.max = `63`; rt.step = `1`; rt.value = `9`;
rb.min = `0`; rb.max = `100`; rb.step = `1`; rb.value = `10`;
rh.min = `1`; rh.max = `600`; rh.step = `1`; rh.value = `300`;
rw.min = `1`; rw.max = `900`; rw.step = `1`; rw.value = `650`;
ec.value = `#000000`;
ret.min = `0`; ret.max = `63`; ret.step = `1`; ret.value = `9`;
reth.min = `0`; reth.max = `10`; reth.step = `1`; reth.value = `1`;
rer.min = `0`; rer.max = `100`; rer.step = `1`; rer.value = `5`;
shc.value = `#000000`;
c.value = ``; 
rsht.min = `0`; rsht.max = `63`; rsht.step = `1`; rsht.value = `9`;
rshs.min = `0`; rshs.max = `50`; rshs.step = `1`; rshs.value = `5`;
rshb.min = `0`; rshb.max = `50`; rshb.step = `1`; rshb.value = `5`;
rshx.min = `-50`; rshx.max = `50`; rshx.step = `1`; rshx.value = `0`;
rshy.min = `-50`; rshy.max = `50`; rshy.step = `1`; rshy.value = `0`;

let SC = sc.value;
let RT = rt.value;
let RB = rb.value;
let RH = rh.value;
let RW = rw.value;
let EC = ec.value;
let RET = ret.value;
let RETH = reth.value;
let RER = rer.value;
let SHC = shc.value;
let C = c.value;
let RSHT = rsht.value;
let RSHS = rshs.value;
let RSHB = rshb.value;
let RSHX = rshx.value;
let RSHY = rshy.value;


let cssGlass; let showCSS = false;
glass.onclick = ()=>{if(showCSS){showCSS=false;}else{showCSS=true;};updateChange()}

let inputParameterList = [SC,RT,RB,RH,RW,EC,RET,RETH,RER,SHC,RSHT,RSHS,RSHB,RSHX,RSHY]
let inputElementList = [sc,rt,rb,rh,rw,ec,ret,reth,rer,shc,rsht,rshs,rshb,rshx,rshy]

updateChange()
function Checked(){return c.checked ? `inset`:``}
document.addEventListener('input',()=>{updateChange()})

function updateChange(){
    for (let index = 0; index < inputElementList.length; index++) {
        inputParameterList[index] = inputElementList[index].value;
    }
    [SC,RT,RB,RH,RW,EC,RET,RETH,RER,SHC,RSHT,RSHS,RSHB,RSHX,RSHY]=inputParameterList;
    C = Checked()
    let scA = `${parseInt(RT,16)}`; if(scA.length<2){scA = '0'+scA};
    let ecA = `${parseInt(RET,16)}`; if(ecA.length<2){ecA = '0'+ecA};
    let shcA = `${parseInt(RSHT,16)}`; if(shcA.length<2){shcA = '0'+shcA};
    cssGlass = `height: ${RH}px;
width: ${RW}px;
background-color: ${SC}${scA};
backdrop-filter: blur(${RB}px);
-webkit-backdrop-filter: blur(${RB}px);
border: ${RETH}px solid ${EC}${ecA};
border-radius: ${RER}px;
box-shadow: ${RSHX}px ${RSHY}px ${RSHB}px ${RSHS}px ${SHC}${shcA} ${C};`
    if(showCSS){
        css.innerText = `---Click for copy to clipboard---
        ${cssGlass}`;
    }else{
        navigator.clipboard.writeText(cssGlass)
        css.innerText = ``
    }
    glass.style = cssGlass
}