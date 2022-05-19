/*$.ajax({
    url: url,
    data: data,
    success: success,
    dataType: dataType
  });*/
  const NUMBER_OF_POST = 5;

  function diasplayPost(postData){

            const post = `
            <div class="post" id="${postData.id}" data-user-id="${postData.userId}" >
            <h3 class="post-title">${postData.title}</h3>
            <p class="post-text"> ${postData.body}</p>  
            </div>`
        
            $(`#post`).append(post);
  }
    $(function(){
        $.get('https://jsonplaceholder.typicode.com/posts', null, (data) => {
        
        data.forEach((postData, index) => {
                
            if(index > NUMBER_OF_POST -1)
            return;

            diasplayPost(postData);

        });      
    });
});

$('#form').submit((event) => {
   event.preventDefault();

    console.log(event);

    const data = $('#form').serializeArray();
    console.log(data);
    $.post('https://jsonplaceholder.typicode.com/posts', data, (postData) => {
        diasplayPost(postData);
    });
});

