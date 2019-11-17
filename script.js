/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



 const studentList = document.querySelectorAll('.student-item');
 const items = 10;
 const page = document.querySelector('.page');
 const startPageNum = 1;

   const showPage = (list, page) => {
      let startIndex = (page * items) - items;
      let endIndex = page * items;

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


   for (let i = 1; i <= totalPages; i++) {            
      const li = document.createElement('li');
      const a = document.createElement('a');
      
      a.innerHTML = [i];
      a.href = '#';
      li.appendChild(a);
      ul.appendChild(li);
      if(i == startPageNum){
         a.className = 'active';
       }
     
   }

   const activeLink = document.querySelectorAll('a');
      for (let i = 0; i < activeLink.length; i++) {
         const newLink = activeLink[i];
      activeLink.addEventListener('click', (e) => {
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
      



showPage(studentList, startPageNum);
appendPageLinks(studentList);
   



// Remember to delete the comments that came with this file, and replace them with your own code comments.