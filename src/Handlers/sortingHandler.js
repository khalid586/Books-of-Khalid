export function sortingHandler (Books,sortingAttribute){
        if(sortingAttribute == 'year'){
            Books.sort((a,b)=>  b.yearOfPublishing - a.yearOfPublishing)
        } 
        else if(sortingAttribute == 'page'){
            Books.sort((a,b)=>  b.totalPages - a.totalPages)
        } 
        else{
            Books.sort((a,b)=>  b.rating - a.rating)
        } 
    
        return Books;       
}