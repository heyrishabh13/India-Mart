let search_btn = document.getElementById('search-btn');
    let search = document.getElementById('searchbar');
    let tell_us = document.getElementById('tellusinput');
    let tell_us_btn = document.getElementById('tell-us-btn')
    
    tell_us_btn.addEventListener('click',function(){
        goto_search_page(tell_us);
    })
    search_btn.addEventListener('click', function(){
        goto_search_page(search);
    });
    

    function goto_search_page(str){
        
            localStorage.setItem('search',JSON.stringify(str.value))
        
        window.location.href = '/html/search-products.html';
    }

    
  
    

    let update_btn = document.getElementById('update-btn');
    update_btn.addEventListener('click', function(e){
        e.preventDefault();
        update();
    })
    
    function update(){
        let num = document.getElementById('update').value;
        let found = 1;
        let arr = JSON.parse(localStorage.getItem('users'));
        arr.forEach(function(el){
            if(el.number === num){
                localStorage.setItem('fname', JSON.stringify(el.fname));
               
                if(localStorage.getItem('fname') !== null){
                    let reg = document.getElementById('reg');
                    reg.innerHTML = JSON.parse(localStorage.getItem('fname'));
                 }
                found = 0;
            }
        })
        if(found){
            alert('Please SignUp first')
        }
    }

    if(localStorage.getItem('fname') !== null){
        let reg = document.getElementById('reg');
        reg.innerHTML = JSON.parse(localStorage.getItem('fname'));
    }
     
    function menuToggle(){
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active');
    }