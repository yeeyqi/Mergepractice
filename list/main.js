$(function(){
    //儲存目前作答到第幾題
    var currentQuiz = null;
    //當按鈕按下後，要做的事情
    $("#startButton").on("click",function(){
        if(currentQuiz==null){
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element,index,array){
                $("#options").append(`<input name='options' type='radio'
                value='${index}'><label>${element[0]}</label><br><br>`);
            });
            $("#startButton").attr("value","Next");
        }else{
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    //console.log(i);
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                        //A,B,C,D
                        var finalResult=questions[currentQuiz].answers[i][1];
                        $("#questions").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }else{
                        //number
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value='${index
                            }'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            })  
            
        }
    });
});
