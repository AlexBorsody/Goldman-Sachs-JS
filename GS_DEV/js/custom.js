(function($) { 
    $(function() {
       
        /* Animation Functions */
        
        /* Highlighting Current Tab Image and fading other two  */
           
        $( "#center-content" ).tabs({
            select: function(event, ui) {
                $('#first').css('display','')     
                li_index=ui.index;  
                //If 1st is clicked 
                if(li_index==0){
                    $('.first').addClass('first-active');
                    $(".second").removeClass('second-active');
                    $(".third").removeClass('third-active');
                     
                    
                   
                } else if(li_index==1){
                    //If 2nd is clicked
                    $(".first").removeClass('first-active');
                    $('.second').addClass('second-active');
                    $(".third").removeClass('third-active');
            
                   
                }else{
                    //If 3rd is clicked 
                    $(".first").removeClass('first-active');
                    $(".second").removeClass('second-active');
                    $(".third").addClass('third-active');
            
                 
                     
                }
                  
            },
                 
            create: function(event, ui) {
                //Highlight All on PageLoad and remove selected class given by UI to first tab so that it can be clicked
                $('.first').removeClass('ui-tabs-selected' )  
                $('.first').removeClass('ui-state-active' )  
        
            }
                                     
        });
    
        // Show/Hide of Send-Recieve Electronic Form
        
        $("#sr-media-type-ul li input[type='radio']").click(function(){
            //If electronic is selected
            if($(this).attr('id')=='mediaType1'){
                $("#sr-left-checks").fadeIn('slow') 
                $("#sr-right-checks").fadeIn('slow') 
            }else{
                $("#sr-left-checks").slideUp('slow') 
                $("#sr-right-checks").slideUp('slow')   
            }
        })
       
        // Show/Hide of Archieve Electronic Form
        $("#archMedia-type li input[type='radio']").click(function(){
         
            if($(this).attr('id')=='archMediaType1'){
                $("#archDest").fadeIn('slow') 
              
            }else{
                $("#archDest").slideUp('slow') 
               
            }
        })
   
        
        /* Form Validations + Suggestion on Submit*/ 
        
        /* Send-Receive Tab Form  Validation  */
       
        $("#send-receive-submit").click(function(){
          
            //If any radio buttom from the two is checked 
            if($("ul#sr-media-type-ul input[name=radMediaType]").is(':checked')){
              
              
                // If electronic is checked 
                if($("#mediaType1").is(':checked')){
                    
                    //At least One option in  Destination is checked 
                    sr_destination=$("#send-receive-destination input[name=dest]").is(':checked')
                    //If not Hightlight it 
                    if(!sr_destination){
                        $("#sr-dest-block").removeClass('green-text');
                        $("#sr-dest-block").addClass('red-text');
                    }
         
                    //At least One option in  Recipient is checked 
                    sr_recipient=$("#send-receive-recipient input[name=radRecp]").is(':checked')
                    //If not Hightlight it 
                    if(!sr_recipient){
                        $("#sr-recipient-block").removeClass('green-text');
                        $("#sr-recipient-block").addClass('red-text');
                    }
                    //At least One option in  Frequency is checked 
                    sr_frequency=$("#send-receive-frequency input[name=radFrequency]").is(':checked')
                    //If not Hightlight it 
                    if(!sr_frequency){
                        $("#sr-frequency-block").removeClass('green-text');
                        $("#sr-frequency-block").addClass('red-text');
                    }
                    
                    //At least One option in  Datatype is checked 
                    sr_datatype=$("#send-receive-datatype input[name=radDataType]").is(':checked')
                    //If not Hightlight it 
                    if(!sr_datatype){
                        $("#sr-datatype-block").removeClass('green-text');
                        $("#sr-datatype-block").addClass('red-text');
                    }
                
                    // If all required radios are checked hide red color and change button to update requirement
                    if(sr_destination&&sr_recipient&&sr_frequency&&sr_datatype){
                        $("#sr-datatype-block").addClass('green-text');
                        $("#sr-datatype-block").removeClass('red-text');
                        $("#sr-frequency-block").addClass('green-text');
                        $("#sr-frequency-block").removeClass('red-text');
                        $("#sr-dest-block").removeClass('red-text');
                        $("#sr-recipient-block").removeClass('red-text');
                        $("#sr-recipient-block").addClass('green-text');
                        $("#sr-recipient-block").addClass('green-text');
                        $("#sr-mediatype").removeClass('red-text');
                        $("#sr-mediatype").addClass('green-text');
                        
                       
                       
                        // Suggestion Logic Build Up Send/Receive Section
                        selectedAnswers=new Array();
                        
                        //Set Node Id value  to Send / Receive 
                        selectedAnswers["208163"]="Send / Receive";
                        
                        //Set Node Id value to Electronic as electronic is chosen 
                        selectedAnswers["208164"]="Electronic"
                        
                        
                        //Parse all 5 Question in Send/Receive to get selected Values and store in a array
                       
                        selectedAnswers["206736"]="";
                        selectedAnswers["206738"]="";
                        selectedAnswers["206739"]="";
                        selectedAnswers["206838"]="";
                        selectedAnswers["207423"]="";
                        
                        
                        $("#send-receive-destination input[name=dest]").each(function(){
                            if($(this).is(":checked")){
                                selectedAnswers["206736"]=$(this).val();
                            }
                        })
                        $("#send-receive-recipient input[name=radRecp]").each(function(){
                            if($(this).is(":checked")){
                          
                                selectedAnswers["206739"]=$(this).val();
                            }
                        })
                        $("#send-receive-frequency input[name=radFrequency]").each(function(){
                            if($(this).is(":checked")){
                                selectedAnswers["206738"]=$(this).val();
                            }
                        })
                        $("#send-receive-datatype input[name=radDataType]").each(function(){
                            if($(this).is(":checked")){
                                selectedAnswers["206838"]=$(this).val();
                            }
                        })
                        $("#send-receive-special input[name=special]").each(function(){
                            if($(this).is(":checked")){
                           
                                selectedAnswers["207423"]=$(this).val();
                          
                            }
                        })
            
                        //set flag to update below if any result is found.Used while inserting answers below this loop
                        var flag=0;
                        recommended_products='';
                        alternate_products='';

                        for(j=0;j<jObj['links'].length;j++){
                          
                 
                            /*  selectedAnswers["206838"] and selectedAnswers["206739"]  has multiple value in json array
                             *  check if our answer is one of the option in those node id array in json atring
                             *  Have to check if value exist in json ..else it returns undefined , which will break the code */
                        
                            recipient_answer=-1;
                            special_answer=-1;

                          
                            if(jObj['links'][j]['selections']['206739']!=undefined && jObj['links'][j]['selections']['206838'] !=undefined){
                                recipient_answer=$.inArray(selectedAnswers["206739"],jObj['links'][j]['selections']['206739'])
                                special_answer=$.inArray(selectedAnswers["206838"],jObj['links'][j]['selections']['206838'])
                            }
                          
                            //Have to check if value exist in json ..else it returns undefined , which will break the code 
                            
                            if(jObj['links'][j]['selections']['208163']!=undefined && jObj['links'][j]['selections']['208164'] !=undefined&& jObj['links'][j]['selections']['206736'] !=undefined&& jObj['links'][j]['selections']['206738'] !=undefined){  
                                
                                if( jObj['links'][j]['selections']['208163']==selectedAnswers["208163"]&&jObj['links'][j]['selections']['208164']==selectedAnswers["208164"]&&jObj['links'][j]['selections']['206736']==selectedAnswers["206736"]&& jObj['links'][j]['selections']['206738']==selectedAnswers["206738"]&&    
                                    recipient_answer > -1 && special_answer > -1)  {

                                 //At least one answer found , set the flag to 1
                                       flag=1;

                                 //   alert("Matched Found:"+jObj['links'][j]['text']);
                                    if(jObj['links'][j]['selections']['207957']=='Recommended'){
                                    recommended_products+='<li><span id="bigAnswer">'+jObj['links'][j]['text']+'</span></li>';
                                    }
                                    else{
                                        alternate_products+='<li><span class="smallAnswer">'+jObj['links'][j]['text']+'</span></li>';
                                    }
                                    
                                   
                                }else{
                            // alert("Not Matched")
                            }
                            }else{
                        // alert("Node Id's not found in  Present Array")
                                   
                        }
                          
                        }

                        //Check if any answer found and update answer block
                        if(flag){
                         $("ul#send-receive-result").html(recommended_products+alternate_products);
                        }else{
                           $("ul#send-receive-result").html("No suggestion available");
                        }


                      
                        $(this).val('Update Requirements');
		 
                        //answer demonstration: fade in mock answer if questions selected
                        $(".button-block").click(function(){
                            $("#answer").fadeIn('slow');
	    
                            $("#mediaType2").click( function(){
                                $("#answer").hide();
		
                            });
                        });
  
                    }
                }
                else{
                    //If Non Electronic is selected , Remove any previous highlight and change button  
                    $("#sr-mediatype").removeClass('red-text');
                    $("#sr-mediatype").addClass('green-text');
                    $(this).val('Update Requirements')
                
                }
        
            } else{
                // If none from electronic or non-electronic is selected highlight it 
                $("#sr-mediatype").removeClass('green-text');
                $("#sr-mediatype").addClass('red-text');
            }
        })
       
        
   
        
       
        /* Archive Tab Form Validation   */
        $("#archive-submit").click(function(){
            
            //Check if any button of the two radio button is checked 
            if($("ul#archMedia-type input[name=radArchMediaType]").is(':checked')){
                
                // Check if electronic is selected
                if($("archMediaType1").val()=='electronic'){
                    
         
                    //At least One option in  Destination is checked 
                    arch_destination=$("#arch-destination input[name=radArchDest]").is(':checked')
                    //If not Hightlight it 
          
                    if(!arch_destination){ 
                        $("#arch-dest-block").removeClass('green-text');
                        $("#arch-dest-block").addClass('red-text');
                    }
                    // If all required radios are checked hide red color and change button to update requirement
                    if(arch_destination){
                        $("#arch-mediatype").addClass('green-text');
                        $("#arch-mediatype").removeClass('red-text');
                        $("#arch-dest-block").removeClass('red-text');
                        $("#arch-dest-block").addClass('green-text');
                        $(this).val('Update Requirements')
                    }
                }else{
                    //If Non Electronic is selected , Remove any previous highlight and change button  
                    $("#arch-mediatype").addClass('green-text');
                    $("#arch-mediatype").removeClass('red-text');
                    $(this).val('Update Requirements') 
                }
            }
            else{
                // If none from electronic or non-electronic is selected highlight it 
                $("#arch-mediatype").removeClass('green-text');
                $("#arch-mediatype").addClass('red-text');
                
            }
           
        })
        /* Collabrate  Form Validation   */
      
        $("#collaborate-submit").click(function(){
            // If selected , update the button 
            if($("#coll-media-type-ul input[name=radCollDest]").is(':checked')){
                $("#coll-mediatype").addClass('green-text');
                $("#coll-mediatype").removeClass('red-text');
                $(this).val('Update Requirements') 
            }
            else{
                
                // If none is selected highlight it 
                $("#coll-mediatype").removeClass('green-text');
                $("#coll-mediatype").addClass('red-text');
            }
           
           
        })
   
    
    
        /* UI  Tool Tip Function  */
    
        //Select all anchor tag with rel set to tooltip
        $('a[rel=tooltip]').mouseover(function(e) {
         
            //Grab the title attribute's value and assign it to a variable
            var tip = $(this).attr('title');   
         
            //Remove the title attribute's to avoid the native tooltip from the browser
            $(this).attr('title','');
         
            //Append the tooltip template and its value
            $(this).append('<div id="tooltip"><div class="tipHeader"></div><div class="tipBody">' + tip + '</div><div class="tipFooter"></div></div>');    
         
            //Set the X and Y axis of the tooltip
            $('#tooltip').css('top', e.pageY + 5 );
            $('#tooltip').css('left', e.pageX + 5 );
         
            //Show the tooltip with fadeIn effect
            $('#tooltip').fadeIn('slow');
            $('#tooltip').fadeTo('10',0.8);
         
        }).mousemove(function(e) {
     
            //Keep changing the X and Y axis for the tooltip, thus, the tooltip will move along with the mouse
            $('#tooltip').css('top', e.pageY + 5 );
            $('#tooltip').css('left', e.pageX + 5 );
         
        }).mouseout(function() {
     
            //Put back the title attribute's value
            $(this).attr('title',$('.tipBody').html());
     
            //Remove the appended tooltip template
            $(this).children('div#tooltip').remove();
         
        });
 

    
    });
})(jQuery);

 


