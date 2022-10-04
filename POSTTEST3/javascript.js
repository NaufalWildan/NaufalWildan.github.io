function gantimodegelap(){
    document.body.setAttribute('id', 'mode')
}
function gantimodeterang(){
    document.body.setAttribute('id', '')
}

const btn = document.getElementById('tbl');
const btn1 = document.getElementById('tbl1');
const btn2 = document.getElementById('tbl2');

btn.addEventListener("click",function popup(){
    if(confirm("Yakin Melakukan Pesanan?")){
        alert("Pesanan Berhasil")
    }
    else{
        alert("Pesanan Gagal")
    }
})
btn1.addEventListener("click",function popup(){
    if(confirm("Yakin Melakukan Pesanan?")){
        alert("Pesanan Berhasil")
    }
    else{
        alert("Pesanan Gagal")
    }
})
btn2.addEventListener("click",function popup(){
    if(confirm("Yakin Melakukan Pesanan?")){
        alert("Pesanan Berhasil")
    }
    else{
        alert("Pesanan Gagal")
    }
})

function gambar1(){
    document.getElementById('img1').src = 'img1copy.png';
}
function gambar2(){
    document.getElementById('img2').src = 'img2copy.png';
}
function gambar3(){
    document.getElementById('img3').src = 'img3copy.png';
}