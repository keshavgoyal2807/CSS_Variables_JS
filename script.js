function change1(){
    var c=this.dataset.suffix || '';
    console.log(c);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + c)
}
var a=document.querySelectorAll('.controls input');
a.forEach(b => b.addEventListener('change',change1));
a.forEach(b => b.addEventListener('mousemove',change1));
