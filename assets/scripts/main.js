'use strict';

{
  // OP
  window.addEventListener('load', ()=>{
    const opening = document.getElementById('opening')
    const opClose = document.getElementById('opClose')

    opening.classList.add('fadeIn');

    opClose.addEventListener('click', ()=>{
      opening.classList.remove('fadeIn');
      window.scroll({top: 0, behavior: 'smooth'});
    });
    
    // ハンバーガメニュー
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const humMenu = document.getElementById('humberger-menu');
    
    open.addEventListener('click', ()=>{
      humMenu.classList.remove('hidden');
    });
    
    close.addEventListener('click', ()=>{
      humMenu.classList.add('hidden');
    });
    
    // ドロワーメニュー
    const navs = document.querySelectorAll('.nav li a');
    const subs = document.querySelectorAll('.sub');
    
    navs.forEach(nav =>{
      const selectedSub = document.getElementById(nav.dataset.id);
      nav.addEventListener('mouseover', ()=>{
        selectedSub.classList.remove('hidden');
      });
      
      nav.addEventListener('mouseout', ()=>{
        selectedSub.classList.add('hidden');
      });
    });
    
    subs.forEach(sub =>{
      sub.addEventListener('mouseover', ()=>{
        sub.classList.remove('hidden');
      });
      
      sub.addEventListener('mouseout', ()=>{
        sub.classList.add('hidden');
      });
    });
    
    // スライドショー
    $('.slider').slick({
      dots:true,
      autoplay:true,
      autoplaySpeed:4000,
      speed:800,
      infinity:true,
      pauseOnHover: false,
    });
    
    // タブ
    const menuItems = document.querySelectorAll('.tab-menu li');
    const tabContents = document.querySelectorAll('.tab-content');
    
    menuItems.forEach(item =>{
      item.addEventListener('click', ()=>{
        menuItems.forEach(item =>{
          item.classList.remove('active');
        });
        item.classList.add('active');
        
        tabContents.forEach(content =>{
          content.classList.remove('active');
        });
        document.getElementById(item.dataset.id).classList.add('active');
      });
    });
    
    // アコーディオン
    const dts = document.querySelectorAll('dt');
    
    dts.forEach(dt => {
      dt.addEventListener('click', () => {
        dt.parentNode.classList.toggle('appear');
        
        dts.forEach(el =>{
          if(dt !== el){
            el.parentNode.classList.remove('appear');
          }
        });
      });
    });
    
    // モーダル
    const modalOpen = document.getElementById('modal-open');
    const modalClose = document.getElementById('modal-close');
    const subModalClose = document.getElementById('subModalClose');
    const subBatsu = document.getElementById('subbatsu');
    const modal = document.getElementById('modal');
    const subModal = document.getElementById('subModal');
    const layer = document.getElementById('layer');
    const form = document.getElementById('form');
    
    modalOpen.addEventListener('click', ()=>{
      layer.classList.remove('hide');
      modal.classList.remove('hide');
    });
    modalClose.addEventListener('click', ()=>{
      layer.classList.add('hide');
      modal.classList.add('hide');
    });
    layer.addEventListener('click', ()=>{
      layer.classList.add('hide');
      modal.classList.add('hide');
      subModal.classList.add('hide');
    });
    subModalClose.addEventListener('click', ()=>{
      layer.classList.add('hide');
      subModal.classList.add('hide');
    });
    subBatsu.addEventListener('click', ()=>{
      subModalClose.click();
    });
    
    form.addEventListener('submit', (e)=>{
      
      const name = document.contact.name.value;
      const mail = document.contact.mail.value;
      const text = document.contact.text.value;
      
      if(name == '' || mail == '' || text ==''){
        alert("空欄の項目を入力してください。");
        e.preventDefault();
      } else{
        modal.classList.add('hide');
        subModal.classList.remove('hide');
      }
      e.preventDefault();
    });
    
  });
    
}