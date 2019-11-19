
/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



 const studentList = document.querySelectorAll('.student-item');
 const items = 10;
 const page = document.querySelector('.page');
 const startPageNum = 1;

 //The showpage function displays the list of student per page once the link is clicked.
   const showPage = (list, page) => {
      let startIndex = (page * items) - items;
      let endIndex = page * items;

//This the loop to go through the list of students and either show or hide the  students based on the page number that is clicked
      for (let i = 0; i < list.length; i++) {
         let studentList = list[i];
         if (i >= startIndex && i < endIndex) {          
            studentList.style.display = 'block';
         } else {                                        
            studentList.style.display = 'none';
      }
    }
   };

const appendPageLinks = (list) => {

   const totalPages = Math.ceil(list.length / items);

   let newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   page.appendChild(newDiv);
   let ul = document.createElement('ul');
   newDiv.appendChild(ul);

   // This loop creates the links for each page
   for (let i = 1; i <= totalPages; i++) {            
      const li = document.createElement('li');
      const a = document.createElement('a');
      //This will add the page number to each link
      a.innerHTML = [i];
      a.href = '#';
      li.appendChild(a);
      ul.appendChild(li);
      // highlight current page link upon intial load
      if(i == startPageNum){
         a.className = 'active';
       }
     
   }

   const activeLink = document.querySelectorAll('a');
   //This loop will go through and assign click event to link
      for (let i = 0; i < activeLink.length; i++) {
         const newLink = activeLink[i];
      newLink.addEventListener('click', (e) => {
         //This will make sure only one link has an "active" class activated at a time

         for (let i = 0; i < activeLink.length; i++) {
            if (activeLink[i].innerHTML == e.target.innerHTML) {
               activelink[i].className = 'active'
             } else {
               activeLink[i].className = ''
             }
            
            }
      
        showPage(list, e.target.innerHTML);
      
    });
  } 
}
      


//Call both functions to load the first page of students and the page links 
showPage(studentList, startPageNum);
appendPageLinks(studentList);
   


