// // //Semana 01
// const casaStark = "Casa Stark";
// const numberStark = 18000;
// const boleanoStark = true;

// const casaLannister = "Casa Lannister";
// const numberLannister = 45000;
// const boleanoLannister = true;

// const casaTargaryen = "Casa Targaryen";
// const numberTargaryen = 66000;
// const boleanoTargaryen = true;

// const media = (numberStark + numberLannister + numberTargaryen) / 3;
// console.log(media);

// const boleano = boleanoStark && boleanoLannister && boleanoTargaryen;
// console.log(boleano);

// //Semana 02

// const pessoaStark = [
//   "Eddard ",
//   " Jon ",
//   "Arya "];

// const pessoaLannister = [
//   "Cersei ",
//   "Jaime ",
//   "Tyrion ",
// ];

// const pessoaTargaryen = [
//   "Aerys II ",
//   "Daenerys ",
//   "Viserys ",
// ];

// console.log(`${casaStark.toUpperCase()} ${numberStark} ${boleanoStark} ${pessoaStark}

//  ${casaLannister.toUpperCase()} ${numberLannister} ${boleanoLannister} ${pessoaLannister}

//  ${casaLannister.toUpperCase()} ${numberTargaryen} ${boleanoTargaryen} ${pessoaTargaryen}`);

//Semana 03

/*const stark01 = {
  casa: 'Casa Stark',
  number: 18000,
  boleano: true,
  pessoas: [ "Eddard "," Jon ","Arya "],
  gotVazia: '',
};

const lannister02 = {
  casa: 'Casa Lannister',
  number: 45000,
  boleano: true,
  pessoas: ["Cersei ","Jaime ", "Tyrion "],
  gotVazia: '',
};

const targaryen03 = {
  casa: 'Casa Targaryen',
  number: 66000,
  boleano: true,
  pessoas: ["Aerys II", "Daenerys ", "Viserys ",],
  gotVazia: '',
};

const juntos = [];

// juntos.push(stark01, lannister02, targaryen03);
// console.log(juntos);

//Semana 04

  stark01.boleano === true ? juntos.push(stark01) : console.log('Item não adicionado')
  lannister02.boleano === true ? juntos.push(lannister02) : console.log('Item não adicionado')
  targaryen03.boleano === true ? juntos.push(targaryen03) : console.log('Item não adicionado')

//Semana 05 

for(i in juntos) {
  juntos[i].pessoas = juntos[i].pessoas.join(', ')
}

for(i in juntos) {
  juntos[i].gotVazia = `${juntos[i].casa}
  ${juntos[i].number}
  ${juntos[i].boleano}
  ${juntos[i].pessoas}`
  console.log(juntos[i].gotVazia);
}

//Semana 06

// const retornaVazio = (objeto) => {
//   return objeto.gotVazia
// }
// console.log(returnaVazio(stark01));

// const returnCasa = (array, string) => {
//   let resposta = []
//   for(i in array) {
//     if(array[i].casa.toUpperCase() === string.toUpperCase()) {
//       resposta.push(array[i])
//     }
//   }
//   if(resposta.length === 0) {
//     return resposta
//   } else {
//     return  alert('Item não foi encontrado')
//   }
// }

// console.log(returnaGot(juntos, 'Casas'));




function buscar_casa() {
  let input = document.getElementById('botao-pesquisa').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName("cardStark","cardLannister","cardTargaryen");
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="flex";                 
      }
  }
}*/

//semana 11 Usando DOM

const arrayDeObjetos1 = [
  {
    casa: "Stark".toUpperCase(),
    number: 18000,
    boleano: true,
    pessoas: ["Eddard ", " Jon ", "Arya "],
    lema:"O inverno  está chegando",
    gotVazia: "",
    link: "https://gameofthrones.fandom.com/pt-br/wiki/Casa_Stark",
    imagem: ".//stark.webp",
  },

  {
    casa: "Lannister".toUpperCase(),
    number: 45000,
    boleano: true,
    pessoas: ["Cersei ", "Jaime ", "Tyrion "],
    lema:"Ouça-me rugir",
    gotVazia: "",
    link: "https://gameofthrones.fandom.com/pt-br/wiki/Casa_Lannister",
    imagem: ".//lannister.webp",
  },

  {
    casa: "Targaryen".toUpperCase(),
    number: 66000,
    boleano: true,
    lema:"Fogo e Sangue",
    pessoas: ["Aerys II", "Daenerys ", "Viserys "],
    gotVazia: "",
    link: "https://gameofthrones.fandom.com/pt-br/wiki/Casa_Targaryen",
    imagem: ".//targaryen.webp",
  },
 
];

function buscarCasa() {
  const input = document.getElementById("search");
  console.log(input.value);
  const casaEscolhida2 = casaEscolhida(input);
  console.log(
    `${casaEscolhida2}` ? casaEscolhida2 : alert("Casa não encontrada")
  );
  test(casaEscolhida2);
}

function casaEscolhida(input) {
  const casaEscolhida = arrayDeObjetos1.filter((item) => {
    return item.casa === input.value.toUpperCase();
  });
  console.log(
    `${casaEscolhida}` ? casaEscolhida : alert("Casa não encontrada")
  );
  if (casaEscolhida.length >= 1) {
    return casaEscolhida;
  } else {
    return arrayDeObjetos1;
  }
}

function test(array) {
  const itens = document.getElementById("item1");
  itens.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    itens.innerHTML += `
  <ul class="cardCasa">
  
  
     <a href='${array[i].link}' target="_blank"class="CasaGot" >
     
     <img class="imagemCasa" src="${array[i].imagem}"alt=""></a> 
     <span class="CasaGot">${array[i].casa}</span>
      <li class="numeroExercito">Exército:${array[i].number}</li>
      <li class membrosDaCasa">Membros: ${array[i].pessoas}</li>
      <li class lemaDaCasa">Lema: ${array[i].lema}</li>

        </ul>
`
  }
}
test(arrayDeObjetos1);
