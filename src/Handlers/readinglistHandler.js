const ls = localStorage;


export default function readinglistHandler(bookId){
    let currList = ls.getItem('readinglist');
    let currWishList = ls.getItem('wishlist');

    if(!currList){
        currList = [];
    }else{
        currList = JSON.parse(currList)
    }
    if(!currWishList){
        currWishList = [];
    }else{
        currWishList = JSON.parse(currWishList)
    }

    if(!(currList.find(item => item == bookId))){
        currList = [...currList,bookId];
        ls.setItem('readinglist',JSON.stringify(currList));

        if(currWishList.find(item => item == bookId)){
            currWishList = currWishList.filter(item => item != bookId);
            ls.setItem('wishlist',JSON.stringify(currWishList));
        }
        return true;
    }else{
        return false;
    }
}