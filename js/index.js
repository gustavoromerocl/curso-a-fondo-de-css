let modal = $('#modal');

$(function(){
    $('img').click(function(){
        let idImg = $(this).attr('id');
        console.log(idImg);
        var srcImg = $(this).attr('src');
        console.log(srcImg);
        showModal(idImg, srcImg);
    })
    hideModal();
})

function showModal(idImg, srcImg){
    let imagen = idImg;
    let src = srcImg;
    $('imgModal').attr('src', src);
    modal.css('display', 'block');
}

function hideModal(){
    $('.cerrar').click(function(){
        modal.css('display', 'none')
    });
}
