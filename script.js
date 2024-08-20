document.addEventListener('DOMContentLoaded', function(){
    const questions = document.querySelectorAll('.faq .qn');

    questions.forEach(function(question){
        question.addEventListener('click' , function(){
            const ans = this.nextElementSibling;
            const img = this.querySelector('.change-img');
            if(ans.style.display === 'block'){
                img.src = 'assets/images/icon-plus.svg';
                ans.style.display = 'none';
            }
            else {
                ans.style.display = 'block';
                img.src = 'assets/images/icon-minus.svg'
            }
        })
    });
});