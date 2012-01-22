(function($) { 
    $(function() {
      //   $("#center-content").jqTransform();
        
        
        $( "#center-content" ).tabs({
                     select: function(event, ui) { 
                    $('#first').css('display','')     
                 li_index=ui.index;  
          
                  if(li_index==0){
                    $('.first').addClass('first-active');
                    $(".second").removeClass('second-active');
                    $(".third").removeClass('third-active');
                     
                    
                   
           } else if(li_index==1){
              
                    $(".first").removeClass('first-active');
                    $('.second').addClass('second-active');
                    $(".third").removeClass('third-active');
            
                   
           }else{
                    $(".first").removeClass('first-active');
                    $(".second").removeClass('second-active');
                    $(".third").addClass('third-active');
            
                 
                     
           }
   
                 
                 },
                 
                  create: function(event, ui) {
                   $('.first').removeClass('ui-tabs-selected' )  
                   $('.first').removeClass('ui-state-active' )  
        
              }
                                     
                });
    
        
        
       $("#sr-media-type-ul li input[type='radio']").click(function(){
         
           if($(this).attr('id')=='mediaType1'){
              $("#sr-left-checks").fadeIn('slow') 
               $("#sr-right-checks").fadeIn('slow') 
           }else{
              $("#sr-left-checks").slideUp('slow') 
               $("#sr-right-checks").slideUp('slow')   
           }
       })
       
       $("#archMedia-type li input[type='radio']").click(function(){
         
           if($(this).attr('id')=='archMediaType1'){
              $("#archDest").fadeIn('slow') 
              
           }else{
              $("#archDest").slideUp('slow') 
               
           }
       })
       
       /* Form Validations */ /* Send-Receive Tab Form   */
       
        $("#send-receive-submit").click(function(){
        if($("ul#sr-media-type-ul input[name=radMediaType]").is(':checked')){
            if($("ul#sr-media-type-ul input[name=radMediaType]").val()=='electronic'){
         sr_destination=$("#send-receive-destination input[name=dest]").is(':checked')
         if(!sr_destination){
            $("#sr-dest-block").removeClass('green-text');
            $("#sr-dest-block").addClass('red-text');
         }
         
         
          sr_recipient=$("#send-receive-recipient input[name=radRecp]").is(':checked')
         if(!sr_recipient){
            $("#sr-recipient-block").removeClass('green-text');
            $("#sr-recipient-block").addClass('red-text');
         }
         if(sr_destination&&sr_recipient){
                $("#sr-dest-block").removeClass('red-text');
                $("#sr-recipient-block").removeClass('red-text');
                 $("#sr-recipient-block").addClass('green-text');
                  $("#sr-recipient-block").addClass('green-text');
                  $("#sr-mediatype").removeClass('red-text');
                 $("#sr-mediatype").addClass('green-text');
                 $(this).val('Update Requirements')
         }
            }
            else{
                  $("#sr-mediatype").removeClass('red-text');
                 $("#sr-mediatype").addClass('green-text');
                 $(this).val('Update Requirements')
                
            }
        
          } else{
              
              $("#sr-mediatype").removeClass('green-text');
              $("#sr-mediatype").addClass('red-text');
          }
       })
       
        
       
       /* Archive Tab Form   */
        $("#archive-submit").click(function(){
         
          if($("ul#archMedia-type input[name=radArchMediaType]").is(':checked')){
            if($("ul#archMedia-type input[name=radArchMediaType]").val()=='electronic'){
         
         arch_destination=$("#arch-destination input[name=radArchDest]").is(':checked')
        
         if(!arch_destination){ 
            $("#arch-dest-block").removeClass('green-text');
            $("#arch-dest-block").addClass('red-text');
         }
         
         if(arch_destination){
                $("#arch-mediatype").addClass('green-text');
                 $("#arch-mediatype").removeClass('red-text');
             $("#arch-dest-block").removeClass('red-text');
            $("#arch-dest-block").addClass('green-text');
             $(this).val('Update Requirements')
         }
            }else{
                 $("#arch-mediatype").addClass('green-text');
                 $("#arch-mediatype").removeClass('red-text');
             $(this).val('Update Requirements') 
            }
          }
            else{
                $("#arch-mediatype").removeClass('green-text');
                 $("#arch-mediatype").addClass('red-text');
                
            }
           
       })
       /* Collabrate Tab Form   */
      
       $("#collaborate-submit").click(function(){
           
            if($("#coll-media-type-ul input[name=radCollDest]").is(':checked')){
                 $("#coll-mediatype").addClass('green-text');
                 $("#coll-mediatype").removeClass('red-text');
                 $(this).val('Update Requirements') 
            }
            else{
               $("#coll-mediatype").removeClass('green-text');
                 $("#coll-mediatype").addClass('red-text');
            }
           
           
              })
   
    
    
    });
})(jQuery);





/*-------------------------------------------------------------------- 
 * jQuery plugin: customInput()
 * by Maggie Wachs and Scott Jehl, http://www.filamentgroup.com
 * Copyright (c) 2009 Filament Group
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * Article: http://www.filamentgroup.com/lab/accessible_custom_designed_checkbox_radio_button_inputs_styled_css_jquery/  
 * Usage example below (see comment "Run the script...").
--------------------------------------------------------------------*/


jQuery.fn.customInput = function(){
	$(this).each(function(i){	
		if($(this).is('[type=checkbox],[type=radio]')){
			var input = $(this);
			
			// get the associated label using the input's id
			var label = $('label[for='+input.attr('id')+']');
			
			//get type, for classname suffix 
			var inputType = (input.is('[type=checkbox]')) ? 'checkbox' : 'radio';
			
			// wrap the input + label in a div 
			$('<div class="custom-'+ inputType +'"></div>').insertBefore(input).append(input, label);
			
			// find all inputs in this set using the shared name attribute
			var allInputs = $('input[name='+input.attr('name')+']');
			
			// necessary for browsers that don't support the :hover pseudo class on labels
			label.hover(
				function(){ 
					$(this).addClass('hover'); 
					if(inputType == 'checkbox' && input.is(':checked')){ 
						$(this).addClass('checkedHover'); 
					} 
				},
				function(){ $(this).removeClass('hover checkedHover'); }
			);
			
			//bind custom event, trigger it, bind click,focus,blur events					
			input.bind('updateState', function(){	
				if (input.is(':checked')) {
					if (input.is(':radio')) {				
						allInputs.each(function(){
							$('label[for='+$(this).attr('id')+']').removeClass('checked');
						});		
					};
					label.addClass('checked');
				}
				else { label.removeClass('checked checkedHover checkedFocus'); }
										
			})
			.trigger('updateState')
			.click(function(){ 
				$(this).trigger('updateState'); 
			})
			.focus(function(){ 
				label.addClass('focus'); 
				if(inputType == 'checkbox' && input.is(':checked')){ 
					$(this).addClass('checkedFocus'); 
				} 
			})
			.blur(function(){ label.removeClass('focus checkedFocus'); });
		}
	});
};

	
	

