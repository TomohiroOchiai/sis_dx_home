//�@�}�b�v�̐ݒ�
map=[
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,2,2,2,2,2,2,2,2,2,2,2,2,6,2,2,6,2,2,2,2,2,2,2,2,2,2,2,2,1,
1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,
1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,
1,2,2,2,6,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,1,2,2,2,6,2,2,2,1,
1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1,1,1,
1,2,2,2,2,1,1,2,2,2,4,2,2,6,2,2,6,2,2,4,2,2,2,1,1,2,2,2,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,2,2,2,1,1,5,2,2,6,2,2,2,1,1,2,2,2,6,2,2,7,1,1,2,2,2,2,1,
1,1,1,1,2,1,1,2,1,1,12,1,1,1,1,1,1,1,1,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,12,1,1,1,1,1,1,1,1,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,5,2,2,2,1,1,8,12,12,11,11,11,11,12,12,10,1,1,2,2,2,7,1,1,1,1,
1,1,1,1,2,1,1,1,1,1,12,1,1,0,0,0,0,1,1,12,1,1,1,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,1,1,1,12,1,1,0,0,0,0,1,1,12,1,1,1,1,1,2,1,1,1,1,
12,12,12,12,3,2,2,6,12,12,10,1,1,0,0,0,0,1,1,8,12,12,6,2,2,3,12,12,12,12,
1,1,1,1,2,1,1,2,1,1,12,1,1,1,1,1,1,1,1,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,12,1,1,1,1,1,1,1,1,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,12,12,12,9,12,12,9,12,12,12,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,1,1,1,12,1,1,12,1,1,1,1,1,2,1,1,2,1,1,1,1,
1,1,1,1,2,1,1,2,1,1,1,1,1,12,1,1,12,1,1,1,1,1,2,1,1,2,1,1,1,1,
1,2,2,2,4,2,2,3,2,2,2,2,2,7,1,1,5,2,2,2,2,2,3,2,2,4,2,2,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,5,2,2,2,2,2,3,2,2,2,2,2,3,12,12,3,2,2,2,2,2,3,2,2,2,2,2,7,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,2,1,1,1,1,1,2,1,
1,2,2,2,2,2,2,4,2,2,2,2,2,2,1,1,2,2,2,2,2,2,4,2,2,2,2,2,2,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

dmap=new Array(900);//�@�h�b�g�����̃}�b�v

gx=0;//�@�Q�[����ʂ̈ʒu
gy=0;

var timeId1,timeId2,timeId3;//�@���荞��ID
var mInt,tInt;//�@���荞�݊Ԋu
var fastInt,slowInt,stopInt;//�@���荞�݃v���Z�b�g

var key;//�@�L�[����

var sc,hi=up=10000;//�@�X�R�A
var ro;//�@���E���h
var eat;//�@�H�ׂ��h�b�g�̐��i�Q�V�W�ŃN���A�j
var cl,cl2;//�@���荞�݃N���A�t���O
var msc;//�@�p���[�A�b�v���ɐH�ׂ��G�̐�
var mti;//�@���_�\������
var pti;//�@�p���[�A�b�v����
var life;//�@�c��̎����̐�
var demo=true;//�@�f����ʂ��ǂ����̃t���O

v=[0,1,0,-1,0];//�@X�����Z��
w=[-1,0,1,0,0];//�@Y�����Z��
var mp;//�@�����̉摜���؂�ւ���������ׂ�ϐ�

cross=["   ","   ","   ","   ","013","012","123","023","012","123","023","313"];//�@�����_�ňړ��ł������

var mx,my,md;//�@�����̍��W�A�i�ތ���

tx=new Array(3);//�@�G�̍��W�A�i�ތ���
ty=new Array(3);
td=new Array(3);
tk=new Array(3);//�@0-��n�ɂ���1-��n���o��2-�����[�h
sd=new Array(3);//�@�G�L�����N�^�[�̉摜���؂�ւ���������ׂ�z��
var tj;//�@�G�̏��1�i����2000-2999or�ǐ�0-1999�j
tr=new Array(3);//�@�G�̏��2�i0-�ʏ�or1-���S�j
tmode=new Array(4);//�@��n�ł̑҂�����

//�@�w�i�̓ǂݍ���
for(var i=0;i<4;i++)
{
   document.write("<img src=  'images/back"+i+".gif' style='position:absolute;left:"+gx+"px;top:"+gy+"px; width:456px; height:506px; ' name='screen"+i+"'>");
}
//�@�h�b�g�̓ǂݍ���
var dotNo=1;
for(var i=0;i<30;i++)
{
   for(var j=0;j<30;j++)
   {
      var pos=i*30+j;
      if((map[pos]>1)&&(map[pos]<8))
      {
         if((dotNo==95)||(dotNo==100)||(dotNo==241)||(dotNo==246)){var src="images/pow.gif";}else{var src="images/dot.gif";}   
         document.write("<img src="+src+" style='position:absolute;left:"+(gx+j*15)+"px;top:"+(gy+i*15)+"px; width:15px; height:15px; ' name='dot"+dotNo+"'>");
         dmap[pos]=dotNo;//�@�h�b�g�̃}�b�v���쐬
         dotNo++;
      }else{
         dmap[pos]=0;
      }
   }
}

//�@�G�̓ǂݍ���
for(var i=0;i<4;i++)
{
   document.write("<img src='images/t0"+i+".gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='t0"+i+"'>");
   document.write("<img src='images/t1"+i+".gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='t1"+i+"'>");
   document.write("<img src='images/t2"+i+".gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='t2"+i+"'>");
}
for(var i=0;i<3;i++)
{
   document.write("<img src='images/tn0.gif' style='position:absolute;left:-100px; width:60px; height:30px; ' name='tn0"+i+"'>");
   document.write("<img src='images/tn1.gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='tn1"+i+"'>");
   document.write("<img src='images/me.gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='me"+i+"'>");
}


//�@�����̓ǂݍ���
document.write("<img src='images/m0.gif' style='position:absolute;left:-100px; width:30px; height:21px; ' name='m0'>");
document.write("<img src='images/m1.gif' style='position:absolute;left:-100px; width:21px; height:30px; ' name='m1'>");
document.write("<img src='images/m2.gif' style='position:absolute;left:-100px; width:30px; height:21px; ' name='m2'>");
document.write("<img src='images/m3.gif' style='position:absolute;left:-100px; width:21px; height:30px; ' name='m3'>");
document.write("<img src='images/m4.gif' style='position:absolute;left:-100px; width:30px; height:30px; ' name='m4'>");

//�@�^�C�g���̓ǂݍ���
document.write("<img src='images/title.gif' style='position:absolute;left:-200px; width:450px; height:372px; ' name='title' onclick='gameStart()'>");

//�@���S�̓ǂݍ��݁i�폜�s�j
document.write("<img src='images/pjs_logo.gif' style='position:absolute;left:-100px; width:228px; height:42px; ' name='copyright' onclick='goHome()'>");

//�@������������
document.write("<div id='score' style='position:absolute;left:"+(gx+24)+";top:"+(gy+465)+";font-size:33px;color:rgb(255,255,255);'>0</div>");
document.write("<div id='round' style='position:absolute;left:"+(gx+180)+";top:"+(gy+279)+";font-size:30px;color:rgb(255,0,0);'> </div>");
document.write("<div id='mscore' style='position:absolute;left:-100;font-size:27px;color:rgb(255,255,255);'>200</div>");
document.write("<div id='life' style='position:absolute;left:"+(gx+330)+";top:"+(gy+465)+";font-size:30px;color:rgb(255,0,0);'>����</div>");
document.write("<div id='over' style='position:absolute;left:"+(gx+144)+";top:"+(gy+279)+";font-size:30px;color:rgb(255,255,255);'> </div>");
document.write("<div id='hi' style='position:absolute;left:"+(gx+240)+";top:"+(gy+306)+";font-size:36px;color:rgb(255,255,255);'> </div>");


var bw=0;//�@�u���E�U�`�F�b�N
if(document.getElementById){bw=1;}// �l�X�P�U�`�@IE�T�`�Ȃ�^
if((document.all)&&(bw==1)){bw=2;}//�@IE�S�`�Ȃ�^


//�@�L�[�C�x���g����
if(bw==2)
{
   document.onkeydown=keyCheack;
}else if(bw==1){      
   window.captureEvents(Event.keydown);
   window.onkeydown=keyCheack;
}

Init();

function Init()
{
   //�@�u���E�U�`�F�b�N
   if(bw==0)
   {
      alert("�u���E�U�o�[�W�������Ή����Ă��܂���\n�ŐV�̃u���E�U�ɍX�V���Ă�������\n�����o�[�W����(NN6�`,IE5�`)\n�@�@�@�@+1JavaScript");
      return;
   }
   if(bw==1){fastInt=39;slowInt=43;stopInt=57;}
   if(bw==2){fastInt=42;slowInt=47;stopInt=64;}
   ro=1;
   sc=0;
   up=10000;
   life=3;
   pti=120;
   document.getElementById("score").innerHTML=sc;
   eat=0;//�@�H�ׂ��h�b�g�̐��i�Q�V�W�ŃN���A�j
   dotwrite();
   screenwrite();

   startInit();
}


function startInit()
{
   //�@�G�摜����
   for(var i=0;i<4;i++)
   {
      document.images["t0"+i].style.left=-100;
      document.images["t1"+i].style.left=-100;
      document.images["t2"+i].style.left=-100;
   }
   for(var i=0;i<3;i++)
   {
      document.images["tn0"+i].style.left=-100;
      document.images["tn1"+i].style.left=-100;
      document.images["me"+i].style.left=-100;
   }

   //�@���摜����
   for(var i=0;i<5;i++)
   {
      document.images["m"+i].style.left=-100;
   }

   cl=false;//�@�N���A�t���O

   mx=70;//�@�����̏����ʒu
   my=125;
   md=1;//�@�ŏ��͉E�����������
   mp="m1";
   mInt=slowInt;//�@���荞�݊Ԋu
   document.images[mp].style.left=mx*3+gx-6;//�@�摜�̕\���ʒu��ύX
   document.images[mp].style.top=my*3+gy-6;

   //�@�G�̏����ݒ�
   tx[0]=72.5;
   ty[0]=65;
   tx[1]=80;
   tx[2]=65;
   ty[1]=ty[2]=80;
   tInt=slowInt;//�@���荞�݊Ԋu
   tj=2400;//�@�G�̏�ԂP
   if(ro==1){//�@�G�҂�����
      tmode[0]=2;
      tmode[1]=120;
      tmode[2]=60;
   }else if(ro<4){
      tmode[0]=2;
      tmode[1]=80;
      tmode[2]=30;
   }else if(ro<6){
      tmode[0]=2;
      tmode[1]=20;
      tmode[2]=2;
   }else{
      tmode[0]=2;
      tmode[1]=2;
      tmode[2]=2;
   }
   for(var i=0;i<3;i++)
   {
      td[i]=0;//�@�����̐ݒ�
      tk[i]=0;//�@��n���o�����̃t���O
      document.images["tn0"+i].style.left=tx[i]*3+gx-6;//�@�摜�̕\���ʒu��ύX
      document.images["tn0"+i].style.top=ty[i]*3+gy-6;
      sd[i]="tn0"+i;
      tr[i]=0;//�@�G�̏�ԂQ
   }
   td[0]=3;

   if(demo==true)
   {
      title();
   }else{
      document.getElementById("round").innerHTML="Round "+ro;
      var lifestr="������";
      document.getElementById("life").style.left=gx+420-30*life;
      document.getElementById("life").innerHTML=lifestr.substring(0,life-1);
      setTimeout("main()",1700);
   }
}


function dotwrite()
{
   //�@�h�b�g�̏�������
   var dotNo=1;
   for(var i=0;i<30;i++)
   {
      for(var j=0;j<30;j++)
      {
         var pos=i*30+j;
         if((map[pos]>1)&&(map[pos]<8))
         {
            document.images["dot"+dotNo].style.left=gx+j*15;
            document.images["dot"+dotNo].style.top=gy+i*15;
            dmap[pos]=dotNo;//�@�h�b�g�̃}�b�v���쐬
            dotNo++;
         }else{
            dmap[pos]=0;
         }
      }
   }
}

function screenwrite()
{
   //�@�w�i�̑I��
   for(var i=0;i<4;i++)
   {
      document.images["screen"+i].style.left=-600;
   }
   var scno=Math.floor(Math.random()*4);
   document.images["screen"+scno].style.left=gx;
   document.images["screen"+scno].style.top=gy;
}

function title()//�@�^�C�g��
{
   mx=65;
   my=155;
   document.images["title"].style.left=gx+3;
   document.images["title"].style.top=gy+87;
   document.images["copyright"].style.left=gx+114;
   document.images["copyright"].style.top=gy+30;
   document.images[mp].style.top=my*3+gy-6;
   document.getElementById("over").innerHTML="";
   document.getElementById("round").innerHTML="";
   document.getElementById("hi").innerHTML=hi;
   tekiMove();
   cl2=false;
   title2();
}

function title2()
{
   mx=Math.floor(Math.random()*150);
   if(Math.random()<.5){my=0;}else{my=150;}
   if(Math.random()<.005){screenwrite();}
   clearTimeout(timeId3);
   if(cl2==false){timeId3=setTimeout("title2()",20);}
}

function gameStart()
{
   key=0;
   cl=true;
   cl2=true;
   clearTimeout(timeId1);
   clearTimeout(timeId2);
   clearTimeout(timeId3);
   demo=false;
   document.images["title"].style.left=-700;
   document.images["copyright"].style.left=-700;
   document.getElementById("hi").innerHTML="";
   Init();
}


function goHome()
{
   window.open("http://plusone.jpn.org/javascript/");
}
function main()
{
   key=0;//�@�L�[�o�b�t�@�̃N���A
   document.getElementById("round").innerHTML="";
   myMove();//�@�����̈ړ�
   tekiMove();//�@�G�̈ړ�
}

//�@�����̈ړ�
function myMove()
{
   mx+=v[md]*2.5;//�@�����Ă�������ɍ��W��i�߂�
   my+=w[md]*2.5;
   if(mx==0){mx=145;}else{mx=mx-145*(mx==145);}//�@���[�v
   if(mx%5+my%5==0)//�@�T�Ŋ���؂��ʒu�ɂ���Ƃ����ڐG����̃^�C�~���O
   {
      var pos=mx/5+my/5*30;//�@�n�}�z��Ŏ����̂���ꏊ
      if(map[pos+v[md]+w[md]*30]<2){md=4;}//�@�ǂƂ̐ڐG����md=4�͎~�܂��Ă�����
      if(((key==73)||(key==104))&&(map[pos-30]>1)){md=0;}//�@�L�[���͂ƕǂ��`�F�b�N����
      if(((key==76)||(key==102))&&(map[pos+1]>1)){md=1;}//�@������ς���
      if(((key==75)||(key==98))&&(map[pos+30]>1)){md=2;}
      if(((key==74)||(key==100))&&(map[pos-1]>1)){md=3;}
      if(dmap[pos]!=0){dotGet(i,pos);}//�@�h�b�g�Ƃ̐ڐG����
   }
   var fn="m"+md;
   if(fn!=mp)
   {
   document.images[mp].style.left=-100;//�@�摜����
   mp=fn;
   }
   document.images[fn].style.left=mx*3+gx-6;//�@�摜�̈ʒu��ς���
   document.images[fn].style.top=my*3+gy-6;
   mti=mti-(mti>0);
   if(mti==0){document.getElementById("mscore").innerHTML="";}
   clearTimeout(timeId1);
   if(cl==false){timeId1=setTimeout("myMove()",mInt);}//�@���荞�ݏ���
}

function dotGet(i,pos)
{
   var m=dmap[pos];
   document.images["dot"+m].style.left=-100;//�@�H�ׂ��h�b�g������
   dmap[pos]=0;//�@�h�b�g�}�b�v������
   if((m==95)||(m==100)||(m==241)||(m==246))//�@�p���[�G�T���̔���
   {
      for(var i=0;i<3;i++)//�@�G��������ݒ��U�^�[���ݒ�
      {
         document.images["t"+i+""+td[i]].style.left=-100;//�@�ʏ�L����������
         document.images["tn1"+i].style.left=-100;//�@�p���[�A�b�v�I�ՂɎ�������ɔ����Ď��Ԑ؂�p�L����������
         if((tmode[i]==0)&&(tr[i]==0)&&(tk[i]==1)){td[i]=td[i]+2-(td[i]>1)*4;}//�@��n�Ŗ����Ă��Ȃ���ԁ��ʏ킩��p���[�A�b�v���[�h�ɓ���������n����o�Ă���Ȃ�U�^�[��
         if(tx[i]%5+ty[i]%5==0)//�@�T�Ŋ���؂��Ȃ�ǂƂ̐ڐG����
         {
            if(map[tx[i]/5+ty[i]/5*30+v[td[i]]+w[td[i]]*30]==1){td[i]=td[i]+2-(td[i]>1)*4;}//�@�s���悪�ǂȂ�U�^�[�����~
         }
         msc=0;
         sd[i]="tn0"+i;
         tr[i]=pti;//�@�p���[�A�b�v����
      }
      sc+=50;
      mInt=fastInt;//�@�����̓X�s�[�h�A�b�v
      tInt=stopInt;//�@�G�̓X�s�[�h�_�E��
   }else{
      sc+=10;
   }
   if((sc>=up)&&(life<4))
   {
      up+=10000;
      life++;
      var lifestr="������";
      document.getElementById("life").style.left=gx+420-30*life;
      document.getElementById("life").innerHTML=lifestr.substring(0,life-1);
      mti=30;
      document.getElementById("mscore").style.left=gx+mx*3;
      document.getElementById("mscore").style.top=gy+my*3-6;
      document.getElementById("mscore").innerHTML="1UP!";
   }
   document.getElementById("score").innerHTML=sc;//�@�X�R�A�̏�������
   eat++;
   if(eat==278){clear();}
}

//�@�L�[�C�x���g�������ŃL���b�`
function keyCheack(e)
{
   if(bw==2){key=event.keyCode;}else{key=e.keyCode;}
}

//�@�G�̈ړ�
function tekiMove()
{
   for(var i=0;i<3;i++)//�@�G3�C���J��Ԃ�
   {
      tr[i]=tr[i]-(tr[i]>1);//�@�p���[�A�b�v���[�h�Ȃ�J�E���g�_�E��
      if(tr[i]==1)//�@�p���[�A�b�v���[�h�I���Ȃ犄�荞�݂�ʏ�ɖ߂�
      {
         tr[i]=0;
         if(tr[0]+tr[1]+tr[2]==0)
         {
            mInt=slowInt;
            tInt=slowInt;
         }
      }
      if(tmode[i]>0)//�@��n�ŋx�ޏ�Ԃ̏���
      {
         tmode[i]=tmode[i]-(tr[i]==0);//�@�p���[�A�b�v���̓J�E���g�_�E�����Ȃ�
         continue;
      }
      tj=tj-(tj>0)+(tj==0)*2500;//�@�G�̏�ԁi�ҋ@or�ǐՁj�̃J�E���g�_�E��
      if(tk[i]==2){//�@�����Ă�������ɍ��W��i�߂�
         tx[i]+=v[td[i]]*5;
         ty[i]+=w[td[i]]*5;
   }else{
         tx[i]+=v[td[i]]*2.5;
         ty[i]+=w[td[i]]*2.5;
   }
      if(tx[i]==0){tx[i]=145;}else{tx[i]=tx[i]-(tx[i]==145)*145;}//�@���[�v
      if(tx[i]%5+ty[i]%5==0)//�@�T�Ŋ���؂��ʒu�ɂ���Ƃ����ڐG����̃^�C�~���O
      {
         var pos=tx[i]/5+ty[i]/5*30;//�@�n�}�z��Ŏ����̂���ꏊ
         if((map[pos]>2)&&(map[pos]<12))//�@���ݒn�������_���ǂ����H
         {
            tekicross(i,pos);//�@�����_�ł̕����ϊ�����
         }else if(map[pos+v[td[i]]+w[td[i]]*30]==1)//�@�s����͕ǂł͂Ȃ����H
         {
            mitinari(i,pos);//�@���Ȃ�ɕ����]�����鏈��
         }
      }
      var fn
      if(tk[i]==2){fn="me"+i;}else if(tr[i]==0){fn="t"+i+""+td[i];}else if(tr[i]>30){fn="tn0"+i;}else{fn="tn1"+i;}
      if(sd[i]!=fn)
      {
         document.images[sd[i]].style.left=-100;
         sd[i]=fn;
      }
      document.images[fn].style.left=tx[i]*3+gx-6;//�@�摜�̈ʒu��ς���
      document.images[fn].style.top=ty[i]*3+gy-6;
      if((Math.abs(mx-tx[i])<5)&&(Math.abs(my-ty[i])<5))//�@�G�Ǝ����̐ڐG����
      {
         if(tr[i]>0){tekiEat(i);}else{miss();}//�@�p���[�A�b�v���Ȃ�H�ׂ������A����ȊO�̓~�X
      }
   }
   clearTimeout(timeId2);
   if(cl==false){timeId2=setTimeout("tekiMove()",tInt);}//�@���荞�ݏ���
}

//�@�����_�ł̕����ϊ�����
function tekicross(i,pos)
{
   var flag=false;//�@�v�l���[�`����A���łɕ����]�������肳�ꂽ���̃t���O
   var d1,d2;//�@�����ϊ��̑���]�Ƒ���]
   var tgx,tgy;//�@�^�[�Q�b�g�̍��W
   var m=map[pos];//�@�����_�̎�ނ��擾
   var n1=parseInt(cross[m].charAt(0));//�@�����_�ł̓��������
   var n2=parseInt(cross[m].charAt(1));
   var n3=parseInt(cross[m].charAt(2));
   var backdi=td[i]+2-(td[i]>1)*4;//�@�o�b�N�̕���
   switch(i+1+(tj>1999)*3+(tk[i]==2)*7)
   {
   case 1:
      tgx=mx;
      tgy=my;
      break;
   case 2:
      tgx=tx[0]+(mx-tx[0])*2;
      tgy=ty[0]+(my-ty[0])*2;
      break;
   case 3:
      tgx=mx+v[md]*18;
      tgy=my+w[md]*18;
      break;
   case 4:
      tgx=Math.floor(Math.random()*65)+85;
      tgy=Math.floor(Math.random()*65);
   break;
   case 5:
      tgx=Math.floor(Math.random()*65)+85;
      tgy=Math.floor(Math.random()*65)+85;
      break;
   case 6:
      tgx=Math.floor(Math.random()*65);
      tgy=Math.floor(Math.random()*65);
      break;
   default:
      tgx=70;
      tgy=80;
      break;
   }
   var dx=Math.abs(tgx-tx[i]);//�@�^�[�Q�b�g�Ƃ̋���
   var dy=Math.abs(tgy-ty[i]);

   if(dx>dy)//�@�����ϊ��v�l���[�`��
   {
      d1=(tgx<tx[i])*3+(tgx>=tx[i]);
      d2=(tgy>=ty[i])*2;
   }else{
      d1=(tgy>=ty[i])*2;
      d2=(tgx<tx[i])*3+(tgx>=tx[i]);
   }
   if((tr[i]>0)&&(tk[i]==1))
   {
      d1=d1+2-(d1>1)*4;
      d2=d2+2-(d2>1)*4;
   }
   if(m==3)
   {
      if(d1!=backdi){td[i]=d1;}else{td[i]=d2;}
   }else{
      if(d1!=backdi)
      {
         if((d1==n1)||(d1==n2)||(d1==n3))
         {
            td[i]=d1;
            flag=true;
         }
      }
      if((d2!=backdi)&&(flag==false))
      {
         if((d2==n1)||(d2==n2)||(d2==n3))
         {
            td[i]=d2;
         }
      }
   }
   if(m==11)
   {
      if(tk[i]==0)
      {
         tk[i]=1;
      }else{
         if(tk[i]==2)
         {
         reset(i);
         }
      } 
  }
}

//�@���Ȃ�ɕ����ϊ����鏈��
function mitinari(i,pos)
{
   if(td[i]%2==0)//�@�����Ȃ�Ώc�̈ړ����ł�
   {
      if(map[pos-1]<2){td[i]=1;}else{td[i]=3;}//�@���̌`��ɂ������ϊ�������
   }else{
      if(map[pos-30]<2){td[i]=2;}else{td[i]=0;}
   }
}


function tekiEat(i)//�@�G��H�ׂ����̏���
{
   if(tk[i]==2){return;}//�@�G���H�ׂ��Ċ�n�֖߂��Ԃ̎��̓��^�[��
   tk[i]=2;//�@�G�̏��
   tx[i]=tx[i]-tx[i]%5;//�@�T�h�b�g���̈ړ��ɂȂ�̂ō��W���T�h�b�g�P�ʂɖ߂�
   ty[i]=ty[i]-ty[i]%5;
   if(tx[i]<5){tx[i]=5;}
   if(tx[i]>140){tx[i]=140;}
   if(ty[i]<5){ty[i]=5;}
   if(ty[i]>140){ty[i]=140;}
   var pos=tx[i]/5+ty[i]/5*30;
   for(var j=0;j<4;j++)
   {
      if(map[pos+v[td[i]]+w[td[i]]*30]!=1){break;}
      td[i]=td[i]+1-(td[i]==3)*4;
   }
   msc++;//�@�p���[�A�b�v���ɐH�ׂ��G�̐�
   mti=30;//�@���_�̕\������
   sc+=msc*200;
   document.getElementById("score").innerHTML=sc;//�@�X�R�A�̏�������
   document.getElementById("mscore").style.left=gx+tx[i]*3;
   document.getElementById("mscore").style.top=gy+ty[i]*3-6;
   document.getElementById("mscore").innerHTML=msc*200;
   if((sc>=up)&&(life<4))
   {
      up+=10000;
      life++;
      var lifestr="������";
      document.getElementById("life").style.left=gx+420-30*life;
      document.getElementById("life").innerHTML=lifestr.substring(0,life-1);
      mti=30;
      document.getElementById("mscore").style.left=gx*3+mx;
      document.getElementById("mscore").style.top=gy*3+my-6;
      document.getElementById("mscore").innerHTML="1UP!";
   }
      document.images["tn0"+i].style.left=-100;
      document.images["tn1"+i].style.left=-100;
}

function reset(i)//�@�G����n�ɖ߂�����G�̏�Ԃ����Z�b�g
{
   ty[i]=80;
   tk[i]=0;
   td[i]=0;
   tr[i]=0;
   tmode[i]=20;
   if(tr[0]+tr[1]+tr[2]==0)//�@�G��S���H�ׂ����͊��荞�݊Ԋu��߂�
   {
      mInt=slowInt;
      tInt=slowInt;
   }
}

function miss()//�@�~�X�������̏���
{
   cl=true;
   clearTimeout(timeId1);
   clearTimeout(timeId2);
   life--;
   if(life==0)
   {
      over();
   }else{
      document.getElementById("round").innerHTML="�@MISS";
      setTimeout("startInit()",2000);
   }
}

function clear()//�@���E���h�N���A�̏���
{
   cl=true;
   clearTimeout(timeId1);
   clearTimeout(timeId2);
   document.getElementById("round").innerHTML="CLEAR !";
   pti=pti-(pti>40)*10;
   ro++;
   if(ro>7)//�@�W�ʈȍ~�̓X�s�[�h�A�b�v
   {
      fastInt=fastInt-(fastInt>10);
      slowInt=slowInt-(slowInt>10);
      stopInt=stopInt-(stopInt>10);
   }
   setTimeout("clear2()",1500);
}

function clear2()
{
   eat=0;//�@�H�ׂ��h�b�g�̐��i�Q�V�W�ŃN���A�j
   dotwrite();
   screenwrite();
   startInit();
}

function over()//�@�Q�[���I�[�o�[�̏���
{
   cl=true;
   clearTimeout(timeId1);
   clearTimeout(timeId2);
   if(sc>hi){hi=sc;}
   document.getElementById("over").innerHTML="GAME OVER";
   demo=true;
   setTimeout("Init()",1500);
}