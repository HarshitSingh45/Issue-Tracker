{
    let searchForm = function(){
        let newSearchForm = $('#search-form');
        newSearchForm.submit(function(e){
            e.preventDefault();
            $('#issue-container').html("");
            $.ajax({
                type: 'post',
                url: '/project/search',
                data: newSearchForm.serialize(),
                success: function(data){
                    console.log(data);
                    for(let issue of data.data.issues){
                        let searchResult = newsearchDOM(issue);
                        $('#issue-container').append(searchResult);
                        $(`#label-${issue._id}`).html("");
                        for(let label of issue.labels){
                            let labelDOM = newLabelDOM(label);
                            $(`#label-${issue._id}`).append(labelDOM);
                        }
                    }  
                }
            })
        })
    }
    function newsearchDOM(issue){
        return $(`<div id="issue">
                    <div style="text-align: center;">
                        <h2 class="green">${issue.title} </h2>
                    </div>
                    <p><span class="green">Issue Description </span> : ${issue.description}</p>
                    <p><span class="green">Author </span> : ${issue.author} </p>
                    <p><span class="green">Issue - Labels</span> :</p>
                    <div id="label-${issue._id}">
                        
                    </div>
                </div>`)
    }
    function newLabelDOM(label){
        return $(`<span class="label">${label}</span>`)
    }
    searchForm();
}