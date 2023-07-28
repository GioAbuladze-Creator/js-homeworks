
var Books = [
    {
        author: 'Bill',
        title: 'The Road Ahead',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 10)
    },
    {
        author: 'Steve',
        title: 'Walter Isaacson',
        haveRead: true,
        dateOfRead: new Date(2020, 10, 5)
    },
    {
        author: 'Jhon',
        title: 'The Hunger Games',
        haveRead: false,
        dateOfRead: NaN
    }
];

function readingStatus(books){   
    for (let book of books){
        if(book.haveRead){
            Object.defineProperty(book,"daysAgo",{
                get:function(){
                    //milliseconds in a day
                    let msInDay = 24 * 60 * 60 * 1000;
                    return Math.floor((new Date()-book.dateOfRead)/msInDay);
                }
            })

            console.log(`${book.author} have read ${book.title} book ${book.daysAgo} days ago`)          

        }else{
            console.log(`${book.author} haven't read ${book.title} book yet`)   
        }
    }
}
readingStatus(Books);