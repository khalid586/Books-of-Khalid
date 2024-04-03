const ls = localStorage;


export default function readinglistHandler(bookId){
    let currList = ls.getItem('wishlist');
    let currReadlist = ls.getItem('readinglist');

    if(!currList){
        currList = [];
    }else{
        currList = JSON.parse(currList)
    }
    if(!currReadlist){
        currReadlist = [];
    }else{
        currReadlist = JSON.parse(currReadlist)
    }

    if(currReadlist.find(item => item == bookId)){
        return 1;
    }

    if(!(currList.find(item => item == bookId))){
        currList = [...currList,bookId];
        ls.setItem('wishlist',JSON.stringify(currList));
        return 0;
    }else{
        return 2;
    }
}