const image =document.querySelector("#myImage");
const question =document.querySelector(".question");
const one =document.querySelector(".one");
const two =document.querySelector(".two");
const par =document.querySelector("p");
one.addEventListener("click", sweet);
two.addEventListener("click", noSweet);


function sweet(){
    image.setAttribute("src","carorap.jpg");
    question.textContent="Do you want to bake?";
    one.textContent="Bake";
    two.textContent="No bake";


    one.addEventListener("click", bake);
    function bake(){
        image.setAttribute("src","app.jpg");
        question.textContent="Carrot cake or Appel pie";
        one.textContent="Carrot cake ";
        two.textContent="Appel pie";
        one.addEventListener("click", carrot);
        two.addEventListener("click", apple);
    }
  

    
    function carrot(){
        image.setAttribute("src","carrot.jpeg");
        question.textContent="";
        par.textContent="";
        one.classList.add("newBtn");
        one.textContent="Reciep";
        two.style.display= "none";
        one.addEventListener("click", ()=>{
            document.location="https://sallysbakingaddiction.com/my-favorite-carrot-cake-recipe/";
        });
    }

   
    function apple(){
        image.setAttribute("src","apple.jpg");
        question.textContent="";
        par.textContent="hgjk";
        one.classList.add("newBtn");
        one.textContent="Reciep";
        two.style.display= "none";
        one.addEventListener("click", ()=>{
            document.location="https://www.pillsbury.com/recipes/perfect-apple-pie/1fc2b60f-0a4f-441e-ad93-8bbd00fe5334";
        });
    }



    two.addEventListener("click", nobake);
    function nobake(){
        image.setAttribute("src","ti.jpg");
        question.textContent="Tiramisu or Napoleon";
        one.textContent="Tiramisu";
        two.textContent="Napoleon";
        one.addEventListener("click", tiramisu);
        two.addEventListener("click", napoleon);
    }

 function tiramisu(){
        image.setAttribute("src","tir.jpg");
        question.textContent="Tiramisu";
        par.textContent="";
        one.classList.add("newBtn");
        one.textContent="Reciep";
        two.style.display= "none";
        one.addEventListener("click", ()=>{
            document.location="https://cooking.nytimes.com/recipes/1018684-classic-tiramisu";
        });
    }
    function napoleon(){
        image.setAttribute("src","napoleon.jpeg");
        question.textContent="";
        par.textContent="";
        one.classList.add("newBtn");
        one.textContent="Reciep";
        two.style.display= "none";
        one.addEventListener("click", ()=>{
            document.location="https://www.kingarthurbaking.com/recipes/napoleons-recipe";
        });
    }
 

}










function noSweet(){
    image.setAttribute("src","euas.jpg");
    question.textContent="European or Asian?";
    one.textContent="European";
    two.textContent="Asian";
   
   
    one.addEventListener("click", europe);
    function europe(){
        image.setAttribute("src","pastapizza.jpg");
        question.textContent="Pizza oder Pasta?";
        par.textContent="";
        one.textContent="Pizza";
        two.textContent="Pasta";
        one.addEventListener("click", pizza);
        two.addEventListener("click", pasta);
    }



    function pizza(){
        image.setAttribute("src","pizza.jpg");
        question.textContent="Pizza Salami or margherita";
        par.textContent="hgjk";
        one.textContent="Pizza Salami";
        one.textContent="Pizza margherita";
        one.addEventListener("click", ()=>{
            document.location="https://www.kochbar.de/rezept/423800/D-Pizza-Salami.html";
        });
        two.addEventListener("click", ()=>{
            document.location="https://www.bbcgoodfood.com/recipes/pizza-margherita-4-easy-steps";
        });
    }



    function pasta(){
        image.setAttribute("src","pasta.jpg");
        question.textContent="Carbonara or Bolognese";
        par.textContent="hgjk";
        one.textContent="Carbonara";
        one.textContent="Bolognese";
        one.addEventListener("click", ()=>{
            document.location="https://www.bbcgoodfood.com/recipes/ultimate-spaghetti-carbonara-recipe";
        });
        two.addEventListener("click", ()=>{
            document.location="https://www.bbcgoodfood.com/recipes/best-spaghetti-bolognese-recipe";
        });
    }



    two.addEventListener("click", asian);
    function asian(){
        image.setAttribute("src","fime.jpg");
        question.textContent="Fish oder Meat?";
        par.textContent="";
        one.textContent="Meat";
        two.textContent="Fish";
        one.addEventListener("click", meat);
        two.addEventListener("click", fish);
    }

    function meat(){
        image.setAttribute("src","mi.jpg");
        question.textContent="Asian beef bowls or Mongolian beef";
        one.textContent="Asian beef bowls";
        one.textContent="Mongolian beef";
        one.addEventListener("click", ()=>{
            document.location="https://www.recipetineats.com/asian-beef-bowls/";
        });
        two.addEventListener("click", ()=>{
            document.location="https://www.dinneratthezoo.com/mongolian-beef/";
        });
    }
    function fish(){
        image.setAttribute("src","fi.jpg");
        question.textContent="Ginger Soy Fish or tom yum soup?";
        par.textContent="tom yum soup";
        one.textContent="Ginger Soy Fish";
        one.textContent="Bolognese";
        one.addEventListener("click", ()=>{
            document.location="https://rasamalaysia.com/ginger-soy-fish/";
        });
        two.addEventListener("click", ()=>{
            document.location="https://www.recipetineats.com/tom-yum-soup-thai/";
        });
    }
    


}