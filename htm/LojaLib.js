// Layout Demo 13 //

//### Guarda em vari�vel a p�gina atual
var sPagAtual=document.location.href.toUpperCase();

var oBaseTop=document.getElementsByTagName('base')[0];
if(oBaseTop)var IsBaseTop=(oBaseTop.target=='_top');
else var IsBaseTop=false;


//### fun��o para link no topo
function LinkTop(sTitle,sPage,sParam,sStyle){
  sPageM=sPage.toUpperCase();
  if(sPageM=='CADASTRO' || sPageM=='TRACK'){sURL='https://www.rumo.com.br/sistema/';}else{sURL='';}
  if(sPageM=='CADASTRO' || sPageM=='TRACK' || IsBaseTop){sTarget='top';}else {sTarget='window';}
  if(sPagAtual.indexOf(sPageM+'.ASP')>=0 && sPagAtual.indexOf(sParam.toUpperCase())>=0){
    document.write('<table width=100% class='+sStyle+'_On align=center OnClick='+sTarget+'.location.href="'+sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+'" cellspacing=0 cellpadding=0><tr><td class="EstCatTxt">'+sTitle+'</td></tr></table>');}
   else{
    document.write('<table width=100% class='+sStyle+'_Off align=center OnMouseOut=this.className="'+sStyle+'_Off" OnMouseOver=this.className="'+sStyle+'_Hover" OnClick='+sTarget+'.location.href="'+sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+'" cellspacing=0 cellpadding=0><tr><td class="EstCatTxt">'+sTitle+'</td></tr></table>');}
}

//### fun��o para link no rodap�
function LinkPag(sTitle,sPage,sParam,sStyle){ 
  sPageM=sPage.toUpperCase();
  if(sPageM=='CADASTRO' || sPageM=='TRACK'){sURL='https://www.rumo.com.br/sistema/';}else {sURL='';}
  if(sPageM=='CADASTRO' || sPageM=='TRACK' || IsBaseTop){sTarget=' target=_top';}else {sTarget='';}
  var str='<a href=';
  str+=sURL+sPage+'.asp?IDLoja='+IDLoja+sParam+' class='+sStyle;
  if(sPagAtual.indexOf(sPageM+'.ASP')>=0 && sPagAtual.indexOf(sParam.toUpperCase())>=0)str +='_On';
  else str +='_Off';
  str+=sTarget+'>'+sTitle+'</a>';
  document.write(str);
}

//### Fun��o que abre janela de chat
function MostraChatP(){
 popup=window.open('ChatLogin.asp?IDLoja='+IDLoja,'Chat','top=20,left=20,height=280,width=390,scrollbars=no,resizable=yes');
 popup.focus();return void(0);}

//### Fun��o que valida a busca  
function VerTexto(oNome){
 if (oNome.Texto.value=='' || oNome.Texto.value.length<2){
   alert('Busca inv�lida.');
   oNome.Texto.focus();
   return false;}
 else{return true;}
}

//### Fun��o que mostra o m�ximo de parcela na home e na listagem principal de produtos
function MostraMaxParcela(PrecoProd,MaxParcelas){
  var ComSem;
  if(PrecoProd==0||MaxParcelas==1||Juros.length==0)return;
  if(MaxParcelas==0||MaxParcelas>Juros.length)MaxParcelas=Juros.length;
  if(Juros[MaxParcelas-1]>0)ComSem=""; else ComSem="<font color=#990000> sem juros</font>";
  document.write("ou <b>"+MaxParcelas+"x</b>"+ComSem+" de <b>"+FormatPrecoReais(CalculaParcelaJurosCompostos(PrecoProd,MaxParcelas))+"</b>");
}

//### Fun��o que mostra o valor economizado pelo cliente nos produtos em promo��o
function MostraEconomia(PrecoProd,PrecoOri){
if(PrecoProd!=PrecoOri)document.write("<br><font color=#6f9e45>Economize <b>"+FormatPrice(PrecoOri-PrecoProd,'R$')+"</b> ("+FormatNum(((PrecoOri-PrecoProd)/PrecoOri)*100)+"%)</font>");
}

function FormatNum(num){
num=num.toString().replace(/\$|\,/g,'');
if(isNaN(num))num="0";
sign=(num==(num=Math.abs(num)));
num=Math.floor(num*100+0.50000000001);
num=Math.floor(num/100).toString();
for(var i=0;i<Math.floor((num.length-(1+i))/3);i++)num=num.substring(0,num.length-(4*i+3))+'.'+num.substring(num.length-(4*i+3));
return ((sign)?'':'-')+num;
}