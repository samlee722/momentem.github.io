const quotes = [
{
    quote: "거 좀 힘들다고 울어 버릇하지마, 어차피 내일도 힘들어  ",
    author: "영화<스물>",
},
{
    quote: "길은 모두에게 열려있지만, 모두가 그 길을 가질 수 있는 건 아니다",
    author: "영화<인턴>",
},
{
    quote: "소중한 순간이 오면 따지지 말고 누릴 것, 우리에게 내일이 있으리란 보장은 없으니까  ",
    author: "영화<창문넘어 도망친 100세 노인>",
},
{
    quote: "슬픔이 예술이 된다  ",
    author: "뮤지컬<Phantom>",
},
{
    quote: "태어나 처음으로 내가 세상 속에 있어. 카메라 뒤에서 바라만 보던 그곳, 여기에. 태어나 처음으로 내가 누군가의 일부 나의 일부, 나의 전부 너를 놓칠 수 없어",
    author: "뮤지컬<The Bridges of Madison county>",
},
{
    quote: "그래, 이젠 네 자리로 돌아가  ",
    author: "뮤지컬<Hope>",
},
{
    quote: "넌 수고했다, 넌 충분하다, 넌 살아냈다, 늦지 않았다  ",
    author: "뮤지컬<Hope>",
},
{
    quote: "빛과 어둠은 항상 함께니, 빛도 어둠도 인간의 선택  ",
    author: "뮤지컬<더데빌>",
},
{
    quote: "사랑은 은유로 시작된다  ",
    author: "소설<참을 수 없는 존재의 가벼움>",
}




]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;